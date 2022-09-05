import {useState,useEffect} from 'react';


function Users() {

const [users, setUsers] = useState([]);
const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then(data => setUsers(data))
        .catch(e => console.log(e))
        .finally(() => setIsLoading (false))
    },[])

  return (
    <span>

    <h1>Users</h1>



    {isLoading && <div> Loading...</div>}

    {

     
        users.map((user) => <div className='card' key={user.id}>

        <h3>
          {user.title}  
        </h3>
        


        <img src={user.image}/>
          
          <p>

          {user.description}</p>
     
        
        </div>
        )      

    }

    </span>
  )
}

export default Users