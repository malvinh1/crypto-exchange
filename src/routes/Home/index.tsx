import { useState } from 'react';

import BinanceLogo from '../../assets/binance.svg';
import Pagination from '../../components/Pagination';
import ScrollingTags from '../../components/ScrollingTags';
import Searchbar from '../../components/Searchbar';
import Table from '../../components/Table';
import useFetchCryptoList, {
  CryptoCurrencyAsset,
} from '../../hooks/useFetchCryptoList';

const Home = () => {
  const { data } = useFetchCryptoList();

  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);

  const filteredData = (data?: CryptoCurrencyAsset[]) => {
    return data?.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  return (
    <div className="p-4">
      <img src={BinanceLogo} width={120} alt="logo" />
      <h1 className="my-8 text-2xl font-bold">Crypto Market Overview</h1>
      <ScrollingTags />
      <Searchbar
        value={searchValue}
        onChangeValue={(value) => {
          setSearchValue(value);
          setPage(1);
        }}
      />
      <Table data={filteredData(data)} page={page} />
      <Pagination
        page={page}
        totalData={filteredData(data)?.length || 0}
        totalPage={Math.ceil((filteredData(data)?.length || 20) / 20)}
        onChangePage={(page) => setPage(page)}
      />
    </div>
  );
};

export default Home;
