import './Menu.css'
import MenuItem from './MenuItem'
import {
  faUniversity,
  faUserCircle,
  faTrophy,
  faTasks,
} from '@fortawesome/free-solid-svg-icons'
import userImg from '../img/zydhan.jpg'

const name = 'Zydhan Linnar Putra'
const headline = 'Full-stack Developer'
let menuItems = [
  { id: 'biodata', faIcon: faUserCircle, text: 'Biodata' },
  { id: 'projects', faIcon: faTasks, text: 'Projects' },
  { id: 'educations', faIcon: faUniversity, text: 'Educations' },
  { id: 'achievements', faIcon: faTrophy, text: 'Achievements' },
]

function Menu() {
  return (
    <section className="menu">
      <div id="user">
        <img src={userImg} alt={`${name}`} id="user-photo" />
        <h5 id="user-name">{name}</h5>
        <h6 id="user-headline">{headline}</h6>
      </div>
      <div id="items">
        {menuItems.map((item) => {
          return (
            <MenuItem
              key={item.id}
              id={item.id}
              faIcon={item.faIcon}
              text={item.text}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Menu
