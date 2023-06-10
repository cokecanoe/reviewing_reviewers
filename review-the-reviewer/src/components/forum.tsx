import { Grid } from "@material-ui/core";
import { ForumPost, ForumPostProps } from "./forumPost";

interface ForumProps {
  posts: Array<ForumPostProps>;
}

const Forum = ({ posts }: ForumProps) => {
  return (
    <Grid
      container
      style={{ borderColor: "#000", borderWidth: 2, borderStyle: "solid" }}
      justifyContent="center"
    >
      {posts.map((post) => (
        <Grid item xs={10} style={{ padding: 20 }}>
          <ForumPost {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Forum;
