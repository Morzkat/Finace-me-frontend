import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { TbMoodDollar, TbWallet } from 'react-icons/tb';
import { TfiDashboard } from 'react-icons/tfi';

import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const menu = [
    { title: 'Dashboard', icon: <TfiDashboard className="text-light-gray mr-2" />, path: '/Dashboard' },
    { title: 'Budgets', icon: <TbMoodDollar className="text-light-gray mr-2" />, path: '/Boards' },
    { title: 'Wallets', icon: <TbWallet className="text-light-gray mr-2" />, path: '/Loans' }, 
    { title: 'Loans', icon: <BiMoneyWithdraw className="text-light-gray mr-2" />, path: '/Loans' }, 
  ];
  const minWidth = 932;

  const handleResize = () => {
    if (window.innerWidth < minWidth) 
      setOpen(false);
    else 
      setOpen(true);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  return (
    <div className={`bg-green h-screen p-5 pt-8 relative duration-300
        ${open ? 'w-72' : 'w-20 '}`}
    >
      <div className="inline-flex">

        <section className={`${open ? 'w-64' : 'w-12'} mx-auto rounded-2xl shadow-lg`}>
          <div className="w-fit mx-auto">
            <img src="https://source.unsplash.com/jmURdhtm7Ng/120x120" className="rounded-full w-16 " alt="profile picture" srcSet="" />
          </div>
          { open && 
            <div className="mt-2">
              <h2 className="text-white text-center font-bold text-1xl tracking-wide">Jonathan Smith</h2>
            </div>
          }

        </section>

      </div>

      <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? 'px-2.5' : 'px-4'} py-2`}
      >
        <BsSearch className={`text-white text-md block float-left cursor-pointer ${open && 'mr-2'}`} />
        <input type={'search'} placeholder="Search" className={`text-base bg-transparent text-white focus:outline-none ${!open && 'hidden'}`} />
      </div>

      <ul className="pt-6 max-h-screen overflow-y-auto">
        {menu.map((item, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center 
                ${item.gap ? 'mt-9' : 'mt-2'} ${
            item.path === '/Boards' && 'bg-light-white'
          } `}
          >
            <NavLink to={item.path}>
              <span className="text-2xl block float-left">
                {item.icon && item.icon}
              </span>

              <span className={`${!open && 'hidden'} text-light-gray origin-left duration-200`}>
                {item.title}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
