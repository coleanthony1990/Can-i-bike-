import React from "react";
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryLabel,
  VictoryTheme,
} from "victory";

const WindGraph = ({ data }) => {

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

      {data.length !== 0 && <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 5, y: 5 }}>
      <VictoryLabel
        x={180}
        y={5}
        textAnchor="middle"
        text="Wind Today"
      />
        <VictoryAxis dependentAxis tickFormat={(y) => `${y}mph`} />
        <VictoryAxis
          tickValues={[4, 8, 12, 16, 20]}
          tickFormat={["4 A.M", "8 A.M", "Noon", "4 P.M", "8 P.M."]}
          style={{
            grid: { strokeWidth: 0.0 },
          }}
        />

        {data.length !== 0 && <VictoryBar
          data={windData}
          x="time"
          y="windSpeed"
          
        />}
      </VictoryChart>}
    </div>
  );
};

export default WindGraph;
