import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereun } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import Loader from './Loader';
interface Props {}

export const Welcome: React.FC<Props> = () => {
  const connectWallet = () => {
    console.log(' log');
  };
  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 '>
        <div className='flex flex-1 justify-start flex-col md:mr-10'>
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
            Send Crypto <br /> across the world
          </h1>
          <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/11 text-base'>
            Expore the crypto world. Buy and sell crypto easily on Krypto.
          </p>
          <button className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer text-white'>
            Connect wallet
          </button>
        </div>
      </div>
    </div>
  );
};
