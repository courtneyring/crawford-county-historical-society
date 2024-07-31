const Button = ({ text, fn, url, target, variation }) => {
    return (
        <>
            {variation == 'link' ?
                <a href={url} target={target} className={`underline hover:opacity-80`}>{text}</a>
                :
                <button className={`px-8 py-4 ${variation == 'secondary' ? 'bg-yellow' : 'bg-blue text-white'} hover:opacity-85`} onClick={fn}>{text}</button>
            }
        </>

    )
}

export default Button;