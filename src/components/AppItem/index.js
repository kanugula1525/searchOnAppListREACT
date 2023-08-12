// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp
  return (
    <li className="appItem">
      <img className="appLogo" src={imageUrl} alt={appName} />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
