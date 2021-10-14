import { useDispatch } from 'react-redux'
import cn from 'classnames';
import styles from './button.scss';
import { switchModalActionCreater } from '../../store/modal';
import { clearFormActionCreator } from '../../store/form';

function Button({ classNamePosition }) {
	const dispatch = useDispatch()

	const switchModal = () => {
		dispatch(clearFormActionCreator());
		dispatch(switchModalActionCreater());
	}

	return (
		<button onClick={switchModal} className={cn('button', classNamePosition)}>Новый контакт</button>
	);
};

export default Button;