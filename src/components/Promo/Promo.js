import Image from 'next/image'

const Promo = ({copy}) => {
    return (
        <div className="flex flex-col items-center flex-1">
            <img src={`/icons/${copy.icon}.svg`} className='w-14 h-auto mb-3'/>
            <h3 className='mb-3'>{copy.header}</h3>
            <p className='mb-5 text-center'>{copy.body}</p>
            <a className='mt-auto flex items-center' href={copy.linkUrl}>{copy.linkLabel}<img className='ml-2'src='/icons/chevron-right.svg' /></a>
        </div>
    )
}

export default Promo;