import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export function safeUrlFor(source?: SanityImageSource | null) {
  if (!source) {
    return null;
  }

  if (typeof source === "object" && "asset" in source) {
    const asset = source.asset;
    if (!asset || (!asset._ref && !asset._id)) {
      return null;
    }
  }

  return builder.image(source);
}
