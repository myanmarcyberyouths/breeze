import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createRouter, ErrorComponent, RouterProvider} from "@tanstack/react-router";
import {routeTree} from "~/routeTree.gen.ts";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
    },
  },
});

const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: undefined,
  },
  defaultErrorComponent: ({error}) => <ErrorComponent error={error}/>,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});


declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const WithAuthProvider = () => {


  return (
    <RouterProvider
      router={router}
    />
  );
}

const App = () => {
  return (

    <QueryClientProvider client={queryClient}>
        <WithAuthProvider/>
    </QueryClientProvider>
  )

};

export default App;
