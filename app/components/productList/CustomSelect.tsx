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
    value: string
}

export default function CustomSelect({options, onChange, placeholder, value} : CustomSelectProps){
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
            value={options.find(f => f.value === value) || ""}
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