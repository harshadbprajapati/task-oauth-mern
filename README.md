
# React Google Login

Create aReact app tp Login with Google account. Show the Successful logged in message on webpage and fetche data into console.

## Implementation Steps :
### On Frontend side :
1. install npx package in your Director.
    npx create-react-app <your file name>
Note: your file name must be in small letters.



2. install npm package.
    npm install react-google-login

3. define isLogin state hook.
4. check isLogin and render content.
5. if isLogin is null, render GoogleLogin component.
6. if isLogin isn't null, render you are logged in message.
7. implement responseGoogle.

### Google Cloud Platform :
1. Login to Google.
2. go to https://console.cloud.google.com
3. create a project
4. go to API credential.
5. accept consent screen.
6. create outh client id.
7. create .env file and save it as REACT_APP_CLIENT_ID


## Available Scripts :
In the project directory, you can run :

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm i gapi-script`

GAPI is Google’s client library for browser-side JavaScript. 
It’s used in Google Sign-in, Google Drive, and thousands of internal and external web pages for easily connecting with Google APIs.



