import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_testLayout/test/news/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/test/news"!</div>;
}
