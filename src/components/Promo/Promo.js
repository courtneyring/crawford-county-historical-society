import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";
import './Promo.scss';

const Promo = ({icon, header, body, href}) => {
    const Tag = href ? 'a' : 'div';
    return (
        <Tag className="flex flex-col items-center flex-1 promo" href={href?.url}>
            {icon && <img src={`/assets/icons/${icon}.svg`} className='h-14 w-auto mb-3'/>}
            <h3 className='mb-5'>{header}</h3>
            <p className="text-center mb-5">{parse(DOMPurify.sanitize(body)) }</p>
            {href &&<a className='mt-auto flex items-center' >{href.label}<img className='ml-2'src='/assets/icons/chevron-right.svg' /></a>}
        </Tag>
    )
}

export default Promo;