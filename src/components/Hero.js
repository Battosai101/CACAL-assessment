import HeroInfo from './HeroInfo'
export default function Hero(){
    return(
        <div className='hero top-0 relative bg-center h-[150vh] w-full bg-cover bg-no-repeat'>
            <HeroInfo />
            <div className='absolute h-[150vh] w-full bg-gradient-to-r from-black via-transparent to-black'>
            </div>
        </div>
    )
}