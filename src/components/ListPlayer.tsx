import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function ListPlayer()  {
    return (
        <div className='pt-1 self-stretch bg-tol-gradient rounded-lg mt-8 overflow-hidden'>
            <div className='bg-[#2A2634] px-6 py-6 flex justify-between items-center'>
                <div>
                    <strong className='text-2xl text-white font-black block'>Want to sell a player?</strong>
                    <span className='text-zinc-400 block'>Publish your ad!</span>
                </div>
                <Dialog.Trigger className='py-3 px-4 text-white bg-tol-gradient rounded flex items-center gap-3'>
                <MagnifyingGlassPlus size={24} />
                Publish your Player
                </Dialog.Trigger>
            </div>
        </div>
    )
}