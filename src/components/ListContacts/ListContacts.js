import { useDispatch } from 'react-redux';

import { openModal } from '../../store/modules/modal';
import { addValues } from '../../store/modules/form';
import styles from './listContacts.module.scss';

export function ListContacts({ contacts }) {
  const dispatch = useDispatch();

  const openWindowEdit = (data) => {
    dispatch(addValues({
      ...data,
    }))
    dispatch(openModal())
  }

  return (
    <table className={styles.list}>
      <tbody>
        <tr>
          <th>Имя</th>
          <th>Фамиля</th>
          <th>Телефон</th>
          <th>Email</th>
        </tr>

        {
          contacts.map((data, index) => (
            <tr className={"item"} key={index} onClick={() => openWindowEdit(data)}>
              <td className="wrap-descr__descr">{data.firstName}</td>

              <td className="wrap-descr__descr">{data.lastName}</td>

              <td className="wrap-descr__descr">{data.phone}</td>

              <td className="wrap-descr__descr">{data.email}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default ListContacts;
