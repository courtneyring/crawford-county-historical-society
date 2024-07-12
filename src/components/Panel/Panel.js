const Panel = ({copy}) => {
    return (
        <div className="flex sm:flex-col md:flex-row w-full my-10">
            <div className='flex md:flex-col align-center justify-center text-center w-32 bg-[#cfd6e3]'>
                <span className="text-2xl">{copy.month}</span>
                <span className="text-4xl">{copy.day}</span>
            </div>
            <div className='bg-gray-200 w-full px-5 py-3'>
                <a className='mb-10 text-2xl hover:underline' href={copy.linkUrl} target='_blank'>{copy.header}</a>
                <p className='text-lg'>{copy.body}</p>
                <p className="font-bold text-lg">{copy.scheduled}</p>
                <a href={copy.linkUrl} className="text-lg hover:underline" target='_blank'>{copy.linkLabel}</a>
            </div>
        </div>
    )
}

export default Panel;