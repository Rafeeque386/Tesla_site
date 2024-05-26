import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Layout from "@components/layout/Layout";
import { LandingPage } from "@pages/langingPage/Landing";
import { TeslaProductGrid } from "@pages/product-list/Product-list";

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

              <LandingPage />

            }
          />
          <Route
            path="home"

            element={

              <LandingPage />

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
