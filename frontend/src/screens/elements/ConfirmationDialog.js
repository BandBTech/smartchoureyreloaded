import React from 'react'

const ConfirmationDialog = ({deleteFunction}) => {
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-5/6 my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <div class="md:flex items-center">
                                <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                                <p class="font-bold">Delete your account</p>
                                <p class="text-sm text-gray-700 mt-1">You will lose all of your data by deleting your account. This action cannot be undone.
                                </p>
                                </div>
                            </div>
                            <div class="text-center md:text-right mt-4 md:flex md:justify-end">
                                <button onClick={deleteFunction} class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">Delete
                                    Account</button>
                                <button onClick={deleteFunction} class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
                                md:mt-0 md:order-1">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default ConfirmationDialog