import React, { useState } from "react";


export default function Modal({ data, updateRequest }) {
    const [showModal, setShowModal] = useState(false);
    const [loadApplied, setLoadApplied] = useState(data?.loadApplied);
    const [district, setDistrict] = useState(data?.district);
    const [state, setState] = useState(data?.state);
    const [pinCode, setPinCode] = useState(data?.pinCode);
    const [category, setCategory] = useState(data?.category);
    const [reviewerId, setReviewerId] = useState(data?.reviewerId);
    const [reviewerName, setReviewerName] = useState(data?.reviewerName)
    const [reviewerComment, setReviewerComment] = useState(data?.reviewerComment);
    const [status, setStatus] = useState(data?.status);
    const [ownership, setOwnership] = useState(data?.ownership);
    const [applicantName, setApplicantName] = useState(data?.applicantName);
    const [gender, setGender] = useState(data?.gender);

    return (
        <>
            <button
                className="bg-gray-300 active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Update
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Update Request
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className=" p-6 grid grid-cols-4 gap-3">
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Application</label>
                                        <input type="text" id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 " value={data.dateOfApplication} disabled readonly />
                                    </div>
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GovtID_Type</label>
                                        <input type="text" id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.govtIdType} disabled readonly />
                                    </div>
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID_Number</label>
                                        <input type="text" id="disabled-input-2" aria-label="disabled input 2" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.idNumber} disabled readonly />
                                    </div>
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Load Applied</label>
                                        <input type="number" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={loadApplied} onChange={(e) => { if (e.target.value > 200) { alert("Please enter load value <200") } else setLoadApplied(e.target.value) }} />
                                    </div>
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District</label>
                                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={district} onChange={(e) => setDistrict(e.target.value)} />
                                    </div>
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={state} onChange={(e) => setState(e.target.value)} />
                                    </div>
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PIN code</label>
                                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
                                    </div>
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={category} onChange={(e) => setCategory(e.target.value)} />
                                    </div>
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reviewer Id</label>
                                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={reviewerId} onChange={(e) => setReviewerId(e.target.value)} />
                                    </div>
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reviewer Name</label>
                                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={reviewerName} onChange={(e) => setReviewerName(e.target.value)} />
                                    </div>
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reviewer Comment</label>
                                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={reviewerComment} onChange={(e) => setReviewerComment(e.target.value)} />
                                    </div>
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ownership</label>
                                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={ownership} onChange={(e) => setOwnership(e.target.value)} />
                                    </div>
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Appicant Name</label>
                                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={applicantName} onChange={(e) => setApplicantName(e.target.value)} />
                                    </div>
                                    <div class="mb-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={gender} onChange={(e) => setGender(e.target.value)} />
                                    </div>

                                    <div class="mb-6">
                                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select status</label>
                                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={status} onChange={(e) => setStatus(e.target.value)}>
                                            <option selected>Choose status</option>
                                            <option value="APPROVED">Approved</option>
                                            <option value="REJECTED">Rejected</option>
                                            <option value="CONNECTION_RELEASED">Connection Released</option>
                                            <option value="PENDING">Pending</option>
                                        </select>
                                    </div>




                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-gray-400 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => { setShowModal(false); let dateOfApproval = status === "APPROVED" ? new Date() : data.dateOfApproval; updateRequest(data?.id, applicantName, category, data?.dateOfApplication, data?.govtIdType, data?.idNumber, dateOfApproval, district, gender, loadApplied, ownership, pinCode, reviewerComment, reviewerId, reviewerName, state, status) }}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}