
const BookTable = ({books, todo}) => {

    if (books.length === 0) return null;
    console.log(todo[0])
    return(
        
        <div className="table-wrapper">
            
            <div className="table-box">
                <h2>My Books</h2>
                <div className="table-scroll">
                    <table>
                        <thead>
                        <tr>
                            <th>{todo[0].todo}</th>
                            <th>Book</th>
                            <th>Category</th>
                            <th>Author</th>
                        </tr>
                        </thead>
                        <tbody>
                            {books.map((book,index) => {
                                return (
                                    <tr key = {index} className={index%2 === 0?'odd':'even'}>
                                        <td>{index + 1}</td>
                                        <td>{book.book}</td>
                                        <td>{book.category}</td>
                                        <td>{book.author}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BookTable;