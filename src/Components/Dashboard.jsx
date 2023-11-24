import { Card, CardBody, CardHeader } from '@nextui-org/react'
import ChartComponent from './ChartComponent'
import React from 'react'

const Dashboard = () => {
  const configChart = {
    temperatura: {
      label: 'Temperatura',
      rang: 10
    },
    humitat: {
      label: 'Humitat',
      rang: 10
    },
    pressio: {
      label: 'Pressió',
      simbolAuxiliar: '(Pa)',
      rang: 100
    }
  }

  return (
    <Card className="w-full justify-between overflow-hidden Dashboard">
      <CardBody className='flex flex-row pt-4 flex-wrap'>
          <Card isFooterBlurred radius="lg" className="bg-zinc-700/60 w-full sm:min-h-[49%]">
            <CardHeader className='mb-4'>
              <h3>Estació Exterior</h3>
            </CardHeader>
            <CardBody className='flex flex-wrap content-start flex-row relative bottom-3 justify-around p-2'>
              {
              // Amb el component de ChartComponent el reutilitzem i li passem les props per a què agafi la seva
              // lògica i faci la trucada a l'api de la variable que es necessita
              }
               <ChartComponent
                className='m-1 max-w-[100%] w-full h-[350px]'
                id='chartTemperaturaExterior'
                variable='temperatura'
                configChart={configChart.temperatura}
                zona='exterior'
              />
               <ChartComponent
                className='m-1 w-full xl:w-[49%] max-w-[100%] h-[350px]'
                id='chartHumitatExterior'
                variable='humitat'
                configChart={configChart.humitat}
                zona='exterior'
              />
              <ChartComponent
                className='m-1 w-full xl:w-[49%] max-w-[100%] h-[350px]'
                id='chartPressioExterior'
                variable='pressio'
                configChart={configChart.pressio}
                zona='exterior'
              />
            </CardBody>
          </Card>
          <Card isFooterBlurred radius="lg" className="bg-zinc-700/60 w-full mt-2 min-h-[49%]">
            <CardHeader className='mb-4'>
              <h3>Estació Interior</h3>
            </CardHeader>
            <CardBody className='flex flex-wrap content-start flex-row relative bottom-3 justify-around p-2'>
              <ChartComponent
                className='m-1 max-w-[100%] w-full h-[350px]'
                id='chartTemperaturaInterior'
                variable='temperatura'
                configChart={configChart.temperatura}
                zona='interior'
              />
              <ChartComponent
                className='m-1 w-full xl:w-[49%] max-w-[100%] h-[350px]'
                id='chartHumitatInterior'
                variable='humitat'
                configChart={configChart.humitat}
                zona='interior'
              />
              <ChartComponent
                className='m-1 w-full xl:w-[49%] max-w-[100%] h-[350px]'
                id='chartPressioInterior'
                variable='pressio'
                configChart={configChart.pressio}
                zona='interior'
              />
            </CardBody>
          </Card>
      </CardBody>

    </Card>
  )
}

export default Dashboard
