const ButtonExt = ({ text, href, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault()
    window.open(href, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#BD1E51',
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  )
}

export default ButtonExt
