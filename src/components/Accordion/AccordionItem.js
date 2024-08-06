const AccordionItem = ({title, body, toggleFn, isOpen, idx }) => {
    return (
        <div className={`border-b px-3 ${idx == 0 && 'border-t'}`} >
            <div className="text-xl py-4 cursor-pointer flex justify-between items-center" onClick={() => toggleFn(!isOpen)} >
                <span className="max-w-9/10">{title}</span>
                <div className="w-3 relative">
                    <div className="w-full h-px bg-lightgrey absolute"></div>
                    <div className={`w-full h-px bg-lightgrey transition-all absolute ${isOpen ? 'rotate-0': '-rotate-90'}`}></div>
                </div>
            </div>
            <div className={`transition-all overflow-hidden px-4  ${!isOpen ? 'max-h-0' : 'max-h-96'}`}>
                <div className="pb-4">
                    {body}
                </div>
                
            </div>
        </div>
    )
}

export default AccordionItem;