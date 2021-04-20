import { styled } from "../stitches.config.js";
import Social from "./Social";

const Container = styled("div", {
  gridArea: "footer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
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
