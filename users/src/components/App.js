import {useEffect, useState} from "react";
import {User} from './User';

function App() {
  const [data, setData] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('https://user-transaction-fetch-api.herokuapp.com/user')
        .then(response => {return response.json()})
        .then(data => setData(data))
  }, [])

  return (
    <div className='container'>
      {data.map((user) => <User key={user.id} data={user}/>)}
    </div>
  );
}

export default App;
