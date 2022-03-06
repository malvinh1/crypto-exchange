import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../components/Header';
import Details from './Details';
import Home from './Home';
import NotFound from './NotFound';

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:id" element={<Details />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
