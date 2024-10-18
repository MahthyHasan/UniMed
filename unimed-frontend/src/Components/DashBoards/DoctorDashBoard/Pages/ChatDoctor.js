import React from "react";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import styled from "styled-components";
import { Table, Container, Button } from "react-bootstrap";
import BlockCard from "../ComponentsDoctorDashboard/BlockCard";

function ChatDoctor() {
	const PageContainer = styled(Container)`
		margin-top: 20px;
		padding: 20px;
		background-color: #ffffff;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	`;
	return (
		<Layout>
			<PageContainer>
				<div className="row">
					<div className="col-4"><BlockCard />  </div>
					<div className="col-4"><BlockCard />  </div>
					<div className="col-4"><BlockCard />  </div>
				</div>
			</PageContainer>
		</Layout>
	);
}

export default ChatDoctor;
