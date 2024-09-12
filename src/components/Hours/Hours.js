const Hours = ({hours}) => {
    return (
        // <p>
            
            <div className="grid grid-cols-2 w-full">
                {hours.map((day) => {
                    return (
                        <>
                            <div className="capitalize">{day.label}</div>
                            <div className="text-right md:text-left">{day.value}</div>
                        </>
                    )

                })}
            </div>
        // </p>

    )
}

export default Hours