// eslint-disable-next-line @typescript-eslint/no-var-requires
const contentful = require("contentful");

import { Frame } from "./Frame";

function getClient() {
  const space = process.env.CONTENTFUL_SPACE;
  const environment = process.env.CONTENTFUL_ENVIRONMENT;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  const client = contentful.createClient({
    space,
    environment,
    accessToken,
  });
  return client;
}

export async function getLastFrame(): Promise<Frame | null> {
  const entries = await getClient().getAssets({
    order: "-sys.createdAt",
    limit: 1,
  });

  const data = entries?.items[0];
  if (!data) {
    return null;
  }

  return {
    createdAt: data.sys.createdAt,
    src: "https://" + data.fields.file.url,
  } as Frame;
}
