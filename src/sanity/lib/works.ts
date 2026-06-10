import { client } from "./client";
import { worksQuery, workBySlugQuery, featuredWorksQuery } from "./queries";
import { Work } from "@/types/works";

export async function getWorks(): Promise<Work[]> {
  return client.fetch(worksQuery);
}

export async function getWorkBySlug(slug: string): Promise<Work | null> {
  return client.fetch(workBySlugQuery, { slug });
}

export async function getFeaturedWorks(): Promise<Work[]> {
  return client.fetch(featuredWorksQuery);
}
