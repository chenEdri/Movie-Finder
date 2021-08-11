// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const omdbApi = 'http://www.omdbapi.com/?i=tt3896198&apikey=f7129c48';
// const apiK= 'apikey=f7129c48';
  export const environment = {
    production: false,
    config: {
      omdbApi: {
        url: 'http://www.omdbapi.com/',
        apiKey: 'f7129c48',
      },
    },
    apiUrl: 'http://localhost:4200',
  };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
