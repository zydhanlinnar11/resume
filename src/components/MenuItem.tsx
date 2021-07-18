import './MenuItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

interface MenuItemProps {
  id: string
  text: string
  faIcon: IconDefinition
}

function MenuItem({ id, text, faIcon }: MenuItemProps) {
  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
      <div className="menu-item" id={id}>
        <div className="menu-item-text-wrapper">
          <FontAwesomeIcon icon={faIcon} />
          <p className="menu-item-text">{text}</p>
        </div>
      </div>
    </Link>
  )
}

export default MenuItem
