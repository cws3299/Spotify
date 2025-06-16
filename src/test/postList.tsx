import { getRouteApi } from "@tanstack/react-router";
const postRoute = getRouteApi("/testjson/");

const PostList = () => {
  const posts = postRoute.useLoaderData();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
