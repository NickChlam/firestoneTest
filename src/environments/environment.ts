// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:  {
    apiKey: "AIzaSyDmpOOaodSFBpTt-PoY4AKyS9xeeJ9pAAk",
    authDomain: "test-ec48f.firebaseapp.com",
    databaseURL: "https://test-ec48f.firebaseio.com",
    projectId: "test-ec48f",
    storageBucket: "test-ec48f.appspot.com",
    messagingSenderId: "121939995815"
  }
};
