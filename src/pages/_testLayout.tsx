import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_testLayout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Test Layout</h1>
      <Outlet />
    </div>
  );
}
