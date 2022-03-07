import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HeaderSkeleton } from '../components/Skeleton';
import Details from './Details';
import Home from './Home';
import NotFound from './NotFound';

const Header = React.lazy(() => import('../components/Header'));

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:id" element={<Details />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
