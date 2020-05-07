import React, {Component} from 'react'
import BookList from './BookList';
import Wishlist from './Wishlist';

class Library extends Component {
    constructor(){
        super();

        var books=[
            {
                id:1,
                title:"JS Fundamentals",
                author:"John"
            },
            {
                id:2,
                title:"React in action",
                author:"Azat"
            },
            {
                id:3,
                title:"Node Advanced",
                author:"Ram"
            }
        ]

        this.state={
            books:books,
            wishlist:[]
        }
    }

    addToWishlist=(book)=>{
        console.log(JSON.stringify(book))
        this.setState({
            wishlist:[
                ...this.state.wishlist,
                book
            ]
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>Library</h1>
                <BookList books={this.state.books} addToWishlist={this.addToWishlist}/>
                <Wishlist books={this.state.wishlist}/>
            </React.Fragment>
        )
    }
}

export default Library;