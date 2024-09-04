'use client';

import React from 'react';
import { Button, Modal } from 'flowbite-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { axiosInstance } from '@/lib/axios';
import { AxiosError } from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddModal({ isOpen, onClose }: AddModalProps) {
  const router = useRouter();
  const initialValues = {
    title: '',
    content: '',
    order: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const { data } = await axiosInstance().post('/todos', values);
        alert(data.message);
        formik.resetForm();
        router.refresh();
        onClose();
      } catch (error) {
        if (error instanceof AxiosError) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response?.data.message,
          });
        } else if (error instanceof Error) {
          console.log(error);
        }
      }
    },
  });
  return (
    <>
      <Modal
        show={isOpen}
        onClose={onClose}
        dismissible
        className="mx-auto md:px-6 lg:w-[40%]"
      >
        <form onSubmit={formik.handleSubmit}>
          <Modal.Header className="px-6 py-2">Terms of Service</Modal.Header>
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
                  id="title"
                  className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  {...formik.getFieldProps('title')}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="order"
                  className="block mb-2 text-base font-poppins font-medium text-gray-900"
                >
                  Order
                </label>
                <select
                  id="order"
                  className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  {...formik.getFieldProps('order')}
                >
                  <option value="low" className="font-poppins">
                    Low
                  </option>
                  <option value="medium" className="font-poppins">
                    Medium
                  </option>
                  <option value="high" className="font-poppins">
                    High
                  </option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="content"
                  className="block mb-2 text-base font-poppins font-medium text-gray-900"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-400 focus:ring-primary-500 focus:border-primary-500"
                  {...formik.getFieldProps('content')}
                ></textarea>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="bg-[#0e7490]" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default AddModal;
