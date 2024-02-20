type Props = { pageParam?: number };

export const getPostRecommends = async ({ pageParam }: Props) => {
  const res = await fetch(`http://localhost:9090/api/postRecommends?cursor=${pageParam}`, {
    next: {
      tags: ["posts", "recommends"],
    },
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default getPostRecommends;
