import { styled } from "../stitches.config.js";
import * as Toolbar from "@radix-ui/react-toolbar";
import { useRouter } from "next/router";

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

const Nav = ({
  setShowBlog,
  setShowContact,
  setShowWork,
  showSlug,
  setShowSlug,
}) => {
  const router = useRouter();
  const handleContact = () => {
    setShowContact(true);
    setShowWork(false);
    setShowBlog(false);
    setShowSlug(false);
    router.push("/");
  };

  const handleWork = () => {
    setShowWork(true);
    setShowContact(false);
    setShowBlog(false);
    setShowSlug(false);
    router.push("/");
  };

  const handleBlog = () => {
    setShowBlog(true);
    setShowContact(false);
    setShowWork(false);
    setShowSlug(false);
    router.push("/");
  };
  const handleSlug = () => {
    setShowSlug(true);
    setShowBlog(false);
    setShowContact(false);
    setShowWork(false);
    router.push("/");
  };
  return (
    <Container>
      {!showSlug ? (
        <>
          <Button onClick={handleContact}>Contact</Button>
          <Button onClick={handleWork}>Work</Button>
          <Button onClick={handleBlog}>Blog</Button>
        </>
      ) : (
        <Button onClick={handleSlug}>Back</Button>
      )}
    </Container>
  );
};

export default Nav;
