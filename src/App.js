import PostForm from './PostForm';
import AllPost from './AllPost';
import './App.css';

function App() {
  const myStyle={
    backgroundImage: "url('https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
  };
  return (
    <div  className="App" style={myStyle} >
  <div className="navbar" style={myStyle}>
    <h2 className="center  ">The Bloggers Hub!</h2>
    </div>
    <PostForm />
    <AllPost />
</div>
   
      );
    
}

export default App;
