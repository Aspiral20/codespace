import React from 'react';
import { Container, Header, Footer } from "./components";
import Router from "./router";

function App() {
  return (
    <Container>
      <Header/>
      <div className="content">
        <Router/>
      </div>
      <Footer/>
    </Container>

  );
}

// export default Sentry.withProfiler(App);
export default App;