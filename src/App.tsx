import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '@components/layout/Layout';
import { LandingPage } from '@pages/langingPage/Landing';
import { TeslaProductGrid } from '@pages/product-list/Product-list';
import { WildcardPage } from '@pages/wildcard-page/Wildcard';
import DetailsPage from '@pages/product-details/DetailsPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ROUTE_CONSTANTS } from '@constants/routeConstants';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path={ROUTE_CONSTANTS.HOME} element={<LandingPage />} />

            <Route path={ROUTE_CONSTANTS.PRODUCTS} element={<TeslaProductGrid />} />

            <Route path={`${ROUTE_CONSTANTS.DETAILS}/:id`} element={<DetailsPage />} />
            <Route path={ROUTE_CONSTANTS.WILD_PATH} element={<WildcardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
