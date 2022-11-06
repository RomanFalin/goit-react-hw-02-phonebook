import PropTypes from 'prop-types';

const Filter = ({ filterValue, handleInputChange }) => {
  return (
    <label>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name="filter"
        onChange={handleInputChange}
        value={filterValue}
      />
    </label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Filter;
