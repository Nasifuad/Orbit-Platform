import { Skeleton } from "@/components/ui/skeleton";

const SkeletonUI = () => {
  return (
    <>
      <div className="flex flex-col space-y-3 p-4">
        <div className="flex items-center space-x-3">
          <Skeleton className="h-12 w-12 rounded-full  p-4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <Skeleton className="h-[100px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-7 w-1/2" />
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-4 w-1/5" />
        </div>
      </div>
    </>
  );
};

export default SkeletonUI;
