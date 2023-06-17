import React from "react";
import Icon from "./Icon";

const Navbar = () => {
	return (
		<div className='flex justify-between items-center w-full h-88px px-12 py-22px border-b border-["#DBDBDB]'>
			<div className='relative w-4/12'>
				<input
					type='text'
					className='h-11 pl-14 bg-customWhite rounded-md w-full bg-customGray focus:outline-none'
					placeholder='Search for anything...'
				/>
				<Icon
					name={"search"}
					className={"absolute top-1/2 left-4 -translate-y-1/2"}
				/>
			</div>
			<div className='flex gap-x-12'>
				<div className='flex justify-between items-center gap-x-7'>
					<Icon name='calendar-2' />
					<Icon name='message-question' />
					<Icon
						name='notification'
						className={
							" relative before:bg-[#D8727D] before:w-1.5 before:h-1.5 before:absolute before:top-0.5 before:right-1 before:rounded-full"
						}
					/>
				</div>

				<div className='flex items-center gap-x-5'>
					<div className='flex flex-col items-end mb-0.5 text-black'>
						Anima Agrawal
						<span className='text-[#787486]'>U.P, India</span>
					</div>
					<div className='flex items-center gap-x-2'>
						<div className='w-38px h-38px rounded-full overflow-hidden'>
							<img
								src='./images/profile.png'
								alt='profile'
								className='w-full'
							/>
						</div>
						<Icon name='arrow-down' size={"sm"} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
