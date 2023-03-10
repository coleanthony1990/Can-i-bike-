import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryLabel,
  VictoryTheme,
} from "victory";

const Line = ({ data }) => {
  console.log(data);
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
      console.log(wind)

  return (
    <div>
      {data.length !== 0 && <p>Windspeed for the next 2 weeks</p>}
      {data.length !== 0 && <VictoryChart theme={VictoryTheme.material} domainPadding={0}>
        <VictoryAxis dependentAxis />
        <VictoryAxis tickLabelComponent={<VictoryLabel angle={45}/>} style={{
            grid: {strokeWidth: 0.0 },
            
          }}
          />
        <VictoryLine data={wind} 
          animate={{
            duration: 1000,
            onLoad: { duration: 1000 },
          }} 
          />
      </VictoryChart>}
    </div>
  );
};

export default Line;
