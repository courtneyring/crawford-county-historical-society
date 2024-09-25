import './TextBlock.scss';

const TextBlock = ({heading, children}) => {
    return (
        <div className="flex container mx-auto flex-col md:flex-row px-5">
            <h2 className="">{heading}</h2>
            <p className="">{children}</p>
        </div>
    )
}

export default TextBlock;