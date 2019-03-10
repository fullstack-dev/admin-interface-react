import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import { Admin, Resource, ListGuesser } from 'react-admin';
// import { Admin, Resource } from 'react-admin';
import { Admin, Resource } from 'react-admin';
import { PostList } from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider} >
    {/* <Resource name="users" list={ListGuesser} /> */}
    {/* <Resource name="posts" list={ListGuesser} /> */}
    <Resource name="posts" list={PostList} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App
