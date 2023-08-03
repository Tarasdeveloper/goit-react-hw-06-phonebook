import React from 'react';
import { FilterInput, FilterLabel } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterTerm } from 'redux/phonebookActions';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.phonebook.filter);

  const handleFilterContactsByName = ({ target: { value } }) => {
    dispatch(setFilterTerm(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={filterValue}
        onChange={handleFilterContactsByName}
      />
    </FilterLabel>
  );
};

export default Filter;
