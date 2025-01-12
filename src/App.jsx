import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import SingleDog from './pages/SingleDog';
import DogList from './pages/DogList';

import { getDogList } from './feature/dogList/dogSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <DogList />,
      },
    ],
  },
  {
    path: '/:id',
    element: <SingleDog />,
  },
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogList());
  }, []);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};
export default App;
