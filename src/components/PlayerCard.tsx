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
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    )
}