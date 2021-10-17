import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import { createContact } from '../../store/modules/contacts';
import { closeModal } from '../../store/modules/modal';
import { clearForm, changeInput } from '../../store/modules/form';
import style from './form.module.scss';

function Form() {
	const dispatch = useDispatch();
	const modalStateFromRedux = useSelector((state) => state.modal);
	const formStateFromRedux = useSelector((state) => state.form);

	const classModalState = modalStateFromRedux.isModalOpen ? 'visible' : '';

	const handleInputChange = (key, value) => {
    dispatch(changeInput({ ...formStateFromRedux, [key]: value }))
	}

	const handlerCancel = (ev) => {
		ev.preventDefault();
		dispatch(clearForm());
		dispatch(closeModal());
	}

	const handlerSave = (ev) => {
		ev.preventDefault();
		dispatch(createContact(formStateFromRedux));
		dispatch(clearForm());
		dispatch(closeModal());
	}

	return (
		<div className={style.modal}>
			<div className={style['modal__background']} onClick={handlerCancel}></div>

			<form className={cn({
				[style['modal__form']]: true,
				[style.form]: true,
				[style.visible]: classModalState,
			})}>
			<h2 className={style['form__title']}>Новый контакт</h2>

			<label className={style.label}> Имя
				<input
					className={style.input}
					type="text"
					value={formStateFromRedux.firstName}
					onChange={e => handleInputChange('firstName', e.target.value)}
				></input>
			</label>

			<label className={style.label}> Фамилия
				<input
					className={style.input}
					type="text"
					value={formStateFromRedux.lastName}
					onChange={e => handleInputChange('lastName', e.target.value)}
				></input>
			</label>

			<label className={style.label}> Телефон
				<input
					className={style.input}
					type="text"
					value={formStateFromRedux.phone}
					onChange={e => handleInputChange('phone', e.target.value)}
				></input>
			</label>

			<label className={style.label}> Email
				<input
					className={style.input}
					type="text"
					value={formStateFromRedux.email}
					onChange={e => handleInputChange('email', e.target.value)}
				></input>
			</label>

			<div className={style['form__wrap-btn']}>
				<button
					className={cn(style.btn, style.cancel)}
					onClick={handlerCancel}
				>Отмена</button>

				<button
					className={cn(style.btn, style.save)}
					onClick={handlerSave}
				>Сохранить</button>
			</div>
			</form>
		</div>
	);
}

export default Form;
