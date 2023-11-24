import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, SelectItem, Select } from '@nextui-org/react'

const ModalForm = ({ isOpen, onOpenChange, idChart, updateChartModal, variable, zona }) => {
  const [select, setSelect] = useState('1_h')
  const [error, setError] = useState(false)

  const handlerSubmit = (e) => {
    const dataInici = document.getElementById('dataIniciInput').value || new Date().toISOString()
    const dataFinal = document.getElementById('dataFinalInput').value || new Date().toISOString()
    const url = import.meta.env.VITE_API_URL + `/getData/${variable}/${dataInici}/${dataFinal}/${select}/${zona}`

    if (dataInici == dataFinal && select) {
      alert('Data introduida incorrecte')
    } else {
      fetch(url).then(res => res.json())
        .then(res => {
          updateChartModal(idChart, res, select)
        })
        .catch(err => setError(err))
    }
  }

  const handleSelectionChange = (e) => {
    setSelect(e.target.value)
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        classNames={{
          backdrop: 'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20'
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{'Tria les dates d\'inici i final'}</ModalHeader>
              <ModalBody>
                <form onSubmit={handlerSubmit}>
                  <Input
                    autoFocus
                    label="Data inici"
                    type='datetime-local'
                    placeholder="Data inici"
                    variant="bordered"
                    id='dataIniciInput'
                    className=''
                    min='2023-10-31T00:00Z'
                    required
                  />
                  <Input
                    label="Data final"
                    type='datetime-local'
                    placeholder="Data final"
                    variant="bordered"
                    id='dataFinalInput'
                    className='mt-2'
                    min='2023-10-31T00:00Z'
                    required
                  />
                  <Select
                    isRequired
                    label="Interval"
                    placeholder="Selecciona un interval"
                    defaultSelectedKeys={[select]}
                    className="w-full mt-2"
                    id='selectInput'
                    onChange={handleSelectionChange}
                  >
                    <SelectItem key='5_min' value='5_min' >5 minuts</SelectItem>
                    <SelectItem key='1_min' value='1_min' >1 minut</SelectItem>
                    <SelectItem key='10_min' value='10_min' >10 minuts</SelectItem>
                    <SelectItem key='30_min' value='30_min' >30 minuts</SelectItem>
                    <SelectItem key='1_h' value='1_h' >1 hora</SelectItem>
                    <SelectItem key='1_day' value='1_day' >1 dia</SelectItem>
                    <SelectItem key='1_month' value='1_month' >1 mes</SelectItem>
                  </Select>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type='submit' onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalForm
