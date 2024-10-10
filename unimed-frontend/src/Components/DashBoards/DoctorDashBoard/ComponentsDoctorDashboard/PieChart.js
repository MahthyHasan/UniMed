import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Cough", "Fever", "Hypertension", "Diabetes", "Flu"],
    datasets: [
      {
        label: "Patients by Disease",
        data: [3, 5, 8, 2, 4], // Replace with actual data
        backgroundColor: [
          "#7393B3",
          "#0047ab",
          "#3465a4",
          "#729fcf",
          "#afd9ee",
        ],
        hoverBackgroundColor: [
          "#7393B3",
          "#0047ab",
          "#3465a4",
          "#729fcf",
          "#afd9ee",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Patients by Disease",
      },
    },
    maintainAspectRatio: false, // This will allow you to control the size with CSS
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      {" "}
      {/* Adjust the size here */}
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
