import React from 'react'
import {FormControl,FormErrorMessage,FormLabel} from '@chakra-ui/react'

// interface FormFieldProps{
//     label:String;
//     error:String;
// }

function FormFields({error,children,label}) {
  return (
    <div>
         <FormControl isInvalid={Boolean(error)  }>
            <FormLabel>{label}</FormLabel>
            {children }
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
    </div>
  )
}

export default FormFields