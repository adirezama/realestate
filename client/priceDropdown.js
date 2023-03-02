<div className="dropdown">
  <button
    className="btn btn-primary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false">
    &nbsp; Price range
  </button>
  <ul className="dropdown-menu">
    {search.action === "Buy" ? (
      <>
        {housePrices?.map((p) => (
          <li key={p._id}>
            <a
              className="dropdown-item"
              onClick={() =>
                setSearch({
                  ...search,
                  price: p.name,
                  priceRange: p.array,
                })
              }>
              {p.name}
            </a>
          </li>
        ))}
      </>
    ) : (
      <>
        {rentPrices?.map((p) => (
          <li key={p._id}>
            <a
              className="dropdown-item"
              onClick={() =>
                setSearch({
                  ...search,
                  price: p.name,
                  priceRange: p.array,
                })
              }>
              {p.name}
            </a>
          </li>
        ))}
      </>
    )}
  </ul>
</div>;
