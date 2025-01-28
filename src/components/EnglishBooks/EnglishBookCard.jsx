import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";

const EnglishBookCard = ({ book }) => {
    // console.log(book);
    const {bookName, author, image, rating, category, tags} = book;
    return (
        <div className="border rounded-2xl items-center flex flex-col space-y-5 p-6">
            <div className="bg-gray-200 w-full rounded-2xl flex flex-col p-3 items-center justify-center ">
                <img src={image} width={150}  alt="" />
            </div>
            <div className="space-y-5 text-left p-3">
                <div className="flex flex-row gap-3 text-left">
                    {
                        tags.map((tag, index) => <p className="bg-green-100 text-green-500 font-medium text-base rounded-2xl px-3 py-2" key={index} >{tag}</p>)
                    }
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold ">{bookName}</h2>
                    <p className="font-medium text-base">By : {author}</p>
                </div>
                <div className="border-dashed border w-full h-0.5"></div>
                <div className="flex flex-row justify-between">
                    <p className="font-medium text-base">{category}</p>
                    <div className="flex flex-row gap-2 items-center">
                        <p className="">{rating}</p>
                        <FaRegStar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnglishBookCard;


EnglishBookCard.propTypes = {
    book : PropTypes.object
}