import React from "react";

export type LeftContentType = Array<{
  id: string
  title?: string,
  list?: Array<{
    id: string,
    linkPath: string,
    value?: string
  }>,
  text?: Array<{
    id: string,
    content?: string | React.ReactNode
  }>
}>
