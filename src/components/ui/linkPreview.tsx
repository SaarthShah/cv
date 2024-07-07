import Link from "next/link";
import { useEffect, useState } from "react";

async function fetchMetaTags(url: string) {
  const response = await fetch(
    `/api/extractMetaTags?url=${encodeURIComponent(url)}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch metadata");
  }
  return response.json();
}

const LinkPreview = ({ url }: { url: string }) => {
  const [data, setData] = useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMetaTags(url)
      .then(setData)
      .catch((err) => setError(err.message));
  }, [url]);

  if (error) {
    return <p>Failed to fetch link preview: {error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <Link
      href={url}
      target="_blank"
      className="flex h-full w-full max-w-lg cursor-pointer flex-col items-center rounded-lg bg-gray-100 text-left text-black transition-shadow duration-300"
      style={{ textDecoration: "none" }}
    >
      <div className="w-full">
        <img
          src={data.image}
          alt=""
          className="w-full rounded-t-lg object-cover object-top"
          style={{ minHeight: "149px", maxHeight: "149px" }}
        />
      </div>
      <div
        className="flex w-full flex-col justify-between rounded-b-lg p-4"
        style={{ minHeight: "150px", maxHeight: "150px" }}
      >
        <h3 className="text-md mb-1 font-semibold">{data.title}</h3>
        <p className="mb-1 text-sm text-gray-700">
          {data.description.length > 75
            ? `${data.description.substring(0, 75)}...`
            : data.description}
        </p>
        <span className="text-xs text-gray-500">{url.substring(0, 50)}</span>
      </div>
    </Link>
  );
};

export default LinkPreview;
