This GitHub repository holds a fulllstack MERN application
Backend and Frontend are held in seperate Folders. 

In order to start the Frontend - navigate into the Forntend directory 

cd ./Frontend

then run the command: npm start
This will run the necessary React-scripts to start the Frontend running on Port 3000


In order to start the Backend - navigate into the Backend directory

cd ./backend
then run the command: npm run dev

this will start the backend server. 


__________________________________________________________________________________________

The Dockerfiles are implemented, but do not work in combination with the Prox Method chosen, since Docker container try to Proxy on their own Localhost:5050. 
A Workaround without deploying the application to a server was not found. 

Therefore the two commands above need to be run instead of the docker build commands. 

