import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import MarkdownHighlight from "../../components/MarkdownHighlight";
import { getAllPosts, getPageContentBySlug } from "../../lib/markdown";
import { styled } from "../../stitches.config";

const Markdown = styled("div", {
  "& h1": {
    fontFamily: "$serif",
    color: "$red500",
    textAlign: "center",
  },
  "& h2": { fontFamily: "$serif", color: "$grey100" },
  "& h3": { fontFamily: "$serif", color: "$grey200" },
  "& h4": { fontFamily: "$serif", color: "$grey300" },
  "& h5": { fontFamily: "$serif", color: "$grey400" },
  "& h6": {
    fontFamily: "$mono",
    color: "$grey500",
    textAlign: "right",
  },
  "& ul": { color: "$blue400" },
  "& li": { color: "$blue500" },
  "& a": { color: "$green500" },
  "& code": {
    color: "$grey300",
    backgroundColor: "$grey900",
  },
});

const Box = styled("div", {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "space-around",
  backgroundColor: "$dark",
});

const Slug = ({ page }) => {
  const router = new useRouter();
  return router.isFallback ? (
    <div>Loading...</div>
  ) : (
    <Layout>
      <Markdown>
        <Box>
          <h1>{page.meta.title}</h1>
          <h2>{page.meta.description}</h2>
          <h6>🗓️ {page.meta.date}</h6>
        </Box>
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
