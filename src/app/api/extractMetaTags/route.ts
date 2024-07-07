import { NextRequest, NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (typeof url !== 'string') {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch the URL');
    }
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const metaTags = Array.from(document.querySelectorAll("meta")).reduce(
      (tags: Record<string, string>, meta) => {
        const metaElement = meta as HTMLMetaElement; // Type assertion
        const name =
          metaElement.getAttribute("name") ||
          metaElement.getAttribute("property") ||
          metaElement.getAttribute("itemprop");
        const content = metaElement.getAttribute("content");
        if (name && content) {
          tags[name] = content;
        }
        return tags;
      },
      {} as Record<string, string>
    );

    const data = {
      title:
        document.title ||
        metaTags["og:title"] ||
        metaTags["twitter:title"] ||
        "",
      description:
        metaTags["description"] ||
        metaTags["og:description"] ||
        metaTags["twitter:description"] ||
        "",
      image:
        metaTags["image"] ||
        metaTags["og:image"] ||
        metaTags["twitter:image"] ||
        "",
    };

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching Open Graph details", error);
    return NextResponse.json({ error: 'Failed to fetch metadata' }, { status: 500 });
  }
}
