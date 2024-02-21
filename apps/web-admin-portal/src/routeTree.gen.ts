/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthImport } from './routes/_auth'
import { Route as RouteImport } from './routes/route'
import { Route as PostsIndexImport } from './routes/posts/index'
import { Route as AuthAuthLoginImport } from './routes/_auth/auth/login'

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const RouteRoute = RouteImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  path: '/posts/',
  getParentRoute: () => rootRoute,
} as any)

const AuthAuthLoginRoute = AuthAuthLoginImport.update({
  path: '/auth/login',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof RouteImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/posts/': {
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth/auth/login': {
      preLoaderRoute: typeof AuthAuthLoginImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  RouteRoute,
  AuthRoute.addChildren([AuthAuthLoginRoute]),
  PostsIndexRoute,
])

/* prettier-ignore-end */
