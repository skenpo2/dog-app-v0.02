import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import SingleDog from './pages/SingleDog';
import DogList from './pages/DogList';
import { dogListLoader } from './pages/DogList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <DogList />,
        loader: dogListLoader,
      },
    ],
  },
  {
    path: '/:id',
    element: <SingleDog />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
