# ✨ Expo Starter Boilerplate

This is a starter boilerplate for building mobile apps using [Expo](https://expo.io/) and [React Native](https://reactnative.dev/). It includes the following features:

- Usage of environment variables through [expo-env](https://docs.expo.io/guides/environment-variables/)
- [expo-router](https://expo.github.io/router/docs) for navigation
- [expo-updates](https://docs.expo.dev/versions/latest/sdk/updates/) for over-the-air updates
- [react-native-responsive-fontsize](https://github.com/heyman333/react-native-responsive-fontSize) for responsive font sizes
- [expo-notifications](https://docs.expo.io/versions/latest/sdk/notifications/) for push notifications
- [Prettier pre-commit](https://prettier.io/docs/en/precommit.html) re-format your files that are marked as “staged” via `git add` before you commit.
- [NativeWind](https://www.nativewind.dev/) uses Tailwind CSS as scripting language to create a universal style system for React Native

# Getting Started

To get started with this boilerplate, follow these steps:

### 1. Clone the repository:

```
    git clone https://github.com/mdchad/expo-starter-boilerplate.git
```

### 2. Install dependencies:

```
    cd expo-starter-boilerplate
    yarn install
```

### 3. Start the development server:

First, let's take a look inside `package.json`.

```
    "scripts": {
        "start": "expo start --clear",
        "android": "expo start --android",
        "ios": "expo start --ios",
        "web": "expo start --web",
        "build:ios": "eas build -p ios",
        "build:android": "eas build -p android",
        "prepare": "husky install"
    }
```

In the project directory, you can run:

`yarn start`
Runs the app in development mode.

`yarn android`
Runs the app on an Android emulator or device.

`yarn ios`
Runs the app on an iOS simulator or device.

`yarn web`
Runs the app in the browser.

###### When using build, increase build number at app.json for app versioning.

`yarn build:ios`
Builds the app for iOS.

`yarn build:android`
Builds the app for Android.

`eas build -p ios --auto-submit`
[Automatic submissions out of the box](https://docs.expo.dev/build/introduction/)

###### OTA Update - [Link](https://docs.expo.dev/eas-update/getting-started/)

`eas update --branch [branch] --message [message]`

`eas update --branch preview --message "Updating the app"`

# Environment Variables

To use environment variables in your app, follow these steps:

1. Rename the .env.local.example file to .env.local:

```
    cp .env.local.example .env.local
```

2. Update the values in the .env.local file as needed for your app's environment.

3. To use the values from .env.local in your code, import the env object from the @env package:

```
import { MY_VARIABLE } from '@env';
```

4. Use the imported variable in your code:

```
<Text>The value of MY_VARIABLE is: {MY_VARIABLE}</Text>
```

Note that the configuration for environment variables has already been done in the `babel.config.js` file, so you don't need to make any changes there.

# Our app.json file

Notable options:

- `name` : Name of our app
- `slug` : URL-friendly code
- `version` : Version shown in the stores
- `orientation` : Which screen orientation is supported
- `icon` : App icon image
- `splash` : Settings for the screen shown while the app is loading
- `updates` : Configuration for hot-reloading
- `assetBundlePatterns` : Which files and assets to include
- `ios` : iOS-specific configuration
- `android` : Android-specific configuration
- `web` : Web-specific configuration

# Folder Structure

Basic structure:

```
expo-starter-boilerplate/
├── assets/
├── app/
│   ├── (app)/
│   ├── components/
│   ├── _layout.js
│   └── index.js

```

Example for tab:

```
expo-starter-boilerplate/
├── assets/
├── app/
│   ├── (app)/
│   │   ├── (tab)/
│   │   │   ├── page1.js
│   │   │   ├── page2.js
│   │   │   ├── page3.js
│   │   │   └── _layout.js (define tab)
│   ├── components/
│   ├── _layout.js (define stack)
│   └── index.js

```

Example for screen:

```
expo-starter-boilerplate/
├── assets/
├── app/
│   ├── (app)/
│   │   ├── (stack)/
│   │   │   ├── page1.js
│   │   │   ├── page2.js
│   │   │   ├── page3.js
│   │   │   └── _layout.js (define stack)
│   ├── components/
│   ├── _layout.js (define stack)
│   └── index.js

```

Please refer to the documentation for instructions on how to implement `expo-router` with folder structure navigation.

# Contributing

If you find a bug or have a feature request, please open an issue on this repo. Pull requests are welcome!

# License

This project is licensed under the MIT License. See the `LICENSE` file for details.
