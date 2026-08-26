"use client"

//rfc
import React from 'react'
import Link from 'next/link'

export default function OpenSanook() {
  return (
    <div className="my-4">
        <Link href="https://www.sanook.com"
              className="text-blue-600 hover:text-green-800 border-2
                           px-4 py-2 
                         border-blue-600 rounded-2xl">
            Open Sanook.com
        </Link>        
    </div>
  )
}
