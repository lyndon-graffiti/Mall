import { Sort } from '@/constants/sort'
import { create } from 'zustand'

interface SortStore {
    sort: Sort
    setSort: (sort: Sort) => void
}

export const useSortStore = create<SortStore>((set) => ({
    sort: Sort.LATEST,
    setSort: (sort) => set({ sort }),
}))
