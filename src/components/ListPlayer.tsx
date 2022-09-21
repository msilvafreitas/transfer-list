import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function ListPlayer()  {
    return (
        <div className='pt-1 mx-4 self-stretch bg-tol-gradient rounded-lg mt-8 overflow-hidden'>
            <div className='bg-[#2A2634] px-6 py-6 flex flex-col md:flex-row justify-between items-center'>
                <div className="pb-4">
                    <strong className='text-2xl text-white font-black block'>Want to sell a player?</strong>
                    <span className='text-zinc-400 block'>Publish your ad!</span>
                </div>
                <Dialog.Trigger id="list" className='py-3 px-4 text-white font-bold bg-[#a51e1a] hover:bg-tol-gradient rounded flex items-center gap-3'>
                <MagnifyingGlassPlus size={24} />
                Publish your Player
                </Dialog.Trigger>
            </div>
        </div>
    )
}