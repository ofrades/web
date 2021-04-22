import { styled } from "../stitches.config.js";

const Container = styled("div", {
  color: "$blue500",
});

const Title = styled("h1", {
  fontFamily: `'JetBrains Mono', monospace`,
  fontStyle: "italic",
  color: "$red500",
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const Button = styled("a", {
  padding: "1rem",
  margin: "1rem",
  backgroundColor: "$grey100",
  color: "$blue500",
  textDecoration: "none",
  border: "2px solid transparent",
  "&:hover": {
    backgroundColor: "$grey800",
    border: "2px solid $blue500",
    color: "$green600",
  },
});

const Line = styled("h1", {
  fontFamily: `'Cardo', sans-serif`,
  color: "$blue500",
  padding: "1rem",
});

const Contact = () => {
  return (
    <Container>
      <Title>📮 Chat</Title>
      <Box>
        <Button href="mailto:miguel@ofrades.com">🖋️ Let's talk</Button>
        <Line>We can always arrange an 30 min talk</Line>
      </Box>
    </Container>
  );
};

export default Contact;
