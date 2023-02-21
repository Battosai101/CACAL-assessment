import HeroInfo from './HeroInfo'
export default function Hero(){
    return(
        <div className='hero top-0 relative bg-center h-[150vh] w-full bg-cover bg-no-repeat'>
            <HeroInfo />
            <div className='absolute w-full h-[150vh] bg-gradient-to-r via-transparent from-black to-black text-white'>
            </div>
        </div>
    )
}