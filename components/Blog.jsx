import { styled } from "../stitches.config.js";

const Container = styled("div", {
  color: "$blue500",
});

const Title = styled("a", {
  fontFamily: `'JetBrains Mono', monospace`,
  fontStyle: "italic",
  color: "$green500",
});
const Text = styled("h3", {
  fontFamily: `'Cardo', sans-serif`,
  color: "$blue500",
});

const Blog = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => (
        <div key={post.meta.title}>
          <Title href={`blog/${post.slug}`}>{post.meta.title}</Title>
          <Text>{post.meta.description}</Text>
        </div>
      ))}
    </Container>
  );
};

export default Blog;
