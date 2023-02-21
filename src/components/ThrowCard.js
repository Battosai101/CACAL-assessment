import AoT from '../AoT.png'
export default function ThrowCard(){
    return(
        <button className='w-[409px] h-[427px] shrink-0 rounded-3xl overflow-hidden border-2 border-pink-400'>
                <img src={AoT} alt="AoT" className='w-full h-full'/>
        </button>
    )
}
