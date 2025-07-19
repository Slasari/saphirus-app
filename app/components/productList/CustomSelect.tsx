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
    return (
        <div>
            <Select 
            options={options}
            onChange={handleChange}
            placeholder={placeholder}
            isSearchable
            menuPlacement="auto"
            isClearable/>
        </div>
    )
}