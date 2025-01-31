import { useLoaderData, useParams } from "react-router";


const BooksDetailes = () => {


    const books = useLoaderData();
    const { bookId } = useParams();
    const book = books.find(book => book.id == bookId);

    // console.log(book);



    const { totalPages, rating, category, tags, publisher, yearOfPublishing, review, image, author, bookName } = book;


    return (
        <div className="lg:px-24 px-3 mt-10 flex lg:flex-row flex-col gap-10">
            <div className="lg:w-1/2 w-full bg-gray-200 flex flex-col justify-center items-center rounded-3xl ">
                <img src={image} className="lg:w-96 lg:p-1 p-5"  alt="" />
            </div>
            <div className="lg:w-1/2 w-full space-y-5">
                <div className="space-y-1">
                    <h2 className="text-4xl font-semibold">{bookName}</h2>
                    <h5 className="text-lg font-medium"> By : {author}</h5>
                </div>
                {/* <div className="border-dashed border w-full h-0.5"></div> */}
                <hr />
                <h4 className="text-lg font-medium">{category}</h4>
                <hr />
                <h3 className="text-base font-medium">Review : <span className="text-base font-normal">{review.slice(0, 350)}</span> </h3>
                <div className="flex flex-row">
                    <h4 className="text-lg font-semibold">Tags : </h4>
                    {
                        tags.map((tag, index) => <button className="px-3 py-1 font-semibold mr-2 ml-2 rounded-2xl bg-green-50 text-green-400" key={index}>#{tag}</button>)
                    }
                </div>
                <hr />
                <div className="flex flex-row gap-10">
                    <div className="space-y-2">
                        <h4 className="text-base ">Number of Pages :</h4>
                        <h4 className="text-base ">Publisher :</h4>
                        <h4 className="text-base ">Year of Pu blishing :</h4>
                        <h4 className="text-base ">Rating :</h4>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-base font-semibold">{totalPages}</h4>
                        <h4 className="text-base font-semibold">{publisher}</h4>
                        <h4 className="text-base font-semibold">{yearOfPublishing}</h4>
                        <h4 className="text-base font-semibold">{rating}</h4>
                    </div>
                </div>
                <div className="">
                    <button onClick={console.log('Read')} className="btn bg-blue-600 text-white mr-5">Read</button>
                    <button onClick={console.log('Wishlist')} className="btn bg-[#49b9d5] text-white ">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BooksDetailes;