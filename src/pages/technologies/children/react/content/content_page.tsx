import { v4 as uuid } from 'uuid'
import React from "react";

export const getReactContent = {
  react: {
    id: uuid(),
    page: [
      {
        id: uuid(),
        title: <>
          React start page content
        </>
      },
    ]
  },
}
