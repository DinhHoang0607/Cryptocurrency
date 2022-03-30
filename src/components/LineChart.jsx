import React from "react";
// import { Line } from "react-chartjs-2";
import { Chart } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
const { Title } = Typography;

const CryptoChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
  //   const data = {
  //     labels: coinTimestamp,
  //     datasets: [
  //       {
  //         label: "Price In USD",
  //         data: coinPrice,
  //         fill: true,
  //         backgroundColor: "#0071bd",
  //         borderColor: "#0071bd",
  //       },
  //     ],
  //   };
  const pdata = [
    {
      name: "MongoDb",
      student: 11,
      fees: 120,
    },
    {
      name: "Javascript",
      student: 15,
      fees: 12,
    },
    {
      name: "PHP",
      student: 5,
      fees: 10,
    },
    {
      name: "Java",
      student: 10,
      fees: 5,
    },
    {
      name: "C#",
      student: 9,
      fees: 4,
    },
    {
      name: "C++",
      student: 10,
      fees: 8,
    },
  ];
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      {/* <Line data={data} /> */}
      <LineChart data={pdata} margin={{ right: 300 }}>
        <CartesianGrid />
        <XAxis dataKey="name" interval={"preserveStartEnd"} />
        <YAxis></YAxis>
        <Legend />
        <Tooltip />
        <Line dataKey="student" stroke="black" activeDot={{ r: 8 }} />
        <Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} />
      </LineChart>
    </>
  );
};

export default CryptoChart;
