# Storage services

We need to access the firebase storage for two types of files: documents and logos.

## Interfaces
To the outside world we only expose two separate interfaces: one for the files and one for the documents. Note that using these interfacese we are actually hiding the fact that we use firebase storage as an implementation detail, if we wanted to switch to an S3 bucket we'd only need to change the implementations in this folder and nothing else.

## Implementation
Internally we implement the two interfaces in two different classes, that inherit the common logic from a shared ancestor.

## Dependency injection note
Due to Angular-related details, injecting a service specified by an interface is a bit different compared to a class.
Read more on [StackOverlow](http://stackoverflow.com/questions/37002522/is-it-possible-to-inject-interface-with-angular2).

To have a ```LogoService``` injected in the constructor of a class one would write 
```typescript
constructor(private logoService: LogoService) {...}
```

The correct form instead uses an InjectionToken ([previously OpaqueToken](https://blog.thoughtram.io/angular/2016/05/23/opaque-tokens-in-angular-2.html)):
```typescript
constructor(@Inject(LogoServiceToken) private logoService: LogoService) {...}
```

Which in its definition also includes some information about the interface:
```typescript
export const LogoServiceToken = new InjectionToken<LogoService>('LogoServiceToken');
```

Note: both the interface and the token should stay in the same ts file, but when exporting two things from the same file the compiler issues a warning and moves on.
To avoid the warning there are one file with the interface and one file with the token. 

## Another detail about injection
Using the deprecated OpaqueToken, the Ahead of Time compiler would complain about the typing ```firebase.app.App``` in this constructor:
```typescript
constructor(@Inject(FirebaseApp) firebaseApp: firebase.app.App) {
    super(firebaseApp);
    ...
}
```

The quickest fix is to accept any type and cast later:
```typescript
constructor(@Inject(FirebaseApp) firebaseApp: any) {
    super(<firebase.app.App> firebaseApp);
    ...
}
```

Note that this issue only appears when trying to run ```ng build --prod``` with AoT enabled,
it does not affect the development builds done with ```ng serve```.

See [this issue](https://github.com/angular/angular/issues/12631) for more.
