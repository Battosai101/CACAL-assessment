import heart from '../heart.png'
import star from '../star.png'
import play from '../play.png'
import line from '../line.png'
import circle from '../circle.png'
export default function HeroInfo(){
    return(
        <div className="absolute top-[250px] border-2 border-red-200 text-white pl-[84px] bottom-0">
            <h1 className="font-[Outfit] font-bold text-[80px] items-center w-fit">Kimetsu no Yaiba</h1>
            <div className="flex items-center">
                <img src={star} />
                <p className='font-[Outfit] pl-1 pr-5 text-xs font-semibold'>5.0</p>
                <p className='font-[Outfit] text-xs font-normal'>Category: Adventure fiction, Dark fantasy, Martial Arts</p>
            </div>
            <div className='mt-6 w-[622px] font-[Outfit] text-base'>
                <p>Demon Slayer:Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. 
                    If follows teenage Tanjiro Kamado, who strives to became a demon slayer after his family was slaughtered and 
                    his younger sister Nezuko turned into a demon.</p>
            </div>
            <div className="flex items-center mt-3">
                <button className="bg-[#106580] rounded-md flex items-center font-normal py-3 px-2.5 mr-4">
                    <span className='mr-2 pl-2.5'><img src={play} /></span>Watch Now!
                </button>
                <button className='border-[1px] border-white rounded-md'><img className='p-3'src={heart} /></button>
            </div>
            <div className='border-2 border-white text-white absolute bottom-10 flex items-center'>
                <div className='flex items-start space-x-7'>
                    <p>Overview</p>
                    <p>Episodes</p>
                    <p>Details</p>
                </div>
                <div className='flex items-center'>
                    <img src={line} />
                    <img src={circle} />
                    <img src={circle} />
                    <img src={circle} />
                </div>
            </div>
        </div>
    )
}