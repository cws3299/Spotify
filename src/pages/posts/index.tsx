import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
  component: RouteComponent,
});

function RouteComponent() {
  // params관련 이동 세가지
  // return (
  //   <div>
  //     <h1>Posts</h1>
  //     <p>Post Page</p>
  //     <Link to="/posts/$postId" params={{ postId: "2" }}>
  //       Post 2
  //     </Link>
  //   </div>
  // );
  // const navigate = useNavigate({ from: "/posts" });
  // return (
  //   <button
  //     onClick={() => {
  //       navigate({ to: "$postId", params: { postId: "2" } });
  //     }}
  //   >
  //     post 2
  //   </button>
  // );
  // const navigate = useNavigate();
  // return (
  //   <button
  //     onClick={() => {
  //       navigate({ to: "/posts/$postId", params: { postId: "2" } });
  //     }}
  //   >
  //     post 2
  //   </button>
  // );
  // searchParams관련 이동
  // return (
  //   <Link to="/posts" search={{ page: 1 }}>
  //     Search
  //   </Link>
  // );

  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate({
          to: "/posts",
          search: { page: 1 },
        });
      }}
    >
      Button Search 1
    </button>
  );
}
