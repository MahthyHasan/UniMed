import React, { useState, useEffect } from "react";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import styled from "styled-components";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import BlockCard from "../ComponentsDoctorDashboard/BlockCard";
import axios from "axios";

const PageContainer = styled(Container)`
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

function ChatDoctor() {
  const [formData, setFormData] = useState({
    title: "",
    subTopic: "",
    subject: "",
    date: new Date().toISOString().split("T")[0],
  });

  const [blogNews, setBlogNews] = useState([]);

  // Fetch blog news from the API on component mount
  useEffect(() => {
    const fetchBlogNews = async () => {
      try {
        const response = await axios.get("http://localhost:8088/api/v1/Blog");
        setBlogNews(response.data);
      } catch (error) {
        console.error("Error fetching blog news: ", error);
      }
    };

    fetchBlogNews();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8088/api/v1/Blog", formData);
      alert("Blog news saved successfully!");
      setFormData({
        title: "",
        subTopic: "",
        subject: "",
        date: new Date().toISOString().split("T")[0],
      });

      const response = await axios.get("http://localhost:8088/api/v1/Blog");
      setBlogNews(response.data);
    } catch (error) {
      console.error("Error posting data: ", error);
      alert("Failed to save blog news.");
    }
  };

  // Function to handle deletion of a blog post
  const handleDelete = (id) => {
    setBlogNews((prevBlogNews) => prevBlogNews.filter((blog) => blog._id !== id));
  };

  return (
    <Layout>
      <PageContainer>
        <h3 style={{ color: "black" }}>Create Blog News</h3>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter blog title"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formSubTopic">
                <Form.Label>Sub Topic</Form.Label>
                <Form.Control
                  type="text"
                  name="subTopic"
                  value={formData.subTopic}
                  onChange={handleInputChange}
                  placeholder="Enter sub topic"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  as="textarea"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Enter blog subject"
                  rows={3}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="mt-3">
            Save Blog News
          </Button>
        </Form>

        <h3 className="mt-5" style={{ color: "black" }}>All Blog News</h3>
        <div className="row">
          {blogNews.map((blog) => (
            <div className="col-4" key={blog._id}>
              <BlockCard
                id={blog._id}
                title={blog.title}
                subTopic={blog.subTopic}
                subject={blog.subject}
                date={blog.date}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      </PageContainer>
    </Layout>
  );
}

export default ChatDoctor;
