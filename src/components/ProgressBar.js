import React from 'react';

import {VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';

const ProgressBar = ({data}) => {
  let percent = data.length !== 0 ? data.days[0].precipprob : null
  
 let chartData = data.length !== 0 ? {
  percent: percent, data: [{ x: 1, y: percent }, { x: 2, y: 100 - percent }]
} : null
console.log(percent)
console.log(chartData)

  
    return (
      <div className='rainChance'>
        {data.length !== 0 && <svg viewBox="40 0 350 400" width="100%" height="100%">
        <VictoryLabel
        x={200}
        y={5}
        textAnchor="middle"
        text="Chance of Rain Today"
      />
          <VictoryPie
            standalone={false}
            // animate={{ duration: 1000, onLoad: 1000 }}
            width={400} height={400}
            data={chartData.data}
            innerRadius={132}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: { fill: ({ datum }) => {
                return datum.x === 1 ? 'black' : "transparent";
              }
              }
            }}
          />
          <VictoryAnimation duration={1000} data={chartData}>
            {(newProps) => {
              // console.log(newProps)
              
              return (
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={200} y={200}
                  text={`${Math.round(percent)}%`}
                  style={{ fontSize: 45 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>}
      </div>
    );
  
}
export default ProgressBar;
