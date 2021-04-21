import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import MarkdownHighlight from "../../components/MarkdownHighlight";
import { getAllPosts, getPageContentBySlug } from "../../lib/markdown";
import { styled } from "../../stitches.config";

const Markdown = styled("div", {
  "& h1": {
    fontFamily: `'Cardo', sans-serif`,
    color: "$red500",
    textAlign: "center",
  },
  "& h2": { fontFamily: `'Cardo', sans-serif` },
  "& h3": { fontFamily: `'Cardo', sans-serif` },
  "& h4": { fontFamily: `'Cardo', sans-serif` },
  "& h5": { fontFamily: `'Cardo', sans-serif` },
  "& h6": { fontFamily: `'Cardo', sans-serif` },
  "& p": { color: "$yellow400" },
  "& ul": { color: "$blue400" },
  "& li": { color: "$blue500" },
  "& a": { color: "$green500" },
});

const Slug = ({ page }) => {
  const router = new useRouter();
  return router.isFallback ? (
    <div>Loading...</div>
  ) : (
    <Layout>
      <Markdown>
        <h1>{page.meta.title}</h1>
        <h2>{page.meta.description}</h2>
        <ReactMarkdown source={page.content} />
      </Markdown>
    </Layout>
  );
};

export default Slug;

export async function getStaticProps({ params }) {
  const { slug } = params;
  const page = getPageContentBySlug(slug);
  return {
    props: {
      page: {
        ...page,
        markdown: page.content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }));
  return {
    paths,
    fallback: false, // false for production, true for testing on local
  };
}
