import { createFileRoute } from "@tanstack/react-router";

// 폴더내 index.tsx 경로로 할 경우 뒤에 / 하나더 붙음
export const Route = createFileRoute("/search/$keyword/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/search/keyword"!</div>;
}
