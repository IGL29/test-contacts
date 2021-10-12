import styles from './button.scss';
import cn from 'classnames';

function Button({ handlerClick, classNamePosition }) {
	return (
		<button onClick={handlerClick} className={cn('button', classNamePosition)}>Новый контакт</button>
	);
}

export default Button;