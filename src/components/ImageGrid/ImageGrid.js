


const ImageGrid = ({images}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {images.map((image, idx) => {
                return <img src={image} className="object-cover h-full w-full aspect-[4/3]" key={`imagegrid-${idx}`}/>
            })}
        </div>
    )

}


export default ImageGrid;