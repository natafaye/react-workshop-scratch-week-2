import { MEDIA } from "./MEDIA"

// OPTION 2: Put it in Redux
// This is not real redux, this is just pretending to be redux

export const selectBooks = () => {
    return MEDIA.filter(media => media.type === "book")
}

export const selectMediaById = (id) => {
    return MEDIA.find(media => media.id === id)
}