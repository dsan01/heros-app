import React from 'react'
import { HeroList } from '../components'

export const DCPage = () => {
  return (
    <>
      <h2 className='text-3xl font-bangers my-4 text-blue-600'>DC Comics</h2>
      <hr />
      <HeroList publisher={'DC Comics'} />
    </>
  )
}
