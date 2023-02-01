import React, { useState, useEffect } from 'react'

const BookingComAPI = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.booking.com/some_endpoint', {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_BOOKING_COM_API_KEY}`,
        },
      })
      const data = await response.json()
      setData(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default BookingComAPI
