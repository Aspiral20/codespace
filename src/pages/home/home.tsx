import React, { FC } from 'react';

interface HomeProps {

}

const Home: FC<HomeProps> = ({}) => {
  return (
    <>
      <div className={"home"}>
        <div className={"home-container"}>
          <h3 className="title">
            Aspiral20's Workspace
          </h3>
        </div>
      </div>
    </>
  );
};

export default Home;