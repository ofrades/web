import { styled } from "../stitches.config.js";

const Container = styled("div", {
  color: "$blue500",
});

const TitleText = styled("h3", {
  fontFamily: `'JetBrains Mono', monospace`,
  fontWeight: "200",
  fontStyle: "italic",
  color: "$green500",
});

const Blog = () => {
  return (
    <Container>
      <TitleText>
        Comming soon: (react.js, frontend, neovim, linux, terminal)
      </TitleText>
    </Container>
  );
};

export default Blog;
