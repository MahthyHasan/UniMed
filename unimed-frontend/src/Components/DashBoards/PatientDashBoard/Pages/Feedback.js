import React from "react";
import Layout from "../../layout/PatientLayout/PatientLayout";
import FeedbackForm from "../ComponentsPatientDashboard/FeedbackForm";

export default function Feedback() {
  return (
    <div>
      <Layout>
        <FeedbackForm />
      </Layout>
    </div>
  );
}
