import { ITaskCardProps } from '../types'

const Card: React.FC<ITaskCardProps> = ({
	task,
	checkedTask,
	setCheckedTask,
	handleDeleteTask
}) => {
	const { taskTitle, isCompleted, id, startTime, endTime, totalTime } = task
	const trimmedTitle =
		taskTitle.length > 15 ? taskTitle.substring(0, 20) + '...' : taskTitle
	return (
		<div
			key={id}
			className='block max-w-[20rem] border border-white rounded-lg hover:bg-red-400 text-white shadow-lg shadow-blue-500/50'
		>
			<div className='border-b-2 border-[#0000002d] px-6 py-3 h-20'>
				<h3 className='text-lg md:text-xl font-semibold'>{trimmedTitle}</h3>
			</div>
			<div className='p-3 flex justify-between'>
				<p className='text-lg md:text-base leading-tight inline-block '>
					{isCompleted ? 'Completed' : 'Not Completed'}
				</p>
				<div>
					{!isCompleted && (
						<input
							id='start'
							type='checkbox'
							checked={checkedTask?.id === id}
							onChange={() => {
								setCheckedTask(task)
							}}
							className='inline-block ml-2 w-4 h-4 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						/>
					)}
					{isCompleted && (
						<img
							src={'../assets/delete.png'}
							alt='Delete'
							className='w-4 cursor-pointer inline-block ml-2'
							onClick={() => handleDeleteTask(id)}
						/>
					)}
				</div>
			</div>
			{startTime && (
				<div className='p-3'>
					<p className='text-sm md:text-base leading-tight'>
						Start Time : {new Date(startTime).toLocaleDateString()}-
						{new Date(startTime).toLocaleTimeString()}
					</p>
				</div>
			)}
			{endTime && (
				<div className='p-3'>
					<p className='text-sm md:text-base leading-tight'>
						End Time: {new Date(endTime).toLocaleDateString()}-
						{new Date(endTime).toLocaleTimeString()}
					</p>
				</div>
			)}
			{totalTime && (
				<div className='p-3'>
					<p className='text-sm md:text-base leading-tight'>
						Total Time: {totalTime}
					</p>
				</div>
			)}
		</div>
	)
}

export default Card
