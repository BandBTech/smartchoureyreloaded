import React, { useState } from 'react'
import GlobalTable from '../elements/GlobalTable'
import { useTranslation } from 'react-i18next'
import CreateSite from './Site/CreateSite'
import {
    useNavigate,
    } from "react-router-dom";

const Dashboard = () => {

    let history = useNavigate();
    const [currentDiv, setCurrentDiv] = useState('site')

    const [showModal, setShowModal] = useState(false)

    const {t} = useTranslation()

    const createFunction = () => {
        if (showModal == true) {
            setShowModal(false)
        } else {
            setShowModal(true)
        }
    }

    const redirectToDetail = () => {
        history('/dashboard/siteDetail')
    }

    const data = React.useMemo(
        () => [
            {
                sNo: '1',
                siteName: 'New Site',
                enable: true,
                setTimePeriod: '2020/06/28 - 2024/12/31'
            },
            {
                sNo: '2',
                siteName: 'Old Site',
                enable: true,
                setTimePeriod: '2020/04/21 - 2022/12/31'
            },
            {
                sNo: '3',
                siteName: 'Current Site',
                enable: false,
                setTimePeriod: '2020/04/21 - 2022/12/10'
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'S.No',
                accessor: 'sNo', 
            },
            {
                Header: 'Site Name',
                accessor: 'siteName',
            },
            {
                Header: 'Enabled',
                accessor: 'enable',
            },
            {
                Header: 'Set Time Period',
                accessor: 'setTimePeriod',
            }
        ],
        []
    )

    return (
        <>
        <div>
            <ul className='flex ml-1.5 mb-1.5'>
                <li className={currentDiv == 'site' ? "current bg-cyan-500 text-white p-2 rounded-l border" : "bg-white text-black p-2 rounded-l border"} id='site'><a className='cursor-pointer' onClick={() => setCurrentDiv('site')}>{t('Site Detail.1')}</a></li>
                <li className={currentDiv == 'user' ? "current bg-cyan-500 text-white p-2 rounded-r border" : "bg-white text-black p-2 rounded-r border"} id='user'><a className='cursor-pointer' onClick={() => setCurrentDiv('user')}>Online User</a></li>
            </ul>
        </div>
        { currentDiv == 'site' ?
        <GlobalTable columns={columns} data={data} 
            createText={'Create Site'} createFunction={createFunction} 
            enableDetail={true} detailFunction={redirectToDetail} />
        :
        "ASD"
        }
        {showModal ? (
            <>
                <CreateSite createFunction={createFunction} />
            </>
        ) : null }
        </>
    )
}

export default Dashboard