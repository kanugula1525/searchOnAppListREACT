// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, clickOnItem, activeTabId} = props
  const {tabId, displayText} = tabItem

  const clickedButton = () => {
    clickOnItem(tabId)
  }
  const button = activeTabId === tabId ? 'selected buttonStyle' : 'buttonStyle'
  return (
    <li className="listStyle">
      <button onClick={clickedButton} className={button} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
