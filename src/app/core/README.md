# ```core.module.ts```

This module contains the backend (auth and storage) services
* imports and sets up AngularFireModule, but does not export it because it needs not to be visible to the rest of the app
* since it is imported only once in the root module, its declarations and exports would only be available for the app.component
* provides DoorBusterUserService to the rest of the application
* provides an authorization guard that prevents the router from activating certain routes

