import { useEffect, useState } from 'react';
import { getAllUsers } from './services/getAllUsers';
import { createUser } from './services/createUser';

import Header from './components/Header/Header'
import UserList from './components/UserList/UserList';
import Modal from './components/Modal/Modal';
import UserForm from './components/UserForm/UserForm';

import './App.css'
import { updateUser } from './services/updateUser';
import { deleteUser } from './services/deleteUser';

function App() {
  const [users, setUsers] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [editingUserData, setEditingUserData] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const loadUsers = async () => {
    const userData = await getAllUsers();
    setUsers(userData);
  }

  const handleCloseModal = () => {
    setIsVisibleModal(false);
    setEditingUserData(null);
    document.body.style.overflow = '';
    window.scrollTo(0, scrollPosition);
  }

  const handleCreate = () => {
    setScrollPosition(window.pageYOffset);
    window.scrollTo(0, 0);
    setIsVisibleModal(true);
    document.body.style.overflow = 'hidden';
  }

  const handleSend = async (data) => {
    if(data.id) await updateUser(data.id, data);
    else await createUser(data);

    await loadUsers();
    setIsVisibleModal(false);
    document.body.style.overflow = '';
    window.scrollTo(0, scrollPosition);
  }

  const handleEditUser = (data) => {
    setScrollPosition(window.pageYOffset);
    window.scrollTo(0, 0);
    setEditingUserData(data);
    setIsVisibleModal(true);
    document.body.style.overflow = 'hidden';
  }

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    await loadUsers();
  }

  useEffect(()=>{
    loadUsers();
  }, [])

  return (
    <>
      <Header onCreate={handleCreate} />

      <UserList users={users} onEditUser={handleEditUser} onDeleteUser={handleDeleteUser}/>

      <Modal isVisible={isVisibleModal}>
        <UserForm onClose={handleCloseModal} onSend={handleSend} initialData={editingUserData}/>
      </Modal>
      <footer>
        <h2>Made with ❤️ in Academlo</h2>
        <h2>Web Developer :  Miguel Garavito</h2>
      </footer>
    </>
  );
}

export default App
