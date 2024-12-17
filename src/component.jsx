function Posters(props) {
    return (
    <div className="poster">
        <h2>{props.title}</h2>
        <img src={props.poster} alt="" />
    </div>
    )
}
export default Posters