import { Outlet } from 'react-router-dom';
// import Footer from './Footer';
import Header from './Header';

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-gray-950">
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto h-full max-w-7xl">
          <Outlet />
        </main>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
