import { useState, useCallback } from 'react';
import { SORT_DIRECTION } from '../../const';

export const useFilters = () => {
    const [filter, setFilterFields] = useState({
        page: 1,
        sortBy: 'popularity',
        sortDirection: SORT_DIRECTION.DESK,
        includeAdult: true
    });

    const setPage = useCallback((page) => {
        setFilterFields({
            ...filter,
            page
        })
    }, [filter])

    const setFilter = useCallback((filterFields) => {
        setFilterFields({
            ...filter,
            ...filterFields,
            year: +filterFields.year
        })
    }, [filter])

    return {
        filter,
        setPage,
        setFilter
    }
}