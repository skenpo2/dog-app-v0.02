import { Form } from 'react-router';

const SearchForm = () => {
  return (
    <div className="mx-auto px-8 py-4">
      <Form>
        <div className="flex gap-1">
          <input
            className="bg-slate-400  border-solid border-transparent  border-1 rounded-sm"
            type="search"
            name="search"
          />
          <button
            className="bg-slate-800 text-white rounded-sm text-[0.875rem] px-[0.4rem] py-1"
            type="submit"
          >
            Search
          </button>
        </div>
      </Form>
    </div>
  );
};
export default SearchForm;
