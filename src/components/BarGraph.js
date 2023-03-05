import React from 'react'
import { VictoryCandlestick, VictoryChart, VictoryAxis, VictoryLabel, VictoryTheme, VictoryStack } from 'victory';


const BarGraph = ({data}) => {
  

  const lowData = data.length !== 0 ? data.days.reduce((acc, day) => {
    acc.push({high: day.tempmin, date: day.datetime.slice(6, 10).replace('-', '/')})
    return acc
  }, []) : null
   
  const highData = data.length !== 0 ? data.days.reduce((acc, day) => {
    acc.push({high: day.tempmax, date: day.datetime.slice(6, 10).replace('-', '/')})
    
    return acc
  }, []) : null

  const lowDataCandle = data.length !== 0 ? data.days.reduce((acc, day) => {
    acc.push({x: day.datetime.slice(6, 10).replace('-', '/'), open: day.temp, close: day.tempmin, high: day.temp, low: day.tempmin})
    return acc
  }, []) : null
   
  const highDataCandle = data.length !== 0 ? data.days.reduce((acc, day) => {
    acc.push({x: day.datetime.slice(6, 10).replace('-', '/'), open: day.temp, close: day.tempmax, high: day.tempmax, low: day.temp})
    
    return acc
  }, []) : null
  console.log(highData)

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
        
        <VictoryCandlestick
          // candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          data={highDataCandle}
          style={{
            data: {
              fill: 'orange'
            }
          }}
          />
          <VictoryCandlestick
          // candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          data={lowDataCandle}
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