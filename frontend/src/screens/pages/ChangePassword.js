import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const ChangePassword = () => {
    
    const {t} = useTranslation()

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(login(email, password));
    }

    return (
        <div x-data="lw" class="flex h-full justify-evenly items-center">
            <div
                class="flex flex-col w-1/2 overflow-hidden bg-white rounded-md shadow-lg max "
            >
                <div class="flex-1 p-5 bg-white">
                <form action="#" class="flex flex-col space-y-5">
                    <div class="flex flex-row space-y-1 items-end">
                        <div className='flex flex-1 flex-col p-1'>
                            <label for="emailAddress" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Email.1')}:*</label>
                            <input
                                type="email"
                                id="emailAddress"
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                            />
                        </div>
                    </div>
                    <div class="flex flex-row space-y-1 items-end">
                        <div className='flex flex-1 flex-col p-1'>
                            <label for="password" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Password.1')}:*</label>
                            <input
                                type="text"
                                id="password"
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                            />
                        </div>
                    </div>
                    <div class="flex flex-row space-y-1 items-end">
                        <div className='flex flex-1 flex-col p-1'>
                            <label for="confirmPassword" class="text-sm font-semibold text-gray-500 flex flex-start">{t('Confirm Password.1')}:*</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-cyan-200"
                            />
                        </div>
                    </div>
                    <div>
                    <button
                        onClick={submitHandler}
                        type="submit"
                        class="px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-500 rounded-md shadow hover:bg-cyan-600 focus:outline-none focus:ring-cyan-200 focus:ring-4"
                    >
                        {t('Change Password.1')}
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword