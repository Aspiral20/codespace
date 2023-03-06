import { MutableRefObject, RefObject, useEffect, useState } from 'react'

const useIsOnScreen = (ref: RefObject<any> | MutableRefObject<any>) => {
	const [isIntersecting, setIntersecting] = useState(false)

	const observer = new IntersectionObserver(([entry]) =>
		setIntersecting(entry.isIntersecting)
	)

	useEffect(() => {
		observer.observe(ref && ref.current)
		// Remove the observer as soon as the component is unmounted
		return () => {
			observer.disconnect()
		}
	}, [observer, ref])

	return isIntersecting
}

export default useIsOnScreen
