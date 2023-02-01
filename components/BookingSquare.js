import React, { useEffect } from 'react'

const BookingBanner = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//cf.bstatic.com/static/affiliate_base/js/flexiproduct.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div>
      <ins
        className='bookingaff'
        data-aid='2311848'
        data-target_aid='314155'
        data-prod='banner'
        data-width='300'
        data-height='250'
        data-lang='sv'
      >
        <a href='//www.booking.com?aid=314155'>Booking.com</a>
      </ins>
    </div>
  )
}

export default BookingBanner
