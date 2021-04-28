# Registration Page

App made with CRA, to complete the goal of making registration/login app with JWT set as cookie. No additional styling libraries were added. I used SASS to style app and practice my skills. Fill up the form to register in cloud Mongo DB.

You can see working version [here](https://dyrpit.github.io/registration-panel/).

## Usage

You can use existing accounts:

**User**

| Login         | Password      |
| ------------- | ------------- |
| user@test.com | UserUser123() |

**Admin**

| Login          | Password        |
| -------------- | --------------- |
| admin@test.com | AdminAdmin123() |

_User_ - in this account you can only see your profile and about page.

_Admin_ - in admin account you can see all registered users list. You can edit each user and change name, last name or role to be admin or user. Also you can delete users, except admin users.

If you prefer to register your own account, you need to give some **fake email and password**. Name and last name are not required.

## Backend

Server was build using NestJS framework to handle all frontend queries. NestJS is a TypeScript framework based on express under the hood. If you want to know more about NestJS click link [NestJS](https://nestjs.com/). Rest API was made by me to practice my backend skills along with my TypeScript knowledge. You can see my server code on this repository [https://github.com/dyrpit/registration-backend](https://github.com/dyrpit/registration-backend).

### Stack

- React
- SCSS
- react context
- react hooks
- Fetch API

Feel free to see my other projects on my repositories :grinning:
