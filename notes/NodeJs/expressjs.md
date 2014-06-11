Installing expressjs with a template and testing it.
====================================================

**STEP 1: **Installing Expressjs globaly on your pc

	# npm install -g express

	**Note: ** Remember to be logged as super user

**STEP 2: ** Create a project

	$ express my_project_name

	- This command creates a project folder called "my_project_name"

	$ cd my_project_name

**STEP 3: ** Installing dependencies

	$ npm install

**STEP 3.1: ** (OPTIONAL) Installing nodemon globaly

	- Nodemon is a package that keeps you away from stopping and restarting your server when making changes

	# npm install -g nodemon

	**Note: ** In order to install nodemon globaly you are going to be super user.

	Running my server with nodemon

	$ nodemon app.js

	**Note: By default, our server is going to be placed at "app.js" file so that, we need to put this file name in that command. If you change the name of this file you will also have to change the file name for this command

	You are going to see a message like this: "Express server listening on port 3000" which menas taht the server is already up!.

**STEP 3.2: ** (OPTIONAL) Running our server (If you have already done the 3.1 step, you do not need to do this one)

	- Rename the "app.js" file to "server.js"

	$ mv app.js server.js

	- Then run:

	$ express start

	You are going to see a message like this: "Express server listening on port 3000" which means that the server is already up!.

**STEP 4: ** Running your project template from a browser

	- Go to your favorite browser and type this on the adress bar:

	localhost:3000
