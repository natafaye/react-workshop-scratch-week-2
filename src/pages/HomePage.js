import React from 'react'

export default function HomePage({ mediaList }) {
  return (
    <ul>
        { mediaList.map(media => (
            <li>{ media.name }</li>
        ))}
    </ul>
  )
}
