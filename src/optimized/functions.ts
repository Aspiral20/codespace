import React, { Dispatch } from "react";

interface setterLangProps {
  setUseState: Dispatch<React.SetStateAction<boolean>>
  setter: string
}
export const setterLang = function({ setUseState, setter } : setterLangProps) {
  switch (setter) {
    case 'true':
      return setUseState(true)
    case 'false':
      return setUseState(true)
    case 'toggle':
      return setUseState(prevState => !prevState)
    default:
      console.error('Invalid setter!\nYou can use: true, false, toggle')
  }
}
