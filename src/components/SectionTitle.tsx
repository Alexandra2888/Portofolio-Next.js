import React from 'react'

interface ISectionTitle {
  text: string
}

const SectionTitle  = ({text}:ISectionTitle) => {
  return (
    <section className='border-b border-gray-200 pb-5'>
      <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
    </section>
  )
}

export default SectionTitle;