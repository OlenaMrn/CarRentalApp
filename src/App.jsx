import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter basename={'/CarRentalApp'}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="favorite" element={<FavoritePage />} />       </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
