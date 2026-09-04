# CustomerRepairApp

A cross-platform mobile app for tracking customer device repairs.

## Overview

CustomerRepairApp is a React Native (Expo) application for small repair shops to log, browse, search, and update customer repair records — customer name, device brand/model, issue description, spare parts used, total price, and repair date. Data is stored locally on-device using Realm, with Redux managing in-memory app state.

## Features

- Add new repair records with customer, device, issue, parts, price, and date details
- View all repairs in a searchable list (filter by customer name)
- Edit existing repairs, including picking a new repair date with a native date picker
- Delete repair records
- Local, offline-first persistence via Realm

## Tech stack

- React Native 0.74 + Expo SDK 51
- React Navigation (native stack)
- Redux + React Redux for application state
- Realm for on-device data storage
- react-native-paper for UI components
- @react-native-community/datetimepicker for date selection

## Getting started

### Prerequisites

- Node.js and npm
- Expo CLI (`npx expo` is used automatically; no global install required)
- For native builds: Android Studio (Android) or Xcode (iOS)

### Install

```bash
npm install
```

### Run

```bash
npm start        # launches the Expo dev server
npm run android   # build and run on an Android device/emulator
npm run ios       # build and run on an iOS simulator
npm run web       # run in a web browser
```

### Build

Native builds are produced via Expo's build tooling (`expo run:android` / `expo run:ios`, or EAS Build for release binaries). No custom build script is defined in this repo.

### Tests

No test suite is currently configured.

### Environment variables

None required — the app runs entirely with local, on-device storage.

## Project structure

```
App.js                  # Navigation container and screen registration
actions/
  repairActions.js      # Redux action creators (add/set/update/delete repair)
reducers/
  index.js              # Root reducer
  repairReducer.js       # Repair state slice
store/
  store.js               # Redux store setup
database/
  database.js            # Realm schema and CRUD helpers
screens/
  AddRepairScreen.js     # Form to create a new repair
  ViewRepairsScreen.js   # Searchable list of repairs
  EditRepairScreen.js    # Search, edit, and delete existing repairs
assets/                  # App icons and splash screen
android/                 # Native Android project files
```
