import {  scaleBand, scaleLinear, max, format } from 'd3';
import { useData } from '../../hooks/useData';
import { XAxis } from './XAxis';
import { YAxis } from './YAxis';
import { Bars } from './Bars';
import {  useState } from 'react';
import './Graph.scss'

const width = 1400;
const height = 700;
const margin = { top: 20, right: 0, bottom: 65, left: 220 };
const xAxisLabelOffset = 50;

const Graph = () => {
    const [clicked,setClicked] = useState(false);
  const data = useData(clicked);
  

  if (!data) {
    return <center>
        <pre>Loading...</pre>
    </center>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;


  const yValue = d => d.Country;
  const xValue = d => d.Population;

  const siFormat = format('.2s');
  const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.15);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);



  return (
    <svg width={width} height={height} style={{   fontFamily: "'Poppins', sans-serif"}} onClick={() => setClicked(!clicked)}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <XAxis
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <YAxis yScale={yScale} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          Population {clicked ? '1950' :'2020'}
        </text>
        <Bars
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  );
};

export default Graph;
