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
		<main className=' py-2 bg-gray-800 text-white w-full'>
			<div className='flex flex-row justify-center items-center m-3'>
				<input
					type='text'
					placeholder='Add New Task'
					value={title}
					className='border-2 border-gray-400 rounded-md p-2 w-1/2 mx-auto my-5 text-black'
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button
					className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
					onClick={handleTaskSubmission}
				>
					Add Task
				</button>
			</div>
			<section className='flex flex-row gap-5 flex-start flex-start min-h-screen'>
				<Tasks setTasks={setTasks} tasks={tasks} />
				<div className='border-r-4'></div>
				<Controls />
			</section>
		</main>
	)
}

export default App
