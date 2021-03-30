import { styled } from "@stitches/react";

const Container = styled("div", {
  position: "fixed",
  left: "0",
  right: "0",
  bottom: "0",
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
    </Container>
  );
};

export default Footer;
