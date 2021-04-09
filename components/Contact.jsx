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

const Contact = () => {
  return (
    <Container>
      <TitleText css={{ margin: "1rem" }}>If you want to talk:</TitleText>
      <ul>
        <li>We can arrange an 30 min talk</li>
        <li>Or you can pass by my address</li>
      </ul>
    </Container>
  );
};

export default Contact;
