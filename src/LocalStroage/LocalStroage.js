const getStroagedReadBook = () => {
    const stroagedReadBook = localStorage.getItem('ReadBook');
    if (stroagedReadBook) {
        return JSON.parse(stroagedReadBook); 
    }
    return [];
}

const saveReadBook = id => {
    const stroagedReadBooks = getStroagedReadBook();
    const existsReadBook = stroagedReadBooks.find(bookId => bookId === id);
    if (!existsReadBook) {
        stroagedReadBooks.push(id);
        localStorage.setItem('ReadBook', JSON.stringify(stroagedReadBooks));
    }
}


// -------------------------------------------


const getstroagedWishlistBook = () => {
    const stroagedWishlistBook = localStorage.getItem('WishlistBook');
    if (stroagedWishlistBook) {
        return JSON.parse(stroagedWishlistBook);
    }
    return [];
}

const saveWishlistBook = id => {
    const stroagedWishlistBooks = getstroagedWishlistBook();
    const existsWishlistBook = stroagedWishlistBooks.find(bookId => bookId === id);
    if (!existsWishlistBook) {
        stroagedWishlistBooks.push(id);
        localStorage.setItem('WishlistBook', JSON.stringify(stroagedWishlistBooks));
    }

}

export { getStroagedReadBook, saveReadBook, saveWishlistBook, getstroagedWishlistBook };