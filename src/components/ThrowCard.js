import ghostfighter from '../ghostfighter.png'
export default function ThrowCard(){
    return(
        <button className='w-[409px] h-[427px] rounded-[30px] overflow-hidden border-2 border-white'>
                <img src={ghostfighter} alt="AoT" className='w-full h-full'/>
        </button>
    )
}
