import { Outlet } from 'react-router-dom';
import SearchForm from './SearchForm';

const HomeLayout = () => {
  return (
    <>
      <SearchForm />
      <Outlet />
    </>
  );
};
export default HomeLayout;
