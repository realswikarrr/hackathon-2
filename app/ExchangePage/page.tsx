import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function ExchangePage() {
  return (
    <div className=" mt-10 relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <div className="flex justify-center items-center mx-auto mt-5 flex-col">
          <h1>Rewards</h1>

          <p className=" text-[10px] mt-5 cursor-pointer">
            Total Reward Points : 20
          </p>
          <p className=" text-[10px] mt-5  text-justify w-60">
            Note: Select any cards from below and exchange your points with the
            gift card of same value.
          </p>

          <div className="flex mt-10 flex-row gap-2">
            <Link href={"/ClaimReward"}>
              <img
                className=" h-20  w-32 rounded-md cursor-pointer"
                src="https://assets-us-01.kc-usercontent.com/7af951a6-2a13-004b-f0eb-a87382a5b2e7/668513a2-9327-429e-971f-01ecc4f6cda1/coles-0920.jpg?fm=png&auto=format&w=2560"
              />
            </Link>
            <img
              className="h-20 w-32 rounded-md cursor-pointer"
              src="https://files.prezzee.com.au/media/sku-theme-designs/bws-5a41c8cd-c110-463d-a92a-7b55f5c8fb12/bws.jpg"
            />
          </div>
          <div className="flex flex-row gap-2 mt-5">
            <img
              className=" h-20  w-32 rounded-md cursor-pointer"
              src="https://images.squarespace-cdn.com/content/v1/5eeb53f84137f77eaf5c93d0/1599046232196-G61KR4EUVWO0BG0HNKGY/Apple_GiftCard_NEW.png"
            />
            <img
              className="h-20 w-32 rounded-md cursor-pointer"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnez8S2iyu25qU1VimGQD9Mz-GjyM6aB9O2kjtcM8v8oq0PDMh8MzzKW6FZRZBbf0nKD-eY4ZlRlcS1qIP-1IAOx1vXL5_x6lgy343582h1faCkzujzVfxKzb5RLJHDKYYaWJypJGb8oU/s1600/Netflix-gift-cards-1024x601.png"
            />
          </div>
          <Link href="/RewardPage" className="mt-5">
            <Button>Go Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
