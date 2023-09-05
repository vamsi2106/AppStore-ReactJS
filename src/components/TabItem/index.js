import './index.css'

const TabItem = props => {
  const {tabsItem, tabChange, activeStatus} = props
  const {tabId, displayText} = tabsItem
  const changeTab = () => [tabChange(tabId)]
  const activeButtonClass = activeStatus ? 'tabButton' : ''

  return (
    <li>
      <button className={activeButtonClass} onClick={changeTab} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
