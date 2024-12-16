import React, { Fragment, useState } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon, UserIcon, LogoutIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';
import Login from './Login';
import config from '../config/index.json';

interface HeaderProps {
  onAdminLogin: () => void;
  onAdminLogout: () => void;
  isAdmin: boolean;
}

const Menu: React.FC<HeaderProps> = ({ onAdminLogin, onAdminLogout, isAdmin }) => {
  const { navigation, company } = config;
  const { name: companyName, logo } = company;

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // General logged-in status

  const handleLoginOpen = () => setIsLoginOpen(true);
  const handleLoginClose = () => setIsLoginOpen(false);

  const handleLoginSuccess = (isAdminLogin: boolean) => {
    setIsLoggedIn(true);
    if (isAdminLogin) onAdminLogin(); // Trigger admin mode
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    onAdminLogout(); // Reset admin status
  };

  return (
    <>
      {/* Login Modal */}
      {isLoginOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <Login
            onLoginSuccess={handleLoginSuccess}
            onClose={handleLoginClose}
          />
        </div>
      )}

      <Popover>
        <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
          <nav className='relative flex items-center justify-between sm:h-10 lg:justify-start' aria-label='Global'>
            <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
              <div className='flex items-center justify-between w-full md:w-auto'>
                <a href='#'>
                  <span className='sr-only'>{companyName}</span>
                  <img alt='logo' className='h-16 w-auto sm:h-16' src={logo} />
                </a>
                <div className='-mr-2 flex items-center md:hidden'>
                  <Popover.Button className='bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary'>
                    <span className='sr-only'>Open main menu</span>
                    <MenuIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>

            <div className='hidden md:flex md:ml-10 md:pr-4 md:space-x-8 items-center'>
              {navigation.map((item) => (
                <Link
                  spy={true}
                  active='active'
                  smooth={true}
                  duration={1000}
                  key={item.name}
                  to={item.href}
                  className='font-medium text-gray-500 hover:text-gray-900'
                >
                  {item.name}
                </Link>
              ))}
              {!isLoggedIn ? (
                <button
                  onClick={handleLoginOpen}
                  className='ml-4 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                >
                  Login
                </button>
              ) : (
                <div className='flex items-center space-x-4'>
                  {isAdmin && <span className='text-green-500 font-medium'>Admin Mode</span>}
                  <button className='flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md'>
                    <UserIcon className='h-5 w-5 mr-2' />
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className='flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md'
                  >
                    <LogoutIcon className='h-5 w-5 mr-2' />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </Popover>
    </>
  );
};

export default Menu;
