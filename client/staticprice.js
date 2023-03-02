const sellPrices = [
  {
    _id: 0,
    name: "All price",
    array: [0, 1000000],
  },
  {
    _id: 1,
    name: "$0 to $200000",
    array: [0, 200000],
  },
  {
    _id: 2,
    name: "$200000 to $500000",
    array: [200000, 500000],
  },
  {
    _id: 3,
    name: "$500000 to $1000000",
    array: [500000, 1000000],
  },
];

const rentPrices = [
  {
    _id: 0,
    name: "All price",
    array: [0, 1000],
  },
  {
    _id: 1,
    name: "$0 to $200",
    array: [0, 200],
  },
  {
    _id: 2,
    name: "$200 to $500",
    array: [200, 500],
  },
  {
    _id: 3,
    name: "$500 to $1000",
    array: [500, 1000],
  },
];

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

export { sellPrices, rentPrices };
