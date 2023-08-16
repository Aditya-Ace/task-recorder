export interface ITaskState {
	title: string
	isCompleted: boolean
	id: string
	startTime: Date
	endTime?: Date
}

export interface ITaskProps {
	setTasks: React.Dispatch<React.SetStateAction<ITaskState[]>>
	tasks: ITaskState[]
}