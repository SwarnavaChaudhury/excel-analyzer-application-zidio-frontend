import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";
import { getLastFiveDays } from "./dateUtils";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default function UploadsChart() {
    // Example last 5 days uploads data
    const uploads = [14, 20, 6, 18, 6];
    const labels = getLastFiveDays();

    const data = {
        labels,
        datasets: [
            {
                label: "Files Uploaded",
                data: uploads,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "Last 5 Days - File Uploads",
                font: { size: 18 },
            },
        },
        scales: {
            y: { beginAtZero: true, ticks: { stepSize: 5 } },
        },
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <Bar data={data} options={options} />
        </div>
    );
}
