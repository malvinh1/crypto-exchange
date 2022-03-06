import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import HtmlReactParser from 'html-react-parser';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import useFetchCryptoDetail from '../../hooks/useFetchCryptoDetail';
import useFetchCryptoHistory from '../../hooks/useFetchCryptoHistory';

const Details = () => {
  const params = useParams();
  const { data } = useFetchCryptoDetail(params.id);
  const { data: historicData } = useFetchCryptoHistory(params.id, '30');

  const [days, _] = useState('30');

  return (
    <div className="flex h-screen flex-col xl:flex-row">
      <div className="border:none flex w-full flex-col items-center border-gray-900 p-4 xl:w-2/5 xl:border-r-2">
        <img
          className="h-[200px] w-[200px]"
          alt="crypto-logo"
          src={data?.image.large}
        />
        <h1 className="my-2 text-4xl font-bold">{data?.name}</h1>
        {data?.description.en &&
          data.description.en.split('. ').map((item, index) => {
            if (index < 3) {
              return (
                <div key={index} className="my-2 text-justify font-mono">
                  {HtmlReactParser(item) + '.'}
                </div>
              );
            }
          })}
        <h2 className="my-2 text-2xl font-bold">
          Rank: {data?.market_cap_rank || 'N.A'}
        </h2>
        <h2 className="my-2 text-2xl font-bold">
          Current Price: {data?.market_data.current_price.usd || '0'}
        </h2>
        <h2 className="my-2 text-2xl font-bold">
          Market Cap: {data?.market_data.market_cap.usd || '0'}
        </h2>
      </div>
      <div className="w-full p-4">
        <Line
          data={{
            labels: historicData?.prices.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === '1' ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicData?.prices.map((coin) => coin[1]),
                label: `Price ( Past ${days} Days ) in usd`,
                borderColor: '#EEBC1D',
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
        <div className="mt-2 flex">
          <div className="mr-2 flex flex-1 items-center justify-center rounded-md bg-primary p-3 text-center font-bold">
            24 Hours
          </div>
          <div className="mr-2 flex flex-1 items-center justify-center rounded-md bg-primary p-3 text-center font-bold">
            30 Days
          </div>
          <div className="mr-2 flex flex-1 items-center justify-center rounded-md bg-primary p-3 text-center font-bold">
            3 Months
          </div>
          <div className="mr-2 flex flex-1 items-center justify-center rounded-md bg-primary p-3 text-center font-bold">
            1 Year
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
