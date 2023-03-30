# ✨ Expo Starter Boilerplate

This is a starter boilerplate for building mobile apps using [Expo](https://expo.io/) and [React Native](https://reactnative.dev/). It includes the following features:

- Usage of environment variables through [expo-env](https://docs.expo.io/guides/environment-variables/)
- [expo-router](https://expo.github.io/router/docs) for navigation
- [expo-updates](https://docs.expo.dev/versions/latest/sdk/updates/) for over-the-air updates
- [react-native-responsive-fontsize](https://github.com/heyman333/react-native-responsive-fontSize) for responsive font sizes
- [expo-notifications](https://docs.expo.io/versions/latest/sdk/notifications/) for push notifications
- [Prettier pre-commit](https://prettier.io/docs/en/precommit.html) re-format your files that are marked as “staged” via `git add` before you commit.

## Getting Started

To get started with this boilerplate, follow these steps:

## 1. Clone the repository:

```
    git clone https://github.com/mdchad/expo-starter-boilerplate.git
```

## 2. Install dependencies:

```
    cd expo-starter-boilerplate
    yarn install
```

## 3. Start the development server:

```
    yarn start
```

First, let's take a look inside `package.json`:

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

## Env File

Rename the `.env.local.example` file to `.env.local`.
Update the values as needed for your app's environment.

## Our app.json file

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

# Contributing

If you find a bug or have a feature request, please open an issue on this repo. Pull requests are welcome!

# License

This project is licensed under the MIT License. See the `LICENSE` file for details.
