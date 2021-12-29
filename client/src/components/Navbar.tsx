import react, { useState, useEffect } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../Images/logo.png';
interface Props {}

interface itemProps {
  title: string;
  classProps: string;
}

export const NavbarItem: React.FC<itemProps> = ({ title, classProps }) => {
  return <li className={`max-4 cursor-pounter ${classProps}`}>{title}</li>;
};

export const Navbar: React.FC<Props> = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggle = () => setToggleMenu((prev) => !prev);

  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4 '>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt='logo' className='w-32 cursor-pointer' />
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial gap-5'>
        {['Market', 'Excange', 'Tutorials', ' Wallets'].map((item, index) => (
          <NavbarItem key={index} title={item} classProps='' />
        ))}
        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] '>
          Login
        </li>
      </ul>
      <div className='flex relative md:hidden'>
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className='text-white   cursor-pointer'
            onClick={toggle}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className='text-white cursor-pointer'
            onClick={toggle}
          />
        )}
        {toggleMenu && (
          <ul className='z-10 fixed top-0 -right-2 p-3  w-[70vw] h-screen shadow-xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
            <li className='text-xl w-full my-2'>
              <AiOutlineClose
                fontSize={28}
                className='text-white   cursor-pointer'
                onClick={toggle}
              />
              {['Market', 'Excange', 'Tutorials', ' Wallets'].map(
                (item, index) => (
                  <NavbarItem
                    key={index}
                    title={item}
                    classProps=' my-2 text-lg'
                  />
                )
              )}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
