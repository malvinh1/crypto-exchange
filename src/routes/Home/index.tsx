import { useEffect, useState } from 'react';

import BinanceLogo from '../../assets/binance.svg';
import ScrollingTags from '../../components/ScrollingTags';
import Searchbar from '../../components/Searchbar';
import Table from '../../components/Table';
import useFetchCryptoList from '../../hooks/useFetchCryptoList';

const Home = () => {
  const { data } = useFetchCryptoList();

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="p-4">
      <img src={BinanceLogo} width={120} alt="logo" />
      <h1 className="my-8 text-3xl font-bold">Crypto Market Overview</h1>
      <ScrollingTags />
      <Searchbar value={searchValue} onChangeValue={setSearchValue} />
      <Table />
    </div>
  );
};

export default Home;
