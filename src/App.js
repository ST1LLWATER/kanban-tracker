import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import AvatarGroup from "./components/AvatarGroup";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// function generateId() {
// 	return Date.now() + "" + Math.floor(Math.random() * 1000);
// }

function App() {
	return (
		<div className='h-screen w-screen flex'>
			<Sidebar />
			<div className='flex flex-col w-full '>
				<Navbar />
				<Main />
			</div>
		</div>
	);
}

export default App;
