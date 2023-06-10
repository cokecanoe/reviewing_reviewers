import "./App.css";
import { Grid, Typography } from "@material-ui/core";
import NavBar from "./components/nav";
import Forum from "./components/forum";

import { dummyData } from "./dummData/dummyData";

function App() {
  return (
    <Grid container justifyContent="center" spacing={4}>
      <Grid item xs={12}>
        <NavBar></NavBar>
      </Grid>
      <Grid item xs={7}>
        <Forum posts={dummyData} />
      </Grid>
    </Grid>
  );
}

export default App;
