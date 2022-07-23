import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MEDIA } from './MEDIA'
import BooksPage from './pages/BooksPage'
import HomePage from './pages/HomePage'
import MediaDetailPage from './pages/MediaDetailPage'
import MoviesPage from './pages/MoviesPage'

export default function App() {
    // OPTION 1: Put the data in useState
    // and pass it down through props
    //const [mediaList, setMediaList] = useState(MEDIA)

    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="books" element={<BooksPage/>} />
                <Route path="movies" element={<MoviesPage />} />
                <Route path="media/:mediaId" element={<MediaDetailPage />} />
            </Routes>
        </div>
    )
}
