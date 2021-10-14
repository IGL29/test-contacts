import cn from 'classnames';
import style from './form.module.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createContactActionCreator } from '../../store/modules/contacts';
import { closeModalActionCreater } from '../../store/modules/modal';
import { clearFormActionCreator } from '../../store/modules/form';

function Form() {
	const dispatch = useDispatch();
	const modalStateFromRedux = useSelector((state) => state.modal);
	const formStateFromRedux = useSelector((state) => state.form);

	const [formData, setFormData] = useState(formStateFromRedux);
	const classModalState = modalStateFromRedux.isModalOpen ? 'visible' : '';

	const handleInputChange = (key, value) => {
		setFormData({
			...formData,
			[key]: value,
		})
	}

	const handlerCancel = (ev) => {
		ev.preventDefault();
		dispatch(clearFormActionCreator());
		dispatch(closeModalActionCreater());
	}

	const handlerSave = (ev) => {
		ev.preventDefault();
		dispatch(createContactActionCreator(formData));
		setFormData({});
		dispatch(closeModalActionCreater());
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
					value={formData.firstName}
					onChange={e => handleInputChange('firstName', e.target.value)}
				></input>
			</label>

			<label className={style.label}> Фамилия
				<input
					className={style.input}
					type="text"
					value={formData.lastName}
					onChange={e => handleInputChange('lastName', e.target.value)}
				></input>
			</label>

			<label className={style.label}> Телефон
				<input
					className={style.input}
					type="text"
					value={formData.phone}
					onChange={e => handleInputChange('phone', e.target.value)}
				></input>
			</label>

			<label className={style.label}> Email
				<input
					className={style.input}
					type="text"
					value={formData.email}
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