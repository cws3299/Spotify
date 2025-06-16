import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside className="hidden md:flex md:w-[240px] md:flex-col border-r">
        <div>데스크탑 사이드바</div>
      </aside>

      <main className="flex flex-col flex-1 relative pb-16 md:pb-0">
        <header className="h-14 border-b px-4 flex items-center">
          <div>데스크탑/모바일 공통 헤더</div>
        </header>

        <section className="flex-1 overflow-auto p-4">
          <Outlet />
        </section>
        <footer className="fixed bottom-0 left-0 right-0 md:hidden border-t bg-background">
          <div>모바일 하단</div>
        </footer>
      </main>
    </div>
  );
}
