import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Controls from './controls'
import Tasks from './tasks'
import { ITaskState } from './types'

function App() {
	const [tasks, setTasks] = useState<ITaskState[]>([])
	const [title, setTitle] = useState<string>('')

	const handleTaskSubmission = () => {
		setTasks([
			...tasks,
			{ title, isCompleted: false, id: uuidv4(), startTime: new Date() }
		])
		setTitle('')
	}

	return (
		<main className=' bg-gray-800 text-white w-full h-screen overflow-hidden'>
			<header className='flex flex-row justify-center items-center gap-3 w-full'>
				<input
					type='text'
					placeholder='Add New Task'
					value={title}
					className='border-2 border-gray-400 rounded-md p-2 w-1/2  my-5 text-black first-letter:uppercase font-bold text-xl'
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button
					className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
					onClick={handleTaskSubmission}
				>
					Add Task
				</button>
			</header>
			<section className='flex flex-row gap-5 flex-start flex-start w-full h-screen overflow-hidden '>
				<Tasks setTasks={setTasks} tasks={tasks} />
				<div className='border-r-4'></div>
				<Controls />
			</section>
		</main>
	)
}

export default App
