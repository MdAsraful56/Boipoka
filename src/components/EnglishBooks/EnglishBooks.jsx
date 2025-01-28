import { useEffect } from "react";
import { useState } from "react";
import EnglishBookCard from "./EnglishBookCard";


const EnglishBooks = () => {


    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch('EnglishBooks.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    } ,[])

    console.log(books)

    return (
        <div className="lg:px-24 px-2">
            <h2 className="text-2xl text-center my-5 font-semibold">English Book</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-5 md:px-0 lg:px-0 ">
                {
                    books.map((book, index) => <EnglishBookCard key={index} book={book} /> )
                }
            </div>
        </div>
    );
};

export default EnglishBooks;