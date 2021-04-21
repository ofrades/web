import { styled } from "../stitches.config.js";
import Social from "./Social";

const Container = styled("div", {
  position: "fixed",
  bottom: "0",
  display: "flex",
  width: "100%",
  height: "1rem",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem 0",
  color: "$grey800",
  backgroundColor: "$green600",
  borderTop: "5px solid $green700",
});

const Footer = () => {
  return (
    <Container>
      <Social />
    </Container>
  );
};

export default Footer;
