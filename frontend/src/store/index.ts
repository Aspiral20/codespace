import { combineReducers, createStore } from "redux";
import { CurLinkSubTechnologies, GlobalTogglesReducer, LanguageReducer, ReactTypeReducer } from './reducers'
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
	lang: LanguageReducer,
	type_icon: ReactTypeReducer,
	close_toggles: GlobalTogglesReducer,
	cur_link_sub_technologies: CurLinkSubTechnologies,
})

const store = createStore(reducers, composeWithDevTools())

export {
	store
}