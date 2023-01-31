import useDebounce from "@/hooks/useDebounce";
import { useState, useEffect } from "react";

const Search = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 500);

  // debounceValue is the value we use to send api request
  useEffect(() => {
    if (debounceValue) {
      console.log(debounceValue);
      // show a drop down of pokemon with that name
    }
  }, [debounceValue]);

  return (
    <div className="flex flex-col items-center">
      <div>Name or Number</div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="search pokemon"
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-64 appearance-none leading-normal"
      />
    </div>
  );
};
export default Search;
