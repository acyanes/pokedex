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
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    if (results.length > 0) {
      setIsOpen(true);
    }
  }, [results]);

  useEffect(() => {
    if (!isOpen) {
      setResults([]);
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center">
      <div>Name</div>
      <SearchInput value={value} setValue={setValue} />
      {results.length > 0 && (
        <Dropdown results={results} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};
export default Search;
