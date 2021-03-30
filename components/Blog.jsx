import { styled } from "@stitches/react";

const Container = styled("div", {
  color: "darkslategray",
});

const TitleText = styled("h3", {
  fontFamily: `'JetBrains Mono', monospace`,
  fontWeight: "200",
  fontStyle: "italic",
  color: "slategray",
});

const Blog = () => {
  return (
    <Container>
      <TitleText>Comming soon:</TitleText>
    </Container>
  );
};

export default Blog;
