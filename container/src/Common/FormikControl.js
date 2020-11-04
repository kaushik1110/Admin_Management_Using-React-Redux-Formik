import React from 'react'   
import Textarea from '../Component/Textarea'
// import ChakraInput from '../formikControl/ChakraInput'
import CheckBoxGroup from '../Component/CheckBoxGroup'
import DatePiker from '../Component/DatePiker'
import Input from '../Component/Input'
import RadioButton from '../Component/RadioButton'
import Select from '../Component/Select'

const FormikControl = (props) => {
  
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButton {...rest} />
        case 'checkbox':
            return <CheckBoxGroup {...rest} />
        case 'date':
            return <DatePiker {...rest} />
        // case 'chakrainput':
        //     return <ChakraInput {...rest} />
        default: return null
    }
}

export default FormikControl