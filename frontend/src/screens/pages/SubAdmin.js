import React, { useState } from 'react'
import GlobalTable from '../elements/GlobalTable'
import CreateSubAdmin from './SubAdmin/CreateSubadmin'

const SubAdmin = () => {

    const [showModal, setShowModal] = useState(false)

    const createFunction = () => {
        if (showModal == true) {
            setShowModal(false)
        } else {
            setShowModal(true)
        }
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
            <GlobalTable columns={columns} data={data} 
            createText={'Assign Sub Admin'} createFunction={createFunction}/>
            {showModal ? (
            <>
                <CreateSubAdmin createFunction={createFunction} />
            </>
        ) : null }
        </>
    )
}

export default SubAdmin