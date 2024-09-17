'use client';
import React from 'react';
import { TTodos } from '@/models/todo.model';
import { Button, Modal } from 'flowbite-react';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  todo: TTodos;
  updatedTodo: (updatedTodo: TTodos) => void;
}

function EditModal({ isOpen, onClose, todo, updatedTodo }: EditModalProps) {
  return (
    <>
      <Modal
        show={isOpen}
        onClose={onClose}
        dismissible
        className="mx-auto md:px-6 lg:w-[40%]"
      >
        <form action="">
          <Modal.Header className="px-6 py-2">Edit Todo</Modal.Header>
          <Modal.Body>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block mb-2 text-base font-poppins font-medium text-gray-900"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="bg-[#0E7490]">Save</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default EditModal;
