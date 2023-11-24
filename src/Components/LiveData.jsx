import React, { useEffect, useState } from 'react'
import { Card, CardBody, CircularProgress } from '@nextui-org/react'

const LiveData = ({ className, config, title }) => {
  const [loading, setLoading] = useState(true)
  const [trigger, setTrigger] = useState(false)
  const [value, setValue] = useState(0.0)

  useEffect(() => {
    fetch(config.url)
      .then(res => res.json())
      .then(res => {
        setValue(res[0].data)
        setLoading(false)
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
    <Card className={ className } id='liveDataa'>
      <CardBody className='flex flex-grow w-full justify-center items-center'>

        { !loading
          ? <CircularProgress
          label={title}
          size='lg'
          value={config.variable === 'pressio' ? value.toFixed(0) : value.toFixed(1)}
          color='primary'
          classNames={{
            svg: 'w-36 h-36 drop-shadow-md',
            value: 'text-3xl font-semibold text-white'
          }}
          strokeWidth={4}
          formatOptions={config.unit ? { style: 'unit', unit: `${config.unit}` } : {}}
          showValueLabel={true}
          maxValue={config.maxValue}
          minValue={config.minValue}
          className='flex w-full justify-center'
          aria-label='Valors en directe'
          />
          : <CircularProgress classNames={{
            svg: 'w-32 h-32 drop-shadow-md',
            value: 'text-xl font-semibold text-white'
          }}
            className='overflow-hidden'
            aria-label='Loading...'
          />
      }
      </CardBody>
    </Card>
  )
}

export default LiveData
