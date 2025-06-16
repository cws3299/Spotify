import { getPosts } from "@/test/api";
import PostList from "@/test/postList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/testjson/")({
  loader: async () => await getPosts(),
  component: RouteComponent,
});

//... createFileRoute 부분

function RouteComponent() {
  //   const navigate = useNavigate();
  //   const posts = Route.useLoaderData();

  // return (
  //   <div>
  //     <h1>Posts</h1>
  //     <p>Post Page</p>
  //     <ul>
  //       {posts.map((post) => (
  //         <li
  //           key={post.id}
  //           style={{
  //             marginBottom: "1rem",
  //             marginTop: "1rem",
  //           }}
  //         >
  //           <p>
  //             {/* <button> 컴포넌트를 사용하여 다른 경로로 이동할 수 있습니다. */}
  //             <button
  //               onClick={() => {
  //                 navigate({
  //                   to: "/posts/$postId",
  //                   params: { postId: post.id.toString() },
  //                 });
  //               }}
  //             >
  //               {post.title}
  //             </button>{" "}
  //           </p>
  //           {/* <Link> 컴포넌트를 사용하여 다른 경로로 이동할 수 있습니다. */}
  //           <p>
  //             <Link to="/posts/$postId" params={{ postId: post.id.toString() }}>
  //               {post.title}
  //             </Link>
  //           </p>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  return <PostList />;
}
