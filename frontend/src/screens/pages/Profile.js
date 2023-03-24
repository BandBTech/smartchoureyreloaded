import React, { useEffect, useState } from 'react'
import InitialsAvatar from 'react-initials-avatar';
import 'react-initials-avatar/lib/ReactInitialsAvatar.css';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {
    Link
} from "react-router-dom";

const Profile = () => {

    const [showModal, setShowModal] = useState(false)

    const [startDate, setStartDate] = useState(new Date());
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedCountryValue, setSelectedCountryValue] = useState("");

    const {t} = useTranslation()

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(login(email, password));
    }

    return (
        <div x-data="lw" class="min-h-screen flex flex-col justify-evenly lg:flex-row">
            <div class="w-full max-w-[300px] max-h-[400px] bg-white p-8 rounded-xl text-gray-800 overflow-hidden group border-2 border-gray-200 shadow-md shadow-gray-200/50
                        hover:shadow-2xl hover:shadow-sky-500/50 hover:border-transparent motion-safe:transition-all motion-safe:duration-700">
                <figure class="relative w-40 h-40 m-0 mx-auto rounded-full group-hover:outline group-hover:outline-offset-4 group-hover:outline-sky-500
                    bg-cyan-500 motion-safe:transition-all motion-safe:duration-400"
                        >
                    <InitialsAvatar className="flex w-40 h-40 justify-center items-center text-white text-4xl" name="Ashish Dongol"/>
                </figure>
                <header>
                    <h3 class="font-semibold text-2xl text-center text-gray-400 mt-6 group-hover:text-sky-500 relative motion-safe:transition-all motion-safe:duration-700">Ashish Dongol</h3>
                    <p class="text-center text-gray-400 group-hover:text-sky-500 relative motion-safe:transition-all motion-safe:duration-700">ashishDongol32@gmail.com</p>
                    <p class="text-center text-gray-400 group-hover:text-sky-500 relative motion-safe:transition-all motion-safe:duration-700">Registered Date : 2023/01/24</p>
                    <p className="text-center text text-gray-400 group-hover:text-sky-500 relative motion-safe:transition-all motion-safe:duration-700">
                        Our Privacy Policy
                    </p>
                </header>
            </div>
            <div
                class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
            >
                <div class="flex-1 p-5 bg-white">
                <form action="#" class="flex flex-col space-y-5">
                    <div class="flex flex-row space-y-1 items-end">
                        <div className='flex flex-1 flex-col p-1'>
                            <label for="kanji" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Kanji (Family Name).1')}:*</label>
                            <input
                                type="text"
                                id="kanji"
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                            />
                        </div>
                        <div className='flex flex-1 flex-col p-1'>
                            <input
                                type="text"
                                id="kanji"
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                            />
                        </div>
                    </div>
                    <div class="flex flex-row space-y-1 items-end">
                        <div className='flex flex-1 flex-col p-1'>
                            <label for="kana" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Kana (Family Name).1')}:*</label>
                            <input
                                type="text"
                                id="kana"
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                            />
                        </div>
                        <div className='flex flex-1 flex-col p-1'>
                            <input
                                type="text"
                                id="kana"
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                            />
                        </div>
                    </div>
                    <div class="flex flex-row space-y-1 items-end">
                        <div className='flex flex-1 flex-col p-1'>
                            <label for="companyName" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Company Name.1')}:*</label>
                            <input
                                type="text"
                                id="companyName"
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                            />
                        </div>
                        <div className='flex flex-1 flex-col p-1'>
                            <label for="companyAddress" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Company Address.1')}:*</label> 
                            <input
                                type="text"
                                id="companyAddress"
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
                        <div className='flex flex-1 flex-col p-1'>
                            <label for="companyAddress" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Gender.1')}:*</label> 
                            <select
                                value={selectedValue}
                                onChange={event => setSelectedValue(event.target.value)}
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
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
                        <div className='flex flex-1 flex-col p-1'>
                            <label for="emergencyContact" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Emergency Contact.1')}:*</label> 
                            <input
                                type="text"
                                id="emergencyContact"
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                            />
                        </div>
                    </div>
                    <div class="flex flex-row space-y-1 items-end">
                        <div className='flex flex-1 flex-col p-1'>
                            <label for="countryName" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Country Name.1')}:*</label> 
                            <select
                                value={selectedCountryValue}
                                onChange={event => setSelectedCountryValue(event.target.value)}
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="male">Afganistan</option>
                                <option value="female">Albania</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex flex-row space-y-1 items-end">
                        <div className='flex flex-1 flex-col p-1'>
                            <label for="postal" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Postal Code.1')}:*</label>
                            <input
                                type="text"
                                id="postal"
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                            />
                        </div>
                        <div className='flex flex-1 flex-col p-1'>
                            <label for="prefecture" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Prefecture.1')}:*</label> 
                            <input
                                type="text"
                                id="prefecture"
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                            />
                        </div>
                        <div className='flex flex-1 flex-col p-1'>
                            <label for="city" class="text-sm font-semibold text-gray-500 flex flex-start">{t('City.1')}:*</label> 
                            <input
                                type="text"
                                id="city"
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                            />
                        </div>
                    </div>
                    <div class="flex flex-row space-y-1 items-end">
                        <div className='flex flex-1 flex-col p-1'>
                            <label for="streetAddress" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Street Address.1')}:*</label>
                            <input
                                type="text"
                                id="streetAddress"
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <span className="flex items-center space-x-2">
                            <Link to={'/dashboard/changePassword'} className="font-normal text-cyan-400">{t("Change Password?.1")}</Link>
                        </span>
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
                </div>
            </div>
        </div>
    )
}

export default Profile