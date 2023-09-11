import { IControlsProps } from '../types'

const Controls: React.FC<IControlsProps> = ({
	handleStartButtonClick,
	handleStopButtonClick
}) => {
	return (
		<section className='text-white py-4 flex shadow-lg shadow-blue-500/50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-semibold text-primary mb-8'>Controls</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-6'>
					<button
						className='hover:bg-red-400 text-3xl p-4 shadow-lg shadow-blue-500/50'
						onClick={handleStartButtonClick}
					>
						Start Task
					</button>
					{/* Show Timer */}
					{}
					<button
						className='hover:bg-red-400 text-3xl p-4 shadow-lg shadow-blue-500/50'
						onClick={handleStopButtonClick}
					>
						Stop Task
					</button>
				</div>
			</div>
		</section>
	)
}

export default Controls
