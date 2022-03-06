import { useQuery } from 'react-query';

export type CryptoCurrencyAsset = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: number | null;
  last_updated: string;
};

const useFetchTrendingCryptoList = () => {
  const result = useQuery<CryptoCurrencyAsset[]>('trending', async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_COINGECKO}coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
    return response.json();
  });

  return result;
};

export default useFetchTrendingCryptoList;
