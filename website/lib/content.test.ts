import { createClient } from "contentful";
import { afterEach, expect, it, vi } from "vitest";
import { getLastFrame } from "./content";

vi.mock("contentful", () => ({ createClient: vi.fn() }));
afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetAllMocks();
});

it("builds a usable image URL from the latest Contentful asset", async () => {
  vi.stubEnv("CONTENTFUL_SPACE", "test-space");
  vi.stubEnv("CONTENTFUL_ACCESS_TOKEN", "test-delivery-token");
  const getAssets = vi.fn().mockResolvedValue({
    items: [
      {
        sys: { createdAt: "2026-01-01T00:00:00Z" },
        fields: { file: { url: "//images.ctfassets.net/space/frame.jpg" } },
      },
    ],
  });
  vi.mocked(createClient, { partial: true }).mockReturnValue({ getAssets });
  expect(await getLastFrame()).toEqual({
    createdAt: "2026-01-01T00:00:00Z",
    src: "https://images.ctfassets.net/space/frame.jpg",
  });
  expect(getAssets).toHaveBeenCalledWith({
    order: ["-sys.createdAt"],
    limit: 1,
  });
});

it("renders without a Contentful account in local development and CI", async () => {
  vi.stubEnv("CONTENTFUL_SPACE", "");
  vi.stubEnv("CONTENTFUL_ACCESS_TOKEN", "");
  expect(await getLastFrame()).toBeNull();
  expect(createClient).not.toHaveBeenCalled();
});
