import styles from './itemContacts.scss';
import { useDispatch } from 'react-redux';
import { openModalActionCreater } from '../../../store/modules/modal';
import { addInitialValue } from '../../../store/modules/form';
import { store } from 'react';


function ItemContact({ data }) {
	const dispatch = useDispatch();

	const openWindowEdit = () => {
		dispatch(addInitialValue({
			...data,
		}))
		dispatch(openModalActionCreater())
	}

	return (
		<tr className={"item"} onClick={ openWindowEdit }>
			<td className="wrap-descr__descr">{data.id}</td>

			<td className="wrap-descr__descr">{data.firstName}</td>

			<td className="wrap-descr__descr">{data.lastName}</td>

			<td className="wrap-descr__descr">{data.phone}</td>
			
			<td className="wrap-descr__descr">{data.email}</td>
		</tr>
	);
}

export default ItemContact;