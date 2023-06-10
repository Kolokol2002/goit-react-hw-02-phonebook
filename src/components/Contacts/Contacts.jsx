import {
  ContactsUserList,
  ContactsUser,
  ContactsUserName,
  ContactsButtonDelite,
} from './Contacts.styled';

function Contacts({ usersArray, onDelete }) {
  return (
    <ContactsUserList>
      {usersArray.map((user, idx) => (
        <ContactsUser key={idx}>
          <ContactsUserName>
            {user.name}: {user.number}
          </ContactsUserName>

          <ContactsButtonDelite
            data-user-name={user.name}
            onClick={onDelete}
            type="button"
          >
            Delite
          </ContactsButtonDelite>
        </ContactsUser>
      ))}
    </ContactsUserList>
  );
}

export default Contacts;
