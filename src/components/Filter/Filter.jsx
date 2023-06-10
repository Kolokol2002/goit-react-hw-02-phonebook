import { ContainerFilter, TitleFilter, InputFilter } from './Filter.styled';

function Filter({ handleFilter }) {
  return (
    <ContainerFilter>
      <TitleFilter>Find number</TitleFilter>
      <InputFilter type="text" name="filter" onChange={handleFilter} />
    </ContainerFilter>
  );
}

export default Filter;
