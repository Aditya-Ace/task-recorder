import { ITaskProps } from '../types'
import Card from '../ui/Card'

const Tasks: React.FC<ITaskProps> = ({ setTasks, tasks }) => {
	return (
		<section className='w-1/4'>
			<h1 className='text-2xl font-bold text-gray-800 mb-4'>Tasks</h1>
			<div className='flex flex-col gap-3 w-full rounded-lg shadow-lg divide-y divide-gray-200 overflow-y-auto h-full'>
				{tasks.length > 0 &&
					tasks.map((task) => <Card key={task.id} task={task} />)}
			</div>
		</section>
	)
}

export default Tasks
