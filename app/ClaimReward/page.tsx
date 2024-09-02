"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export default function ClaimReward() {
  const { toast } = useToast();
  return (
    <div className=" mt-10 relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <div className="flex justify-center items-center mx-auto mt-5 flex-col">
          <h1 className="mt-10 text-xs mb-5">Your Gift Card Code </h1>
          <Button variant={"outline"}>Qriut987737jTT99988</Button>
          <Button
            onClick={() => {
              toast({
                title: "Copied Sucessfully",
              });
            }}
            className="mt-5"
          >
            Copy
          </Button>
          <p className=" text-[10px] mt-5  text-justify w-60">
            Note: Please donot share your reward code with anyone else.
          </p>
          <Link href="/RewardPage" className="mt-5">
            <Button>Finished</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
