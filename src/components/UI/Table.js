const Table = (props) => {
  return (
    <div className="table-container py-5 ">
      <table className="table is-bordered is-fullwidth has-text-centered">
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
};

export default Table;
