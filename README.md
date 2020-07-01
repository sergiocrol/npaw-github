# NPAW Assessment
![frontend](https://res.cloudinary.com/drcjcovjy/image/upload/v1593590180/npaw/New_Project_qr9dxp.png)

## Demo

A deployed version of the assessment can be seen [here](https://git-npaw.herokuapp.com/)

## What is this app

This app allows the user to get the information of GitHub users obtained by its external API.
The user will be able to see a list of 20 matches, some info about the user, as well as couple of charts with 
followers statistics. The user will also be able to see a detailed page with the selected user info, and switch 
between dark mode and light mode themes.

## Getting Started

### Clone the repository

Clone this repository to your local machine

```bash
git clone git@github.com:sergiocrol/npaw-github.git
```

### installation

Install the dependencies

```
npm install
```

### run app

Start the application, and will be running on port 3000

```
npm start
```

## What can I do

-  **404:** As a user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
-  **List of users:** As a user I can see a list of 20 users that match with my query.
-  **Charts:** As a user I can see some charts with the 10 users with the most followers.
-  **User's details:** As a user I can see the detailed information of any user.

## Routes

| Path                      | Component            | Behavior                                                           |
| ------------------------- | -------------------- | -------------------------------------------------------------------|
| `/`                       | HomePage             | Homepage with search bar an overview panel with the displayed info |
| `/user/:user`             | UserPage             | Get the info of the user passed as parameter (login field in gh API|              

## Libraries

- **react:** v16.9.0
- **react-router-dom:** Navigation between different components
- **axios:**  Handle Ajax Requests
- **nose-sass:** Compile scss to css

## Git

[Repository Link](https://github.com/sergiocrol/npaw-github)

## Deployment

[Deployment Link](https://git-npaw.herokuapp.com/)

## Author

[Sergio Cordero Rol](https://github.com/sergiocrol)
