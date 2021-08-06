function Card(props){
    return(
        <div className="p-6 bg-darkblue rounded-2xl ">
            {props.children}
        </div>
    )
}
export default Card