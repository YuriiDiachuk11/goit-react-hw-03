const Contact = ({ name, number, deleteContact }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={deleteContact} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
