import React from 'react'
import AdvancedTable from '../elements/AdvancedTable'

const ChoureyTwo = () => {

    const createFunction = () => {

    }

    const detailFunction = () => {

    }

    const deleteFunction = () => {

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
        createText={'Create Chourey'} createFunction={createFunction} 
        enableSelect={true} enableEdit={true} detailFunction={detailFunction}
        deleteFunction={deleteFunction}/>
    </>
    )
}

export default ChoureyTwo