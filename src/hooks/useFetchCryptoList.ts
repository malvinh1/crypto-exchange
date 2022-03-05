import { useQuery } from 'react-query';

const useFetchCryptoList = () => {
  const result = useQuery('cryptoList', async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_COINGECKO}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    return response.json();
  });

  return result;
};

export default useFetchCryptoList;
