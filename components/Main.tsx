import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Main() {
  return (
    <div className=" mt-10 relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <div className="flex justify-center items-center mx-auto mt-5 flex-col">
          <img
            className="h-24 w-24 "
            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Adelaide_tram_logo.svg/2048px-Adelaide_tram_logo.svg.png"
          />
          <h1 className="mt-10 text-xl font-mono">Welcome</h1>
          <Input className="mt-10 w-60" placeholder="Email" />
          <Input
            className="mt-10 w-60"
            placeholder="Password"
            type="password"
          />
          <Link href="/RewardPage" className="mt-10">
            <Button>Login</Button>
          </Link>
          <p className=" text-[10px] mt-5 cursor-pointer">Forget Password ?</p>
        </div>
      </div>
    </div>
  );
}
