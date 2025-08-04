import React, {Component} from "react";
import Handlebars from "handlebars";
import usersTemplate from "./path/to/users.hbs"; // Adjust the path to your .hbs file
import {Row, Col, Typography, Card, Space} from "antd";
const {Title, Text} = Typography;

function FrontendEval3() {
  // Define the Users data
  const Users = ["User 1", "User 2", "User 3"];

  const renderContent = () => {
    // Compile the Handlebars template
    const template = Handlebars.compile(usersTemplate);
    const html = template({ Users });

    // Using dangerouslySetInnerHTML to render the HTML. However, I'm not sure if this is the best practice for security reasons.
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };


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
          {/* Render Content Section */}
          <Col span={24}>
            <Card>{renderContent()}</Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FrontendEval3;
