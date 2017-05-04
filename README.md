# Webflow Build System
A simple Grunt build system to optimise sites exported with Webflow.
## Getting Started
This a simple, but scalable build system template that is easy to use especially if you've ever used Grunt before. Even if you have't, hopefully through these instructions you can utilise the system.
### Prerequisites
There are  a couple things you will need to make sure Grunt runs correctly. Firstly make sure you have [Node](https://nodejs.org/en/) installed. Then test NPM is installed by typing the following in your terminal.
```
npm -v
```
### Set Up
To get the build system up and running, test to see if git is installed by running the following in your terminal
```
git --version
```
then `cd` into a chosen directory and run
```
git clone https://github.com/kierglover/webflow-build-system.git
```
You should then have the `package.json` and the `Gruntfile.js` in your chosen directory.
### Running the System
To make sure all the npm dependencies are installed, run the following in your projects root directory (`.documents/mywebsite/` for example).
```
npm install
```
Then test by running the default Grunt task which has been set up to run a custom Watch task
```
grunt
```
### Finishing Touches
Now you can go ahead and export your Webflow site, unzip it and copy the contents to the directory in which you cloned this Build System. Add the following empty folders
```
mkdir build
```
then change directory
```
cd build
```
```
mkdir css js
```
then change back to the root directory of your project.
```
cd ../
```
Then you can run the default grunt command
```
grunt
```
Make a small change or addition in your stylesheet and Grunt will watch for changes and run the pre-prepared tasks.

### Final Notes
When you deploy the site you do not need to upload the Gruntfile,  package.json file or node_modules directory.

If you are using an exact clone of this repo make sure update your `index.html` and any other pages to `build/css/main.min.css` and remove all other styles. Do the same with the javascript file links. Change to `build/js/scripts.min.js`. Also, rename the default exported custom css file to `main.css`.
