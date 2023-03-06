export default function useStringPath(pathname: string) {
	/*
	 * USE:
	 *
	 * const { pathname } = useLocation()
	 *
	 * const { params... } = useStringPath(pathname)
	 *
	 * __
	 *
	 * RETURN:
	 *
	 * { spacedPath, lastChildPath,  }
	 *
	 * __
	 *
	 * EXAMPLE:
	 *
	 * pathname: '/auth/registration/location'
	 *
	 * spacedPath: 'auth registration location'
	 *
	 * lastChildPath: 'location'
	 */

	let rezSpaces: string = '';

	const firstStepPath = pathname.split('/')
	const lengthPath = firstStepPath.length

	if (lengthPath === 1) {
		firstStepPath[0] = 'main'
	}
	firstStepPath.forEach(path => path !== '' ? rezSpaces += `${path} ` : null)

	const pathWithSpaces = rezSpaces.slice(0, -1)
	const lastElemFromPath = firstStepPath[lengthPath - 1]

	return {
		spacedPath: pathWithSpaces,
		lastChildPath: lastElemFromPath,
	}
}