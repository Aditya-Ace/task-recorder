import { ITaskCardProps } from '../types'

const useLocalStorage = ({ task }: ITaskCardProps) => {
	const saveTask = () => localStorage.setItem(task.id, JSON.stringify(task))
	const removeTask = () => localStorage.removeItem(task.id)
	const getTask = () => JSON.parse(localStorage.getItem(task.id) || '{}')

	return { saveTask, removeTask, getTask }
}

export default useLocalStorage
