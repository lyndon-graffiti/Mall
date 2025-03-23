'use client'

import { useSortStore } from "@/store/sort";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { SORT_OPTIONS, SORT_TITLE } from "@/constants/sort";
import { Sort as SortType } from "@/constants/sort";

const Sort = () => {
    const { sort, setSort } = useSortStore()
    return (
        <div className="w-64 py-4">
            <p className="m-3 text-xl">{SORT_TITLE}</p>
            <ToggleGroup
                className="flex-col gap-6 ml-12"
                type="single"
                value={sort}
                defaultValue={SORT_OPTIONS[0].value}
                onValueChange={(value) => value && setSort(value as SortType)}
            >
                {SORT_OPTIONS.map((option) => (
                    <ToggleGroupItem
                        key={option.value}
                        value={option.value}
                        variant="neutral"
                        size="xl"
                        className="rounded-md"
                    >
                        {option.label}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>
        </div>
    )
}

export default Sort;