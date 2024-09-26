const Hours = ({ hours }) => {
    return (

        <div className="grid grid-cols-2 w-full">
            {hours.map((day, idx) => {
                return (
                    <div key={`hours-${idx}`}>
                        <div className="capitalize">{day.label}</div>
                        <div className="text-right md:text-left">{day.value}</div>
                    </div>
                )

            })}
        </div>
    )
}

export default Hours