import React, {Component, useState, useRef, useEffect} from "react";
import {Row, Col, Button, Typography, Card, Space, Input, message, Modal} from "antd";

const {Title, Text} = Typography;

function FrontendEval1(props) {
  const [name, setName] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = () => {
    if (name.trim()) {
      setIsModalVisible(true);
    } else {
      message.warning("Please enter your name");
    }
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

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
            <Card>
              <Space direction="vertical" size="middle" style={{width: "100%"}}>
                <Input 
                  placeholder="Enter your name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onPressEnter={handleSubmit}
                  size="large"
                  style={{maxWidth: 400}}
                />
                <Button 
                  type="primary" 
                  onClick={handleSubmit}
                  size="large"
                >
                  Submit
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
      
      <Modal
        title="Greeting"
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalOk}
        centered
        footer={[
          <Button key="ok" type="primary" onClick={handleModalOk}>
            OK
          </Button>
        ]}
      >
        <p style={{fontSize: 18, textAlign: "center"}}>Hello, {name}</p>
      </Modal>
    </div>
  );
}

export default FrontendEval1;
