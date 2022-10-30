# Toolkit Redux - RTK Query

App de practica, Redux Tolkit y RTK Query

## Reconstruir los modulos de node

Ejecutar el siguiente comando en la terminal:

```
yarn
```

## Rutas

- /

  - CounterApp
  - _Tollkit (Slice, Thunk)_

- /pokemon

  - PokemonApp
  - _Tollkit (Slice, Thunk)_

- /todo
  - TodoApp
  - _RTK Query_

## Estructura del arbol de directorios

**Carpeta src**

```.
├── api
│   └── pokemonApi.js
├── App.css
├── App.jsx
├── assets
│   └── react.svg
├── index.css
├── main.jsx
├── pages
│   ├── CounterApp.jsx
│   ├── PokemonApp.jsx
│   └── TodoApp.jsx
└── store
├── api
│   └── todosApi.js
├── index.js
├── slices
│   ├── counter
│   │   ├── counterSlice.js
│   │   └── index.js
│   └── pokemon
│   ├── index.js
│   ├── pokemonSlice.js
│   └── thunks.js
└── store.js
```
