import './Button.scss';

export default function Button({ icon = null, label }) {
	return (
		<button
			className='button'
			type='button'>
			{icon && (
				<img
					className='button__icon'
					src={icon}
					alt='an icon'
				/>
			)}
			{label}
		</button>
	);
}
