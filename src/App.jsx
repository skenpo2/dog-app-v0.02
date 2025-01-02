import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import SingleDog from './pages/SingleDog';
import DogList from './pages/DogList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<DogList />} />
        </Route>
        <Route path="/:id" element={<SingleDog />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
