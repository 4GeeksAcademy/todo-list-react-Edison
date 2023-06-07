import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todo,setTodo] = useState("")
	const [list, setList] = useState([])

	return (
		<div className=" d-flex justify-content-center mt-5">
			<div>
				<input 
					placeholder="Add"
					type="text"
					onChange={(e)=>{
						setTodo(e.target.value)
					}}
					value={todo}
				/>
				<button onClick={()=>{
					setList([...list,todo])
					setTodo("")
				}} className="ms-3"> add toDo
				</button>
		
				<ul>
					{list.map((item,index)=>{
						return <li key={index} className="mt-3">{item} <i className="fas fa-check mx-3" onClick={()=>{
							const updatedList = [...list]; 
         					updatedList.splice(index, 1);
          					setList(updatedList);
						}}></i></li>
					})}
				</ul>
			</div>			
		</div>
	);
};

export default Home;
