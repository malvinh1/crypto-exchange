import { CrypoCurrencyAsset } from '../hooks/useFetchCryptoList';

type Props = {
  data?: CrypoCurrencyAsset[];
};

const Table = ({ data }: Props) => {
  return (
    <div className="table w-full">
      <div className="table-header-group bg-gray-200 py-2  pl-3 text-xs font-bold md:text-sm lg:text-xl">
        <div className="table-cell p-2 text-justify">Name</div>
        <div className="table-cell p-2 text-justify">Price</div>
        <div className="table-cell p-2 text-justify">24h Change</div>
        <div className="table-cell p-2 text-justify">24h Volume</div>
        <div className="table-cell p-2 text-justify">Market Cap</div>
        <div className="table-cell p-2 text-justify" />
      </div>
      <div className="table-row-group">
        {data?.map((item) => (
          <div className="table-row" key={item.id}>
            <div className="flex flex-row items-center p-2">
              <img src={item.image} width={24} />
              <h3 className="mx-2 font-semibold">
                {item.symbol.toUpperCase()}
              </h3>
              <h4 className="text-xs text-gray-500">{item.name}</h4>
            </div>
            <div className="table-cell p-2">{item.current_price}</div>
            <div className="table-cell p-2">
              {item.price_change_percentage_24h}
            </div>
            <div className="table-cell p-2">733M</div>
            <div className="table-cell p-2">4M</div>
            <div className="table-cell p-2">Trade</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
