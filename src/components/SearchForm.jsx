import { Form } from 'react-router';
import { FaSearch } from 'react-icons/fa';

const SearchForm = () => {
  return (
    <div className="w-full px-6 py-4 mx-auto my-4 md:px-24 lg:px-24">
      <Form>
        <div className="flex w-full">
          <input
            className="absolute w-full px-4 py-2 text-sm font-semibold border-transparent border-solid rounded-lg bg-slate-200 h-9 md:w-2/3 md:rounded-none md:rounded-tl-md md:rounded-bl-md lg:w-4/12 lg:rounded-none lg:rounded-tl-md lg:rounded-bl-md"
            type="search"
            name="search"
            placeholder={<FaSearch />}
          />
          <button
            className="bg-slate-600 hidden md:block lg:block text-white font-semibold rounded-se-md rounded-ee-md text-[0.875rem] px-[0.4rem] py-1"
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
