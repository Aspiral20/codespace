import { v4 as uuid } from 'uuid'
import React from "react";

export const getRegexContent = {
  regex: {
    id: uuid(),
    page: [
      {
        id: uuid(),
        title: <>
          Regex start page content
        </>
      },
    ]
  },
  base: {
    id: uuid(),
    page: [
      {
        id: uuid(),
        title: <>
          Base
        </>
      },
    ]
  },
  examples: {
    id: uuid(),
    page: [
      {
        id: uuid(),
        title: <>
          Examples
        </>
      },
    ]
  },
}
