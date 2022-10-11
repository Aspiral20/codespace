import React from "react";

type indexOrPath = {
  index?: boolean
} | {
  path?: string
}

export type RoutesType = {
  id: string
  index?: boolean
  path?: string
  element: React.ReactNode
  value: string
  subRoutes?: Array<RoutesSubtype>
  header?: boolean
}

export type RoutesSubtype = {
  id: string
  index?: boolean
  path?: string
  value?: string
}
