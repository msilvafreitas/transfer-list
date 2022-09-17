import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Input } from './Input/Input';
import { Check } from 'phosphor-react';
import { useEffect, useState, FormEvent } from 'react';
import axios from 'axios';

interface Position {
    id: string;
    title: string;
  }


export function ListPlayerModal() {


    const [positions, setPositions] = useState<Position[]>([])
    const [accdev, setAccdev] = useState(false)
    const [delay, setDelay] = useState(false)

    useEffect(() => {
      axios('http://127.0.0.1:3333/positions')
        .then(response => {
          setPositions(response.data)
        })
    }, [])

    async function handleListPlayer(event: FormEvent) {
        event.preventDefault()
        
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        try {
            await axios.post(`http://127.0.0.1:3333/positions/${data.position}/players`, {
            name: data.name,
            age: Number(data.age),
            discord: data.discord,
            current: Number(data.current),
            potential: Number(data.potential),
            accdev: accdev,
            delaydec: delay
            })

            alert('Player Listed!')
        } catch (err) {
            console.log(err);
            alert('Error, player not listed')
        }
    }

    return (
        <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>

        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
          <Dialog.Title className="text-3xl font-black">Publish your Player</Dialog.Title>

          
            <form onSubmit={handleListPlayer} className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="position" className="font-semibold">Position:</label>
                <select 
                    id="position" 
                    name='position'
                    className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
                >
                    

                    { positions.map(position => {
                        return (
                            <option key={position.id} value={position.id}>{position.title}</option>
                        )
                    })}
                </select>
                
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="name" className="font-semibold">Name:</label>
                <Input 
                  name='name'
                  id='name' 
                  type="text" 
                  placeholder="Insert the player's name"
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="age" className="font-semibold">Age:</label>
                <Input 
                  id='age'
                  name='age'
                  min={15} 
                  max={49}
                  type="number" 
                  placeholder="Insert the player's age"
                  className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
                />
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="current" className="font-semibold">Rating:</label>
                  <select id='current' name='current' className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'>
                    <option value="1">Weak</option>
                    <option value="2">Average</option>
                    <option value="3">Strong</option>
                    <option value="4">World Class</option>
                    <option value="5">Legend</option>
                  </select>
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="potential" className="font-semibold">Potential:</label>
                  <select id='potential' name='potential' className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'>
                    <option value="1">Weak</option>
                    <option value="2">Average</option>
                    <option value="3">Strong</option>
                    <option value="4">World Class</option>
                    <option value="5">Legend</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="discord" className="font-semibold">Your Discord:</label>
                <Input id='discord' name='discord' type="text" placeholder='user#0000'/>
              </div>

              <div className='mt-2 flex items-center gap-2 text-sm'>
                <Checkbox.Root 
                    checked={accdev}
                    onCheckedChange={(checked) => {
                    if (checked === true) {
                        setAccdev(true)
                    } else {
                        setAccdev(false)
                    }
                }} id='accdev' name='accdev' className="w-6 h-6 p-1 rounded bg-zinc-900">
                    <Checkbox.Indicator>
                        <Check className='w-4 h-4 text-emerald-400' />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label htmlFor="accdev" className="font-semibold">Accelerate development</label>
                <Checkbox.Root 
                    checked={delay}
                    onCheckedChange={(checked) => {
                    if (checked === true) {
                        setDelay(true)
                    } else {
                        setDelay(false)
                    }
                    }}
                    id='delay' name='delay' className="w-6 h-6 p-1 rounded bg-zinc-900">
                    <Checkbox.Indicator>
                        <Check className='w-4 h-4 text-emerald-400' />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label htmlFor="delay" className="font-semibold">Delay Decline</label>
              </div>

              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancel</Dialog.Close>
                <button type="submit" className='bg-amber-400 px-5 h-12 rounded-md font-semibold hover:bg-amber-500'>List Player</button>
              </footer>
            </form>
          
        </Dialog.Content>
      </Dialog.Portal>
    )
}