import './index.css'

const UserProfile = props => {
  const {userData} = props
  const {imageUrl, name, role} = userData
  return (
    <li className="user-card-container">
      <img className="avatar" alt="avatar" src={imageUrl} />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
