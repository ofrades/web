import { styled } from "@stitches/react";
import { useState } from "react";
import HeadContainer from "../components/Head.jsx";
import Nav from "../components/Nav.jsx";
import Title from "../components/Title.jsx";
import Contact from "../components/Contact.jsx";
import Work from "../components/Work.jsx";
import Blog from "../components/Blog.jsx";
import Footer from "../components/Footer.jsx";

const Container = styled("div", {
  fontFamily: `'JetBrains Mono', monospace`,
  display: "grid",
  gridTemplateAreas: `'nav nav nav' 'title title title' '. main .' 'footer footer footer'`,
  gridTemplateColumns: "1fr 5fr 1fr",
});

const Main = styled("div", {
  gridArea: "main",
  display: "flex",
  justifyContent: "start",
  alignItems: "start",
  overflow: "auto",
  color: "darkslategray",
  backgroundColor: "white",
  boxShadow: "1px 2px 8px gainsboro",
  padding: "1rem",
});

const Home = () => {
  const [showContact, setShowContact] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showBlog, setShowBlog] = useState(false);

  return (
    <>
      <HeadContainer />
      <Container>
        <Nav
          setShowBlog={setShowBlog}
          setShowContact={setShowContact}
          setShowWork={setShowWork}
        />
        <Title />
        <Main>
          {showContact && !showWork && <Contact />}
          {!showContact && showWork && <Work />}
          {!showContact && !showWork && showBlog && <Blog />}
        </Main>
        <Footer />
      </Container>
    </>
  );
};
export default Home;
