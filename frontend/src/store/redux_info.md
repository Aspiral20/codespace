## Pachetele npm folosite:

**install:** `npm i react react-redux`

1. react
2. react-redux

## Pasii de creare a unui 'store'

1. Create a reducer
2. Create a store with 'createStore'.
3. Connect Provider into React index.js
4. Manipularea cu datele

### (1) Cream un reducer:

#### Parametrii Reducer:

```
reducer (
  state: obligatoriu = { ... }
  action: obligatoriu = { type: obligatoriu, ... }
)
```

Reducer - o functie js in care exista 2 parametri: state, action

```
const reducer = (state, action: { type: string, ... }) => {
  ...
}
```

Toata logica la Redux - ce action a fost trimis in functie (reducer)

```
const reducer = (state, action: { type: string, ... }) => {
  switch(action.type) {
    case '':
    
    .
    .
    .
    
    default:
      return state
  }
}
```

State - Obiect sau Array sau Variabila care stocheaza careva date.

Exemplu:

```
const reducer = (state = { money: 0 }, action: { type: string, payload: number }) => {
  switch(action.type) {
  
    case 'ADD':
      return {...state, money: state.money + action.payload }
    
    default:
      return state
      
  }
}
```

De fiecare data cand schimbam careva date, trebuie sa cream o copie a obiectului/datelor: `{ ...state }`

```
const initState = { money: 0, type_payload: '', ... }

.
.
.

case 'ADD':
  return { ...state, money: state.money + action.payload, type_payload: action.type_payload }
```

### (2) Dupa ce am creat Reducer, cream un 'store' folosind:

```
const store = createStore(reducer)
```

### (3) Conectam Provider in index.js, ii dam ca parametru 'store' creat.

```
<Provider store={store}>
  <App/>
</Provider>
```

### (4) Manipularea cu datele

Cream un dispatch cu ajutorul hook-ului 'useDispatch'

```
const dispatch = useDispatch()
```

Primim datele cu 'useSelector'

```
const money = useSelector(state => state.money)
                                           ^ - state's field
```

Schimbam datele cu ajutorul 'dispatch' (useDispatch) deja creat.

!!! `dispatch` manipuleaza doar cu field-ul `action`

```
dispatch({type: "ADD", payload: 5})
```

# Combine reducers:

Folosim 'combineReducers' pentru a combina mai multi reducers

```
const reducers = combineReducers({
  name_reducer: reducer
  ...
})
```

Cand primim datele din store:

```
useSelector(state => state.name_reducer.state_field)
                            ^ => useSelector(state => state.type_icon.codeType)
```

Pentru a observa schimbarile state-urilor, trebuie de instalat un pachet: (comfort)

## Redux-devtools-extension

Permite sa folosesti middleware + inspect (in browser)

1. **install:** `npm i redux-devtools-extension`
2. `store/index.js`: `const store = createStore(reducers, composeWithDevTools())  <- adaugam`
3. Instalam in browser extensia: `redux devtools`