import React from 'react'
import { useEffect } from 'react'

// Component showing booking.com map of Barcelona. responsive.

const BookingMap = () => {
  useEffect(() => {
    ;(function (d, sc, u) {
      var s = d.createElement(sc),
        p = d.getElementsByTagName(sc)[0]
      s.type = 'text/javascript'
      s.async = true
      s.src = u + '?v=' + +new Date()
      p.parentNode.insertBefore(s, p)
    })(
      document,
      'script',
      '//cf.bstatic.com/static/affiliate_base/js/flexiproduct.js'
    )
  }, [])

  return (
    <ins
      class='bookingaff'
      data-aid='2311385'
      data-target_aid='314155'
      data-prod='map'
      data-width='100%'
      data-height='590'
      data-lang='ualng'
      data-dest_id='0'
      data-dest_type='landmark'
      data-latitude='41.3873974'
      data-longitude='2.168568'
      data-mwhsb='0'
      data-address='Barcelona, Spain'
    >
      <a href='//www.booking.com?aid=314155'>Booking.com</a>
    </ins>
  )
}

export default BookingMap
