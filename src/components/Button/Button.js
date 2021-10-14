import { useDispatch } from 'react-redux'
import cn from 'classnames';
import styles from './button.module.scss';
import { switchModalActionCreater } from '../../store/modules/modal';
import { clearFormActionCreator } from '../../store/modules/form';

function Button({ classNamePosition }) {
	const dispatch = useDispatch()

	const switchModal = () => {
		// dispatch(clearFormActionCreator());
		dispatch(switchModalActionCreater());
	}

	return (
		<button onClick={switchModal} className={cn(styles.button, classNamePosition)}>Новый контакт</button>
	);
};

export default Button;