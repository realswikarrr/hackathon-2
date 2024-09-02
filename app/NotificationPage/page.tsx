import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function NotificationPage() {
  return (
    <div className=" mt-10 relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <div className="flex justify-center items-center mx-auto mt-5 flex-col">
          <h1 className=" font-mono">Notifications</h1>
          <Button className="mt-5" variant={"destructive"}>
            You Have 2 Day Login Streak
          </Button>
          <Button className="mt-5" variant={"destructive"}>
            Closure - Stop 19 - from Monday
          </Button>
          <Button className="mt-5" variant={"destructive"}>
            Detour - Bus 654 - from Monday
          </Button>
          <Button className="mt-5" variant={"destructive"}>
            Change - Bus 654 - from Monday
          </Button>
          <Link href="/RewardPage">
            <Button className="mt-5">Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
