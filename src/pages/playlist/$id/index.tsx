import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/playlist/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/playlist/$id/"!</div>
}
