import nextConfig from "../../../next.config.mjs";

const Event = ({name, start, end, image, location, description}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-x-5 h-full">
            
            <img src={`${nextConfig.basePath}${image}`} className="h-full w-full object-cover" style={{overflow: 'hidden'}}/>
            <div className="col-span-2">
                <h2 className="mb-3 text-3xl font-regular">{name}</h2>
                <p className="mb-0 text-xl">{start} - {end}</p>
                <p className="mb-5 text-xl">{location}</p>
                <p className="mb-0 text-xl">{description}</p>
                {/* <Button>View Event</Button> */}

            </div>
        </div>
    )
}

export default Event;