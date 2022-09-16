import { PositionBanner } from './components/PositionBanner';
import './styles/main.css';
import logo from './assets/tol.png';
import { ListPlayer } from './components/ListPlayer';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="TOL Logo" />

      <h1 className="text-6xl text-white font-black mt-20">Your next <span className='text-transparent bg-tol-gradient bg-clip-text'>player</span> is here.</h1>
      
      <div className='grid grid-cols-7 gap-6 mt-16'>
        <PositionBanner bannerUrl="https://fakeimg.pl/180x240" title="Goalkeeper" playersCount={4}/>
        <PositionBanner bannerUrl="https://fakeimg.pl/180x240" title="Center Back" playersCount={4}/>
        <PositionBanner bannerUrl="https://fakeimg.pl/180x240" title="Right Back" playersCount={4}/>
        <PositionBanner bannerUrl="https://fakeimg.pl/180x240" title="Left Back" playersCount={4}/>
        <PositionBanner bannerUrl="https://fakeimg.pl/180x240" title="Midfielder" playersCount={4}/>
        <PositionBanner bannerUrl="https://fakeimg.pl/180x240" title="Winger" playersCount={4}/>
        <PositionBanner bannerUrl="https://fakeimg.pl/180x240" title="Striker" playersCount={4}/>
      </div>

      
      <ListPlayer />
    </div>
    
  )
}

export default App
