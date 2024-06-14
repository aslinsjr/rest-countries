import "./Header.css"

const Header = ({darkMode, handleMode}) => {
  return (
    <div className="header-container" style={darkMode ? {backgroundColor: "var(--dark-blue)", boxShadow: "1px 1px 0.5rem 1px var(--dark-gray)"} : {}}>
        <h1>Where in the world?</h1>
        <div className="light-and-dark">
            {darkMode?<i className="bi bi-moon-fill" onClick={(e) => handleMode(e)}></i> :<i className="bi bi-moon" onClick={(e) => handleMode(e)}></i>}
            <h2>Dark Mode</h2>
        </div>
    </div>
  )
}

export default Header