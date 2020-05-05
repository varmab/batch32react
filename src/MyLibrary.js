import React, { Component } from 'react'

//Stateless functional component
const Book = (props) => {
    var book = props.book;
    return (
        <tr key={props.book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td><button onClick={
                () => {
                    this.removeBook(book);
                }
            }>Delete</button></td>
        </tr>
    )
}

class MyLibrary extends Component {
    constructor() {
        super();

        this.state = {
            books: [],
            title: '',
            author: ''
        }
    }

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    onAuthorChange = (e) => {
        this.setState({
            author: e.target.value
        })
    }

    addBook = () => {
        this.setState({
            books: [
                ...this.state.books,
                {
                    id: this.state.books.length + 1,
                    title: this.state.title,
                    author: this.state.author
                }
            ],
            title: '',
            author: ''
        })
    }

    removeBook = (book) => {
        this.setState({
            books: this.state.books.filter((currentBook) => {
                return currentBook.id !== book.id
            })
        })
    }

    render() {
        return (
            <>
                <h1>My Library</h1>
                <input type="text" placeholder="Enter title" value={this.state.title} onChange={this.onTitleChange} name="title" />
                <input type="text" placeholder="Enter Author" value={this.state.author} onChange={this.onAuthorChange} name="author" />
                <button onClick={this.addBook}>Add Book</button>
                <center>
                    <table>
                        <tbody>
                            <tr>
                                <td>Title</td>
                                <td>Author</td>
                                <td></td>
                            </tr>
                            {
                                this.state.books.map((book) => {
                                    return <Book key={book.id} book={book}/>
                                })
                            }
                        </tbody>
                    </table>
                </center>
            </>
        )
    }
}

export default MyLibrary;