# Lender

Lender is my fourth and final project for WDI course at General Assembly. It's puropose is to create a social environment for lending money. Now anybody can be a loan shark! Loan money, get back money with interest, request a loan, and pay back with some interest!

![Alt text](./img/lenderShot.png?raw=true "Lender App")


### Installing

Once you download the app, cd into it using terminal and run this command:

```
npm install
```

then run

```
npm start
gulp
```

## Built With

* MongoDB
* Express
* React
* Node.js

## How I went about it

The first thing I did was get all the dependencies I needed, then set up the front end routes through React router. 
Next, I worked on building up my API routes and writing out all the back end CRUD routes for my models. 

I set up a User model, a Lend model, and a Borrow model. 

I tried to set up user authentication, but that ultimately failed (for now..), as I am not too experienced with React yet.
 
Once I had my API working, I set up some front end forms in order to send and receive data from the API,
after that I just had styling left to do.

## What I will add in the Future/ Uncompleted needs.

1) I will implement a User authentication feature.
2) I will set up credit card linking funcionality, and deal with legal issues.
3) I will make the design perfect, and completely remove any bootstrappy looking elements.

## Authors

* **Brian Bruneau** - 

## Links

 WireFrames

[wireframes.pdf](./wireframes.pdf)

User Stories

https://docs.google.com/document/d/157L3eRShJIxcL0nGwXNZaJM6LRxvdhSMnTQQoJoBllU/edit


*Heroku Hosted Site* - [Lender]()

