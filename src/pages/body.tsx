import React, { FC } from 'react';
import { Outlet } from "react-router-dom";
import { Container, Header, Footer } from "../components";

interface BodyProps {

}

const Body: FC<BodyProps> = ({}) => {
  return (
    <Container>
      <Header/>
      <div className="content">
        <Outlet/>
      </div>
      <Footer/>
    </Container>
  );
};

export default Body;