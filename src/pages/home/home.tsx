import React, { FC } from 'react';

interface HomeProps {

}

const Home: FC<HomeProps> = ({}) => {
  return (
    <>
      <div className={"home"}>
        <div className={"home-container"}>
          <h2 className="title">
            High Course JavaScript
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;