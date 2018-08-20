# study-cypress-gradle

## Praface : Baseline setup to use docker gradle and cypress together which can be leveraged for continuous integration and testing

## pre requisites : Git, Docker Client must be installed on your machine

* Steps : 

  - clone this repo using `git clone git@github.com:chit786/study-cypress-gradle.git`
  - Once repo is clone `cd study-cypress-gradle`
  - Run `./gradlew runTest`
  
  
# What will the command do is following : 
- Create docker images for cypress and pyApp(our sample application under test) 
- Brings up the container from the images above 
- Run the tests 
- Bring down / clean up the containers
- After the tests have been executed then depending to the status of the tests it will fail/Pass the build.
