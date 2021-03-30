import { styled } from "@stitches/react";

const Container = styled("div", {
  gridArea: "title",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const TitleHero = styled("h1", {
  fontFamily: `'JetBrains Mono', monospace`,
  fontWeight: "700",
  color: "black",
  fontSize: "4rem",
});

const TitleText = styled("h3", {
  fontFamily: `'JetBrains Mono', monospace`,
  fontWeight: "200",
  fontStyle: "italic",
  color: "slategray",
});

const Text = styled("h3", {
  fontFamily: `sans-serif`,
  fontWeight: "200",
  color: "darkslategrayy",
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
