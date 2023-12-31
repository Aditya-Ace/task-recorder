import { ITaskState } from '../types'

export const getTasksFromLS = (): ITaskState[] => {
	const tasks = localStorage.getItem('tasks')
	if (tasks) return JSON.parse(tasks)
	return []
}

export const saveTaskInLS = (task: ITaskState) => {
	let tasks = getTasksFromLS()
	const existingTaskIndex = tasks.findIndex((t) => t.id === task.id)

	if (existingTaskIndex !== -1) {
		tasks[existingTaskIndex] = task
	} else {
		tasks = [...tasks, task]
	}
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

export const deleteTaskFromLS = (id: string) => {
	const tasks = getTasksFromLS()
	const newTasks = tasks.filter((task) => task.id !== id)
	localStorage.setItem('tasks', JSON.stringify(newTasks))
}

export const updateTaskInLS = (task: ITaskState) => {
	const tasks = getTasksFromLS()
	const taskIndex = tasks.findIndex((t) => t.id === task.id)
	if (taskIndex !== -1) {
		tasks.splice(taskIndex, 1, task)
	} else {
		tasks.push(task)
	}
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

export const handleTotalTime = (startTime: Date, endTime: Date) => {
	const timeDifference = endTime.getTime() - startTime.getTime()
	const totalSeconds = Math.floor(timeDifference / 1000)
	const hours = Math.floor(totalSeconds / 3600)
	const remainingSeconds = totalSeconds % 3600
	const minutes = Math.floor(remainingSeconds / 60)
	const seconds = remainingSeconds % 60
	return {
		hours,
		minutes,
		seconds
	}
}
