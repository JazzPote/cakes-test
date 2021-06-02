# Cakes app

![Picture of lighthouse score](https://github.com/JackPoteYes/cakes-test/blob/doc/readme/misc/lighthouse.jpg)

## How to set it up

```bash
$ cp .env.local.example .env.local
$ yarn
```

Use `npm i` instead of `yarn` if you're using npm

## How to run it

### Dev environment

```
$ yarn dev
```

### Production environment

```
$ yarn build
$ yarn start
```

## Technologies used

### Backend

- NextJS
- Yup validation

### Frontend

- React
- Axios
- Yup validation
- Ant design
- Formik

## PWA

The work has been started to convert the app to a PWA. Please check out the branch `feat/make-pwa` to see. The work is still in progress and some more work could be done to improve the caching, notably of the home page after having added a cake.

## CI with Github actions

Everytime a PR is made, a Github Action script will run and validate the code quality. The PR can only be merged if it validates with success.

Although I was familiar with CircleCI and Jenkins, I decided to leverage this opportunity to learn more about Github actions.

## Project management with Github Project

A Kanban board has been made as part of the Github project.
Please find it [here](https://github.com/JackPoteYes/cakes-test/projects/1)

Cards are linked to the issues of the project.
Two labels have been created, in order to tag the issues: `story` and `chore`.
