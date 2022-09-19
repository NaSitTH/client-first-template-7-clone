import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export const blogsDirectory = join(process.cwd(), "_blogs");
export const eventsDirectory = join(process.cwd(), "_events");
export const projectsDirectory = join(process.cwd(), "_projects");

export function getAllBlogs(fields: string[] = []) {
  const slugs = getBlogSlugs();
  const blogs = slugs
    .map((slug) => getBySlug(slug, fields, blogsDirectory))
    // sort posts by date in descending order
    .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
  return blogs;
}

export function getAllEvents(fields: string[] = []) {
  const slugs = getEventSlugs();
  const events = slugs
    .map((slug) => getBySlug(slug, fields, eventsDirectory))
    // sort posts by date in descending order
    .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
  return events;
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getBySlug(slug, fields, projectsDirectory))
    // sort posts by date in descending order
    .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
  return projects;
}

export function getBySlug(
  slug: string,
  fields: string[] = [],
  directory: string
) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(directory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getBlogSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getEventSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}
