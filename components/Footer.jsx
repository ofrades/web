import { styled } from "@stitches/react";
import Social from "./Social";

const Container = styled("div", {
  gridArea: "footer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  color: "gainsboro",
  borderTop: "5px solid gainsboro",
});

const Footer = () => {
  return (
    <Container>
      <p>Thanks</p>
      <Social />
    </Container>
  );
};

export default Footer;
