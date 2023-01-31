import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const BarGraph = (stats: any) => {
  const width = 520;
  const height = 250;

  const data = [
    { name: "hp", stat: stats.stats[0].base_stat },
    { name: "atk", stat: stats.stats[1].base_stat },
    { name: "def", stat: stats.stats[2].base_stat },
    { name: "spec. A", stat: stats.stats[3].base_stat },
    { name: "spec. D", stat: stats.stats[4].base_stat },
    { name: "spd", stat: stats.stats[5].base_stat },
  ];

  return (
    <BarChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="stat" fill="#8884d8" />
    </BarChart>
  );
};

export default BarGraph;
