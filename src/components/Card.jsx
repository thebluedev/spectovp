
export default function Card(props){

    return(
        <div 
        className="card h-fit w-80 p-5 mt-10 ml-0 bg-[#F5F5F5] snap-center">
            <h3
            className="text-xl text-left xl:text-3xl pt-5 pl-5 text-[#d73633] font-bold ">{props.head}</h3>
            <p
            className="text-sm text-left xl:text-xl font-normal p-5"
            >{props.content}</p>
        </div>
    )


}
