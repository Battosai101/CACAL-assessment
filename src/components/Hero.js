import HeroInfo from './HeroInfo'
import HeroData from './HeroData'
export default function Hero(){
    const data = HeroData.map(item => {
        return <HeroInfo 
                key={item.id}
                title={item.title}
                rate={item.rate}
                category={item.category}
                desc={item.desc}
                />
    })
    return(
        <div className='hero top-0 relative bg-center h-[150vh] w-full bg-cover bg-no-repeat'>
            {data}
            <div className='absolute h-[150vh] w-full bg-gradient-to-r from-black via-transparent to-black'>
            </div>
        </div>
    )
}