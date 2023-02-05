import React from "react";
import {v4 as uuid} from 'uuid'

export const getHooksContent = {
  hooks: {
    id: 'is_on_screen',
    page: [
      {
        id: uuid(),
        title: <>
          Hooks start page content
        </>
      },
    ]
  },
  is_on_screen: {
    id: 'is_on_screen',
    page: [
      {
        id: uuid(),
        title: <>
          Is On Screen
        </>
      },
    ]
  }
}