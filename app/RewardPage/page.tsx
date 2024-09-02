import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

export default function RewardPage() {
  return (
    <div className=" mt-10 relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <div className="flex justify-center items-center mx-auto mt-5 flex-col">
          <h1 className="mt-3 text-xl font-mono">Metro Rewards</h1>

          <Link href="/NotificationPage" className="mt-5">
            <Button variant={"destructive"}>5 New Notifications</Button>
          </Link>

          <img
            className="mt-5 h-24"
            src="https://preprod.adelaidemetro.com.au/__data/assets/image/0006/1328784/Metrocard_-_Concession.png"
          />

          <p className=" text-[10px] mt-5 cursor-pointer">
            Remaining Balance : 20.6$
          </p>

          <p className=" text-[10px] mt-5 cursor-pointer">
            Total Reward Points : 20
          </p>

          <Link href="/ExchangePage" className="mt-5">
            <Button variant={"outline"}>
              Exchange Points{" "}
              <img
                className=" ml-2 w-5 h-5"
                src="https://cdn-icons-png.flaticon.com/512/8829/8829889.png"
              />
            </Button>
          </Link>
          <Link href="/MetroReward" className="mt-5">
            <Button variant={"outline"}>CO2 Saved Till Now</Button>
          </Link>
          <Link href="/" className="mt-5">
            <Button>Log Out</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
