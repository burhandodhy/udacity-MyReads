import Book from '../components/Book';
import { Link } from 'react-router-dom';

const Search = ({ onUpdateBook, onSearchBooks, books }) => {
	const searchBooks = (event) => {
		const query = event.target.value.trim();
		onSearchBooks(query);
	};

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link to="/" className="close-search">
					Close
				</Link>
				<div className="search-books-input-wrapper">
					<input type="text" placeholder="Search by title, author, or ISBN" onChange={(event) => searchBooks(event)} />
				</div>
			</div>
			<div className="search-books-results">
				{books.error ? (
					<h3>No books found</h3>
				) : (
					<ol className="books-grid">
						{books.map((book) => (
							<li key={book.id}>
								<Book onUpdateBook={(book, shelf) => onUpdateBook(book, shelf)} book={book} />
							</li>
						))}
					</ol>
				)}
			</div>
		</div>
	);
};

export default Search;
