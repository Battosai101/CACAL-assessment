
export default function ThrowCard(props){
    return(
        <button className='w-[409px] h-[427px] rounded-[30px] overflow-hidden'>
                <img src={`../ThrowPoster/${props.poster}`} alt={props.alt} className='w-full h-full'/>
        </button>
    )
}
