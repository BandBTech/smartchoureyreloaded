import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {
    Link
} from "react-router-dom";
import QRCode from 'react-qr-code'
import * as bsIcon from "react-icons/bs";

const SiteDetail = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedCountryValue, setSelectedCountryValue] = useState("");

    const {t} = useTranslation()

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(login(email, password));
    }

    return (
        <div x-data="lw" class="flex flex-col justify-evenly">
            <div
                class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max "
            >
                <div class="flex-1 p-5 bg-white">
                    <div className='flex justify-between'>
                        <h2 className='flex ml-1 text-lg'>
                        {t('Site Detail.1')}
                        </h2>
                        <bsIcon.BsPrinter />
                    </div>
                    
                    <div className='flex flex-row'>
                        <form action="#" class="flex flex-col space-y-5">
                            <div class="flex flex-row space-y-1 items-end">
                                <div className='flex flex-1 flex-col p-1'>
                                    <label for="siteName" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Site Name.1')}:*</label>
                                    <input
                                        type="text"
                                        id="siteName"
                                        autofocus
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-row space-y-1 items-end">
                                <div class="flex flex-1 flex-col p-1">
                                    <div class="flex items-center justify-between">
                                        <label for="dateOfBirth" class="text-sm font-semibold text-gray-500">{t('Date Of Birth.1')}</label>
                                    </div>
                                    <DatePicker className='border flex-1 border-gray-300 rounded px-4 py-2 w-full' id="dateOfBirth" selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                                <div class="flex flex-1 flex-col p-1">
                                    <div class="flex items-center justify-between">
                                        <label for="dateOfBirth" class="text-sm font-semibold text-gray-500">{t('Date Of Birth.1')}</label>
                                    </div>
                                    <DatePicker className='border flex-1 border-gray-300 rounded px-4 py-2 w-full' id="dateOfBirth" selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                            <div class="flex flex-row space-y-1 items-end">
                                <div className='flex flex-1 flex-col p-1'>
                                    <label for="phoneNo" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Phone / Mobile No.1')}:*</label>
                                    <input
                                        type="text"
                                        id="phoneNo"
                                        autofocus
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                                    />
                                </div>
                                <div className='flex flex-1 flex-row p-1'>
                                    <div className='flex flex-1 flex-col p-1'>
                                        <label for="emergencyContact" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Browse Time From.1')}:*</label> 
                                        <input
                                            type="text"
                                            id="emergencyContact"
                                            autofocus
                                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                                        />
                                    </div>
                                    <div className='flex flex-1 flex-col p-1'>
                                        <label for="emergencyContact" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Browse Time To.1')}:*</label> 
                                        <input
                                            type="text"
                                            id="emergencyContact"
                                            autofocus
                                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="flex flex-row space-y-1 items-end">
                                <div className='flex flex-1 flex-col p-1'>
                                    <label for="postal" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Longitude.1')}:*</label>
                                    <input
                                        type="text"
                                        id="postal"
                                        autofocus
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                                    />
                                </div>
                                <div className='flex flex-1 flex-col p-1'>
                                    <label for="prefecture" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Latitude.1')}:*</label> 
                                    <input
                                        type="text"
                                        id="prefecture"
                                        autofocus
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                                    />
                                </div>
                            </div>
                            <div>
                            <button
                                onClick={submitHandler}
                                type="submit"
                                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-500 rounded-md shadow hover:bg-cyan-600 focus:outline-none focus:ring-cyan-200 focus:ring-4"
                            >
                                {t('Update Profile.1')}
                            </button>
                            </div>
                        </form>
                        <div class="flex flex-col space-y-5 ml-8">
                            <div class="flex flex-row space-y-1 items-end">
                                <div className='flex flex-1 flex-col p-1'>
                                    <label for="postal" class="text-sm font-semibold text-gray-500 flex flex-start">{t('QR Value.1')}:*</label>
                                    <QRCode
                                        size={200}
                                        bgColor="white"
                                        fgColor='black'
                                        value="youtube.com"
                                    />
                                </div>
                                {/* <div className='flex flex-1 flex-col p-1'>
                                    <bsIcon.BsMenuButtonWideFill />
                                </div> */}
                            </div>
                            <div class="flex flex-row space-y-1 items-end">
                                <div className='flex flex-1 flex-col p-1'>
                                    <input
                                        type="text"
                                        id="postal"
                                        autofocus
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-row space-y-1 items-end">
                                <div className='flex flex-1 flex-col p-1'>
                                <button
                                    onClick={submitHandler}
                                    type="submit"
                                    class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-500 rounded-md shadow hover:bg-cyan-600 focus:outline-none focus:ring-cyan-200 focus:ring-4"
                                >
                                    {t('Generate.1')}
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiteDetail