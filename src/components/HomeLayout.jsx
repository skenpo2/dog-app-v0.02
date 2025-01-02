import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <div>HomeLayout is here</div>
      <Outlet />
    </>
  );
};
export default HomeLayout;
