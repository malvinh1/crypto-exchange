import { useState } from 'react';

import BinanceLogo from '../../assets/binance.svg';
import Searchbar from '../../components/Searchbar';
import ScrollingTags from './components/ScrollingTags';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="p-4">
      <img src={BinanceLogo} width={120} alt="logo" />
      <h1 className="my-8 text-3xl font-bold">Crypto Market Overview</h1>
      <ScrollingTags />
      <Searchbar value={searchValue} onChangeValue={setSearchValue} />
    </div>
  );
};

export default Home;
