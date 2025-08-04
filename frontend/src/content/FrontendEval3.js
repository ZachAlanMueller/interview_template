import React, {Component, useState, useRef, useEffect} from "react";
import {Row, Col, Typography, Card, Space, Table, Select, Button, Modal, Input, Form, message} from "antd";
import {CloseOutlined} from "@ant-design/icons";
const {Title, Text} = Typography;

function FrontendEval3(props) {
  const [users, setUsers] = useState([
    {id: 1, username: "john_doe", email: "john@example.com", role_id: 1},
    {id: 2, username: "jane_smith", email: "jane@example.com", role_id: 2},
    {id: 3, username: null, email: "noname@example.com", role_id: 1},
    {id: 4, username: "admin_user", email: null, role_id: 3},
  ]);

  const [roles] = useState([
    {id: 1, name: "User"},
    {id: 2, name: "Manager"},
    {id: 3, name: "Admin"},
  ]);

  const [inviteModalVisible, setInviteModalVisible] = useState(false);
  const [inviteForm] = Form.useForm();

  const handleRoleChange = (userId, roleId) => {
    setUsers(users.map(user => 
      user.id === userId ? {...user, role_id: roleId} : user
    ));
    message.success("Role updated successfully");
  };

  const handleDisableAccount = (userId) => {
    Modal.confirm({
      title: "Disable Account",
      content: "Are you sure you wish to disable this account?",
      onOk: () => {
        setUsers(users.filter(user => user.id !== userId));
        message.success("Account disabled!");
      },
    });
  };

  const handleInvite = () => {
    inviteForm.validateFields().then(values => {
      const newUser = {
        id: users.length + 1,
        username: values.username,
        email: values.email || "No Email",
        role_id: 1,
      };
      setUsers([...users, newUser]);
      setInviteModalVisible(false);
      inviteForm.resetFields();
      message.success("User invited successfully");
    });
  };

  const columns = [
    {
      title: "Username",
      key: "username",
      render: (_, record) => record.username || "Not Registered",
    },
    {
      title: "Email",
      key: "email",
      render: (_, record) => record.email || "No Email",
    },
    {
      title: "Role",
      key: "role",
      render: (_, record) => (
        <Select
          value={record.role_id}
          onChange={(value) => handleRoleChange(record.id, value)}
          style={{width: 150}}
        >
          {roles.map(role => (
            <Select.Option key={role.id} value={role.id}>
              {role.name}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <CloseOutlined 
          style={{color: "#ff4757", cursor: "pointer", fontSize: 16}}
          onClick={() => handleDisableAccount(record.id)}
        />
      ),
    },
  ];

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
            <Card>
              <Row justify="space-between" align="middle" style={{marginBottom: 16}}>
                <Col>
                  <Title level={4} style={{margin: 0}}>Users</Title>
                </Col>
                <Col>
                  <Button onClick={() => window.history.back()}>
                    Back
                  </Button>
                </Col>
              </Row>

              <Table 
                columns={columns} 
                dataSource={users} 
                rowKey="id"
                pagination={false}
                style={{marginBottom: 16}}
              />

              <Button 
                type="primary"
                onClick={() => setInviteModalVisible(true)}
                style={{backgroundColor: "#6c5ce7", borderColor: "#6c5ce7"}}
              >
                Invite
              </Button>

              <Modal
                title="User Details"
                open={inviteModalVisible}
                onOk={handleInvite}
                onCancel={() => {
                  setInviteModalVisible(false);
                  inviteForm.resetFields();
                }}
              >
                <Form form={inviteForm} layout="vertical">
                  <Form.Item
                    name="username"
                    label="Username"
                    rules={[{required: true, message: "Please input username!"}]}
                  >
                    <Input placeholder="Enter username" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Email"
                  >
                    <Input placeholder="Enter email (optional)" />
                  </Form.Item>
                </Form>
              </Modal>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FrontendEval3;
