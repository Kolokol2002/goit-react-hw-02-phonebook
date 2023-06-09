function Filter({ handleFilter }) {
  return (
    <div>
      <h3>Find number</h3>
      <input type="text" name="filter" onChange={handleFilter} />
    </div>
  );
}

export default Filter;
