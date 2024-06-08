# Basic Authentication in Nextjs using JWT Tokens

This is a solution to [Next.js App Router Authentication (Sessions, Cookies, JWTs) Project](https://www.youtube.com/watch?v=DJvM2lSPn6w). I'm practicing and developing my coding competency by building projects after projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge/User Stories

Learn the foundations of session based authentication through cookies in the Next.js App Router, and how community libraries like Auth.js build on top of this model. Auth is a deep topic, so let me know what else you want to see here!

### Screenshot

![](screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/basic-authentication-jwttokens](https://github.com/traez/basic-authentication-jwttokens)
- Live Site URL: [https://basic-authentication-jwttokens-trae-zeeofors-projects.vercel.app/](https://basic-authentication-jwttokens-trae-zeeofors-projects.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework**
- Tailwind CSS**   
- Typescript  
- Nodejs (with/without Expressjs)
- MongoDB**  
- GraphQL**    
- Redux Toolkit**  
- Jose    

### What I learned
 
- The code base demonstrates **stateless authentication** in a web application using **JWT tokens and cookie-based authentication**.  
- Other authentication approaches, which can be either stateful or stateless, include:
  Social Media Login  
  Passwordless Authentication (link to email)  
  Multi-Factor Authentication (2FA code to a device)  
  Token-Based Authentication with Different Storage (Local Storage or Session Storage)  
- In stateless authentication, the server doesn't maintain any session information about the user. Instead, all authentication information is stored on the client-side, typically in a JWT (JSON Web Token). This approach makes the server treat every request as independent, requiring the client to send the JWT with every request for authorization. Stateless authentication with JWTs is generally preferred for its scalability, security, and ease of implementation.    
- In stateful authentication, the server maintains session information about the user.   
- `"jose": "^5.1.3"` refers to a JavaScript library named JOSE (JavaScript Object Signing and Encryption). It provides tools for working with JSON Web Tokens (JWTs), JSON Web Encryption (JWE), and JSON Web Signatures (JWS) according to relevant RFC specifications. 
- `redirect("/")` is used to redirect a user to the root page ("/") of your application. It's commonly used in conjunction with authentication, such as after a successful login or logout. When called, it will redirect the user's browser to the specified path, which in this case is the homepage. 
- `<pre>`: The Preformatted Text element represents preformatted text, which is presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced, font. Whitespace inside this element is displayed as written.  
- `formData Parameter`: When the user submits a form, the browser collects the data entered in the form elements. The action function in the form specifies what to do with the submitted data. In this case, it's an asynchronous function that receives the formData parameter, which is a dictionary-like object containing key-value pairs. The keys are the names of the form elements (e.g., "email") and the values are the data entered by the user. This is essentially the FormData Web API at work, allowing you to construct key-value pairs representing form fields and their values. 
- **Next.js server actions** involving the `"use server"` directive do not expose data to the client-side, reducing the risk of vulnerabilities. In contrast, regular client-side code would fetch data with `fetch` and `useEffect`, then store it in `useState`, etc. 
- On `https://jwt.io/`, you can enter a cookie value/token to decode it and reveal the payload.
- In `middleware.ts`, the middleware function is executed for every incoming request (initial page loads, page refreshes, form submissions, POST requests, API requests, GET, POST, PUT, DELETE, etc.). It calls the `updateSession` function, passing the `NextRequest` object as an argument. The updateSession function is likely responsible for updating the user's session, ensuring that the session is updated for every request. This middleware essentially extends the cookie expiry date/time using the updateSession function.  

### Continued development

- More projects; increased competence!

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Trae Zeeofor](https://github.com/traez)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments

-Jehovah that keeps breath in my lungs
