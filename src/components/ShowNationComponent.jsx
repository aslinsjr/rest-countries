import "./ShowNationComponent.css"

const ShowNationComponent = ({nationClicked, data, darkMode, handleReturn}) => {
  console.log(nationClicked)
  return (
    <div className="showing-container">
      <button id="return-btn" onClick={() => handleReturn()}><i className="bi bi-arrow-left"></i> Back</button>
      <div className="flag-container">
        <img src={nationClicked.flags.svg} alt="" />
      </div>
      <div className="info-container">
        <h2>{nationClicked.name}</h2>
        <div className="inner-info">
          <p>Native Name: <span className="infos">{nationClicked.nativeName}</span></p>
          <p>Population: <span className="infos">{nationClicked.population}</span></p>
          <p>Region: <span className="infos">{nationClicked.region}</span></p>
          <p>Sub Region: <span className="infos">{nationClicked.subregion}</span></p>
          <p>Capital: <span className="infos">{nationClicked.capital}</span></p>
          <p>Top Level Domain: <span className="infos">{nationClicked.topLevelDomain}</span></p>
          <p>Currencies: <span className="infos">
          {nationClicked.currencies ? <>{nationClicked.currencies.map((currencie) => {
            if(nationClicked.currencies.length > 1) {
              return currencie.name + ", "
            } else {
              return currencie.name 
            }
          })}</> : <></>}</span></p>
          <p>Languages: <span className="infos">
          {nationClicked.languages ? <>{nationClicked.languages.map((language) => {
            if(nationClicked.languages.length > 1) {
              return language.name + ", "
            } else {
              return language.name
            }
          })}</> : <></>}</span></p>
        </div>
        <div className="borders-container">
          <p>Border Countries:</p>
          {nationClicked.borders ? <>
            {nationClicked.borders.map((border) => {
            data.map((nation) => {
              if(border === nation.alpha3Code) {
                return border = nation.name
              }
            })
            return <span key={border} className={darkMode ? "infos borders dark-borders" : "infos borders"}>{border}</span>
            })}
         </> : <></>}
        </div>
      </div>
    </div>
  )
}

export default ShowNationComponent