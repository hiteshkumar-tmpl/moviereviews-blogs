import React from 'react'

import { useRef } from 'react';
const Contact = () => {
const ref = useRef(null);

  return (
    <div className='contact'>
  <div ref={ref}></div>
    </div>
  )
}

export default Contact