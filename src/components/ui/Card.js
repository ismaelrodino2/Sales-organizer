function Card(props){
    return(
        <div className="border-2 border-red-400">
            {props.children}
        </div>
    )
}
export default Card