# Automation Bootcamp Challenge
Technical Selection Challenge:  Automation - Front End Testing

The purpose of these tests involves the sauceDemo web page. 7 different scenarios were coded:

* A. Login with a valid user
* B. Login witn an invalid user
* C. Logout from the home page.
* D. Sort products by price (low to high)
* E. Add multiple items to the shopping cart
* F. Add the specific product 'Sauce Labs Onesie' to the shopping cart
* G. Complete a purchase

## Installation

Download the zip, unzipped the content, go to the automation_bootcamp_challenge main folder and once inside open a new terminal and type:
```
sudo npm install -g testcafe
```
This command line will install testcafe globally. Now let's install it locally. Type in the terminal:
```
sudo npm install testcafe
```
The next step is to install 'dotenv' which is a zero-dependency module that loads environment variables from a .env file into process.env. Type in the terminal:
```
sudo npm install dotenv
```
Also, you will need to install the reporter in order to see the results of the tests. Type in the terminal the following:
```
sudo npm install testcafe-reporter-html 
```

Finally, you will need a .env file in the root of the project. Create the file, name it .env, paste and save the following as content:
```
//URLS
BASE_URL=https://www.saucedemo.com/

//CREDENTIALS
STANDARD_USER=standard_user
STANDARD_USER_PASSWORD=secret_sauce

//USER INFO
FIRST_NAME=Jane
LAST_NAME=Doe
POSTAL_CODE=97000
```

## Execution 
Now you are ready to have fun. To run all the tests in all the installed browsers, run in the terminal:
```
npm run test-all-installed-browsers
```
To run all the tests in a specific browser (like Chrome), run in the terminal:
```
npm run test-all-chrome
```
For Firefox, run:
```
npm run test-all-firefox
```
If you want to run the headless mode, type:
```
npm  run test-all-multibrowser-headless
```
A report will be created in the root of the project once the tests have finished. Open Chrome, drag & drop the report.html file in the browser and enjoy it. (If the report.html does not create or you have any error, try to install sudo npm install -g testcafe-reporter-html)

** This project was developed on Ubuntu 20.04

## Built with:

* [Testcafe](https://testcafe.io/) - A Node. js end-to-end free and open source automation tool which is used to test web applications.
* [dotenv](https://www.npmjs.com/package/dotenv) - Zero-dependency module that loads environment variables from a .env file into process.env
* [testcafe-reporter-html](https://www.npmjs.com/package/testcafe-reporter-html) - Reporter
