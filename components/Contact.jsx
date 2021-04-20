import { styled } from "../stitches.config.js";

const Container = styled("div", {
  color: "$blue500",
});

const Button = styled("a", {
  padding: "1rem",
  marginRight: "1rem",
  backgroundColor: "$grey100",
  color: "$blue500",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "$grey800",
    border: "2px solid $blue500",
    color: "$green600",
  },
});

const Line = styled("h1", {
  fontFamily: `'Cardo', sans-serif`,
  color: "$blue500",
});

const Contact = () => {
  return (
    <Container>
      <Line>We can always arrange an 30 min talk</Line>
      <Button href="mailto:miguel@ofrades.com">Let's talk</Button>
    </Container>
  );
};

export default Contact;
