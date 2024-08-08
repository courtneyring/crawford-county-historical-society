const Overlay = ({ children, closeFn }) => {
    return (
        <div className="w-screen h-screen bg-lightgrey fixed top-0 left-0 p-5">
            <div className="absolute top-5 right-5 w-7 cursor-pointer" onClick={closeFn}>
                <img src='/assets/icons/close.svg' />
            </div>
            {children}
        </div>
    )
}

export default Overlay;