import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel, VictoryTheme, VictoryStack } from 'victory';


const BarGraph = ({data}) => {

  const lowData = data.length !== 0 ? data.days.reduce((acc, day) => {
    acc.push({high: day.tempmin, date: day.datetime.slice(6, 10).replace('-', '/')})
    return acc
  }, []) : null
   
  const highData = data.length !== 0 ? data.days.reduce((acc, day) => {
    acc.push({high: day.tempmax, date: day.datetime.slice(6, 10).replace('-', '/')})
    return acc
  }, []) : null

  return (
    <div>
       <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={20}
      >
      <VictoryAxis
        
        tickLabelComponent={<VictoryLabel angle={45}/>}
         
        />
      <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`${x}\u00B0F`)}
        />
        
      <VictoryBar
        data={highData}
        x="date"
        y="high"
        style={{
          data: {
            fill: 'orange'
          }
        }}
        />
        <VictoryBar
        data={lowData}
        x="date"
        y="high"
        style={{
          data: {
            fill: 'lightblue'
          }
        }}
        />
      
      </VictoryChart>
    </div>
  )
}

export default BarGraph