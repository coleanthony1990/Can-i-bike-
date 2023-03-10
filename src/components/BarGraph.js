import React from "react";
import {
  VictoryCandlestick,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryTheme,
  VictoryVoronoiContainer
} from "victory";

const BarGraph = ({ data }) => {

  
  const lowDataCandle =
    data.length !== 0
      ? data.days.reduce((acc, day) => {
          acc.push({
            x: day.datetime.slice(6, 10).replace("-", "/"),
            open: day.temp,
            close: day.tempmin,
            high: day.temp,
            low: day.tempmin,
          });
          return acc;
        }, [])
      : null;

  const highDataCandle =
    data.length !== 0
      ? data.days.reduce((acc, day) => {
          acc.push({
            x: day.datetime.slice(6, 10).replace("-", "/"),
            open: day.temp,
            close: day.tempmax,
            high: day.tempmax,
            low: day.temp,
          });

          return acc;
        }, [])
      : null;

  return (
    <div>
     {data.length !== 0 &&  <p>Next 15 days</p>}
     {data.length !== 0 && <div className="legend">
        <p className="high">high</p>
        <p className="low">low</p>
      </div>}
      {data.length !== 0 && <VictoryChart theme={VictoryTheme.material} domainPadding={20} containerComponent={
        <VictoryVoronoiContainer
          style={{}}
          labels={({ datum }) =>
            datum.y > 0 ? ` high of ${datum.y} ` : null
          }
        />
      }>
        <VictoryAxis tickLabelComponent={<VictoryLabel angle={55} domainPadding={10}/>} style={{
            grid: {strokeWidth: 0.0 },
          }}/>
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `${x}\u00B0F`}
          
        />

        <VictoryCandlestick
          // candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          data={highDataCandle}
          style={{
            data: {
              fill: "orange",
              strokeWidth: '0'
            },
            
          }}
          animate={{
            duration: 1000,
            onLoad: { duration: 500 },
          }}
        />
        <VictoryCandlestick
          // candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          data={lowDataCandle}
          style={{
            data: {
              fill: "lightblue",
              strokeWidth: '0'
            },
          }}
          animate={{
            duration: 1000,
            onLoad: { duration: 500 },
          }}
        />
      </VictoryChart>}
    </div>
  );
};

export default BarGraph;
