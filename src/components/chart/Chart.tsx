import React from "react";

//recharts
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//styles
import * as Styled from "./styles";

//data
const data = [
  { name: "January", Total: 1000 },
  { name: "February", Total: 2600 },
  { name: "March", Total: 900 },
  { name: "April", Total: 1300 },
  { name: "May", Total: 800 },
  { name: "June", Total: 1800 },
];

//ts
export interface IChartProps {
  aspect: number;
  title: string;
}

const Chart = ({ aspect, title }: IChartProps) => {
  return (
    <Styled.Container>
      <div className="title">{title}</div>
      <ResponsiveContainer width={"100%"} aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke={"gray"} />
          <YAxis stroke={"gray"} />
          <CartesianGrid strokeDasharray="3 3" className={"chartGrid"} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Styled.Container>
  );
};

export default Chart;
