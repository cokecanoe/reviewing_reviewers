import { Grid, Typography } from "@material-ui/core";

const NavBar = () => {
  return (
    <Grid
      container
      style={{
        backgroundColor: "yellow",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Grid item xs={3}>
        <Typography>Home</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>Home</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>Home</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography></Typography>
      </Grid>
    </Grid>
  );
};

export default NavBar;
