import Book from './Book';

const WantToRead = ({ books, onUpdateBook }) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">Want to Read</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{books
						.filter((book) => book.shelf === 'wantToRead')
						.map((book) => {
							return (
								<li key={book.id}>
									<Book onUpdateBook={(book, shelf) => onUpdateBook(book, shelf)} book={book} />
								</li>
							);
						})}
				</ol>
			</div>
		</div>
	);
};

export default WantToRead;
