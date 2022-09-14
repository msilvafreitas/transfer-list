import { MagnifyingGlassPlus } from 'phosphor-react';
import './styles/main.css';
import logo from './assets/tol.png';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="TOL Logo" />

      <h1 className="text-6xl text-white font-black mt-20">Your next <span className='text-transparent bg-tol-gradient bg-clip-text'>player</span> is here.</h1>
      
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="https://fakeimg.pl/180x240" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-ad-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Goalkeeper</strong>
            <span className='text-zinc-300 text-sm block'>4 listed</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="https://fakeimg.pl/180x240" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-ad-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Center Back</strong>
            <span className='text-zinc-300 text-sm block'>4 listed</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="https://fakeimg.pl/180x240" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-ad-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Side Back</strong>
            <span className='text-zinc-300 text-sm block'>4 listed</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="https://fakeimg.pl/180x240" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-ad-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Midfielder</strong>
            <span className='text-zinc-300 text-sm block'>4 listed</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="https://fakeimg.pl/180x240" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-ad-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Winger</strong>
            <span className='text-zinc-300 text-sm block'>4 listed</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="https://fakeimg.pl/180x240" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-ad-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Striker</strong>
            <span className='text-zinc-300 text-sm block'>4 listed</span>
          </div>
        </a>
      </div>

      <div className='pt-1 self-stretch bg-tol-gradient rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2A2634] px-6 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Want to sell a player?</strong>
            <span className='text-zinc-400 block'>Publish your ad!</span>
          </div>
          <button className='py-3 px-4 text-white bg-tol-gradient rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publish your Player
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default App
