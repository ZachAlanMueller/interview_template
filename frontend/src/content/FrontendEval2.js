import React, {Component, useState, useRef, useEffect} from "react";
import {Row, Col, Typography, Card, Button, Space} from "antd";
const {Title, Text} = Typography;

function FrontendEval2(props) {
  const [counter, setCounter] = useState(0);

  const getDisplayValue = (num) => {
    if (num % 20 === 0 && num !== 0) {
      return "Superman";
    } else if (num % 5 === 0 && num !== 0) {
      return "Man";
    } else if (num % 4 === 0 && num !== 0) {
      return "Super";
    }
    return num.toString();
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div style={{margin: "20px"}}>
        <Row gutter={[24, 24]}>
          {/* Welcome Section */}
          <Col span={24}>
            <Card style={{marginBottom: 24}}>
              <Title level={2} className="text-gray-800 mb-4">
                Evaluation 2
              </Title>
              <Text className="text-gray-600 text-lg">
                Display a counter, and start the counter at 0. Create 2 buttons below, one that increments a counter, and one that decrements the
                counter. Next to the counter, if the counter is divisible by 4, instead of showing the number, show the word "Super". If the counter
                is divisible by 5, show the word "Man". If the counter is divisible by both 4 and 5, show the word "Superman".
              </Text>
            </Card>
          </Col>
          {/* Action Section */}
          <Col span={24}>
            <Card>
              <Space direction="vertical" align="center" size="large" style={{width: "100%"}}>
                <Title level={1} style={{margin: 0, fontSize: 48}}>
                  {getDisplayValue(counter)}
                </Title>
                <Space size="middle">
                  <Button type="primary" size="large" onClick={decrement}>
                    Decrement
                  </Button>
                  <Button type="primary" size="large" onClick={increment}>
                    Increment
                  </Button>
                </Space>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FrontendEval2;
