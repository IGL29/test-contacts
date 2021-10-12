import cn from 'classnames';
import style from './form.scss';
import { useState } from 'react';
import { store } from '../../store';

function Form({ isOpen, openModal }) {
	const [formData, updateData] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
	});

	const classState = isOpen ? 'visible' : '';

	const handleInputChange = (key, value) => {
		updateData({
			...formData,
			[key]: value,
		});
	};

	const handlerCancel = (ev) => {
		ev.preventDefault();

		updateData({
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
		});
		openModal(false);
	}

	const handlerSave = (ev) => {
		ev.preventDefault();

		updateData({
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
		});
		// store.dispatch(createContact(formData));
		openModal();
	}

	return (
		<form className={cn({
			form: true,
			visible: classState,
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