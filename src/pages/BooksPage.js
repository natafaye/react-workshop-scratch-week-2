import React from 'react'
import { selectBooks } from '../mediaSlice'

export default function BooksPage() { // OPTION 1: Get it from props
    // OPTION 2: Select it from redux
    const bookList = selectBooks();

    return (
        <ul>
            {bookList.map(media => (
                <li>{media.name}</li>
            ))}
        </ul>
    )
}
