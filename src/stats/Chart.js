import React, {Component} from 'react'

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("January", 0),
  createData('February', 0),
  createData('Maret', 0),
  createData('April', 0),
  createData('Mei', 0),
  createData('Juni', 0),
  createData('Juli', 0),
  createData('Agustus', 0),
  createData('September', 0),
];


class Chart extends Component {
  render() {
    return (
      <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="amount" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="time" />
    <YAxis />
  </LineChart>
    );
  }
}

export default Chart;