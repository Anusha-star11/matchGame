import './index.css'

const Tabs = props => {
  const {tabItem, onClickTab} = props
  const {tabId, displayText} = tabItem

  const onClickTabItem = () => {
    onClickTab(tabId)
  }
  return (
    <li>
      <button type="button" className="tabitem" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default Tabs
