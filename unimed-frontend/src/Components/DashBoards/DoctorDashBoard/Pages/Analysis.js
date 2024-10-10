import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import AnalysisCards from "../ComponentsDoctorDashboard/AnalysisCards";
import BarGraph from "../ComponentsDoctorDashboard/BarGraph";
import PieChart from "../ComponentsDoctorDashboard/PieChart";

const Analysis = () => {
  // State to store data
  const [totalPatients, setTotalPatients] = useState("Loading...");
  const [commonHealthIssue, setCommonHealthIssue] = useState("Loading...");
  const [emergencyCases, setEmergencyCases] = useState("Loading...");
  const [averageConsultationTime, setAverageConsultationTime] =
    useState("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:8088/api/v1/channelledLog/total-today")
      .then((response) => setTotalPatients(response.data))
      .catch((error) => {
        console.error("Error fetching total patients:", error);
        setTotalPatients("Error");
      });

    axios
      .get("http://localhost:8088/api/v1/medicalRecords/common-diagnosis")
      .then((response) => setCommonHealthIssue(response.data))
      .catch((error) => {
        console.error("Error fetching common health issue:", error);
        setCommonHealthIssue("Error");
      });

    axios
      .get("http://localhost:8088/api/v1/emergencyCases")
      .then((response) => setEmergencyCases(response.data))
      .catch((error) => {
        console.error("Error fetching emergency cases:", error);
        setEmergencyCases("Error");
      });

    axios
      .get("http://localhost:8088/api/v1/averageConsultationTime")
      .then((response) => setAverageConsultationTime(response.data))
      .catch((error) => {
        console.error("Error fetching average consultation time:", error);
        setAverageConsultationTime("Error");
      });
  }, []);

  const styles = {
    dashboardContainer: {
      display: "grid",
      gridTemplateRows: "auto auto 1fr auto",
      gap: "20px",
      padding: "20px",
    },
    headingSection: {
      textAlign: "left",
    },
    heading: {
      fontSize: "25px",
    },
    cardsSection: {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
    },
    graphsSection: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "170px",
    },
    graphItem: {
      marginBottom: "20px", // Add this line to increase space between graphs
    },
    analysisSection: {
      padding: "20px",
    },
  };

  return (
    <Layout>
      <div style={styles.dashboardContainer}>
        <div style={styles.headingSection}>
          <h1 style={styles.heading}>Overall Data</h1>
        </div>
        <div style={styles.cardsSection}>
          <AnalysisCards
            title="Total Patients for the Day"
            icon="total-patients"
            data={12} //{totalPatients} // Pass the fetched data
          />
          <AnalysisCards
            title="Most Common Health Issue of the Day"
            icon="common-health-issue"
            data={"Fever"}//{commonHealthIssue} // Pass the fetched data
          />
          <AnalysisCards
            title="Emergency Cases of the Day"
            icon="emergency-cases"
            data={0}//{emergencyCases} // Pass the fetched data
          />
          <AnalysisCards
            title="Average Consultation Time"
            icon="average-consultation-time"
            data={"10 mins"}//{averageConsultationTime} // Pass the fetched data
          />
        </div>
        <div style={styles.graphsSection}>
          <div style={styles.graphItem}>
            <BarGraph />
          </div>
          <div style={styles.graphItem}>
            <PieChart />
          </div>
        </div>
        <div style={styles.analysisSection}>
          {/* Analysis content will be added here */}
        </div>
      </div>
    </Layout>
  );
};

export default Analysis;
