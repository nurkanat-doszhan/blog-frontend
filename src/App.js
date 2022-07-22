import './App.css'
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Posts from './pages/Post/Posts'
import Post from './pages/Post/Post'
import Addpost from './pages/Post/Addpost'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/Login/SignUp'
import NotFound from './pages/NotFound'

function App() {
  const [backData, setBackData] = useState([{}])
  const [user, setUser] = useState([{}])

  useEffect(() => {
    fetch('http://localhost:5000/posts').then(
      response => response.json()
      ).then(
        data => {
        setBackData(data)
      }
    )
  }, [])
  
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path='posts' element={<Posts data={backData} />} />
          <Route path=':postId' element={<Post data={backData} />} />
          <Route path='add-post' element={<Addpost />} />
          <Route path='login' element={<Login />} />
          <Route path='sign-up' element={<SignUp />} />
          {/* <Route path='/*' element={<NotFound />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
