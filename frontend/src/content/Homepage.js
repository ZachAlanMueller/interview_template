import React, {Component, useState, useRef, useEffect} from "react";
import {Row, Col, Button, Typography, Card, Space} from "antd";
import {
  Home as HomeIcon,
  FileText as FileTextIcon,
  ClipboardList as ClipboardListIcon,
  Settings as SettingsIcon,
  HelpCircle as HelpCircleIcon,
  PlusCircle as PlusCircleIcon,
  Eye as EyeIcon,
  Clock as ClockIcon,
  LayoutDashboard as LayoutDashboardIcon,
  CircleQuestionMarkIcon,
} from "lucide-react"; // Using lucide-react for icons
const {Title, Text} = Typography;

function Homepage(props) {
  return (
    <div style={{margin: "20px"}}>
      <Row gutter={[24, 24]}>
        {/* Welcome Section */}
        <Col span={24}>
          <Card>
            <Title level={2} className="text-gray-800 mb-4">
              Welcome!
            </Title>
            <Text className="text-gray-600 text-lg">
              This template is for you to change as you see fit. Each evaluation (found via the sidebar menu) will give prompts for you to complete.
              Complete the prompts to the best of your ability and return your zipped code.
            </Text>
          </Card>
        </Col>

        {/* Action Cards */}
        <Col span={8}>
          <Card
            className="h-full rounded-lg shadow-lg border-none hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            title={
              <Space>
                <PlusCircleIcon size={20} /> Getting Started
              </Space>
            }>
            <p className="text-gray-700 mb-4">
              For the frontend evaluation section, please dedicate approximately one hour. This section comprises three evaluations. The first 2
              evaluations are standard React/JS logic interview questions. The 3rd evaluation is specific to the job that you will be doing, and will
              be the toughest to compelte. Don't be discouraged if you're unable to complete all of them; the later evaluations are intentionally
              designed to go beyond the expected scope for the time allotted. Once your time has been spent, you may submit your code.
              <hr />
              When you are ready, go to the sidebar, to Frontend Evals, and start with Evaluation 1.
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            className="h-full rounded-lg shadow-lg border-none hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            title={
              <Space>
                <CircleQuestionMarkIcon size={20} /> Having Issues?
              </Space>
            }>
            <p className="text-gray-700 mb-4">
              If you are having any issues with this template, please reach out to Zach Mueller @{" "}
              <a href="mailto:zach@softwarethatworksllc.com">zach@softwarethatworksllc.com</a>. Thanks!
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            className="h-full rounded-lg shadow-lg border-none hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            title={
              <Space>
                <ClipboardListIcon size={20} /> Submitting Finished Code
              </Space>
            }>
            <p className="text-gray-700 mb-4">
              Once you have completed your elapsed time, please zip the project folder with all your code changes and email it to{" "}
              <a href="mailto:jobs@softwarethatworksllc.com">jobs@softwarethatworksllc.com</a>. <br />
              Please make sure to include your full name in the email. Thank you!
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Homepage;
