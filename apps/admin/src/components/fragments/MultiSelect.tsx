import React, { useState } from 'react';
import Select, { MultiValue } from 'react-select';

// Tentukan tipe untuk opsi
export type OptionType = {
  value: string;
  label: string;
};

function MultiSelect({options}:{options:OptionType[]}) {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<OptionType>>([]);

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

  return (
    <div>
      <label>Select multiple values:</label>
      <Select
        className='text-black'
        isMulti
        value={selectedOptions}
        onChange={handleSelectChange}
        options={options}
      />
      
      <p>Selected values: {selectedOptions.map(option => option.label).join(', ')}</p>
    </div>
  );
}

export default MultiSelect;
