import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [todos, setTodos] = useState([]);
	const [ inputValue, setInputValue ] = useState("");
	
	const keyUpHandler = (e) => {
	if(e.key == "Enter") {
		setTodos([...todos, inputValue]);
		setInputValue("")
	}	
	} 
	return (
		<div className="container">

			<h1>My ToDo's</h1>
			
			
				<input 
				type="text" 
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				onKeyUp={(e) => keyUpHandler(e)}
				placeholder="What's on the to do today?"/>
				<ul>
					{todos.map(
						(task, index) => {
						return <li key={index}>{task}<i className="fa-solid fa-trash-can"></i>
						</li>}
					)}
				
				
			</ul>
			<div>23 items</div>
		</div>
		
		
		
		
		/*<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div> */
	);
};

export default Home;
