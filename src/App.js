import UserProfile from './components/UserProfile'
import './App.css'

const userDetialsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Prashanth',
    role: 'Devops Engineer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Priya',
    role: 'Associate Engineer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Meena',
    role: 'Frontend Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Nagaraju',
    role: 'Backend Developer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Users Lists</h1>
    <ul>
      {userDetialsList.map(eachItem => (
        <UserProfile userData={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
