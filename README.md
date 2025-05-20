# DBSTORE

Proyecto de tienda online desarrollado con React Native, NativeWind y Redux Toolkit, compatible con Android, IOS y Web.

## Requisitos

- Node.js >= 18
- Expo CLI
- Yarn o npm

## Instalación

1. Clona el repositorio:
   git clone https://github.com/martinvruiz/dbstore.git

2. Instala las dependencias:
   npm install
   # o
   yarn install

3. Instala dependencias nativas si usas Expo:
   npx expo install

## Uso

- Para correr en Android:
   npx expo start --android

- Para correr en Web:
   npx expo start --web

## Estructura principal

- `/screens` — Pantallas principales de la app (Login, Perfil, Órdenes, etc.)
- `/components` — Componentes reutilizables (Header, OrderItem, etc.)
- `/navigations` — Navegadores (Stack, BottomTab)
- `/hooks` — Hooks personalizados (useServices, useDB)
- `/features` — Slices de Redux
- `/services` — Servicios de API y RTK Query

## Tecnologías

- React Native
- Expo
- NativeWind (Tailwind CSS para React Native)
- Redux Toolkit & RTK Query
- React Navigation
- SQLite (expo-sqlite) para almacenamiento en mobile
- localStorage para almacenamiento en web
- expo-font y Google Fonts para fuentes personalizadas

## Autor

Martin Villalo Ruiz
