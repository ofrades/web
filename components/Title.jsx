import { styled } from "../stitches.config.js";

const Container = styled("div", {
  gridArea: "title",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const TitleHero = styled("h1", {
  fontFamily: `'Cardo', sans-serif`,
  fontWeight: "700",
  color: "$grey200",
  fontSize: "4rem",
});

const Title = () => {
  return (
    <Container>
      <TitleHero>🔭 ofrades</TitleHero>
    </Container>
  );
};

export default Title;
