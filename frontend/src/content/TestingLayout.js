import React, {useState} from "react";
import {Outlet, Link} from "react-router-dom";
import {Layout, Menu} from "antd";
const {Header, Content, Sider, Footer} = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  minHeight: "100vh",
};

function TestingLayout(props) {
  const [collapsed, setCollapsed] = useState(false);
  const menuItems = [
    {
      key: "home",
      label: (
        <Link to="/">
          <b>Home</b>
        </Link>
      ),
    },
    {
      key: "sub1",
      label: "Frontend Evals",
      children: [
        {
          key: "1",
          label: (
            <Link to="/eval-1" style={{color: "black"}}>
              Evaluation 1
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link to="/eval-2" style={{color: "black"}}>
              Evaluation 2
            </Link>
          ),
        },
        {
          key: "3",
          disabled: false,
          label: (
            <Link to="/eval-3" style={{color: "black"}}>
              Evaluation 3
            </Link>
          ),
        },
        {
          key: "4",
          disabled: true,
          label: (
            <Link to="/eval-4" style={{color: "black"}}>
              Evaluation 4
            </Link>
          ),
        },
        {
          key: "5",
          disabled: true,
          label: (
            <Link to="/eval-5" style={{color: "black"}}>
              Evaluation 5
            </Link>
          ),
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub2",
      label: "Backend Evals",
      disabled: true,
      children: [
        {key: "51", label: "Option 5"},
        {key: "52", label: "Option 6"},
      ],
    },
    {
      type: "divider",
    },

    {
      key: "sub4",
      label: "Full Stack Evals",
      disabled: true,
      children: [
        {key: "9", label: "Option 9"},
        {key: "10", label: "Option 10"},
        {key: "11", label: "Option 11"},
        {key: "12", label: "Option 12"},
      ],
    },
  ];
  return (
    <Layout style={layoutStyle}>
      <Sider width="20%" style={siderStyle}>
        <Menu theme="light" mode="inline" style={{minHeight: "100%"}} defaultSelectedKeys={["1"]} items={menuItems} />
      </Sider>
      <Layout>
        {/* <Header style={headerStyle}>Header</Header> */}
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        {/* <Footer style={footerStyle}>Footer</Footer> */}
      </Layout>
    </Layout>
  );
}

export default TestingLayout;
