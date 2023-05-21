import "./UserList.css"

const UserList = ({ users, onEditUser, onDeleteUser }) => {
    if(!users.length) return <p className="loader">Without users</p>

    return (
    <ul className="user_list">
        {users.map(user =>
            <li key={user.id} className="user_card">
                    <h2 className="user_card__full_name">{`${user.first_name} ${user.last_name}`}</h2>
                    <div className="user_card__data">
                        <h3>EMAIL</h3>
                        <p>{user.email}</p>
                        <h3>BIRTHDAY</h3>
                        <p>{`🎁 ${user.birthday}`}</p>
                    </div>
                    <div className="user_card__buttons">
                        <button className="delete_btn" onClick={() => onDeleteUser(user.id)}>
                            <span className="material-symbols-outlined">Delete</span>
                        </button>
                        <button className="edit_btn" onClick={() => onEditUser(user)}>✏️</button>
                    </div>
            </li>    
        )}
    </ul>
  )
}

export default UserList