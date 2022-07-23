import React from 'react'
import { useParams } from 'react-router-dom'
import { selectMediaById } from '../mediaSlice';

export default function MediaDetailPage() { // OPTION 1 get all the media through props then find the one we want in this compoennt
    const { mediaId } = useParams();
    // get the one particular with that id

    // OPTION 2: Use a selector function from redux to get the one media with that id
    const media = selectMediaById(parseInt(mediaId))

    return (
        <div>
            <h2>{media.name}</h2>
        </div>
    )
}
