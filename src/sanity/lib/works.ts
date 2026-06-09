import { client } from "./client";
import { worksQuery } from "./queries";
import { Work } from "@/types/works";

export async function getWorks(): Promise<Work[]> {
  return client.fetch(worksQuery);
}
