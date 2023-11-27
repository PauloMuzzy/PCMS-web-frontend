'use client'

import { PROFESSION_OPTIONS } from '@/utils/constants/ProfessionOptions/ProfessionOptions'
import {
  Button,
  CircularProgress,
  Input,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow
} from '@nextui-org/react'
import { useState } from 'react'

type SearchProfessionProps = {
  openModal: boolean
  setModalOpen: (openModal: boolean) => void
  setOnChange: (...event: any[]) => void
}

export default function SearchProfession({
  openModal,
  setModalOpen,
  setOnChange
}: SearchProfessionProps) {
  const [partialProfession, setPartialProfession] = useState<string>('')
  const [professionList, setProfessionList] = useState<
    { value: string; label: string }[] | null
  >(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function getProfessions() {
    setIsLoading(true)
    const list: { value: string; label: string }[] = []
    if (partialProfession.length % 3) {
      PROFESSION_OPTIONS.filter((item, index) => {
        if (item.label.toLocaleLowerCase().includes(partialProfession)) {
          list.push(item)
        }
        if (index === partialProfession.length) setIsLoading(false)
      })
      return setProfessionList(list)
    }
    setProfessionList(null)
    setIsLoading(false)
  }

  function renderList() {
    if (isLoading) return <CircularProgress aria-label="Loading..." />
    if (professionList?.length) {
      return professionList.map((item, index) => {
        return (
          <Listbox aria-label="Actions" key={index}>
            <ListboxItem
              key={index}
              onClick={() => {
                setOnChange(item.label)
                setModalOpen(false)
                setProfessionList(null)
              }}
            >
              {item.label}
            </ListboxItem>
          </Listbox>
        )
      })
    }
    return <span>Nenhuma profissão encontrada!</span>
  }

  return (
    <div>
      <Modal isOpen={openModal}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Selecionar Profissão
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-row gap-4">
              <Input
                type="text"
                fullWidth
                onChange={(e) => setPartialProfession(e.target.value)}
                size="sm"
              />
              <Button
                className="w-8"
                size="lg"
                onClick={() => getProfessions()}
              >
                Buscar
              </Button>
            </div>
            <ScrollShadow className="w-full max-h-[400px]">
              {renderList()}
            </ScrollShadow>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              variant="light"
              onClick={() => {
                setModalOpen(false)
                setProfessionList(null)
              }}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
