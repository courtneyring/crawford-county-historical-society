const Summary = ({ children }) => {

    return (
        <div className='container mx-auto px-5'>
            <p className="text-center md:text-left text-3xl md:text-4xl leading-10 md:leading-12 max-w-5xl py-20 mx-auto">{children}</p>
        </div>
    )

}

export default Summary;