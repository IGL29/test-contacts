import cn from 'classnames';
import style from './form.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createContactActionCreator } from '../../store/contacts';
import { closeModalActionCreater } from '../../store/modal';
import { clearFormActionCreator } from '../../store/form';

function Form() {
	const dispatch = useDispatch();
	const modalStateFromRedux = useSelector((state) => state.modal);
	const formStateFromRedux = useSelector((state) => state.form);
	console.log('formStateFromRedux', formStateFromRedux)
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
		// clearForm();
		// dispatch(closeModalActionCreater());
	}

	console.log('formData', formData);

	return (
		<form className={cn({
			form: true,
			visible: classModalState,
		})}>
			<h2 className="form__title">Новый контакт</h2>

			<label className="label"> Имя
				<input
					className="input"
					type="text"
					value={formData.firstName}
					onChange={e => handleInputChange('firstName', e.target.value)}
				></input>
			</label>

			<label className="label"> Фамилия
				<input
					className="input"
					type="text"
					value={formData.lastName}
					onChange={e => handleInputChange('lastName', e.target.value)}
				></input>
			</label>

			<label className="label"> Телефон
				<input
					className="input"
					type="text"
					value={formData.phone}
					onChange={e => handleInputChange('phone', e.target.value)}
				></input>
			</label>

			<label className="label"> Email
				<input
					className="input"
					type="text"
					value={formData.email}
					onChange={e => handleInputChange('email', e.target.value)}
				></input>
			</label>

			<div className="form__wrap-btn">
				<button
					className={cn("btn", "cancel")}
					onClick={handlerCancel}
				>Отмена</button>

				<button
					className={cn("btn", "save")}
					onClick={handlerSave}
				>Сохранить</button>
			</div>
		</form>
	);
}

export default Form;