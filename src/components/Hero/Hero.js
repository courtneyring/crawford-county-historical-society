import DOMPurify from 'dompurify'

const Hero = ({text, image, skinny}) => {
    return (
        <div className={`w-screen bg-cover bg-left md:bg-center relative flex items-center justify-center px-2 ${skinny ? 'h-125' : 'h-80'}`} style={{backgroundImage: `url(/images/${image})`}}>
            { text && <h1 className='text-5xl md:text-7xl md:absolute top-40 right-36 text-white leading-normal text-center' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}></h1>}
        </div>
    )
}

export default Hero;