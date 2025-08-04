import React, {Component} from "react";
import {Row, Col, Button, Typography, Card, Space} from "antd";

const {Title, Text} = Typography;

function FrontendEval1() {
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
          <Input className="w-full" placeholder="Enter your name" />
            <Button type="primary" className="mt-4" onClick={() => alert(`Hello, ${name}`)}>
              Submit
            </Button>
          </Col>
            {/* Space for your work here! Please note - you are allowed to change anything in this document as you see fit, your work does not have to only reside in this section. */}
        </Row>
      </div>
    </div>
  );
}

export default FrontendEval1;
