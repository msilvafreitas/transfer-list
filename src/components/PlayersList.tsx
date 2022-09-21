import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PlayerCard } from './PlayerCard';

interface Player {
    id: string;
    name: string;
    age: string;
    discord: string;
    current: string;
    potential: string;
    accdev: boolean;
    delaydec: boolean;
  }


export function PlayersList() {

    const [players, setPlayers] = useState<Player[]>([])

    useEffect(() => {
        axios('http://127.0.0.1:3333/positions')
          .then(response => {
            setPlayers(response.data)
          })
      }, [])


    return (
        <Dialog.Portal id='list'>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>

            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            {players.map(player => {
                return (
                    <PlayerCard
                        id={player.id}
                        name={player.name}
                        age={player.age}
                        discord={player.discord}
                        current={player.current}
                        potential={player.potential}
                        accdev={player.accdev}
                        delaydec={player.delaydec}
                    />
                )
            })}
            </Dialog.Content>

        </Dialog.Portal>
    )
}