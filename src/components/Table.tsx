import { numberToCurrency } from '../helpers/numberFormatter';
import { CryptoCurrencyAsset } from '../hooks/useFetchCryptoList';

type Props = {
  data?: CryptoCurrencyAsset[];
};

const Table = ({ data }: Props) => {
  return (
    <div>
      <div className="flex flex-row bg-gray-100 py-2 pl-3 text-xs text-gray-700">
        <div className="flex w-[220px] flex-grow">Name</div>
        <div className="flex w-[100px] flex-grow">Price</div>
        <div className="flex w-[100px] flex-grow justify-end text-right">
          24h Change
        </div>
        <div className="flex w-[130px] flex-grow justify-end text-right">
          24h Volume
        </div>
        <div className="flex w-[130px] flex-grow justify-end text-right">
          Market Cap
        </div>
        <div className="flex w-[180px] flex-grow overflow-hidden" />
      </div>
      {data?.map((item) => (
        <div
          className="text-md flex items-center border-b-2 py-4 pl-3"
          key={item.id}
        >
          <div className="flex w-[220px] flex-grow flex-row flex-wrap items-center">
            <img src={item.image} width={24} />
            <h3 className="px-2 font-semibold">{item.symbol.toUpperCase()}</h3>
            <h4 className="text-xs text-gray-500">{item.name}</h4>
          </div>
          <div className="flex w-[100px] flex-grow">
            {numberToCurrency({
              num: item.current_price,
              maximumFractionDigits: 5,
            })}
          </div>
          <div
            className="flex w-[100px] flex-grow justify-end text-right font-semibold"
            style={{
              color: item.price_change_percentage_24h > 0 ? 'green' : 'red',
            }}
          >
            {item.price_change_percentage_24h.toFixed(2) + '%'}
          </div>
          <div className="flex w-[130px] flex-grow justify-end text-right">
            {numberToCurrency({
              num: item.total_volume,
            })}
          </div>
          <div className="flex w-[130px] flex-grow justify-end text-right">
            {numberToCurrency({
              num: item.market_cap,
            })}
          </div>
          <div className="flex w-[180px] flex-grow justify-center text-right text-primary">
            Trade
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
