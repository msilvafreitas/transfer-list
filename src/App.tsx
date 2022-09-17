import { PositionBanner } from './components/PositionBanner';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import './styles/main.css';
import logo from './assets/tol.png';
import { ListPlayer } from './components/ListPlayer';
import { ListPlayerModal } from './components/ListPlayerModal';
import axios from 'axios';

interface Position {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    players: number;
  }
}


function App() {

  const [positions, setPositions] = useState<Position[]>([])

  useEffect(() => {
    axios('http://127.0.0.1:3333/positions')
      .then(response => {
        setPositions(response.data)
      })
  }, [])


  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="TOL Logo" />

      <h1 className="text-6xl text-white font-black mt-20">Your next <span className='text-transparent bg-tol-gradient bg-clip-text'>player</span> is here.</h1>
      
      <div className='grid grid-cols-7 gap-6 mt-16'>

        {positions.map(position => {
          return (
            <PositionBanner 
              key={position.id}
              bannerUrl={position.bannerUrl} 
              title={position.title} 
              playersCount={position._count.players}
            />
          )
        })}

  
      </div>

      <Dialog.Root>
        <ListPlayer />
        <ListPlayerModal />

      </Dialog.Root>
    </div>
    
  )
}

export default App
