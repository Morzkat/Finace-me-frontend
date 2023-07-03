import Sidebar from '../components/Sidebar';

const DefaultLayout = ({ children }) => {

  return (
    
    <div className="flex h-screen overflow-hidden bg-app_gray">
      <Sidebar />
      <main className="bg-app_gray w-full">
        <div className="max-w-full h-full flex flex-col overflow-scroll">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
