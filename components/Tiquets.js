import React from 'react'
import { useEffect } from 'react'

const Tiquets = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.defer = true
    script.src = 'https://widgets.tiqets.com/loader.js'
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <div
        data-tiqets-widget='discovery'
        data-cards-layout='responsive'
        data-content-type='product'
        data-content-ids='977906,974325,975758,1015478'
        data-currency='EUR'
        data-partner='barcelona_reseguide'
      ></div>
    </>
  )
}

export default Tiquets
