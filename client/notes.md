#libraries that we are going to use in project#

react-redux @reduxjs/toolkit = state management library 

redux-persist = to selectively store the state into local storage ( if we want to save our user and token information into local state so that when the user closes the tab and then come back information is still there in the browser)

react-dropzon = to handle file upload

donenv = to store environment variable 

formik = form handling
with 
yup = validation 

react-router-dom@6 = to handle different pages and different routes

material UI libraries

@mui/material 
@emotion/react 
@emotion/styled
@mui/icons-material


session storage is gone when tab is closed 

but 

local storage persists till we clear cache 

so to store the user data into local storage we are using redux-toolkit

