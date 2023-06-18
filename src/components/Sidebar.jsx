import React from "react";
import SideBarItems from "../constant/sidebar";
import Icon from "./Icon";

const Sidebar = () => {
	return (
		<div className='min-w-[250px] w-[10%] flex-shrink-0 h-full border-r border-["#DBDBDB] inline-block'>
			{/* Sidebar Menus */}
			<div className='flex justify-between items-center px-6 py-7 h-88px border-b border-["#DBDBDB]'>
				<div className='flex items-center'>
					<Icon name='colorfilter' className={"mr-2"} />
					Project M.
				</div>
				<Icon name={"double-arrow-left"} />
			</div>
			<div className='px-3 w-100% '>
				<div className='border-b border-["#DBDBDB] flex flex-col gap-y-6 py-30px px-3'>
					{SideBarItems.map((item, idx) => (
						<div className='flex gap-x-4 text-primary' key={idx}>
							<Icon name={item.icon} />
							<h2 className='font-medium text-base'>{item.name}</h2>
						</div>
					))}
				</div>
			</div>

			{/* Projects & Card */}
			<div className='flex flex-col justify-between'>
				<div className='flex flex-col justify-between gap-y-5 px-3 py-30px'>
					{/* Heading */}
					<div className='flex justify-between items-center px-10px'>
						<h3 className='text-xs font-bold text-primary'>MY PROJECTS</h3>
						<Icon name={"add-square"} size={"16px"} />
					</div>

					{/* Options */}
					<div className='flex flex-col gap-y-2.5'>
						<div className='flex justify-between items-center py-2.5 px-3 bg-active-bg rounded-md'>
							<div className='flex items-center'>
								<div className='w-2 h-2 rounded-full bg-green-500'></div>
								<div className='ml-4 font-semibold'>Mobile App</div>
							</div>
							<span className='-mt-2 font-extrabold'>...</span>
						</div>

						<div className='flex justify-between items-center py-2.5 px-3'>
							<div className='flex items-center'>
								<div className='w-2 h-2 rounded-full bg-yellow-500'></div>
								<div className='ml-4 font-semibold'>Website Redesign</div>
							</div>
							<span className='-mt-2 font-extrabold'>...</span>
						</div>

						<div className='flex justify-between items-center py-2.5 px-3'>
							<div className='flex items-center'>
								<div className='w-2 h-2 rounded-full bg-violet-500'></div>
								<div className='ml-4 font-semibold'>Design System</div>
							</div>
							<span className='-mt-2 font-extrabold'>...</span>
						</div>

						<div className='flex justify-between items-center py-2.5 px-3'>
							<div className='flex items-center'>
								<div className='w-2 h-2 rounded-full bg-blue-500'></div>
								<div className='ml-4 font-semibold'>Wireframes</div>
							</div>
							<span className='-mt-2 font-extrabold'>...</span>
						</div>
					</div>
				</div>

				{/* Card */}
				<div className='px-22px py-30px '>
					<div className='p-5 flex flex-col items-center rounded-2xl bg-customGray gap-y-3 relative'>
						<div className='flex justify-center items-center rounded-full w-16 h-16 absolute -top-7 left-15 bg-customGray'>
							<Icon name={"lamp-on"} />
							<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#FBCB18] blur-md'></div>
						</div>
						<h3 className='text-sm  mt-4'>Thoughts Time</h3>
						<p className='text-xs text-center'>
							We don’t have any notice for you, till then you can share your
							thoughts with your peers.
						</p>
						<button className='text-sm bg-white w-full py-3 rounded'>
							Write a message
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
