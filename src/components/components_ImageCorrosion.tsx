import React from 'react'

const ImageCorrosion: React.FC = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=400&width=800')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute inset-0 opacity-50">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>
    </div>
  )
}

export default ImageCorrosion

