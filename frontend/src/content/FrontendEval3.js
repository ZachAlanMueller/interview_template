import React, {Component, useState, useRef, useEffect} from "react";
import {Row, Col, Typography, Card, Space} from "antd";
const {Title, Text} = Typography;

function FrontendEval3(props) {
  return (
    <div>
      <div style={{margin: "20px"}}>
        <Row gutter={[24, 24]}>
          {/* Welcome Section */}
          <Col span={24}>
            <Card style={{marginBottom: 24}}>
              <Title level={2} className="text-gray-800 mb-4">
                Evaluation 3
              </Title>
              <Text className="text-gray-600 text-lg">
                Locate the file named "users.hbs". This is an example file of what we are trying to convert to React. Using that file, translate that
                file to a React page and show it in the section below. <br />
                <br />
                You are <b>not</b> expected to understand everything in the file. We know that handlebars is not a commonly taught language, and are
                just wanting to see what you can do with the page in the time allotted. Do your best in the time allotted, and then follow the
                instructions on the home page on how to submit this coding interview.
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

export default FrontendEval3;
