import { useState } from 'react';
import './App.css';
import contacts from './contacts.json'


function App() {

  console.log(contacts.length)

  const [shownContacts, setShownContacts] = useState(contacts.slice(0,5))

  const orderByName = () => {
    let orderedNames = [...shownContacts].sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    setShownContacts(orderedNames)
  }

  const rankPopularity = () => {
    let rankByPop = [...shownContacts].sort((a, b) => {
      return b.popularity - a.popularity
    })
    
    setShownContacts(rankByPop)
  }

  const addRandom = () => {
    let remainingContacts = contacts.filter((contact) => {
      return !shownContacts.some((remainingContact) => remainingContact.id === contact.id) 
    })
    console.log(remainingContacts)
    let newContacts = [...shownContacts]
    newContacts.push(remainingContacts[Math.floor(Math.random() * remainingContacts.length)])
    setShownContacts(newContacts)
  }

  return (
    <div className="App">

      <h1>IronContacts</h1>

      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={rankPopularity}>Sort by Popularity</button>
      <button onClick={orderByName}>Sort by Name</button>

 

      <table>

        <thead>
          <tr>
            <th><h2>Picture</h2></th>
            <th><h2>Name</h2></th>
            <th><h2>Popularity</h2></th>
            <th><h2>Won Oscar</h2></th>
            <th><h2>Won Emmy</h2></th>
          </tr>
        </thead>

        <tbody>

          {
            shownContacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt="contact" width="100px" ></img></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>{contact.wonOscar && <h2>🏆</h2>}</td>
                  <td>{contact.wonEmmy  && <h2>🏆</h2>}</td>
                </tr>

              )
            })
          }

          

        </tbody>

      </table>
      
    </div>
  );
}

export default App;
