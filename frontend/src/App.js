import React, {useState, useEffect} from "react";
import {Route, Routes, useNavigate, Link} from "react-router-dom";
import {Flex, Layout, Menu} from "antd";
const {Header, Footer, Sider, Content} = Layout;
import dayjs from "dayjs";
import TestingLayout from "./content/TestingLayout.js";
import Homepage from "./content/Homepage.js";
import FrontendEval1 from "./content/FrontendEval1.js";
import FrontendEval2 from "./content/FrontendEval2.js";
import FrontendEval3 from "./content/FrontendEval3.js";

function App(props) {
  const navigate = useNavigate();
  props = {
    ...navigate,
    ...props,
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<TestingLayout {...props} />}>
          <Route exact path="/" element={<Homepage {...props} />} />
          <Route exact path="/eval-1" element={<FrontendEval1 {...props} />} />
          <Route exact path="/eval-2" element={<FrontendEval2 {...props} />} />
          <Route exact path="/eval-3" element={<FrontendEval3 {...props} />} />
          <Route exact path="/eval-4" element={<Homepage {...props} />} />
          <Route exact path="/eval-5" element={<Homepage {...props} />} />
        </Route>
      </Routes>

      {/* Pathing for non-layout routes */}
    </>
  );
}

export default App;
