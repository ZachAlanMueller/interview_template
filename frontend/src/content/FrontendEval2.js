import React, {Component, useState, useRef, useEffect} from "react";
import {Row, Col, Typography, Card} from "antd";
const {Title, Text} = Typography;

function FrontendEval2(props) {
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
            {/* Space for your work here! Please note - you are allowed to change anything in this document as you see fit, your work does not have to only reside in this section. */}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FrontendEval2;
