import Layout from "../components/Layout.jsx";
import { getAllPosts } from "../lib/markdown";

const Home = ({ posts }) => {
  return <Layout posts={posts} />;
};
export default Home;

export function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
