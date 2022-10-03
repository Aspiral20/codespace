import React from 'react';
import { RoutesGenerator, Container } from "./components";
import * as Sentry from "@sentry/react"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <RoutesGenerator/>
    </>
  );
}

// export default Sentry.withProfiler(App);
export default App;