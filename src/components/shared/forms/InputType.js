import React from 'react'

function InputType({ labelFor, labelText, inputType, inputName, inputValue, handleOnChange, labelClassName=null, inputClassName=null, ...childProps }) {
  const inputProps = {};
  if (inputType === 'checkbox' || inputType === 'radio') {
    // Pass checked prop for checkbox and radio types
    inputProps.checked = childProps.checked;
  }
  return (
    <>
      <div className="mb-3">
        <label htmlFor={labelFor} className={`${labelClassName === null ? 'form-label' : labelClassName}`}>{labelText}</label>
        <input 
          type={inputType} 
          className={`${inputClassName === null ? 'form-control' : inputClassName}`}
          name={inputName}
          value={inputValue}
          onChange={handleOnChange}
          {...inputProps}
          {...childProps}
        />
      </div>
    </>
  )
}

export default InputType