import React, { useState, useEffect } from 'react'
import { Card, CardBody, Switch, CircularProgress } from '@nextui-org/react'

const PinComponent = ({ idPin, emoji, label, className }) => {
  const [selected, setSelected] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Primer hem de mirar l'estat del PIN per poder posicionar el interruptor
    const url = import.meta.env.VITE_API_FLASK_URL + '/estatPin?' + new URLSearchParams({ pinId: idPin })
    fetch(url).then(res => res.json()).then(res => {
      setSelected(res.data)
      setLoading(false)
    }).catch(err => err)
  }, [])

  const handlerChangeButton = (event) => {
    setSelected(event)
    const url = import.meta.env.VITE_API_FLASK_URL + '/controlPin?' + new URLSearchParams({ pinId: idPin, estat: event })
    fetch(url).then(res => res.json()).then(res => setSelected(res.data)).catch(err => err)
  }

  return (
    <Card className={className}>
      <CardBody className='flex flex-row flex-nowrap w-full h-[50px] justify-between items-center overflow-hidden pl-0 pr-0'>
        <div className='text-left align-middle '>
          <img className='inline m-2' src={emoji} alt="" />
          <h4 className='inline'>{label}</h4>
        </div>
        {loading
          ? <CircularProgress />
          : <Switch className='m-2 inline' isSelected={selected} onValueChange={handlerChangeButton}></Switch>
        }
      </CardBody>
    </Card>
  )
}

export default PinComponent
