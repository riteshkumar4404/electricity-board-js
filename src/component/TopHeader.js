import React from 'react'
import FilterBox from './FilterBox'
import SearchBox from './SearchBox'

export default function TopHeader({ fetchById, fetchBetweenDates }) {
    return (
        <div className='flex justify-between'>
            <FilterBox fetchBetweenDates={fetchBetweenDates} />
            <SearchBox fetchById={fetchById} />
        </div>
    )
}
