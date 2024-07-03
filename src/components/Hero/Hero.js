import DOMPurify from 'dompurify'

const Hero = ({text, image}) => {
    return (
        <div className="w-screen h-125 bg-cover bg-left md:bg-center relative flex items-center justify-center px-2" style={{backgroundImage: `url(/images/${image})`}}>
            <h1 className='text-5xl md:text-7xl md:absolute top-40 right-36 text-white leading-normal text-center' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}></h1>
        </div>
    )
}

export default Hero;