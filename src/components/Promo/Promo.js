import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";
import './Promo.scss';

const Promo = ({icon, header, eyebrow, body, href, alignment, image}) => {
    const Tag = href ? 'a' : 'div';
    return (
        <Tag className={`flex flex-col items-${alignment} flex-1 promo max-w-96`} href={href?.url}>
            {image && <div className="w-full h-60 mb-5" style={{backgroundImage: `url(${image})`}}></div> }
            
            {icon && <img src={`/assets/icons/${icon}.svg`} className='h-14 w-auto mb-3'/>}
            <p className="mb-0 text-xl">{eyebrow}</p>
            <h3 className='mb-5 text-3xl'>{header}</h3>
            <p className={`${(!alignment || alignment == 'center') && 'text-center'} mb-5`}>{parse(DOMPurify.sanitize(body)) }</p>
            {href &&<a className={`mt-auto flex items-${alignment ?? 'center'}`} href={href.value}>{href.label}<img className='ml-2'src='/assets/icons/chevron-right.svg' /></a>}
        </Tag>
    )
}

export default Promo;