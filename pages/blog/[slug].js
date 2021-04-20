import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import MarkdownHighlight from "../../components/MarkdownHighlight";
import { getAllPosts, getPageContentBySlug } from "../../lib/markdown";

const Slug = ({ page }) => {
  const router = new useRouter();
  return router.isFallback ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>{page.title}</h1>
      <h2>{page.description}</h2>
      <ReactMarkdown
        source={page.content}
        renderers={{
          code: ({ language, value }) => {
            return <MarkdownHighlight language={language} value={value} />;
          },
        }}
      />
    </div>
  );
};

export default Slug;

export async function getStaticProps({ params }) {
  const { slug } = params;
  const page = getPageContentBySlug(slug, [
    "title",
    "description",
    "image",
    "slug",
    "content",
    "date",
  ]);
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
