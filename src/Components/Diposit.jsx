import React, { useEffect, useState } from 'react'
import { Card, CardBody } from '@nextui-org/react'
import LiquidFillGauge from 'react-liquid-gauge'

const Diposit = () => {
  const [trigger, setTrigger] = useState(false)
  const [value, setValue] = useState(0)

  useEffect(() => {
    // const gaugeContainer = document.getElementById('gaugeContainer')
    // setRadius(gaugeContainer.clientWidth / 4)
    const url = import.meta.env.VITE_API_FLASK_URL + '/nivellDiposit'
    setValue(80.2)
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setValue(res[0].data)
      })
      .catch(err => err)

    const timer = setInterval(() => {
      setTrigger(!trigger)
    }, 60000)

    return () => {
      clearInterval(timer)
    }
  }, [trigger])

  return (
    <Card className="w-full justify-between overflow-hidden Dashboard">
      <CardBody className='flex flex-grow w-full justify-center items-center'>
        <LiquidFillGauge
          style={{ margin: '0 auto' }}
          width={300}
          height={300}
          value={value}
          percent="%"
          textSize={1}
          textOffsetX={0}
          textOffsetY={28}
          riseAnimation
          waveAnimation
          waveFrequency={1}
          waveAmplitude={5}
          gradient
          textStyle={{
            fill: 'rgb(255,255,255)'
          }}
          waveTextStyle={{
            fill: 'rgb(255,255,255)'
          }}
          />

      </CardBody>

    </Card>
  )
}

export default Diposit
