import BinanceLogo from '../../assets/binance.svg';

const Home = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <img src={BinanceLogo} width={120} alt="logo" />
      </div>
      <h1 className="text-3xl font-bold">Hello world!</h1>
    </div>
  );
};

export default Home;
