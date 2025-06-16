import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* ✅ 데스크탑 사이드바 */}
      <aside className="hidden md:flex md:w-[240px] md:flex-col border-r">
        <div>데스크탑 사이드바</div>
      </aside>

      {/* ✅ 메인 영역: 모바일 기준 세로, 데스크탑은 우측 컬럼 */}
      <main className="flex flex-col flex-1 min-w-0 relative pb-16 md:pb-0">
        {/* ✅ 모바일/데스크탑 공통 Header */}
        <header className="h-14 border-b px-4 flex items-center">
          <div>데스크탑/모바일 공통 헤더</div>
        </header>

        {/* ✅ 페이지 콘텐츠 */}
        <section className="flex-1 overflow-auto p-4 w-full max-w-screen-xl mx-auto">
          <Outlet />
        </section>

        {/* ✅ 모바일 하단 메뉴 */}
        <footer className="fixed bottom-0 left-0 right-0 md:hidden border-t bg-background">
          <div>모바일 하단</div>
        </footer>
      </main>
    </div>
  );
}
