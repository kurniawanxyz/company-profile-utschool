import React, { useEffect, useState } from 'react';
import Select, { MultiValue } from 'react-select';

// Tentukan tipe untuk opsi
export type OptionType = {
  value: string;
  label: string;
};

type Props = {
  options:OptionType[]
  name:string
  label:string  
  defaultVal?: OptionType[]
}

function MultiSelect({options,name,label,defaultVal} : Props) {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<OptionType>>([]);
  const [value,setValue] = useState<string[]>()


  useEffect(()=>{
    if(defaultVal){
      setSelectedOptions(defaultVal)
    }
  },[defaultVal])


  // Handler perubahan
  const handleSelectChange = (selected: MultiValue<OptionType>) => {
    setSelectedOptions(selected);
  };
  useEffect(()=>{
  if(selectedOptions){
    const data = selectedOptions.map((item)=>item.value)
    setValue(data)
  }
  },[selectedOptions])

  console.log(value)

  return (
    <div>
      <label className='text-black'>{label}</label>
      {
        value?.map((item,index)=>(
          <input type="hidden" key={index} name={`${name}[]`} value={item} />
        ))
      }
      <select name="" id=""></select>
      <Select

        className='text-black'
        isMulti
        value={selectedOptions}
        onChange={handleSelectChange}
        options={options}
      />
    </div>
  );
}

export default MultiSelect;
