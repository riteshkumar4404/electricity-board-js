import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import axios from 'axios';


export default function BarChart() {

    const statusWiseData = {
        "APPROVED": [],
        "REJECTED": [],
        "CONNECTION_RELEASED": [],
        "PENDING": []
    }
    const [chartData, setChartData] = useState({ statusWiseData });
    const [isLoading, setLoading] = useState(false);


    const monthWiseData = (listOfDates) => {
        const entriesByMonth = {
            "January": 0,
            "February": 0,
            "March": 0,
            "April": 0,
            "May": 0,
            "June": 0,
            "July": 0,
            "August": 0,
            "September": 0,
            "October": 0,
            "November": 0,
            "December": 0
        };

        listOfDates.forEach(function (date) {
            const month = date.toLocaleString('default', { month: 'long' });
            entriesByMonth[month]++;
        });
        return Object.values(entriesByMonth)
    }

    const fetchchartData = () => {

        setLoading(true)
        axios.get("http://localhost:8080/electricity_application/fetch-all").then((respose) => {
            console.log(respose.data)
            Object.keys(statusWiseData).forEach((s) => {
                statusWiseData[s] = [respose.data.filter((d) => d.status === s).map((v) => new Date(v.dateOfApplication))]
            })

            console.log("statusWiseData", statusWiseData)
            let monthyBasisData = {}
            for (let key in statusWiseData) {
                monthyBasisData[key] = monthWiseData(statusWiseData[key])
            }

            console.log("monthyBasisData", monthyBasisData)
            setChartData({ ...monthyBasisData });

            console.log("chartData", chartData)
            setLoading(false)


        }).catch((error) => {
            console.log(error);

        })
    }


    useEffect(() => {
        fetchchartData();
        let config = {
            type: "bar",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                datasets: !isLoading ?
                    [
                        {
                            label: "APPROVED",
                            backgroundColor: "green",
                            borderColor: "green",
                            data: chartData ? chartData["APPROVED"] : [],
                            fill: false,
                            barThickness: 8,
                        },
                        {
                            label: "REJECTED",
                            fill: false,
                            backgroundColor: "red",
                            borderColor: "red",
                            data: chartData ? chartData["REJECTED"] : [],
                            barThickness: 8,
                        },
                        {
                            label: "CONNECTION_RELEASED",
                            backgroundColor: "yellow",
                            borderColor: "yellow",
                            data: chartData ? chartData["CONNECTION_RELEASED"] : [],
                            fill: false,
                            barThickness: 8,
                        },
                        {
                            label: "PENDING",
                            fill: false,
                            backgroundColor: "gray",
                            borderColor: "gray",
                            data: chartData ? chartData["PENDING"] : [],
                            barThickness: 8,
                        },
                    ] : []
                ,
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Orders Chart",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: "rgba(0,0,0,.4)",
                    },
                    align: "end",
                    position: "bottom",
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: "Month",
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.2)",
                                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById("bar-chart").getContext("2d");
        window.myBar = new Chart(ctx, config);
    }, []);
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                                Performance
                            </h6>
                            <h2 className="text-blueGray-700 text-xl font-semibold">
                                Total orders
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex-auto">
                    {/* Chart */}
                    <div className="relative h-350-px">
                        <canvas id="bar-chart"></canvas>
                    </div>
                </div>
            </div>
        </>
    );
}