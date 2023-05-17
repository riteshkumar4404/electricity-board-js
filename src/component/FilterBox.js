import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function FilterBox({ fetchBetweenDates }) {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null

    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    return (
        <div className="flex m-5">
            <Datepicker
                value={value}
                onChange={handleValueChange}
                showShortcuts={true}
            />
            <button className="bg-gray-300 p-3 rounded" onClick={() => { fetchBetweenDates(value) }}>Submit</button>
        </div>
    )
}
