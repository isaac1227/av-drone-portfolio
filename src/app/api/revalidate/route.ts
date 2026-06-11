import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

function isAuthorized(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return false;
  }

  const bearer = request.headers.get("authorization");
  if (bearer === `Bearer ${secret}`) {
    return true;
  }

  const urlSecret = request.nextUrl.searchParams.get("secret");
  return urlSecret === secret;
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let payload: { _type?: string; slug?: string } = {};

  try {
    payload = await request.json();
  } catch {
    // Algunos webhooks pueden no enviar body JSON.
  }

  if (payload._type && payload._type !== "work") {
    return NextResponse.json({ revalidated: false, ignored: true });
  }

  revalidatePath("/");
  revalidatePath("/portfolio");
  revalidatePath("/portfolio/[slug]", "page");
  revalidatePath("/sitemap.xml");

  if (payload.slug) {
    revalidatePath(`/portfolio/${payload.slug}`);
  }

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    type: payload._type ?? "unknown",
    slug: payload.slug ?? null,
  });
}
