import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/landingPage.tsx/Landing";
import { Product } from "./pages/Product/Product";

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <LandingPage />
            </Layout>
          }

        >

          <Route
            index
            element={

              <Product />

            }
          />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
