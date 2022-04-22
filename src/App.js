import './App.css';
import Content from './components/Content/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Messages from './components/Dialogs/Messages/Messages.jsx';




const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav navContent = {props.state.friendsList} />
        {/* <Content /> */}
        {/* <Footer />    */}
        <div className="app-wrapper-content">
        <Routes>
          
            <Route exact path='/dialogs' element={
              <Dialogs 
                users = {props.state.profilePage.dialogsData}
                message = {props.state.messagePage.message}
                // avatar = {props.state.messagePage.avatar}
                />} />
            <Route exact path='/posts' element={
              <Content 
                profilePage = {props.state.profilePage.posts}
                newPostText = {props.state.profilePage.newPostText}
                addPost = {props.addPost}
                updateNewPostText ={props.updateNewPostText}
                />} />  
            <Route exact path='/news' element='' />
            <Route exact path='/music' element='' />  
            <Route exact path='/settings' element='' />    
        </Routes>
          {/* <Content /> */}
        </div>
      </div>
     </BrowserRouter> 
  );
}

export default App;
