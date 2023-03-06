import React from "react";

export type RoutesTypes = {
	id: string
	index?: boolean
	path?: string
	element: React.ReactNode
	value?: string
	subRoutes?: Array<RoutesSubtype>
	header?: boolean
}

export type RoutesSubtype = {
	id: string
	index?: boolean
	path?: string
	value?: string
}
