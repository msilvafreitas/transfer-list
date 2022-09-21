import { Icon } from '@iconify/react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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



export function PlayerCard(props: Player) {


    function toRating(rating: string) {
        if(rating == '1') {
            rating = 'Weak';
        }
        if(rating == '2') {
            rating = 'Average';
        }
        if(rating == '3') {
            rating = 'Strong';
        }
        if(rating == '4') {
            rating = 'World Class';
        }
        if(rating == '5') {
            rating = 'Legend';
        }
        return rating;
    }

    return (
        <div className="p-2 m-2 justify-center text-center hover:bg-zinc-900 rounded">
            <p className="font-bold">{props.name}</p>
            <p>{props.age} years</p>
            
            <p>{toRating(props.current)}/{toRating(props.potential)}</p>
            <p>{props.accdev ? 'Acc. Dev.': '' }</p>
            <p>{props.delaydec ? 'Delay Decline': '' }</p>
            <div className='flex justify-center'>
            <CopyToClipboard text={props.discord}>
            <button className="bg-[#5865F2] active:bg-zinc-700 p-2 rounded-lg mt-2 flex justify-center">
                <Icon icon="simple-icons:discord" className='m-1'/>{props.discord}
            </button>
            </CopyToClipboard>
            </div>
            <p className='text-sm'>Click to copy</p>

        </div>
    )
}