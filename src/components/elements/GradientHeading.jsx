"use client";

import React from 'react'

const GradientHeading = ({text, className, type}) => {
  return (
    <>
      {
        type !== "outline" ? <h1 className={`${className} grd`}>{text}</h1> : <h1 className={`${className} grd-outline`}>{text}</h1>
      }
    </>
  )
}

export default GradientHeading