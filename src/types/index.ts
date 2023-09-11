export interface ITaskState {
	taskTitle: string
	isCompleted: boolean
	id: string
	startTime?: Date
	endTime?: Date
	totalTime?: string
}

export interface ITaskCardProps {
	task: ITaskState
	checkedTask: ITaskState | null
	setCheckedTask: React.Dispatch<React.SetStateAction<ITaskState | null>>
}

export interface ITaskProps {
	tasks: ITaskState[]
	checkedTask: ITaskState | null
	setCheckedTask: React.Dispatch<React.SetStateAction<ITaskState | null>>
}

export interface IHeaderProps {
	taskTitle: string
	setTaskTitle: React.Dispatch<React.SetStateAction<string>>
	handleTaskSubmission: () => void
}

export interface IControlsProps {
	handleStartButtonClick: () => void
	handleStopButtonClick: () => void
}
