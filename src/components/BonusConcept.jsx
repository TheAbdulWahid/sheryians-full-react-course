import React from 'react'
import Myfolder from './myfolder/Myfolder'

const BonusConcept = (props) => {
  // const ChangeTheme = ()=>{
  //   props.setTheme('Dark')
  //   console.log('My current theme is', props.theme)
  // }
  return (
    <div>

        <Myfolder theme={props.theme}/>
    </div>
  )
}

export default BonusConcept