import { styled } from "../stitches.config.js";
import * as Toolbar from "@radix-ui/react-toolbar";

const Container = styled(Toolbar.Root, {
  gridArea: "nav",
  display: "flex",
  justifyContent: "space-around",
});

const Button = styled(Toolbar.Button, {
  fontFamily: `'JetBrains Mono', monospace`,
  fontWeight: "700",
  fontSize: "1.25rem",
  padding: "1rem",
  width: "100%",
  backgroundColor: "$grey900",
  color: "$green500",
  border: "none",
  borderBottom: "5px solid $dark",
  cursor: "pointer",
  "&:hover": {
    color: "$green600",
  },
  "&:focus": {
    outline: "0",
    color: "$yellow500",
  },
});

const Nav = ({ setShowBlog, setShowContact, setShowWork }) => {
  const handleContact = () => {
    setShowContact(true);
    setShowWork(false);
    setShowBlog(false);
  };

  const handleWork = () => {
    setShowWork(true);
    setShowContact(false);
    setShowBlog(false);
  };

  const handleBlog = () => {
    setShowBlog(true);
    setShowContact(false);
    setShowWork(false);
  };
  return (
    <Container>
      <Button onClick={handleContact}>Contact</Button>
      <Button onClick={handleWork}>Work</Button>
      <Button onClick={handleBlog}>Blog</Button>
    </Container>
  );
};

export default Nav;
