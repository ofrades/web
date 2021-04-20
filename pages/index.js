import { styled } from "../stitches.config.js";
import { useState } from "react";
import HeadContainer from "../components/Head.jsx";
import Nav from "../components/Nav.jsx";
import Title from "../components/Title.jsx";
import Contact from "../components/Contact.jsx";
import Work from "../components/Work.jsx";
import Blog from "../components/Blog.jsx";
import { getAllPosts } from "../lib/markdown";
import Footer from "../components/Footer.jsx";

const Container = styled("div", {
  fontFamily: `'JetBrains Mono', monospace`,
  display: "grid",
  gridTemplateAreas: `
  'nav nav nav'
  'title title title'
  '. main .'
  'footer footer footer'`,
  gridTemplateColumns: "1fr 5fr 1fr",
  gridTemplateRows: "auto auto 50vh auto",
  backgroundColor: "$grey800",
  color: "$yellow500",
});

const Main = styled("div", {
  gridArea: "main",
  display: "flex",
  justifyContent: "start",
  alignItems: "start",
  overflow: "auto",
  boxShadow: "1px 2px 8px $dark",
  padding: "1rem",
  marginBottom: "2rem",
});

const Home = ({ posts }) => {
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
          {showContact && <Contact />}
          {showWork && <Work />}
          {showBlog && <Blog posts={posts} />}
        </Main>
        <Footer />
      </Container>
    </>
  );
};
export default Home;

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
