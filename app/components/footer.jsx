'use client'
import React from 'react'

const footer = () => {
    const today = new Date()
    const thisYear = today.getUTCFullYear()
  return (
    <footer className="bg-teal-500 p-6">
      <div className="flex flex-wrap flex-column justify-center sm:justify-between  items-center">
        <div className="text-white">
          <p>Copyright {thisYear} Hunting Coder</p>
        </div>
        <div className="text-white">
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default footer