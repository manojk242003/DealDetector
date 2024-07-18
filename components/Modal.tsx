"use client"

import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { FormEvent, Fragment, useState } from 'react'

const Modal = () => {
    let [isOpen, setIsOpen] = useState(false)
    const [isSubmitting,setIsSubmitting] = useState(false)
    const [email,setEmail] = useState("")

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => setIsOpen(false)

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true)

        // add user email to product


        setIsSubmitting(false)
        setEmail('')
        closeModal()    
    }

    return (
        <>
            <button type='button' className='btn' onClick={openModal}>
                Track
            </button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' onClose={closeModal} className="fixed inset-0 z-10 overflow-y-auto">
                    <div className='flex items-center justify-center min-h-screen px-4 text-center'>
                        <Transition.Child
                            as='div'
                            enter='ease-out duration-300'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <div className='fixed inset-0 bg-black opacity-30'></div>
                        </Transition.Child>
                        <span className='inline-block h-screen align-middle' aria-hidden="true">&#8203;</span>
                        <Transition.Child
                            as='div'
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                                <div className='flex flex-col'>
                                    <div className='flex justify-between'>
                                        <div className='p-3 border border-gray-200 rounded-10'>
                                            <Image
                                                src="/assets/icons/logo.svg"
                                                alt='logo'
                                                width={20}
                                                height={20}
                                            />
                                        </div>

                                        <Image
                                            src="/assets/icons/x-close.svg"
                                            alt='close'
                                            width={24}
                                            height={24}
                                            className='cursor-pointer'
                                            onClick={closeModal}
                                        />
                                    </div>

                                    <h4 className='dialog-head_text'>
                                        Stay Updated with product pricing alerts right in your inbox!
                                    </h4>
                                    <p className='text-sm text-gray-500 mt-2'>
                                        Never miss a bargain with our timely alerts!
                                    </p>
                                </div>
                                <form className='flex flex-col mt-5' onSubmit={handleSubmit}>
                                    <label htmlFor='email' className='text-sm font-medium text-gray-700'>
                                        Email address
                                    </label>
                                    <div className='dialog-input_container'>
                                        <Image
                                            src="/assets/icons/mail.svg"
                                            alt='mail'
                                            width={15}
                                            height={15}
                                        />
                                        <input
                                            required
                                            type='email'
                                            id='email'
                                            value={email}
                                            onChange={(e)=> setEmail(e.target.value)}
                                            placeholder='Enter your email address'
                                            className='dialog-input'
                                        />
                                    </div>

                                    <button
                                        type='submit'
                                        className='dialog-btn'
                                        >{isSubmitting ? 'Submitting..' : 'Track'}</button>

                                </form>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal
