axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
 
    if (err.response) {
      // token is expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
 
        try {
          const { data } = await axios.get("/refresh-token");
          axios.defaults.headers.common["token"] = data.token;
          axios.defaults.headers.common["refresh_token"] = data.refreshToken;
 
          setAuth(data);
          localStorage.setItem("auth", JSON.stringify(data));
 
          return axios(originalConfig);
        } catch (_error) {
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data);
          }
 
          return Promise.reject(_error);
        }
      }
 
      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }
 
    return Promise.reject(err);
  }
);