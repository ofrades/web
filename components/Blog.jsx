import { styled } from "../stitches.config.js";

const Container = styled("div", {
  color: "$blue500",
});

const Title = styled("h1", {
  fontFamily: `'JetBrains Mono', monospace`,
  fontStyle: "italic",
  color: "$red500",
});

const PostTitle = styled("a", {
  fontFamily: `'JetBrains Mono', monospace`,
  fontStyle: "italic",
  color: "$green500",
});

const PostDescription = styled("h3", {
  fontFamily: `'Cardo', sans-serif`,
  color: "$blue500",
});

const Blog = ({ posts }) => {
  return (
    <Container>
      <Title>My day to day task rumblings</Title>
      {posts.map((post) => (
        <>
          <PostTitle href={`blog/${post.slug}`} key={post.meta.title}>
            {post.meta.title}
          </PostTitle>
          <PostDescription key={post.meta.description}>
            {post.meta.description}
          </PostDescription>
        </>
      ))}
    </Container>
  );
};

export default Blog;
