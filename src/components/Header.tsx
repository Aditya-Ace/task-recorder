import { IHeaderProps } from '../types'

export const Header: React.FC<IHeaderProps> = ({
	taskTitle,
	setTaskTitle,
	handleTaskSubmission
}) => {
	return (
		<header className='flex flex-row justify-center items-center gap-3 w-full'>
			<input
				type='text'
				placeholder='Add New Task'
				value={taskTitle}
				className='border-2 border-gray-400 rounded-md p-2 w-1/2  my-5 text-black first-letter:uppercase font-bold text-xl'
				onChange={(e) => setTaskTitle(e.target.value)}
			/>
			<button
				className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
				onClick={handleTaskSubmission}
			>
				Add Task
			</button>
		</header>
	)
}
