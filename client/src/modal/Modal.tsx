import React, { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import { useDispatch } from 'react-redux';
// import { clearError } from '../redux/features/UserAuthSlice';

interface ModalProps {
  children: ReactNode;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  signUp: boolean;
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  productEdit: boolean;
  setProductEdit: React.Dispatch<React.SetStateAction<boolean>>;
  order: any; // Define the type for the 'order' prop as needed
}

const Modal: React.FC <ModalProps> = ({
  children,
  openModal,
  setOpenModal,
  signUp,
  setSignUp,
  productEdit,
  setProductEdit,
  order,
}) => {
  // const dispatch = useDispatch();

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={() => setOpenModal(false)}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg p-4">
                {React.cloneElement(children, {
                  setOpenModal,
                  signUp,
                  setSignUp,
                  productEdit,
                  setProductEdit,
                  order,
                })}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
