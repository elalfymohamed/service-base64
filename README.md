testing perubahan

# Service base64

## Description

A Service (based on node.js and express framework). the project is service base64 to convert `file (.pdf)` or `images (.jpg, .jpeg, .png, .svg, .gif)` to base64.
to set the path to the directory containing the `file or images` in the `.env`

## Features

- Convert `file (.pdf)` to base64
- Convert `image` to base64

## Installing

- Download the dependencies with `yarn` package manager

```bash
yarn
 #or
yarn install
```

## Executing program

- The website works on `http://localhost:process.env.PORT || 8080` OR by `nodemon` which is run in development mode with monitoring of debugging terminal.

> yarn run scripts

```
{
    "scripts": {
        "dev": "nodemon index.js 5050",
        "start": "node index.js 8080",
        "prod": "NODE_ENV=prod node index.js 8080"
    }
}
```

## Environment Variables

> src/config/env.js

```bash
  PORT
  NODE_ENV
  PATH_FILE_PDF # ./src/assets/pdf or any path
  PATH_FILE_IMAGE  # ./src/assets/images or any path

```
