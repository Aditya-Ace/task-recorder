import { ITaskProps } from '../types'

const Tasks: React.FC<ITaskProps> = ({ setTasks, tasks }) => {
	return (
		<section className='w-1/4'>
			<h1>Tasks</h1>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						{task.title} <p>{task.id}</p>
						<button
							onClick={() => {
								setTasks(tasks.filter((t) => t.id !== task.id))
							}}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Tasks
