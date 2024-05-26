import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '@components/layout/Layout';
import { LandingPage } from '@pages/langingPage/Landing';
import { TeslaProductGrid } from '@pages/product-list/Product-list';
import { WildcardPage } from '@pages/wildcard-page/Wildcard';
import DetailsPage from '@pages/product-details/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="home" element={<LandingPage />} />

          <Route path="products" element={<TeslaProductGrid />} />

          <Route path="details/:id" element={<DetailsPage />} />
          <Route path="*" element={<WildcardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
