import React from 'react'
import Modal from './Modal'

export default function Table({ tableData, updateRequest }) {
    const statusColor = {
        "PENDING": "p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-300 rounded-lg bg-opacity-50",
        "APPROVED": "p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-300 rounded-lg bg-opacity-50",
        "CONNECTION_RELEASED": "p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-300 rounded-lg bg-opacity-50",
        "REJECTED": "p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-300 rounded-lg bg-opacity-50"
    };

    return (
        <div className='p-5 h-screen bg-green-100'>
            <div className="overflow-auto rounded-lg shadow">
                <table className="table-auto w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200">
                        <tr className='bg-gray-300'>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Id</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Applicant</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Gender</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >District</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >State</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Pin code</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Ownership</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >GovtID_Type</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >ID_Number</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Category</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Load_Applied</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Date of Application</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Date of Approval</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Modified date</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Status</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Reviewer Id</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Reviewer Name</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Reviewer Comment</th>
                            <th className='p-3 text-sm fontsemibol tracking-wide text-left' >Update Action</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>

                        {tableData.map((data, i) => (<tr key={data.id} className={i % 2 ? 'bg-white' : 'bg-gray-100'}>
                            <td className='p-3 text-sm text-gray-700'>{data.id}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.applicantName}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.gender}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.district}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.state}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.pinCode}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.ownership}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.govtIdType}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.idNumber}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.category}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.loadApplied}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.dateOfApplication}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.dateOfApproval}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.modifiedDate}</td>
                            <td className='p-3 text-sm text-gray-700'><span className={statusColor[data.status]}>{data.status}</span></td>
                            <td className='p-3 text-sm text-gray-700'>{data.reviewerId}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.reviewerName}</td>
                            <td className='p-3 text-sm text-gray-700'>{data.reviewerComment}</td>
                            <td className='p-3 text-sm text-gray-700'><Modal data={data} updateRequest={updateRequest} /></td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
