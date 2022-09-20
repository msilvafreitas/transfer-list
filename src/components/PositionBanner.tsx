interface PositionBannerProps {
    bannerUrl: string;
    title: string;
    playersCount: number;
}

export function PositionBanner(props: PositionBannerProps) {
    return (
        <a href="" className='relative rounded-lg overflow-hidden hover:border-solid hover:border-3 hover:border-white'>
          <img src={props.bannerUrl} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-ad-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>{props.title}</strong>
            <span className='text-zinc-300 text-sm block'>{props.playersCount} listed</span>
          </div>
        </a>
    )
}