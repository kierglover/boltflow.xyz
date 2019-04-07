# [Boltflow.xzy](http://boltflow.xyz) 💨 🖥
Make your static [Webflow](http://bit.ly/2I4QBFc) site even more awesome in just a few minutes.
## About this project.
Webflow is a powerful website creation tool that has many great performance boosting features and tips, however when exporting sites to host externally we have the chance to further improve performance. However, setting up a new environment and writing optimization scripts can be time consuming, especially when your site is ready to launch.

With boltflow.xyz you can be be ready to deploy with a few basic commands in your terminal. Your site will be neatly packaged, optimized and ready to deploy anywhere you want.
### Let's get started.
There are  a couple things you will need to make sure Grunt runs correctly. Firstly make sure you have [Node](https://nodejs.org/en/) installed. Then test NPM is installed by typing the following in your terminal.
```
npm -v
```
Then, export your Webflow site code, unzip it and copy the contents of this Github repository to the Webflow website directory you just unzipped. 

To get the repo type the following command.
```
git clone https://github.com/kierglover/webflow-build-system.git
```

### Up and Running
To get things up and running simply navigate to your website directory using the terminal or command line and install the dependancies with the following.
```
npm install
```
Then once everything is installed, run the following command.

```
grunt
```

### Finishing Touches
Simply rename the default css file to `main.css` and watch our system do it's magic! Our website structure will automagically look a little something like this depending on how many pages you have etc. 

```
.
├── assets
│   └── css
│   	└── main.css
│   └── js
│   	└── scripts.js
├── build
│   └── css
│   	└── main.min.css
│   └── js
│   	└── scripts.min.js
├── css
│   └── main.css
│   └── normalize.css
│   └── webflow.css
├── images
│   └── ...
├── js
│   └── webflow.js
├── index.html
```

### Final Notes
Just make sure to remove `css/normalize.css` `css/webflow.css` and `css/<your-project-name.webflow.css>` and, like our CSS, remove the `js/webflow.js` link and any other js files included (i.e `js/<your-project-name.webflow.js`>. 

If you are using an exact clone of this repo make sure update your `index.html` and any other pages to `build/css/main.min.css`. Do the same with the javascript file links. Change to `build/js/scripts.min.js`.

### Support Me

Check out my [YouTube video tutorial](https://www.youtube.com/watch?v=nKVIU-yhaP4) to help you use this system 👍 Happy coding 🎉

Feel free to [donate](https://paypal.me/kierangloverpay?locale.x=en_GB) to help me spend more time developing and launching sweet tools like this ☕️🙏
