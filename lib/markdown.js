import { join } from "path";
import fs from "fs";
import matter from "gray-matter";

// Directory of posts
const pagesDirectory = join(process.cwd(), "_posts");

// Form slugs from the markdown names
export function getSlugsFromDirectory(dir) {
  return fs.readdirSync(dir);
}

/**
 * Gets the contents of a file
 * The gray-matter (metadata at the top of the file) will be
 * added to the item object, the content will be in
 * item.content and the file name (slug) will be in item.slug.
 */
export function getBySlug(dir, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug: realSlug, meta: data, content };
}

// Returns contents of a page in the _posts directory
export function getPageContentBySlug(slug, fields = []) {
  return getBySlug(pagesDirectory, slug, fields);
}

// Returns pages in the _posts directory
export function getAllPosts(fields = []) {
  const slugs = getSlugsFromDirectory(pagesDirectory);
  const pages = slugs.map((slug) => getPageContentBySlug(slug, fields));
  return pages;
}
