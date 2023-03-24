import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const CreateSafetyDeclaration = ({createFunction}) => {

    const [enabled, setEnabled] = useState(false)

    const {t} = useTranslation()

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-5/6 my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                        {t("Site Code Registration.1")}
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={createFunction}
                        >
                            <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                            </span>
                        </button>
                        </div>
                        <div className="relative p-6 flex ">
                            <div class="flex md:flex-1 flex-col space-y-1 pl-6 pr-6">
                                <label for="text" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Site Code Information.1')}</label>
                                <input
                                    type="text"
                                    id="text"
                                    autofocus
                                    class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                                />
                            </div>
                            <div class="flex md:flex-0.8 flex-col space-y-1 pl-6 pr-6">
                                <label for="text" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Active.1')}</label>
                                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={enabled}
                                        readOnly
                                    />
                                    <div
                                        onClick={() => {
                                            setEnabled(!enabled);
                                        }}
                                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                                    ></div>
                                    <span className="ml-2 text-sm font-medium text-gray-900">
                                        ON
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="relative p-6 flex ">
                            <div class="flex md:flex-1 flex-col space-y-1 pl-6 pr-6">
                                <label for="message" class="text-sm font-semibold text-gray-500 flex flex-start">Description</label>
                                <textarea id="message" rows="4" class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-200" placeholder="Write your thoughts here..."></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-start p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-white bg-cyan-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-md shadow"
                            type="button"
                            onClick={createFunction}
                        >
                            <p>{t("Register.1")}</p>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default CreateSafetyDeclaration