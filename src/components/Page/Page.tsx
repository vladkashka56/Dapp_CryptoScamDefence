import React from "react";
import { /*Container,*/ Grid, useMediaQuery } from "@material-ui/core";
import useEagerConnect from "../../hooks/useEagerConnect";

// import Footer from '../Footer';
import Nav from "../Nav";

const Page: React.FC = ({ children }) => {
  const matches = useMediaQuery("(min-width:1005px)");
  useEagerConnect();
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Nav />
      {/* <Container maxWidth="lg" style={{ paddingBottom: '5rem' }}>
        
      </Container> */}
      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        {matches ? (
          <Grid container item xs={10}>
            {children}
          </Grid>
        ) : (
          <Grid container item xs={12}>
            {children}
          </Grid>
        )}
      </Grid>
      {/*<Footer />*/}
    </div>
  );
};

export default Page;
