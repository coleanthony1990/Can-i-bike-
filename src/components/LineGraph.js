import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryLabel,
  VictoryTheme,
  VictoryLegend
} from "victory";

const LineGraph = ({ data }) => {

  const tempData =
    data.length !== 0
      ? data.days[0].hours.slice(4, 21).reduce((acc, hour) => {
          acc.push({
            x: Number(hour.datetime.slice(0, 2)),
            y: Math.round(hour.temp),
          });
          return acc;
        }, [])
      : null;

  const feelsLikeData = data.length !== 0
  ? data.days[0].hours.slice(4, 21).reduce((acc, hour) => {
      acc.push({
        x: Number(hour.datetime.slice(0, 2)),
        y: Math.round(hour.feelslike),
      });
      return acc;
    }, [])
  : null;
  
  return (
    <div className='todayHigh'>
        
        {data.length !== 0 && <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 1, y: 20 }}
        animate={{
          duration: 2000,
          onLoad: { duration: 200 }
        }}
        
      >
        <VictoryLabel
        x={180}
        y={5}
        textAnchor="middle"
        text="Temperature Today"
      />
       <VictoryLegend x={100} y={20}
    orientation="horizontal"
    gutter={20}
    style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
    data={[
      { name: "Actual", symbol: { fill: "#2f8732"} },
      { name: "Feels Like", symbol: { fill: "#812f87" } }
    ]}
  />
        <VictoryAxis
          dependentAxis
          // tickFormat={(y) => `${y}\u00B0F`}
         
        />
        <VictoryAxis
          tickValues={[4, 8, 12, 16, 20]}
          tickFormat={["4 A.M", "8 A.M", "Noon", "4 P.M", "8 P.M."]}
          style={{
            grid: { strokeWidth: 0.0 },
          }}
        />
        
          <VictoryLine
            data={tempData}
            // animate={{
            //   duration: 2000,
            //   onLoad: { duration: 1000 },
            // }}
            style={{
              data: { stroke: "#2f8732" },
              
            }}
          />
          <VictoryLine data={feelsLikeData}
          style={{
            data: { stroke: "#812f87" },
            
          }}
          
          />
          
      </VictoryChart>}
    </div>
  );
};

export default LineGraph;
