# typescript-template

Template for typescript project with preconfigured settings.

## How to use this project?

Use this project as a template to expedite the process to set up a typescript project.

The project can be either used as:

1. A package used by other projects
2. Run as a script project. 

### Install

```shell
yarn
```

### Run the script

Run typescript file `src/scripts/index.ts`

```shell
yarn run
```

### Build the project

```shell
# Build this project
yarn build

# Build in watch mode
yarn build:watch
```

## Used as a package used

### Dev watch mode

```shell
# Under this project
yarn build:watch

# Other project using this project
yarn link <path-to-this-project>
```

### Production mode

```shell
# In this project
yarn build:prod

# Using this project
yarn add file:<path-to-this-project>
```

