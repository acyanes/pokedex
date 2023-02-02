interface Props {
  results: string[];
}

const Dropdown = ({ results }: Props) => {
  return (
    <div className='border border-gray-400 rounded-lg w-64'>
      {results.map((name, index) => (
        <li key={index} className='list-none hover:bg-gray-300'>
          <span className='pl-4'>{name}</span>
        </li>
      ))}
    </div>
  );
};

export default Dropdown;
