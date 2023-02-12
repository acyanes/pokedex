import { useEffect, useRef } from "react";
import Link from "next/link";

interface Props {
  results: string[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({ results, isOpen, setIsOpen }: Props) => {
  const ref = useRef<any>(null);
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={ref} className="border border-gray-400 rounded-lg w-64">
      {isOpen &&
        results.map((name, index) => (
          <Link href={`/${name}`} key={index}>
            <li key={index} className="list-none hover:bg-gray-300">
              <span className="pl-4">{name}</span>
            </li>
          </Link>
        ))}
    </div>
  );
};

export default Dropdown;
