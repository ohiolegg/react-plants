import React from 'react'
import { motion } from "framer-motion";

const FilterInput = React.forwardRef(({handleFilters, name, onCancelFilters}, ref) => {

  const [checked, setChecked] = React.useState(false);
  const onChangeHandler = () => {

    if(!checked){
        handleFilters()
    }

    if(checked){
        onCancelFilters()
    }
  }

  return (
    <label ref = {ref} className = "checkbox-label" >
        <input className="checkbox" type="checkbox" onChange = {() => setChecked(!checked)} onClick = {() => onChangeHandler()}/>
        <span className="fake-checkbox" ></span>{name}
    </label>
  )
})

export const MFilterInput = motion(FilterInput)

export default FilterInput