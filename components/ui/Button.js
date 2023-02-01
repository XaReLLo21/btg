const Button = ({ text, href, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault()
    window.location.href = href
  }

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#BD1E51',
        color: 'white',
        borderRadius: '0px',
        border: 'none',
        fontSize: '16px',
        fontWeight: '500',
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  )
}

export default Button
