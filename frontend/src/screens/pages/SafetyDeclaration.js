import React, { useState } from 'react'
import AdvancedTable from '../elements/AdvancedTable'
import ConfirmationDialog from '../elements/ConfirmationDialog'
import CreateSafetyDeclaration from './SafetyDeclaration/CreateSafetyDeclaration'

const SafetyDeclaration = () => {

    const [showModal, setShowModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    const createFunction = () => {
        if (showModal == true) {
            setShowModal(false)
        } else {
            setShowModal(true)
        }
    }

    const detailFunction = () => {
        if (showModal == true) {
            setShowModal(false)
        } else {
            setShowModal(true)
        }
    }

    const deleteFunction = () => {
        if (deleteModal == true) {
            setDeleteModal(false)
        } else {
            setDeleteModal(true)
        }
    }

    const data = React.useMemo(
        () => [
            {
                sNo: '1',
                title: 'New Site',
                enable: true,
            },
            {
                sNo: '2',
                title: 'Old Site',
                enable: true,
            },
            {
                sNo: '3',
                title: 'Current Site',
                enable: false,
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
                Header: 'Title',
                accessor: 'title',
            },
            {
                Header: 'Enabled',
                accessor: 'enable',
            },
        ],
        []
    )

    return (
        <>
            <AdvancedTable columns={columns} data={data} 
            createText={'Create Safety Declaration'} createFunction={createFunction} 
            enableSelect={true} enableEdit={false} detailFunction={detailFunction}
            deleteFunction={deleteFunction}/>
            {showModal ? (
                <>
                    <CreateSafetyDeclaration createFunction={createFunction} />
                </>
            ) : null }
            {deleteModal ? (
                <>
                    <ConfirmationDialog deleteFunction={deleteFunction} />
                </>
            ) : null }
        </>
    )
}

export default SafetyDeclaration