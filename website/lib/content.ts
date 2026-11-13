import { createClient } from "contentful";
import type { Frame } from "./Frame";

export async function getLastFrame(): Promise<Frame | null> {
  const space = process.env.CONTENTFUL_SPACE;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  if (!space || !accessToken) return null;

  const client = createClient({
    space,
    environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
    accessToken,
  });
  const entries = await client.getAssets({
    order: ["-sys.createdAt"],
    limit: 1,
  });
  const data = entries.items[0];
  const url = data?.fields.file?.url;
  if (!data || !url) return null;

  return {
    createdAt: data.sys.createdAt,
    src: new URL(url, "https://images.ctfassets.net").href,
  };
}
