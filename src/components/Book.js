const Book = ({ onUpdateBook, book }) => {
	const updateBookSelf = (event) => {
		const selectedShelf = event.target.value;
		onUpdateBook(book, selectedShelf);
	};

	const shelf = book.shelf ? book.shelf : 'none';
	const authors = book.authors ? book.authors.join(', ') : '';

	return (
		<div className="book">
			<div className="book-top">
				{book?.imageLinks?.thumbnail && (
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${book.imageLinks.thumbnail}})`,
						}}
					></div>
				)}

				<div className="book-shelf-changer">
					<select onChange={(event) => updateBookSelf(event)} value={shelf}>
						<option value="" disabled>
							Move to...
						</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
				</div>
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">{authors}</div>
		</div>
	);
};

export default Book;
