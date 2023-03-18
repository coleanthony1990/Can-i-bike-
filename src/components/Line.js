import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryLabel,
  VictoryTheme,
} from "victory";

const Line = ({ data }) => {
  
  const wind =
    data.length !== 0
      ? data.days.reduce((acc, day) => {
          acc.push({
            x: day.datetime.slice(6, 10).replace("-", "/"),
            y: day.windspeed,
          });
          return acc;
        }, [])
      : null;
      

  return (
    <div className="two-line">
      {data.length !== 0 && <VictoryChart theme={VictoryTheme.material} domainPadding={0} animate={{
          duration: 2000,
          onLoad: { duration: 200 }
        }}>
      <VictoryLabel
        x={180}
        y={5}
        textAnchor="middle"
        text="Windspeed for the next 2 weeks"
      />
        <VictoryAxis dependentAxis />
        <VictoryAxis tickLabelComponent={<VictoryLabel angle={45}/>} style={{
            grid: {strokeWidth: 0.0 },
            
          }}
          />
        <VictoryLine data={wind} 
          // animate={{
          //   duration: 1000,
          //   onLoad: { duration: 1000 },
          // }} 
          />
      </VictoryChart>}
    </div>
  );
};

export default Line;
