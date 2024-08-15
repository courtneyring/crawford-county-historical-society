import Button from "../Button/Button";

const Event = ({title, date, description}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
            <img src='https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847474936-QNZYY5VYCIQ8N39A6I3M/20140301_Trade-151_0124-copy.jpg' className="w-full h-auto mb-5 md:mb-0"/>
            <div className="col-span-2">
                <h2 className="mb-5">{title}</h2>
                <p className="mb-5">{date}</p>
                <p className="mb-5">{description}</p>
                <Button>View Event</Button>

            </div>
        </div>
    )
}

export default Event;