import { createFileRoute, Link, useParams } from "@tanstack/react-router";

interface postSearchParams {
  page?: number;
}

export const Route = createFileRoute("/posts/$postId/")({
  validateSearch: (search: Record<string, unKnown>): postSearchParams => {
    return {
      page: search.page ? Number(search.page) : undefined,
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  // const { postId } = useParams({ strict: false });
  // // const { postId } = Route.useParams();
  // return (
  //   <div>
  //     `Hello "/posts/{postId}/{postId}`
  //   </div>
  // );
  /// searchParams 관련
  // return (
  //   <Link to="/posts/$postid" params={{ postID: "2" }} search={{ page: 1 }}>
  //     Search 1
  //   </Link>
  // );

  const { page } = Route.useSearch();
  return <h1>`Search Page: ${page}`</h1>;
}
