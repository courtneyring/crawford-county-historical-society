const ImageGrid = ({images}) => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {images.map((image) => {
                return <img src={image} className="object-cover h-full w-full"/>
            })}
        </div>
    )

}


export default ImageGrid;