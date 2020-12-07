import React from 'react';
import Axios from 'axios';
import List from './component/List';
import './App.css';
function App() {
  const [data, setData] = React.useState([]);
  const [id, setId] = React.useState(null);
  React.useEffect(() => {
    Axios.get('https://demo7242716.mockable.io/videos').then(
      (res) => {
        setData(res.data.videos);
      }
    ).catch((err) => {
      console.log(err);
    })
  })
  return (
    <div className="body">
      <div className="textalign">
        <h1>List of Trending Videos</h1>
      </div>
      <div>
      <List data={data}/>
      </div>
    </div>
  );
}

export default App;
