import styles from './itemContacts.scss';

function ItemContact({ data }) {
	return (
		<tr className={"item"}>
			<td className="wrap-descr__descr">{data.id}</td>

			<td className="wrap-descr__descr">{data.firstName}</td>

			<td className="wrap-descr__descr">{data.lastName}</td>

			<td className="wrap-descr__descr">{data.phone}</td>
			
			<td className="wrap-descr__descr">{data.email}</td>
		</tr>
	);
}

export default ItemContact;