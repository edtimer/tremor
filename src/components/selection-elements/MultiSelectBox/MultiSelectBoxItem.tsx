import React from 'react';

import { isValueInArray, removeValueFromArray } from '@utils/utils';
import SelectItemWrapper from '@common/SelectItemWrapper';

export interface MultiSelectBoxItemProps {
    value: any,
    name: string,
    selectedItemsValues?: any[],
    setSelectedItemsValues?: React.Dispatch<React.SetStateAction<any[]>>,
}

const MultiSelectBoxItem = ({
    value,
    name,
    selectedItemsValues,
    setSelectedItemsValues,
}: MultiSelectBoxItemProps) => (
    <SelectItemWrapper
        handleClick={ () => {
            if (!isValueInArray(value, selectedItemsValues!)) {
                setSelectedItemsValues!([...selectedItemsValues!, value]);
            } else {
                const newSelectedItemsValues = removeValueFromArray(value, selectedItemsValues!);
                setSelectedItemsValues!([...newSelectedItemsValues!]);
            }
        } }
        isActive={ false }
    >
        <div className="flex items-center space-x-3 truncate">
            <input
                id="options"
                aria-describedby="options-description"
                name="options"
                type="checkbox"
                className="flex-none focus:ring-2 focus:ring-opacity-100 focus:outline-none focus:ring-blue-300 h-4 w-4
                    text-blue-500 border border-gray-300 rounded cursor-pointer"
                checked={ isValueInArray(value, selectedItemsValues!) }
            />
            <span className="whitespace-nowrap truncate"> { name } </span>
        </div>
    </SelectItemWrapper>
);

export default MultiSelectBoxItem;
