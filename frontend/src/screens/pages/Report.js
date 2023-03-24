import React, { useMemo, useState } from 'react'
import DatePicker from 'react-datepicker'
import GlobalTable from '../elements/GlobalTable'

function ReportSelect({startDate, setStartDate, endDate, setEndDate, handleSubmit}) {
    return(
        <div className="flex items-center justify-start p-2 mb-4">
            <div className="relative flex items-center space-x-3 pr-2">
                <div className='items-center hidden space-x-3 md:flex'>
                    <div className="relative rounded-md border-gray-300 text-cyan-600 bg-white shadow-lg">
                    <label htmlFor="frm-whatever" className="sr-only">My field</label>
                    <select className="px-4 py-3 rounded-md hover:bg-gray-100 lg:max-w-sm md:py-2 md:flex-1 focus:outline-none md:focus:bg-gray-100 md:focus:shadow md:focus:border" 
                    name="whatever" id="frm-whatever">
                        <option value="ua">User Access</option>
                        <option value="sd">Safety Declaration</option>
                        <option value="sua">Smartphone: User Access</option>
                        <option value="spsd">SP: Safety Declaration</option>
                        <option value="ol">Operation Log</option>
                    </select>
                    </div>
                </div>  
            </div>
            <div className="relative flex items-center space-x-3 pr-2">
                <div className='items-center hidden space-x-3 md:flex'>
                    <div className="relative rounded-md border-gray-300 text-cyan-600 bg-white shadow-lg">
                        <DatePicker className='border flex-1 border-gray-300 rounded px-4 py-2 w-full' id="dateOfBirth" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>  
            </div>
            <div className="relative flex items-center space-x-3 pr-2">
                <div className='items-center hidden space-x-3 md:flex'>
                    <div className="relative rounded-md border-gray-300 text-cyan-600 bg-white shadow-lg">
                        <DatePicker className='border flex-1 border-gray-300 rounded px-4 py-2 w-full' id="dateOfBirth" selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                </div>  
            </div>
            <a
            className="inline-flex items-center justify-center px-4 py-2 space-x-1 
            bg-cyan-600 text-white cursor-pointer rounded-md shadow hover:bg-opacity-20"
            onClick={handleSubmit}>
                <span>Search</span>
            </a>
        </div>
    )
}

const Report = () => {
    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [collectData, setCollectData] = useState(false)

    const handleSubmit = () => {
        setCollectData(true)
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
            <ReportSelect startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} handleSubmit={handleSubmit}/>
            {collectData ? 
            (<GlobalTable columns={columns} data={data} />)
            :
            ''
            }
            {/* <GlobalTable columns={columns} data={data} /> */}
        </>
    )
}

export default Report