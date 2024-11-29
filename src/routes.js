const {addBookByIdHandler, getBookByIdHandler, getAllBookHandler, editBookByIdHandler, deleteBookByIdHandler} = require("./handler");
const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookByIdHandler,
        
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookByIdHandler,
    }
];
module.exports = routes;