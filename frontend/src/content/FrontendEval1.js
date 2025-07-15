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

function FrontendEval1(props) {
  return (
    <div>
      <div style={{margin: "20px"}}>
        <Row gutter={[24, 24]}>
          {/* Welcome Section */}
          <Col span={24}>
            <Card style={{marginBottom: 24}}>
              <Title level={2} className="text-gray-800 mb-4">
                Evaluation 1
              </Title>
              <Text className="text-gray-600 text-lg">
                In the section below, create an input field that allows someone to put in their name. When they hit submit, show a prompt that says
                "Hello, NAME", where the NAME is replaced with the name they input.
              </Text>
            </Card>
          </Col>
          {/* Action Section */}
          <Col span={24}>
            {/* Space for your work here! Please note - you are allowed to change anything in this document as you see fit, your work does not have to only reside in this section. */}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FrontendEval1;
