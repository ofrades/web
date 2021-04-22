import { styled } from "../stitches.config.js";
import { useState } from "react";

import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { EnvelopeOpenIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import HeadContainer from "./Head.jsx";
import Nav from "./Nav.jsx";
import Title from "./Title.jsx";
import Contact from "./Contact.jsx";
import Work from "./Work.jsx";
import Blog from "./Blog.jsx";
import Footer from "./Footer.jsx";

import { global } from "../stitches.config.js";

const globalStyles = global({
  body: { margin: 0, backgroundColor: "$grey800" },
});

const Container = styled("div", {
  fontFamily: `'JetBrains Mono', monospace`,
  display: "grid",
  gridTemplateAreas: `
  'nav nav nav'
  'title title title'
  'main main main'`,
  gridTemplateColumns: "1fr 5fr 1fr",
  gridTemplateRows: "5rem 8rem auto",
  backgroundColor: "$grey800",
  color: "$yellow500",
});

const Main = styled("div", {
  gridArea: "main",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  boxShadow: "1px 2px 8px $dark",
  padding: "1rem",
  margin: "2rem",
  minHeight: "40vh",
});

const Box = styled("a", {
  textDecoration: "none",
  cursor: "pointer",
  padding: "0.5rem",
  backgroundColor: "$dark",
  display: "flex",
  flexDirection: "row",
  alignSelf: "center",
  color: "$green500",
  "&:hover": {
    color: "$blue700",
  },
});

const Item = styled("h3", {
  margin: "0.5rem",
});

const Layout = ({ posts, children }) => {
  const [showContact, setShowContact] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showSlug, setShowSlug] = useState(children);

  globalStyles();
  return (
    <>
      <HeadContainer />
      <Container>
        <Nav
          setShowBlog={setShowBlog}
          setShowContact={setShowContact}
          setShowWork={setShowWork}
          showSlug={showSlug}
          setShowSlug={setShowSlug}
        />
        <Title />
        <Main>
          {showContact && <Contact />}
          {showWork && <Work />}
          {showBlog && <Blog posts={posts} />}
          {showSlug && children}
          {!showContact && !showWork && !showBlog && !showSlug && (
            <Box href="https://github.com/ofrades">
              <Item>
                <AccessibleIcon.Root label="GitHub">
                  <GitHubLogoIcon />
                </AccessibleIcon.Root>
              </Item>
              <Item>GitHub</Item>
            </Box>
          )}
        </Main>
        <Footer />
      </Container>
    </>
  );
};
export default Layout;
