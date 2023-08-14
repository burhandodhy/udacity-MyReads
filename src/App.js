import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as API from './BooksAPI';

import Home from './pages/home';
import Search from './pages/search';

function App() {
	const [books, setBooks] = useState([]);
	const [searchResult, setSearchResult] = useState([]);

	// get all books from the API
	const getBooks = () => {
		API.getAll().then((books) => {
			setBooks(books);
		});
	};

	// update the book shelf
	const updateBook = (book, shelf) => {
		API.update(book, shelf).then(() => {
			getBooks();

			// update the search result shelf locally
			const updatedSearchResult = searchResult.map((b) => {
				if (b.id === book.id) {
					b.shelf = shelf;
				}
				return b;
			});
			setSearchResult(updatedSearchResult);
		});
	};

	// search for books
	const searchBooks = (query) => {
		if (query.length > 1) {
			API.search(query).then((result) => {
				// if there is not an error, merge the books with the search result to get the updated shelf value
				if (!result.error) {
					result = result.map((searchBook) => {
						const book = books.find((book) => book.id === searchBook.id);
						return book ? book : searchBook;
					});
				}
				setSearchResult(result);
			});
		} else {
			setSearchResult([]);
		}
	};

	const clearSearch = () => {
		setSearchResult([]);
	};

	// get all books when the app is loaded
	useEffect(() => {
		getBooks();
	}, []);

	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Home books={books} onUpdateBook={(book, shelf) => updateBook(book, shelf)} clearSearch={clearSearch} exact />} />
				<Route
					path="/search"
					element={
						<Search onSearchBooks={(query) => searchBooks(query)} books={searchResult} onUpdateBook={(book, shelf) => updateBook(book, shelf)} />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
