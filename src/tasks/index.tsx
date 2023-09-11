import { ITaskProps } from '../types'
import Card from '../ui/Card'

const Tasks: React.FC<ITaskProps> = ({
	tasks,
	checkedTask,
	setCheckedTask
}) => {
	return (
		<section className='text-white py-4 flex shadow-lg shadow-blue-500/50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-semibold text-primary mb-8'>Task List</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-6'>
					{tasks.length > 0 &&
						tasks.map((task) => (
							<Card
								key={task.id}
								task={task}
								checkedTask={checkedTask}
								setCheckedTask={setCheckedTask}
							/>
						))}
				</div>
			</div>
		</section>
	)
}

export default Tasks
