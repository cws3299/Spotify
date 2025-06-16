import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/playlist/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/playlist/"!</div>;
}
