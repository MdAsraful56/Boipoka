import { useLoaderData, useParams } from "react-router";


const BooksDetailes = () => {


    const books = useLoaderData();
    const { bookId } = useParams();
    const book = books.find(book => book.id == bookId);

    // console.log(book);



    const { totalPages, rating, category, tags, publisher, yearOfPublishing, summary, review, image, author, bookName } = book;


    return (
        <div className="lg:px-24 px-3 mt-10 flex lg:flex-row flex-col">
            <div className="lg:w-1/2 w-full">
                <img src={image} alt="" />
            </div>
            <div className="lg:w-1/2 w-full">
                <div className="">
                    <h2 className="text-5xl">{bookName}</h2>
                    <h5 className="text-xl">{author}</h5>
                </div>
                <div className="border-dashed border w-full h-0.5"></div>
            </div>
        </div>
    );
};

export default BooksDetailes;