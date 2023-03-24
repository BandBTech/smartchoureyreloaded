import React from 'react'
import * as antIcon from "react-icons/ai";
import { useTranslation } from 'react-i18next'

function Detail() {
    
    const {t} = useTranslation()

    return(
        <div className="shadow-lg rounded m-4 sm:flex p-4">
            <div className='flex flex-col w-full'>
                <div className='flex justify-start'>
                    <h1 className='p-2 font-extrabold text-xl'>{t('Site Detail.1')}</h1>
                </div>
                <div className='p-2 flex justify-evenly'>
                    <div className='flex-1 p-1'>
                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-evenly">
                                <div class="p-10 bg-gray-200 rounded-md"></div>
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400">SITE NAME</span>
                                    <span class="text-lg font-semibold">Test Site</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 p-1'>
                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-evenly">
                                <div class="p-10 bg-gray-200 rounded-md"></div>
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400">TODAY'S DATE</span>
                                    <span class="text-lg font-semibold">2/3/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 p-1'>
                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-evenly">
                                <div class="p-10 bg-gray-200 rounded-md"></div>
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400">SITE TIME PERIOD</span>
                                    <span class="text-lg font-semibold">2020/04/21 - 2022/12/31</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 p-1'>
                        <div class="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                            <div class="flex items-start justify-evenly">
                                <div class="p-10 bg-gray-200 rounded-md"></div>
                                <div class="flex flex-col space-y-2">
                                    <span class="text-gray-400">BROWSE TIME</span>
                                    <span class="text-lg font-semibold">00:01 - 23:59</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Safety(){
    return(
        <div className="shadow-lg rounded m-4 sm:flex p-4">
            <div className='flex flex-col w-full'>
                <div className='flex justify-start'>
                    <h1 className='p-2 font-extrabold text-xl'>Declaration of safety</h1>
                </div>
                <div className='p-2 flex flex-col justify-start'>
                    <div className='flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-200'>
                        <span class="ml-4 text-sm">I've reviewed today's safety tips.</span>
                    </div>
                    <div className='flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-200'>
                        <span class="ml-4 text-sm">I follow safety procedures.</span>
                    </div>
                    <div className='flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-200'>
                        <span class="ml-4 text-sm">Anything impeding progress should be removed.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Card (){
    return (
        <div className='flex justify-evenly'>
            <div class="flex items-center justify-center">
                <div class="my-10 w-72 p-5 rounded-md shadow-xl">
                    <img src="https://miro.medium.com/max/1200/1*qGqMY0LcqT1xgdz0z9r8EA.png" alt="BAYC Ape"/>
                    <div className='flex justify-between'>
                        <h2 class="text-md font-bold mt-3">Comment from Director</h2>
                        <div className='flex justify-center text-xl items-center mt-3'>
                            <antIcon.AiOutlineEdit/>
                            <antIcon.AiOutlineInfoCircle/>
                        </div>
                    </div>
                    <p class="flex justify-start text-gray-400 text-sm mb-2">Be sure to check the video.</p>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <div class="my-10 w-72 p-5 rounded-md shadow-xl">
                    <img src="https://miro.medium.com/max/1200/1*qGqMY0LcqT1xgdz0z9r8EA.png" alt="BAYC Ape"/>
                    <div className='flex justify-between'>
                        <h2 class="text-md font-bold mt-3">Today's event schedule</h2>
                        <div className='flex justify-center text-xl items-center mt-3'>
                            <antIcon.AiOutlineEdit/>
                            <antIcon.AiOutlineInfoCircle/>
                        </div>
                    </div>
                    <p class="flex justify-start text-gray-400 text-sm mb-2">13:30 ～ Site patrol 15:00 ～ General cleaning.</p>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <div class="my-10 w-72 p-5 rounded-md shadow-xl">
                    <img src="https://miro.medium.com/max/1200/1*qGqMY0LcqT1xgdz0z9r8EA.png" alt="BAYC Ape"/>
                    <div className='flex justify-between'>
                        <h2 class="text-md font-bold mt-3">upload test</h2>
                        <div className='flex justify-center text-xl items-center mt-3'>
                            <antIcon.AiOutlineEdit/>
                            <antIcon.AiOutlineInfoCircle/>
                        </div>
                    </div>
                    <p class="flex justify-start text-gray-400 text-sm mb-2">Images, videos, and PDFs have been uploaded. Please check the contents before proceeding.</p>
                </div>
            </div>
        </div>
        
    )
}

const UserBoard = () => {

    const {t} = useTranslation()

    return (
        <>
            <Detail />
            <Safety />
            <Card />
        </>
    )
}

export default UserBoard