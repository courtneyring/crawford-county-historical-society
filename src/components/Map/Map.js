const Map = ({sourceUrl}) => {
    return (
        <iframe src={sourceUrl} width="100%" height="100%" frameborder="0" style={{'border': 0}} allowFullScreen ></iframe>
    )
}

export default Map;