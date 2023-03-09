import React from 'react'

const title = "Group 4";
export function Nav({title,children}) {
   
  return (
    <div>
      {title}
      {children} 
    </div>
  )

  }