

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

    function handleDiscord() {

    }

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
            <button className="bg-[#A51E1A] p-2 rounded-lg mt-2">Contact Manager</button>
        </div>
    )
}