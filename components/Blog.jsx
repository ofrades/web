import { styled } from "../stitches.config.js";
import Separator from "./Separator";

const Container = styled("div", {
  color: "$blue500",
});

const Title = styled("h1", {
  fontFamily: "$mono",
  fontStyle: "italic",
  color: "$red500",
});

const Post = styled("div", {
  backgroundColor: "$dark",
  padding: "0.3rem 1rem",
  margin: "1rem 0",
  "& a": {
    textDecoration: "none",
  },
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const PostDate = styled("p", {
  fontFamily: "$mono",
  fontSize: "0.7rem",
  fontStyle: "bold",
  color: "$yellow500",
});

const PostTitle = styled("h1", {
  fontFamily: "$serif",
  fontSize: "2rem",
  color: "$green500",
});

const PostDescription = styled("h3", {
  fontFamily: "$serif",
  fontStyle: "italic",
  color: "$blue500",
});

const Blog = ({ posts }) => {
  return (
    <Container>
      <Title>📑 My day to day task rumblings</Title>
      {posts.map((post) => (
        <Post>
          <a href={`blog/${post.slug}`}>
            <Box>
              <PostTitle href={`blog/${post.slug}`} key={post.meta.title}>
                Title: {post.meta.title}
              </PostTitle>
              <PostDate>🗓️ {post.meta.date}</PostDate>
            </Box>
            <Separator />
            <PostDescription key={post.meta.description}>
              Description: {post.meta.description}
            </PostDescription>
          </a>
        </Post>
      ))}
    </Container>
  );
};

export default Blog;
