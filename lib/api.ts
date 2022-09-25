import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export const blogsDirectory = join(process.cwd(), "_blogs");
export const eventsDirectory = join(process.cwd(), "_events");
export const projectsDirectory = join(process.cwd(), "_projects");

export function getAllBlogs(fields: string[] = []) {
  const slugs = fs.readdirSync(blogsDirectory);
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug, fields))
    // sort by date in descending order
    .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
  return blogs;
}

export function getAllEvents(fields: string[] = []) {
  const slugs = fs.readdirSync(eventsDirectory);
  const events = slugs
    .map((slug) => getEventBySlug(slug, fields))
    // sort by date in descending order
    .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
  return events;
}

export function getAllProjects(fields: string[] = []) {
  const slugs = fs.readdirSync(projectsDirectory);
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // sort by date in descending order
    .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
  return projects;
}

export function getBlogBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogsDirectory, `${realSlug}.md`);
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

export function getEventBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(eventsDirectory, `${realSlug}.md`);
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

export function getProjectBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
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

export function getFourBlogs() {
  const blogs = getAllBlogs(["title", "excerpt", "coverImage", "slug", "date"]);
  const fourBlogs = blogs.slice(0, 4);
  return fourBlogs;
}

export function getTwoEvents() {
  const events = getAllEvents(["title", "date", "slug"]);
  const twoEvents = events.slice(0, 2);
  return twoEvents;
}

export function getThreeProjects() {
  const projects = getAllProjects([
    "title",
    "excerpt",
    "coverImage",
    "slug",
    "date",
  ]);
  const threeProjects = projects.slice(0, 3);
  return threeProjects;
}
