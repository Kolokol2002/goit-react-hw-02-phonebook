function Contacts({ usersArray }) {
  return (
    <ul>
      {usersArray.map((user, idx) => (
        <li key={idx}>
          {user.name}: {user.number}
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
