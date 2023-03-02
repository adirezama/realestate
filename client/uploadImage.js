// imageUpload controller function
const { image } = req.body;

const base64Image = new Buffer.from(image.replace(/^data:image\/\w+;base64,/, ""), "base64");
const type = image.split(";")[0].split("/")[1];
