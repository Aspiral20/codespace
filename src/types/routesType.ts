import React from "react";


export type RoutesType = {
  id: string
  element: React.ReactNode
  index?: boolean
  path?: string
  subRoutes?: Array<RoutesSubtype>
}

export type RoutesSubtype = {
  id: string
  element: React.ReactNode
  index?: boolean
  path?: string
}
