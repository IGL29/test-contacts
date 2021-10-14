import { ItemContact } from './ItemContact';
import styles from './listContacts.module.scss';

export function ListContacts({ contacts }) {
	return (
		<table className={styles.list}>
			<tbody>
				<tr>
					<th>id</th>
					<th>Имя</th>
					<th>Фамиля</th>
					<th>Телефон</th>
					<th>Email</th>
				</tr>

				{
					contacts.map((dataItem, index) => (
						<ItemContact key={index} data={dataItem}/>
					))
				}
			</tbody>
		</table>
	);
}

export default ListContacts;