import React from "react";
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryLabel,
  VictoryTheme,
} from "victory";

const WindGraph = ({ data }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const todayDate = data.length !== 0 ? new Date(data.days[0].datetime) : null;
  const today =
    data.length !== 0
      ? todayDate.toLocaleDateString("en-US", options)
      : "Loading";

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
    <div>
      <p className="wind">Wind on {today}</p>

      <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 5 }}>
        <VictoryAxis dependentAxis tickFormat={(y) => `${y}mph`} />
        <VictoryAxis
          tickValues={[4, 8, 12, 16, 20]}
          tickFormat={["4 A.M", "8 A.M", "Noon", "4 P.M", "8 P.M."]}
        />

        <VictoryBar
          data={windData}
          x="time"
          y="windSpeed"
          // animate={{
          //   duration: 1000,
          //   onLoad: { duration: 1000 }
          // }}
        />
      </VictoryChart>
    </div>
  );
};

export default WindGraph;