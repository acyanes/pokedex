import useDebounce from "@/hooks/useDebounce";
import useFetchPokemon from "@/hooks/useFetch";
import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import Dropdown from "../Dropdown";

const Search = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const debounceValue = useDebounce(value, 500);
  const { data } = useFetchPokemon();

  useEffect(() => {
    setResults([]);
    if (debounceValue) {
      if (data) {
        const allNames = data.map((obj: any) => obj.name);
        const newResults = allNames.filter((name: string) =>
          name.includes(debounceValue)
        );
        setResults(newResults);
      }
    }
  }, [debounceValue, data]);

  return (
    <div className="flex flex-col items-center">
      <div>Name</div>
      <SearchInput value={value} setValue={setValue} />
      {results.length > 0 && <Dropdown results={results} />}
    </div>
  );
};
export default Search;
