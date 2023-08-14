import { Link } from 'react-router-dom';

import CurrentlyReading from '../components/CurrentlyReading';
import WantToRead from '../components/WantToRead';
import Read from '../components/Read';

const Home = ({ books, onUpdateBook, clearSearch }) => {
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<div>
					<CurrentlyReading books={books} onUpdateBook={(book, shelf) => onUpdateBook(book, shelf)} />
					<WantToRead books={books} onUpdateBook={(book, shelf) => onUpdateBook(book, shelf)} />
					<Read books={books} onUpdateBook={(book, shelf) => onUpdateBook(book, shelf)} />
				</div>
			</div>
			<div className="open-search">
				<Link to="/search" onClick={clearSearch}>
					Add a book
				</Link>
			</div>
		</div>
	);
};

export default Home;
