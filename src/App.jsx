import React from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import { Navbar, NavbarContent, NavbarItem, Tab, Tabs } from '@nextui-org/react'
import LiveDataDashboard from './Components/LiveDataDashboard'
import Diposit from './Components/Diposit'
import PinsControl from './Components/PinsControl'

function App () {
  const navigate = useNavigate()

  const navigateTab = (key) => {
    if (key === 'dashboard') {
      navigate('/')
    } else {
      navigate(`/${key}`)
    }
  }

  return (
    <body className='dark'>
      <Navbar className='w-full h-10 justify-center items-center flex bg-zinc-700'>
        <NavbarContent className='flex flex-center !justify-center w-full' id='wtf'>
          <NavbarItem>
            <h2 className='text-white font-bold'>Domòtica Raspberry</h2>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <main className="w-full overflow-hidden text-foreground bg-background p-2 md:flex flex-row justify-around">
        <div className="rounded-xl md:ml-1 md:mr-2 w-full md:w-[8rem]">
          <Tabs aria-label='options' className='w-full' id='tabNavBar' onSelectionChange={navigateTab}>
            <Tab key="dashboard" className='' title="Dasboard"></Tab>
            <Tab key='liveData' className='md:mt-6 ' title='Live' ></Tab>
            <Tab key='diposit' className='md:mt-6 ' title='Dipòsit' ></Tab>
            <Tab key='pins' className='md:mt-6 ' title='Control Pins' ></Tab>
          </Tabs>
        </div>
        <Routes>
          <Route path="/" element={ <Dashboard />} />
          <Route path='/liveData' element={<LiveDataDashboard />} />
          <Route path='/diposit' element={ <Diposit /> } />
          <Route path='/pins' element={ <PinsControl /> } />
        </Routes>

      </main>
    </body>
  )
}

export default App
