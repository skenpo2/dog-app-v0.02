import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import SingleDog from './pages/SingleDog';
import DogList from './pages/DogList';
import { loader as dogListLoader } from './pages/DogList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // cache the request for 5 minute
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <DogList />,
        loader: dogListLoader(queryClient),
      },
    ],
  },
  {
    path: '/:id',
    element: <SingleDog />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
