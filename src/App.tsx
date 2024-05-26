import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/landingPage.tsx/Landing";
import { Product } from "./pages/Product/Product";
import { TeslaProductGrid } from "./pages/product-list/Product-list";

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route
          path="/"
          element={
            <Layout />


          }

        >

          <Route
            index

            element={

              <Product />

            }
          />
          <Route
            path="home"

            element={

              <Product />

            }
          />

          <Route
            path="products"
            element={
              <TeslaProductGrid />

            }
          />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
