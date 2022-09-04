const Table = (props) => {
  return (
    <div className="table-container  ">
      <table className="table is-bordered is-fullwidth has-text-centered">
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
};

export default Table;
