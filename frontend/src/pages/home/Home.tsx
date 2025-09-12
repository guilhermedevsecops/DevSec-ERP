import React from "react";
import {
  CartesianGrid,
  Cell,
  Label,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import dayjs, { Dayjs } from "dayjs";

import style from './Home.module.css';

import CustomCalendar from "../../components/custom/calendar/CustomCalendar";

//Calendario

//CustomActiveShapePieCHART
const total = 512;
const usado = 140;
const livre = total - usado;
const dataPie = [
  { name: "Usado", value: usado },
  { name: "Livre", value: livre },
];

const COLORS = ["#FF8042", "#E0E0E0"];

//Efetuar  Importação dos dados que vem do backend - LINECHART
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Home = () => {
  return (
    <div className={style.divContainer} style={{ background: "white", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "60rem",
            height: "20rem",
            border: "solid black 2px",
            marginLeft: "4rem",
          }}
        >
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div
          style={{
            width: "20rem",
            height: "20rem",
            border: "solid black 2px",
            marginLeft: "2rem",
          }}
        >
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={dataPie}
                cx="50%"
                cy="50%"
                innerRadius={80} // Faz o "buraco" no meio (donut)
                outerRadius={120} // Tamanho externo
                paddingAngle={5}
                dataKey="value"
              >
                {dataPie.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  value={`${usado} / ${total} GB`}
                  position="center"
                  fontSize={18}
                  fill="#333"
                />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <div style={{ border: "solid 2px black", width: "22rem", marginLeft:"4rem", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
          <CustomCalendar label="Calendário" />
        </div>
      </div>
    </div>
  );
};

export default Home;
