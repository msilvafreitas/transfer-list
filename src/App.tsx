import { PositionBanner } from './components/PositionBanner';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import './styles/main.css';
import logo from './assets/tol.png';
import { ListPlayer } from './components/ListPlayer';
import { Input } from './components/Input/Input';

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
    fetch('http://127.0.0.1:3333/positions')
      .then(response => response.json())
      .then(data => {
        setPositions(data)
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

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>

          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">Publish your Player</Dialog.Title>

            
              <form className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="position" className="font-semibold">Position:</label>
                  <Input
                    id="position" 
                    type="text" 
                    placeholder="Select the player's position"
                  />
                  
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="name">Name:</label>
                  <Input 
                    id='name' 
                    type="text" 
                    placeholder="Insert the player's name"
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="age">Age:</label>
                  <Input 
                    id='age'
                    min={15} 
                    max={49}
                    type="number" 
                    placeholder="Insert the player's age"
                    className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
                  />
                </div>
                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="current">Rating:</label>
                    <Input id='current' type="text" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="potential">Potential:</label>
                    <Input id='potential' type="text" />
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="discord">Your Discord:</label>
                  <Input id='discord' type="text" placeholder='user#0000'/>
                </div>
                <div className='mt-2 flex gap-2 text-sm'>
                  <Input type="checkbox" id='accdev'/>
                  <label htmlFor="accdev">Accelerate development</label>
                  <Input type="checkbox" id='delay'/>
                  <label htmlFor="delay">Delay Decline</label>
                </div>
                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancel</Dialog.Close>
                  <button type="submit" className='bg-amber-400 px-5 h-12 rounded-md font-semibold hover:bg-amber-500'>List Player</button>
                </footer>
              </form>
            
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
    
  )
}

export default App
