import React from 'react'
import PasswordStrength from './Link1.jsx'

function Links({tab}){
  var Linked;
  if(tab === 1){
    Linked = <PasswordStrength />
  } else if(tab === 2){
    Linked = 'hi'
  } else if (tab === 3) {
    Linked = "Peanut Butter Jelly Time"
  } else {
    Linked = 'Help me. They are all crazy!'
  }

  return (
    <>
    {Linked}
    </>
  )
}

export default Links;