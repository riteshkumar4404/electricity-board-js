// import './App.css';
import { useEffect, useState } from 'react';
import Table from './component/Table';
import TopHeader from './component/TopHeader';
import axios from 'axios';
import BarChart from './component/BarChart';

function App() {
  const [tableData, setTableData] = useState([]);

  const fetchAllData = () => {
    axios.get("http://localhost:8080/electricity_application/fetch-all").then((respose) => {
      setTableData(respose.data);
      console.log(respose.data)
    }).catch((error) => {
      console.log(error);
    })
  }

  const fetchById = (id) => {
    axios.get("http://localhost:8080/electricity_application/" + id).then((respose) => {
      let arr = []
      arr.push(respose.data)
      setTableData(arr);
      console.log(respose.data)

    }).catch((error) => {
      console.log(error);
      setTableData([])

    })
  }

  const fetchBetweenDates = (val) => {
    axios.get(`http://localhost:8080/electricity_application/fetch-all/date?startDate=${val.startDate}&endDate=${val.endDate}`).then((respose) => {
      setTableData(respose.data);
      console.log(respose.data)

    }).catch((error) => {
      console.log(error);
      setTableData([])

    })
  }

  const updateRequest = (id, applicantName, category, dateOfApplication, govtIdType, idNumber, dateOfApproval, district, gender, loadApplied, ownership, pinCode, reviewerComment, reviewerId, reviewerName, state, status) => {
    console.log("dateOfApplication,govtIdType,idNumber", dateOfApplication, govtIdType, idNumber)
    axios.put("http://localhost:8080/electricity_application", {
      id: id,
      applicantName: applicantName,
      category: category,
      dateOfApproval: dateOfApproval,
      district: district,
      gender: gender,
      loadApplied: loadApplied,
      ownership: ownership,
      pinCode: pinCode,
      reviewerComment: reviewerComment,
      reviewerId: reviewerId,
      reviewerName: reviewerName,
      state: state,
      status: status,
      dateOfApplication: dateOfApplication,
      govtIdType: govtIdType,
      idNumber: idNumber
    })
      .then(function (response) {
        fetchAllData();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchAllData();
  }, [])

  return (
    <div className="App">
      <TopHeader fetchById={fetchById} fetchBetweenDates={fetchBetweenDates} />
      <Table tableData={tableData} updateRequest={updateRequest} />
      <BarChart />
    </div>
  );
}

export default App;
