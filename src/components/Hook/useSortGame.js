import {useMemo, useState} from 'react';

export const useSortGame = (games = []) => {
    const [isDescSort, setIsDescSort] = useState(false)

    const sortedGames = useMemo(() => {
        const sortableGames =  [...games]

        sortableGames.sort((a, b) => {
            if (+a.price < +b.price) return isDescSort ? 1 : -1
            if (+a.price > +b.price) return isDescSort ? -1 : 1
            return 0
        })
        return sortableGames
    }, [isDescSort, games])
    return {
        isDescSort,
        setIsDescSort,
        sortedGames,
    }
}