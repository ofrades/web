import { styled } from "../stitches.config.js";

const Container = styled("div", {
  gridArea: "title",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const TitleHero = styled("h1", {
  fontFamily: `'JetBrains Mono', monospace`,
  fontWeight: "700",
  color: "$grey500",
  fontSize: "4rem",
});

const TitleText = styled("h3", {
  fontFamily: `'JetBrains Mono', monospace`,
  fontWeight: "200",
  fontStyle: "italic",
  color: "$grey200",
});

const Text = styled("h3", {
  fontFamily: `sans-serif`,
  fontWeight: "200",
  color: "$grey300",
});

const Title = () => {
  return (
    <Container>
      <TitleHero>ofrades</TitleHero>
      <TitleText>web developer</TitleText>
      <Text>carving fast and scalable web apps</Text>
    </Container>
  );
};

export default Title;
