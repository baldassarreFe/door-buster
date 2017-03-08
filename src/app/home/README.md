# Note on modules

This is the feature module ```home```

#### ```home.module.ts```
* contains the module description
* declarations are items made available to the components in this module (both coming from this module or imported)
* imports are items from other modules that are needed by the components in this module (it takes CommonModule and MaterialModule from the CoreModule)
* exports are items that are made available for other modules to import (e.g. reusable components)
* no need to export HomeModule because it is loaded lazily by the main router

#### ```home-routing.module.ts```
* configures the routing rules for this module
* imports the .forChild imports from AppRoutingModule
* exports the AppRoutingModule for it to be imported in ```home.module.ts```

#### References
https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html
