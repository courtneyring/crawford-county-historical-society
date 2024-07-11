import { ParseContent } from '@/components';

const Promo = ({copy}) => {
    return (
        <div className="flex flex-col items-center flex-1">
            {copy.icon && <img src={`/icons/${copy.icon}.svg`} className='h-14 w-auto mb-3'/>}
            <h3 className='mb-3'>{copy.header}</h3>
            <ParseContent className='mb-5 text-center' content={copy.body} tag='p'/> 
            {(copy.linkUrl && copy.linkLabel) &&<a className='mt-auto flex items-center' href={copy.linkUrl}>{copy.linkLabel}<img className='ml-2'src='/icons/chevron-right.svg' /></a>}
        </div>
    )
}

export default Promo;