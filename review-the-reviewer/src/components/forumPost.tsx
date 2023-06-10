import { Grid, Typography } from "@material-ui/core";

export interface ForumPostProps {
  publisher: string;
  body: string;
  profileImg: string;
  heading: string;
}

export const ForumPost = ({
  body,
  heading,
  profileImg,
  publisher,
}: ForumPostProps) => {
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      style={{
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
      }}
    >
      <Grid item xs={12} style={{ backgroundColor: "yellow" }}>
        <Grid container>
          <Grid item xs={6}>
            <Typography>{publisher}</Typography>
          </Grid>
          <Grid item xs={6}>
            REACTIONS
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ backgroundColor: "yellow" }}>
        <Typography>{heading}</Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography style={{ wordWrap: "break-word" }}>{body}</Typography>
      </Grid>
    </Grid>
  );
};
