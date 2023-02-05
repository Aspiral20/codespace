import { v4 as uuid } from 'uuid'
import { techContentType } from "../../../@types/tech_content.types";
import React from "react";

export const getTechContent: techContentType = {
  technologies: {
    id: uuid(),
    page: [
      {
        id: uuid(),
        title: <>
          Technologies start page content:
        </>
      }
    ]
  }
}