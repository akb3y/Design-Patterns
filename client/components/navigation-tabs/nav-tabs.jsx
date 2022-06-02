import React from 'react'

function NavTabs(props){
  const {tab, setTab} = props;
  return (
    <>
    <button onClick={() => setTab(1)}>Password Strength</button>
    <button onClick={() => setTab(2)}>Drag and Drop</button>
    <button onClick={() => setTab(3)}>Link #3</button>
    <button onClick={() => setTab(4)}>Link #4</button>
    </>
  )
}

export default NavTabs;