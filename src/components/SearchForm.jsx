import { Form } from 'react-router';

const SearchForm = () => {
  return (
    <div>
      <Form>
        <input type="search" name="search" />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
};
export default SearchForm;
