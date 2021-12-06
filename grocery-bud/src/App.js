import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show:false, 
    msg:'', type:''})
  
  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list));
  },[list])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      // displlay alert
      showAlert(true,'please enter value','danger');
    }
    else if (name && isEditing){
      // deal with edit
      setList(
        list.map((item) => {
          if(item.id === editID){
            return {...item,title:name}
          }
          return item;
        })
      )
      showAlert(true,'valur change','success');
      setName('');
      setIsEditing(false);
      setEditID(null);
    }
    else {
      //show alert
      showAlert(true,'item added to list','success');
      //add item to list
      const newList = {id: new Date().getTime().toString(),
      title: name}
      setList([...list,newList]); 
      setName('');
    }
  }

  const showAlert = (show = false, msg ='', type = '') => {
    setAlert({show, msg, type})
    console.log('showAlert');
  }

  const clearList = () => {
    showAlert(true,'Empty list','danger');
    setList([]);
  }

  const removeItems = (id) => {
    showAlert(true,'item removed','danger');
    setList(list.filter((item) => item.id !== id));
  }

  const editItems = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  }

  return <section className="section-center">
    <form className="grocery-form" 
      onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} list={list} 
      removeAlert={showAlert} />}
      <h3>grocery bud</h3>
      <div className="form-control">
        <input type="text" className="grocery" 
          placeholder="e.g  eggs" value={name} 
          onChange={(e) => setName(e.target.value)} />
        <button type="submit" className="submit-btn">
          {isEditing ? 'edit':'submit'}
        </button>
      </div>
    </form> 
    {list.length > 0 &&
      <div className="grocery-container">
        <List items={list} removeItems={removeItems} 
        editItems={editItems}  />
        <button className="clear-btn" onClick={clearList}
        >clear items</button>
      </div>
    }
  </section>
}

export default App
