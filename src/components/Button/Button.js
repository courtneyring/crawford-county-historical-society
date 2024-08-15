const Button = ({ children, fn, url, target, variation }) => {
    return (
        <>
            {variation == 'link' ?
                <a href={url} target={target} className={`underline hover:opacity-80`}>{children}</a>
                :
                <button className={`px-8 py-4 ${variation == 'secondary' ? 'bg-yellow' : 'bg-blue text-white'} hover:opacity-85`} onClick={fn}>{children}</button>
            }
        </>

    )
}

export default Button;