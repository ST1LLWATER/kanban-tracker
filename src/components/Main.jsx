import React from "react";
import Icon from "./Icon";
import TaskCard from "./TaskCard";

const Main = () => {
	const todos = [
		{
			title: "Brainstorming",
			description:
				"Brainstorming brings team members' diverse experience into play. ",
			priority: "Low",
			usersWorking: [
				{
					path: "./images/user1.png",
				},
				{
					path: "./images/user2.png",
				},
				{
					path: "./images/user3.png",
				},
				{
					path: "./images/user4.png",
				},
			],
		},
		{
			title: "Research",
			description:
				"User research helps you to create an optimal product for users.",
			priority: "High",
			usersWorking: [
				{
					path: "./images/user1.png",
				},
				{
					path: "./images/user2.png",
				},
				{
					path: "./images/user3.png",
				},
			],
		},
		{
			title: "Wireframes",
			description:
				"Low fidelity wireframes include the most basic content and visuals.",
			priority: "High",
			usersWorking: [
				{
					path: "./images/user1.png",
				},
				{
					path: "./images/user4.png",
				},
			],
		},
	];

	const progressTasks = [
		{
			title: "Onboarding Illustrations",
			description: "",
			images: ["./images/flower.png"],
			priority: "Low",
			usersWorking: [
				{
					path: "./images/user1.png",
				},
				{
					path: "./images/user2.png",
				},
				{
					path: "./images/user3.png",
				},
			],
		},
		{
			title: "Moodboard",
			images: ["./images/flower1.png", "./images/flower2.png"],
			priority: "Low",
			usersWorking: [
				{
					path: "./images/user1.png",
				},
			],
		},
	];

	const completedTasks = [
		{
			title: "Mobile App Design",
			description: "",
			images: ["./images/plant.png"],
			status: "Completed",
			usersWorking: [
				{
					path: "./images/user1.png",
				},
				{
					path: "./images/user2.png",
				},
			],
		},
		{
			title: "Design System",
			description: "It just needs to adapt the UI from what you did before ",
			status: "Completed",
			usersWorking: [
				{
					path: "./images/user1.png",
				},
				{
					path: "./images/user2.png",
				},
				{
					path: "./images/user3.png",
				},
			],
		},
	];

	return (
		<div className='flex flex-col px-12 pt-5 w-full h-full '>
			{/*  */}
			<div className='flex justify-between py-5'>
				{/* Heading Side */}
				<div className='flex items-center gap-x-5 '>
					<h1 className='font-semibold text-5xl leading-[55px]'>Mobile App</h1>
					<span className='flex items-center h-fit gap-x-4 mt-2 '>
						<Icon
							name='edit-square'
							size={"25px"}
							className={"cursor-pointer"}
						/>
						<Icon name='link' size={"25px"} className={"cursor-pointer"} />
					</span>
				</div>

				{/* Multiplayer Side */}
				<div className='flex items-center gap-x-3'>
					<div className='flex items-center gap-x-2'>
						<Icon name='add-square-filled' size={"15px"} className='mt-0.5' />
						<h4 className='text-customPurple font-medium'>Invite</h4>
					</div>
					<div className='flex w-fit'>
						<div className='-mr-3 w-9'>
							<img src='images/user1.png' alt='user' />
						</div>
						<div className='-mr-3 w-9'>
							<img src='images/user2.png' alt='user' />
						</div>
						<div className='-mr-3 w-9'>
							<img src='images/user3.png' alt='user' />
						</div>
						<div className='-mr-3 w-9'>
							<img src='images/user4.png' alt='user' />
						</div>
						<div className='bg-[#F4D7DA] text-[#D25B68] rounded-full border border-white w-9 flex justify-center items-center font-medium'>
							+2
						</div>
					</div>
				</div>
			</div>

			{/*  */}
			<div className='flex justify-between my-5'>
				<div className='flex gap-x-5 '>
					{/* Filter */}
					<div className='flex items-center h-10 px-3.5 gap-x-2  text-primary border border-primary rounded-md'>
						<Icon name='filter' size={"16px"} />
						<span className='font-medium'>Filter</span>
						<Icon name='arrow-down' size={"16px"} className={"ml-1"} />
					</div>
					{/* Calender */}
					<div className='flex items-center h-10 px-3 gap-x-2 text-primary border border-primary rounded-md'>
						<Icon name='calendar' size={"16px"} />
						<span className='font-medium'>Today</span>
						<Icon name='arrow-down' size={"16px"} className={"ml-1"} />
					</div>
				</div>

				{/* Multiplayer Side */}
				<div className='flex gap-x-5 items-center'>
					<div className='flex items-center px-4 h-10 gap-x-2 text-primary border border-primary rounded-md'>
						<Icon name='profile' size='16px' />
						<span className='font-medium'>Share</span>
					</div>
					<div className='h-3/4 border-l border-primary'></div>
					<div className='flex justify-center items-center w-10 h-10 rounded-md bg-customPurple'>
						<Icon name='pause' size='20px' />
					</div>
					<Icon name='menu' size='21px' />
				</div>
			</div>

			{/*  */}
			<div className='pt-22px grid grid-cols-3 gap-x-4 h-full'>
				{/* To Do */}
				<div className='h-full bg-customGray rounded-t-2xl px-5'>
					<div className='flex items-center gap-x-2 pt-5 pb-22px border-b-3px border-customPurple mb-2 '>
						<div className='w-2 h-2 bg-violet-500 rounded-full'></div>
						<h3 className='font-medium'>To Do</h3>
						<div className='w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium text-[#625F6D] bg-[#E0E0E0] ml-1'>
							{todos.length}
						</div>
					</div>
					<div className='mt-5 overflow-y-auto flex flex-col gap-y-5'>
						{todos.map((i, idx) => (
							<TaskCard task={i} key={idx} />
						))}
					</div>
				</div>

				{/* On Progress */}
				<div className='h-full bg-customGray rounded-t-2xl px-5'>
					<div className='flex items-center gap-x-2 pt-5 pb-22px border-b-3px border-[#FFA500] mb-2 '>
						<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
						<h3 className='font-medium'>On Progress</h3>
						<div className='w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium text-[#625F6D] bg-[#E0E0E0] ml-1'>
							{progressTasks.length}
						</div>
					</div>

					<div className='mt-5 overflow-y-auto flex flex-col gap-y-5'>
						{progressTasks.map((i, idx) => (
							<TaskCard task={i} key={idx} />
						))}
					</div>
				</div>

				{/* Done */}
				<div className='h-full bg-customGray rounded-t-2xl px-5 '>
					<div className='flex items-center gap-x-2 pt-5 pb-22px border-b-3px border-[#8BC48A] mb-2'>
						<div className='w-2 h-2 bg-green-500 rounded-full'></div>
						<h3 className='font-medium'>Done</h3>
						<div className='w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium text-[#625F6D] bg-[#E0E0E0] ml-1'>
							2
						</div>
					</div>
					<div className='mt-5 overflow-y-auto flex flex-col gap-y-5'>
						{completedTasks.map((i, idx) => (
							<TaskCard task={i} key={idx} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
