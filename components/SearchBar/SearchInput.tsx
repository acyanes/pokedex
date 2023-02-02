import { Dispatch, SetStateAction } from 'react';

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const SearchInput = ({ value, setValue }: Props) => {
  return (
    <input
      type='text'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder='search pokemon'
      className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-64 appearance-none leading-normal'
    />
  );
};

export default SearchInput;
