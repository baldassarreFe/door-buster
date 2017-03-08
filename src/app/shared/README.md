# ```shared.module.ts```

SharedModule holds the common components, directives, and pipes and shares them with the modules that need them.
* https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-modules
* aggregates CommonModule and MaterialModule that are used by the feature modules
* it can be imported by every feature module that needs it
* won't cause problems with lazy-loaded modules because it has no services
