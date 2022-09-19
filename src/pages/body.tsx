import React, { FC } from 'react';
import { Outlet } from "react-router-dom";
import { Container, Header, Footer } from "../components";
import { getRouter } from "../conf/RouteElements";

interface BodyProps {

}

const Body: FC<BodyProps> = ({}) => {
  const routerPath = window.location.pathname.split('/')[1]
  const currentRouter = getRouter.find(item => item.path === routerPath)

  return (
    <Container>
      <Header/>
      <div className="content">
        <Outlet context={currentRouter}/>
      </div>
      <Footer/>
    </Container>
  );
};

export default Body;