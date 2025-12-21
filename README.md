This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# Loan List Page

- On this page, we are fetching loan list from a dummy api.
- There are 2 button rate low to high and rate high to low which filter the list in ascending or descending order according to rate of interest.
- Also if api fails to get data from the server it will show an error message and a button to retry for refetching the data from the server.
<img width="206" height="622" alt="Simulator Screenshot - iPhone 16 Pro - 2025-12-21 at 23 14 24" src="https://github.com/user-attachments/assets/220d2bcf-4529-4cee-9261-b56791af4e23" />
<img width="206" height="622" alt="Simulator Screenshot - iPhone 16 Pro - 2025-12-21 at 23 14 27" src="https://github.com/user-attachments/assets/9feb977e-7439-4f6e-a420-cfb18a6847ea" />
<img width="206" height="622" alt="Simulator Screenshot - iPhone 16 Pro - 2025-12-21 at 23 14 29" src="https://github.com/user-attachments/assets/0e517a8e-069d-4177-9dfe-aa1c9b982ce1" />
<img width="206" height="622" alt="Simulator Screenshot - iPhone 16 Pro - 2025-12-21 at 23 19 04" src="https://github.com/user-attachments/assets/0afebcff-da53-489f-8ea6-ddfd2dd6afdb" />


# Loan detail Page

- When we click on the load data we land on this page.
- We see detailed version of the loan.
- On top there is a back button with will return us back to loan list page

<img width="206" height="622" alt="Simulator Screenshot - iPhone 16 Pro - 2025-12-21 at 23 14 32" src="https://github.com/user-attachments/assets/859483fa-0dd9-4bdb-9553-23a0b763aa17" />

