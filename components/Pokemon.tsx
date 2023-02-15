import CardList from "./Card/CardList";
import Loading from "./Loading";
import useData from "@/hooks/useData";

const Pokemon = () => {
  const { data, loading, error } = useData();

  if (loading) {
    return (
      <div className="flex justify-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center m-4">
      {data && <CardList details={data} />}
    </div>
  );
};

export default Pokemon;
