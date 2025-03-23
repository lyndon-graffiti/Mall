export enum Sort {
    LATEST = "latest",
    PRICE_LOW_HIGH = "price-low-high",
    PRICE_HIGH_LOW = "price-high-low",
}

export type SortType = typeof Sort[keyof typeof Sort]

export const SORT_TITLE = 'Sort by'

export const SORT_OPTIONS = [
    {
        label: "Latest Arrivals",
        value: Sort.LATEST,
    },
    {
        label: "Price: Low -> High",
        value: Sort.PRICE_LOW_HIGH,
    },
    {
        label: "Price: High -> Low",
        value: Sort.PRICE_HIGH_LOW,
    },
]