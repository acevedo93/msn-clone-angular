// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDqBLhRab0eU6cvraaRKIgM4A7KGzj_iJ4",
    authDomain: "msn-clone.firebaseapp.com",
    databaseURL: "https://msn-clone.firebaseio.com",
    projectId: "msn-clone",
    storageBucket: "",
    messagingSenderId: "409074510752",
    appId: "1:409074510752:web:e8fe4ba07da92141"
  }
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
