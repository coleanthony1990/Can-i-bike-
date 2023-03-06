import React from "react";
import {
  VictoryCandlestick,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryTheme,
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
      <div className="legend">
        <p className="high">high</p>
        <p className="low">low</p>
      </div>
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryAxis tickLabelComponent={<VictoryLabel angle={45} />} />
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
            },
          }}
          animate={{
            duration: 1000,
            onLoad: { duration: 1000 },
          }}
        />
        <VictoryCandlestick
          // candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          data={lowDataCandle}
          style={{
            data: {
              fill: "lightblue",
            },
          }}
          animate={{
            duration: 1000,
            onLoad: { duration: 1000 },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default BarGraph;
