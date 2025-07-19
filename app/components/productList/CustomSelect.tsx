"use client";

import Select, {SingleValue} from "react-select";

type OptionType = {
    value: string;
    label: string
}

type CustomSelectProps = {
    options: OptionType[];
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function CustomSelect({options, onChange, placeholder} : CustomSelectProps){
    const handleChange = (selectedOption: SingleValue<OptionType>) => {
        if(selectedOption){
            onChange(selectedOption.value)
        }
        if(selectedOption === null){
            onChange('')
        }
    }

    const customTheme = (theme) => ({
  ...theme,
  borderRadius: 5,
  colors: {
    ...theme.colors,
    primary25: '#FFC067',
    primary: 'neutral0',
  },
});
   const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#FFC067' : 'white',
    color: state.isFocused ? 'white' : 'black',
    cursor: 'pointer',
    ':active': {
      backgroundColor: '#e8a341', // color personalizado al mantener clic
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: 'red',
    ':hover': {
      color: 'darkred',
    },
  }),
};
    return (
        <div>
            <Select 
            styles={customStyles}
            theme={customTheme}
            options={options}
            onChange={handleChange}
            placeholder={placeholder}
            isSearchable
            menuPlacement="auto"
            isClearable/>
        </div>
    )

    
}