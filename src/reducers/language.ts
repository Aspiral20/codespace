export function language(state = {lng: false}, action: string) {
  switch (action) {
    case 'OPEN':
      return { lng: true }
    case 'CLOSE':
      return { lng: false }
    case 'TOGGLE':
      return { lng: !state.lng}
    default:
      console.group('Logical error redux => "headerLanguage"')
      console.error('Enter right action.')
      console.log('You can use fields: \nOPEN \nCLOSE \nTOGGLE')
      console.groupEnd()
      break
  }
}
export default language