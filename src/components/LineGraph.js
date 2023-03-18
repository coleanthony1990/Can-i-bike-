import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryLabel,
  VictoryTheme,
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
  console.log(tempData);
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
        {data.length !== 0 && (
          <VictoryLine
            data={tempData}
            // animate={{
            //   duration: 2000,
            //   onLoad: { duration: 1000 },
            // }}
          />
        )}
      </VictoryChart>}
    </div>
  );
};

export default LineGraph;
