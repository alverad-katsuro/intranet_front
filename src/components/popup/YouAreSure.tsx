import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

type YouAreSureProps = {
  isOpen: boolean;
  changeIsOpen(isOpen:boolean): void;
  callback(): void;
}

export default function YouAreSure(props: YouAreSureProps) {
  return (
    <>
      <React.Fragment>
        <Modal
          show={props.isOpen}
          size="md"
          popup={true}
          onClose={() => props.changeIsOpen(!props.isOpen)}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Você tem certeza que deseja resetar a senha deste usuario?
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() =>{props.callback(); props.changeIsOpen(!props.isOpen)}}
                >
                  Sim, tenho certeza.
                </Button>
                <Button
                  color="gray"
                  onClick={() => {props.changeIsOpen(!props.isOpen)}}
                >
                  Não, cancelar.
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </>
  )
}