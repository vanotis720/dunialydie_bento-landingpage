export default function Container(props){

    return (
        <div className="flex">
            <div className={props.style}>
               { props.children}
            </div>
            
        </div>
    )
}