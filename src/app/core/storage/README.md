# Storage services

We need to access the firebase storage for two types of files: documents and logos.

## Interfaces
To the outside world we only expose two separate interfaces: one for the files and one for the documents. Note that using these interfacese we are actually hiding the fact that we use firebase storage as an implementation detail, if we wanted to switch to an S3 bucket we'd only need to change the implementations in this folder and nothing else.

## Implementation
Internally we implement the two interfaces in two different classes, that inherit the common logic from a shared ancestor.

## Dependency injection note
Due to Angular-related details, injecting a service specified by an interface is a bit different compared to a class.
Read more on [StackOverlow](http://stackoverflow.com/questions/37002522/is-it-possible-to-inject-interface-with-angular2).
