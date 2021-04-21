import { join } from "path";
import fs from "fs";
import matter from "gray-matter";

const pagesDirectory = join(process.cwd(), "_posts");

export function getSlugsFromDirectory(dir) {
  return fs.readdirSync(dir);
}

export function getBySlug(dir, slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug: realSlug, meta: data, content };
}

export function getPageContentBySlug(slug, fields = []) {
  return getBySlug(pagesDirectory, slug, fields);
}

export function getAllPosts(fields = []) {
  const slugs = getSlugsFromDirectory(pagesDirectory);
  const pages = slugs.map((slug) => getPageContentBySlug(slug, fields));
  return pages;
}
