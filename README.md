# Introduction
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It contains the setup files for the frontend react application which calls to the event management system with graphQl. 

## Running the project 
Clone the repo
```
git clone https://github.com/shawn-phy/FrontendEMSwithgraph.git
```

then change directory into the repo directory `cd frontendEMSwithgraph` 
In the project directory, you can run:
### `npm install`
to install all dependecies in the package.json file

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### *NOTE*: I added the proxy server to package.json to enable me to interact with the backend server in my own setup.  Change this line ` "proxy": "https://localhost:7046" `to run on the port and server where you're application is running 