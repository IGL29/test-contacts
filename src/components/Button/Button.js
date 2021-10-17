import { useDispatch } from 'react-redux'
import cn from 'classnames';

import styles from './button.module.scss';
import { switchModal } from '../../store/modules/modal';

function Button({ classNamePosition }) {
	const dispatch = useDispatch()

	const handleSwitchModal = () => {
		dispatch(switchModal());
	}

	return (
		<button onClick={handleSwitchModal} className={cn(styles.button, classNamePosition)}>Новый контакт</button>
	);
};

export default Button;
