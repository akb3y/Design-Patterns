import React from 'react'

function NavTabs(){
  return (
    <>
    <button onClick={() => alert('#1 Clicked')}>Link #1</button>
    <button onClick={() => alert('Hello World')}>Link #2</button>
    <button onClick={() => alert('Hi!!!')}>Link #3</button>
    <button onClick={() => alert('You clicked me?')}>Link #4</button>
    </>
  )
}

export default NavTabs;