# a React-Native and Meteor boilerplate

![react-native-intro](https://cloud.githubusercontent.com/assets/1061849/18746036/5db45830-80c5-11e6-8222-1813798c8cd4.gif)

### INTRO
This project aims to put together the following technologies:

- React Native (as frontend)
- Meteor 1.4 (as backend)
- Redux (as state manager)

### PAY ATTENTION
At the moment, this package is a playground for myself, a sandbox where to experiment new implementations and apply new patterns.
So, please, always keep in mind this warning before using it seriously: **THINGS CAN CHANGE ANYTIME!**

### WHAT'S IN?

This boilerplate is currently using following npm packages:

- [navbar-native](https://github.com/redbaron76/navbar-native)
- [react-native-meteor](https://github.com/inProgress-team/react-native-meteor)
- [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
- [react-native-side-menu](https://github.com/react-native-community/react-native-side-menu)
- [react-native-device-info](https://github.com/rebeccahughes/react-native-device-info)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-redux](https://github.com/reactjs/react-redux)
- [redux-thunk](https://github.com/gaearon/redux-thunk) (redux middleware)
- [redux-form](http://redux-form.com/6.0.5/)
- [native-base](https://github.com/redbaron76/NativeBase) (forked version and soon replaced)

### TRY IT

In order to try this package, you must have [React-Native CLI](https://facebook.github.io/react-native/docs/getting-started.html) and [Meteor](https://www.meteor.com/install) **installed** in your system.

```bash
npm install -g react-native-cli
```

```bash
curl https://install.meteor.com/ | sh
```

After installed both frameworks, **clone** this repo, **cd** into it and **run**:

```bash
./start.sh
```

### TROUBLESHOOTING?

Don't you **see vector** icons correctly?

Please follow [instructions](https://github.com/oblador/react-native-vector-icons#installation) on how to link them in your project.
