import { Route, Routes } from 'react-router';
import Home from './pages/Home';

import './scss/App.scss';
import CreateProduct from './pages/CreateProduct';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
