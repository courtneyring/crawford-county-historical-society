const Hours = ({ hours }) => {
    return (

        <div className="grid grid-cols-2 w-full">
            {hours.map((day, idx) => {
                return (
                    <>
                        <p className="capitalize mb-0" key={`hours-${idx}`}>{day.label}</p>
                        <p className="text-right md:text-left mb-0" key={`hours2-${idx}`}>{day.value}</p>
                    </>
                    // <div key={`hours-${idx}`}>
                        // <div className="capitalize">{day.label}</div>
                        // <div className="text-right md:text-left">{day.value}</div>
                    // </div>
                )

            })}
        </div>
    )
}

export default Hours