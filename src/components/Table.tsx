const Table = () => {
  return (
    <div>
      <div className="table w-full">
        <div className="table-header-group bg-gray-200 py-2  pl-3 text-lg font-bold">
          <div className="table-cell p-2 text-justify">Name</div>
          <div className="table-cell p-2 text-justify">Price</div>
          <div className="table-cell p-2 text-justify">24h Change</div>
          <div className="table-cell p-2 text-justify">24h Volume</div>
          <div className="table-cell p-2 text-justify">Market Cap</div>
        </div>
        <div className="table-row-group">
          <div className="table-row">
            <div className="table-cell p-2">Anjayyyyyyyyyyyyy</div>
            <div className="table-cell p-2">Ampun</div>
            <div className="table-cell p-2">Anying</div>
            <div className="table-cell p-2">Ampun</div>
            <div className="table-cell p-2">Anying</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
