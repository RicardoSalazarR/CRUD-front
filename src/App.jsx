import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import UsersList from './components/UsersList'
import UsersForm from './components/UsersForm'


function App() {
  const [usersList, setUsersList] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(()=>{
    getUsers()
  },[])

  const getUsers=()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res=>setUsersList(res.data))
  }

  const postUser = (user)=>{
    axios.post('https://users-crud1.herokuapp.com/users/',user)
    .then(()=>{getUsers()})
    .catch(error => console.log(error.response?.data))
  }

  const putUser = (data)=>{
    axios.put(`https://users-crud1.herokuapp.com/users/${selectedUser.id}/`,data)
    .then(()=>{getUsers()})
    .catch(error => console.log(error.response?.data))
    setSelectedUser(null)
  }

  const deleteUser=(id)=>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(()=>{getUsers()})
    .catch(error => console.log(error.response?.data))
  }

  const selectUser = (id)=>{
    setSelectedUser(id)
  }

  return (
    <div className="App">
      <UsersForm
        postUser={postUser}
        selectedUser={selectedUser}
        putUser={putUser}
      />   
      <UsersList
      usersList={usersList}
      selectUser={selectUser}
      deleteUser={deleteUser}
      />
    </div>
  )
}

export default App
