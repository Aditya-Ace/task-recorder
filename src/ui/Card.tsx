import { ITaskCardProps } from '../types'

const Card: React.FC<ITaskCardProps> = ({ task }) => {
	const { title, isCompleted, id, startTime, endTime } = task
	return (
		<div className='max-w-sm rounded overflow-hidden shadow-lg bg-slate-50'>
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2 text-gray-400'>{id}</div>
			</div>
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2 text-gray-800'>{title}</div>
				<p className='text-gray-700 text-base'>
					{isCompleted ? 'Completed' : 'Not Completed'}
				</p>
				<p className='text-gray-700 text-base'>{startTime.toLocaleString()}</p>
				<p className='text-gray-700 text-base'>{endTime?.toLocaleString()}</p>
			</div>
		</div>
	)
}

export default Card
