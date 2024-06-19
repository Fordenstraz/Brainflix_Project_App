//Assets/Styles
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
			<span className='button__text'>{label}</span>
		</button>
	);
}
