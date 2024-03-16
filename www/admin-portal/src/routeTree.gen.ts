/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as AuthenticatedIndexImport } from './routes/_authenticated/index'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as AuthenticatedDashboardWalletIndexImport } from './routes/_authenticated/dashboard/wallet/index'
import { Route as AuthenticatedDashboardVerifyIndexImport } from './routes/_authenticated/dashboard/verify/index'
import { Route as AuthenticatedDashboardHomeIndexImport } from './routes/_authenticated/dashboard/home/index'
import { Route as AuthenticatedDashboardWalletCashHistoryImport } from './routes/_authenticated/dashboard/wallet/cash-history'
import { Route as AuthenticatedDashboardHomeUsersImport } from './routes/_authenticated/dashboard/home/users'
import { Route as AuthenticatedDashboardHomeEventsImport } from './routes/_authenticated/dashboard/home/events'

// Create/Update Routes

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexRoute = AuthenticatedIndexImport.update({
  path: '/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedDashboardWalletIndexRoute =
  AuthenticatedDashboardWalletIndexImport.update({
    path: '/dashboard/wallet/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedDashboardVerifyIndexRoute =
  AuthenticatedDashboardVerifyIndexImport.update({
    path: '/dashboard/verify/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedDashboardHomeIndexRoute =
  AuthenticatedDashboardHomeIndexImport.update({
    path: '/dashboard/home/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedDashboardWalletCashHistoryRoute =
  AuthenticatedDashboardWalletCashHistoryImport.update({
    path: '/dashboard/wallet/cash-history',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedDashboardHomeUsersRoute =
  AuthenticatedDashboardHomeUsersImport.update({
    path: '/dashboard/home/users',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedDashboardHomeEventsRoute =
  AuthenticatedDashboardHomeEventsImport.update({
    path: '/dashboard/home/events',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/': {
      preLoaderRoute: typeof AuthenticatedIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/dashboard/home/events': {
      preLoaderRoute: typeof AuthenticatedDashboardHomeEventsImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/dashboard/home/users': {
      preLoaderRoute: typeof AuthenticatedDashboardHomeUsersImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/dashboard/wallet/cash-history': {
      preLoaderRoute: typeof AuthenticatedDashboardWalletCashHistoryImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/dashboard/home/': {
      preLoaderRoute: typeof AuthenticatedDashboardHomeIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/dashboard/verify/': {
      preLoaderRoute: typeof AuthenticatedDashboardVerifyIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/dashboard/wallet/': {
      preLoaderRoute: typeof AuthenticatedDashboardWalletIndexImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  AuthenticatedRoute.addChildren([
    AuthenticatedIndexRoute,
    AuthenticatedDashboardHomeEventsRoute,
    AuthenticatedDashboardHomeUsersRoute,
    AuthenticatedDashboardWalletCashHistoryRoute,
    AuthenticatedDashboardHomeIndexRoute,
    AuthenticatedDashboardVerifyIndexRoute,
    AuthenticatedDashboardWalletIndexRoute,
  ]),
  AuthLoginRoute,
])

/* prettier-ignore-end */
