import React from 'react'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import PinComponent from './PinComponent'
import bulbIcon from '../assets/bulbIcon.svg'
import calefactorIcon from '../assets/calefactorIcon.svg'

const PinsControl = () => {
  // Aquest component és el dashboard de control de pins
  // Reutilitzem el component PinComponent i li passem la seva configuració per props

  return (
    <Card className='w-full justify-between overflow-hidden Dashboard' id='liveDataa'>
      <CardBody className='flex flex-grow justify-start w-full items-start'>
        <Card className='bg-zinc-700/60 w-full md:w-[300px]'>
          <CardHeader>
            Dormitori
          </CardHeader>
          <CardBody className='w-full'>
            <PinComponent className='w-full h-10 mb-2' idPin={17} emoji={bulbIcon} label='Llums dormitori' />
            <PinComponent className='w-full h-10 mb-2' idPin={18} emoji={calefactorIcon} label='Calefactor elèctric' />
          </CardBody>
        </Card>
      </CardBody>

    </Card>
  )
}

export default PinsControl
