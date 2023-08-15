# MyReads: A Book Tracking App

This is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project use React to build the application and utilize an API server and to store information about the books and user's bookshelf.
## Getting Started

To get started developing right away:

- Clone the project using `git clone git@github.com:burhandodhy/udacity-MyReads.git`
- Go into the directory `cd udacity-MyReads`
- Install all project dependencies with `npm install`
- Start the development server with `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## What You're Getting
All of the files were created using the create-react-app starter. The most important folder is `src`.

The `src` directory contains the following folders:
- `components` - contains all the components used in the app
- `icons` - contains all the icons used in the app
- `pages` - contains all the pages used in the app
- `App.css` - contains the styles for the app
- `App.js` - contains the root of the app
- `BooksAPI.js` - contains the backend API for the app
- `index.css` - contains the basic styles for the app


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
