import HeroInfo from './HeroInfo'
export default function Hero(){
    return(
        <div className="t-0 relative bg-center h-[150vh] w-full bg-cover bg-no-repeat bg-[url('./hero.jpeg')]">
            <HeroInfo />
        </div>
    )
}