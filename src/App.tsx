import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import {
	getTasksFromLS,
	saveTaskInLS,
	updateTaskInLS
} from './components/utils'
import Controls from './controls'
import Tasks from './tasks'
import { ITaskState } from './types'

function App() {
	const [tasks, setTasks] = useState<ITaskState[]>([])
	const [taskTitle, setTaskTitle] = useState<string>('')
	const [checkedTask, setCheckedTask] = useState<ITaskState | null>(null)

	const handleTaskSubmission = () => {
		if (taskTitle === '') return
		const id = Date.now().toFixed(0)
		setTasks([...tasks, { taskTitle, isCompleted: false, id }])
		saveTaskInLS({
			taskTitle,
			isCompleted: false,
			id
		})
		setTaskTitle('')
	}

	const handleStartButtonClick = () => {
		if (checkedTask) {
			setTasks((prev) =>
				prev.map((task) => {
					if (task.id === checkedTask?.id) {
						return {
							...task,
							startTime: new Date()
						}
					}
					return task
				})
			)
			const updatedTask = {
				...checkedTask,
				startTime: new Date()
			}
			setCheckedTask(updatedTask)
			updateTaskInLS(updatedTask)
		}
	}

	const handleTotalTime = (startTime: Date, endTime: Date) => {
		// Calculate the time difference in milliseconds
		const timeDifference = endTime.getTime() - startTime.getTime()

		// Convert the time difference to seconds
		const totalSeconds = Math.floor(timeDifference / 1000)

		// Calculate hours, minutes, and seconds from the totalSeconds
		const hours = Math.floor(totalSeconds / 3600)
		const remainingSeconds = totalSeconds % 3600
		const minutes = Math.floor(remainingSeconds / 60)
		const seconds = remainingSeconds % 60

		// Return the total time taken as an object
		return {
			hours,
			minutes,
			seconds
		}
	}

	const handleStopButtonClick = () => {
		if (checkedTask && checkedTask?.startTime) {
			const totalTime = handleTotalTime(
				new Date(checkedTask?.startTime),
				new Date()
			)
			const totalTimeString = `${totalTime.hours}h ${totalTime.minutes}m ${totalTime.seconds}s`
			setTasks((prev) =>
				prev.map((task) => {
					if (task.id === checkedTask?.id) {
						return {
							...task,
							endTime: new Date(),
							isCompleted: true,
							totalTime: totalTimeString
						}
					}
					return task
				})
			)
			const updatedTask: ITaskState = {
				...checkedTask,
				endTime: new Date(),
				isCompleted: true,
				totalTime: totalTimeString
			}
			updateTaskInLS(updatedTask)
			setCheckedTask(null)
		}
	}

	useEffect(() => {
		const tasksFromLS = getTasksFromLS()
		setTasks(tasksFromLS)
	}, [])

	return (
		<div className='min-h-screen flex flex-col bg-slate-700'>
			<Header
				taskTitle={taskTitle}
				setTaskTitle={setTaskTitle}
				handleTaskSubmission={handleTaskSubmission}
			/>
			<main className='bg-secondary p-4 md:p-6 flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 mt-6'>
				<Tasks
					tasks={tasks}
					checkedTask={checkedTask}
					setCheckedTask={setCheckedTask}
				/>
				{tasks.length > 0 && (
					<Controls
						handleStartButtonClick={handleStartButtonClick}
						handleStopButtonClick={handleStopButtonClick}
					/>
				)}
			</main>
		</div>
	)
}

export default App
