import {QueryClient} from '@tanstack/react-query';
import {createRootRouteWithContext, Outlet} from '@tanstack/react-router'
import React, {Suspense} from 'react'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    )

const ReactQueryDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
      import('@tanstack/react-query-devtools').then((res) => ({
        default: res.ReactQueryDevtools,
      })),
    )


export const Route = createRootRouteWithContext<{
  queryClient: QueryClient,
  auth: {
    name: string;
  },
}>()({
  component: RootComponent
})

function RootComponent() {
  return (
    <>
      <Outlet/>
      <Suspense fallback={null}>
        <TanStackRouterDevtools/>
        <ReactQueryDevtools initialIsOpen={false}/>
      </Suspense>
    </>
  )
}
