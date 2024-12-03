function List(props) {
  return (
    <>
      <h2>Contact List</h2>
      <ul>
        {props.list ? (
          props.list.map((item) => <li key={props.list.index}>{item}</li>)
        ) : (
          <li>No Contact List</li>
        )}
      </ul>
    </>
  );
}
export default List;
