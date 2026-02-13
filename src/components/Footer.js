import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className="bg-[var(--blackish)] text-gray-500 text-center py-4 pb-16 md:pb-4">
      Copyright &copy; Sick <br />
      All Rights Reserved {year}
    </div>
  )
}

export default Footer
