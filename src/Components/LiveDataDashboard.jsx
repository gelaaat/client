import React from 'react'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import LiveData from './LiveData'
import { configLiveDataExterior, configLiveDataInterior } from '../configLiveData'

const LiveDataDashboard = () => {
  return (
    <Card className="w-full justify-between overflow-hidden Dashboard">
      <CardBody className='flex flex-row pt-4 flex-wrap content-between'>
        <Card isFooterBlurred radius="lg" className="bg-zinc-700/60 w-full sm:min-h-[49%]">
          <CardHeader className='mb-4'>
            <h3>Estació Exterior</h3>
          </CardHeader>
          <CardBody className='flex flex-wrap flex-row relative bottom-3 content-center justify-around p-2'>
            <LiveData
            className='m-2 flex flex-grow max-md:w-full'
            title='Temperatura'
            config={configLiveDataExterior.temperatura}
            />
            <LiveData
              className='m-2 flex flex-grow'
              title='Humitat'
              config={ configLiveDataExterior.humitat }
            />
            <LiveData
              className='m-2 flex flex-grow'
              title='Pressió Pa'
              config={ configLiveDataExterior.pressio }
              />
          </CardBody>
        </Card>
        <Card isFooterBlurred radius="lg" className="bg-zinc-700/60 w-full sm:min-h-[49%] mt-2">
          <CardHeader className='mb-4'>
            <h3>Estació Interior</h3>
          </CardHeader>
          <CardBody className='flex flex-wrap content-center flex-row relative bottom-3 justify-around p-2'>
           <LiveData
            className='m-2 flex flex-grow max-md:w-full'
            title='Temperatura'
            config={ configLiveDataInterior.temperatura }
            />
            <LiveData
              className='m-2 flex flex-grow'
              title='Humitat'
              config={ configLiveDataInterior.humitat }
            />
            <LiveData
              className='m-2 flex flex-grow'
              title='Pressió Pa'
              config={ configLiveDataInterior.pressio }
              />
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  )
}

export default LiveDataDashboard
