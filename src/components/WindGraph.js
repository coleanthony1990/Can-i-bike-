import React from "react";
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryLabel,
  VictoryTheme,
} from "victory";

const WindGraph = ({ data }) => {

  const sharedAxisStyles = {
    tickLabels: {
      fontSize: 13
    },
    axisLabel: {
      padding: 39,
      fontSize: 13,
      fontStyle: "italic"
    }
  };

  const windData =
    data.length !== 0
      ? data.days[0].hours.slice(5, 20).reduce((acc, hour) => {
          acc.push({
            time: Number(hour.datetime.slice(0, 2)),
            windSpeed: Math.round(hour.windspeed),
          });
          return acc;
        }, [])
      : null;

  return (
    <div className="todayWind">

      {data.length !== 0 && <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 5, y: 5 }} animate={{
          duration: 2000,
          onLoad: { duration: 200 }
        }}>
      <VictoryLabel
        x={180}
        y={5}
        textAnchor="middle"
        text="Wind Today"
      />
        <VictoryAxis dependentAxis 
        // tickFormat={(y) => `${Math.round(y)}mph`}
        
        label="Miles Per Hour"
        style={{
          axisLabel: {padding: 39}
        }}
         />
        <VictoryAxis
          tickValues={[4, 8, 12, 16, 20]}
          tickFormat={["4 A.M", "8 A.M", "Noon", "4 P.M", "8 P.M."]}
          style={{
            grid: { strokeWidth: 0.0 },
          }}
        />

        <VictoryBar
          data={windData}
          x="time"
          y="windSpeed"

          
        />
      </VictoryChart>}
    </div>
  );
};

export default WindGraph;
