import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
    return (
        <div className="container flex py-6">
            {/* 排序区域骨架屏 */}
            <div className="w-64 py-4">
                <Skeleton className="h-6 w-24 m-3 mb-4" />
                <div className="flex-col gap-6 ml-12">
                    {Array(3).fill(0).map((_, index) => (
                        <Skeleton key={index} className="h-10 w-36 mb-6 rounded-md" />
                    ))}
                </div>
            </div>
            {/* 产品列表骨架屏 */}
            <div className="flex-1">
                {/* 标题骨架屏 */}
                <Skeleton className="h-10 w-64 mb-8" />
                <div className="grid grid-cols-3 gap-4">
                    {Array(6).fill(0).map((_, index) => (
                        <div key={index} className="bg-slate-50 p-4 rounded-lg shadow-md hover:bg-slate-200 transition duration-300 ease-in-out cursor-pointer" style={{ minHeight: '450px' }}>
                            <div className="w-full" style={{ height: '350px' }}>
                                <Skeleton className="w-full h-full" />
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <Skeleton className="h-8 w-40" />
                                <Skeleton className="h-8 w-24 rounded-md font-bold text-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Loading