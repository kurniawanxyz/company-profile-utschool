import React, { useEffect, useState } from 'react';
import Select, { MultiValue } from 'react-select';

// Tentukan tipe untuk opsi
export type OptionType = {
  value: string;
  label: string;
};

function MultiSelect({options,name,label}:{options:OptionType[],name:string,label:string}) {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<OptionType>>([]);
  const [value,setValue] = useState<string[]>()

  // Data opsi
//   const options: OptionType[] = [
//     { value: 'apple', label: 'Apple' },
//     { value: 'banana', label: 'Banana' },
//     { value: 'grape', label: 'Grape' },
//     { value: 'orange', label: 'Orange' },
//     { value: 'pineapple', label: 'Pineapple' },
//   ];

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
