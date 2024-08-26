import Button from "../Button/Button";
import * as dayjs from 'dayjs'

const Event = ({title, start, end, image, location, description}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
            <img src={image} className="min-h-full mb-5 md:mb-0 object-cover"/>
            <div className="col-span-2">
                <h2 className="mb-3">{title}</h2>
                <p className="mb-0">{dayjs(start).format('dddd, MMMM D')}, {dayjs(start).format('h:mm a')} - {dayjs(end).format('h:mm a')}</p>
                <p className="mb-5">{location}</p>
                <p className="mb-0">{description}</p>
                {/* <Button>View Event</Button> */}

            </div>
        </div>
    )
}

export default Event;