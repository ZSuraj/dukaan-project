import * as React from "react";
import Icon from "@/components/Icon";
import {
  faAngleLeft,
  faAngleRight,
  faHouse,
  faMagnifyingGlass,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Download from "@/components/Download";
import InvertArrows from "@/components/InvertArrows";
import QuestionMark from "@/components/QuestionMark";
import Info from "@/components/Info";
import DownArrow from "@/components/DownArrow";
import Sound from "@/components/Sound";

export default function Home() {
  return (
    <div className="bg-neutral-50">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[16%] max-md:w-full max-md:ml-0">
          <div className="items-stretch bg-slate-800 flex w-full grow flex-col mx-auto px-2 py-4">
            <div className="flex gap-3 pr-4 items-start">
              <div className="rounded bg-white flex aspect-square flex-col justify-center items-center w-10 h-10 px-px">
                <Icon />
              </div>
              <span className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-white text-base font-medium leading-6 whitespace-nowrap">
                  Nishyan
                </div>
                <div className="text-white text-sm leading-4 underline whitespace-nowrap mt-1">
                  Visit store
                </div>
              </span>
              <FontAwesomeIcon
                icon={faAngleDown}
                className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto text-white"
              />
            </div>
            <span className="items-stretch rounded flex justify-between gap-3 mt-6 px-4 py-2 max-md:pr-5">
              <FontAwesomeIcon
                icon={faHouse}
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full text-white"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Home
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <FontAwesomeIcon
                icon={faHouse}
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full text-white"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Orders
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <FontAwesomeIcon
                icon={faHouse}
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full text-white"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Products
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <FontAwesomeIcon
                icon={faHouse}
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full text-white"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Delivery
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <FontAwesomeIcon
                icon={faHouse}
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full text-white"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Marketing
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <FontAwesomeIcon
                icon={faHouse}
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full text-white"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Analytics
              </div>
            </span>
            <span className="items-stretch rounded bg-white bg-opacity-10 flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <FontAwesomeIcon
                icon={faHouse}
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full text-white"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Payments
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <FontAwesomeIcon
                icon={faHouse}
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full text-white"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Tools
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <FontAwesomeIcon
                icon={faHouse}
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full text-white"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Discounts
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <FontAwesomeIcon
                icon={faHouse}
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full text-white"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Audience
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <FontAwesomeIcon
                icon={faHouse}
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full text-white"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Appearance
              </div>
            </span>
            <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5">
              <FontAwesomeIcon
                icon={faHouse}
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full text-white"
              />
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Plugins
              </div>
            </span>
            <div className="items-stretch rounded bg-slate-700 flex w-full flex-col justify-center mt-[854px] pl-3.5 pr-9 py-1.5 max-md:mt-10 max-md:pr-5">
              <div className="items-center flex justify-between gap-3">
                <div className="items-center rounded bg-white bg-opacity-10 flex aspect-[1.0833333333333333] flex-col justify-center my-auto px-2 py-1.5">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full text-white"
                  />
                </div>
                <span className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="text-white text-sm leading-4 whitespace-nowrap">
                    Available credits
                  </div>
                  <div className="text-white text-base font-medium leading-6">
                    222.10
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
          <span className="flex flex-col items-stretch px-5 max-md:max-w-full">
            <div className="items-stretch bg-white flex w-full justify-between gap-5 px-8 py-3 border-b-zinc-300 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
              <div className="flex items-center justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                <span className="items-stretch flex gap-4 my-auto">
                  <div className="text-zinc-900 text-base leading-6">
                    Payments
                  </div>
                  <span className="self-center flex gap-1.5 my-auto items-center">
                    <QuestionMark className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full" />
                    <div className="text-neutral-600 text-xs leading-4">
                      How it works
                    </div>
                  </span>
                </span>
                <span className="items-center self-stretch bg-zinc-100 flex justify-between gap-2 px-4 py-2.5 rounded-md max-md:pr-5">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto text-gray-400"
                  />
                  <div className="text-zinc-500 text-base leading-6 self-stretch grow whitespace-nowrap">
                    Search features, tutorials, etc.
                  </div>
                </span>
              </div>
              <div className="items-stretch flex justify-between gap-3">
                <Sound className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full" />
                <DownArrow className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full" />
              </div>
            </div>
            <span className="justify-between items-center flex gap-5 mt-8 mx-3 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
              <div className="text-zinc-900 text-xl font-medium leading-7 my-auto">
                Overview
              </div>
              <span className="rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white self-stretch flex items-center justify-between gap-2.5 px-3.5 py-2.5 border-solid">
                <div className="text-neutral-600 text-base leading-6 grow whitespace-nowrap my-auto">
                  Last Month
                </div>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto text-gray-400"
                />
              </span>
            </span>
            <div className="mt-6 mx-3 max-md:max-w-full max-md:mr-2.5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <span className="shadow-sm bg-white flex grow flex-col w-full pl-5 pr-20 py-5 rounded-lg items-start max-md:max-w-full max-md:mt-5 max-md:pr-5">
                    <div className="text-neutral-600 text-base leading-6 whitespace-nowrap">
                      Online orders
                    </div>
                    <div className="text-zinc-900 text-3xl font-medium leading-10 mt-4">
                      231
                    </div>
                  </span>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <span className="shadow-sm bg-white flex grow flex-col w-full pl-5 pr-20 py-5 rounded-lg items-start max-md:max-w-full max-md:mt-5 max-md:pr-5">
                    <div className="text-neutral-600 text-base leading-6">
                      Amount received
                    </div>
                    <div className="text-zinc-900 text-3xl font-medium leading-10 whitespace-nowrap mt-4">
                      ₹23,92,312.19
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-zinc-900 text-xl font-medium leading-7 mt-8 mx-3 max-md:max-w-full max-md:mr-2.5">
              Transactions | This Month
            </div>
            <div className="items-end shadow-sm bg-white flex flex-col mt-5 mx-3 pt-3 pb-6 px-3 rounded-lg max-md:max-w-full max-md:mr-2.5">
              <div className="justify-between items-stretch self-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                <span className="items-center rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white flex justify-between gap-2 px-4 py-2.5 border-solid">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto text-gray-400"
                  />
                  <div className="text-neutral-400 text-sm leading-5 self-stretch grow whitespace-nowrap">
                    Search by order ID...
                  </div>
                </span>
                <div className="justify-end items-stretch self-center flex gap-3 my-auto">
                  <span className="items-center rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white flex justify-between gap-1.5 px-3 py-1.5 border-solid">
                    <div className="text-neutral-600 text-base leading-6">
                      Sort
                    </div>
                    <InvertArrows className="mt-1 aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto" />
                  </span>
                  <Download className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full" />
                </div>
              </div>
              <div className="items-stretch rounded bg-zinc-100 self-stretch flex w-full justify-between gap-5 mt-3 px-3 py-2.5 max-md:max-w-full max-md:flex-wrap">
                <span className="flex items-stretch justify-between gap-5">
                  <div className="text-neutral-600 text-sm font-medium leading-5">
                    Order ID
                  </div>
                  <span className="items-center flex justify-between gap-1">
                    <div className="text-neutral-600 text-sm font-medium leading-5 grow whitespace-nowrap">
                      Order date
                    </div>
                    <FontAwesomeIcon
                      icon={faSortDown}
                      className="flex items-center aspect-square w-[8px] h-[8px] object-contain object-center overflow-hidden self-center shrink-0 my-auto"
                    />
                  </span>
                </span>
                <span className="flex items-stretch justify-between gap-5">
                  <div className="text-neutral-600 text-right text-sm font-medium leading-5">
                    Order amount
                  </div>
                  <span className="items-stretch flex justify-between gap-1">
                    <div className="text-neutral-600 text-right text-sm font-medium leading-5 grow whitespace-nowrap">
                      Transaction fees
                    </div>
                    <Info className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto" />
                  </span>
                </span>
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-stretch bg-white self-stretch flex flex-col pt-3.5 px-3 max-md:max-w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <span className="text-sky-700 text-sm font-medium leading-5 justify-center items-stretch bg-white grow">
                    #281209{" "}
                  </span>
                  <span className="text-zinc-900 text-sm leading-5 justify-center items-stretch bg-white grow">
                    7 July, 2023
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹1,278.23
                  </span>
                  <span className="text-zinc-900 text-right text-sm leading-5 whitespace-nowrap justify-center bg-white grow pl-16 items-end max-md:pl-5">
                    ₹22
                  </span>
                </div>
                <div className="bg-neutral-200 shrink-0 h-px mt-3.5 max-md:max-w-full" />
              </div>
              <div className="items-center self-center flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                <span className="justify-between rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white self-stretch flex gap-1.5 p-1.5 border-solid items-start">
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="aspect-square text-neutral-600 object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full self-start"
                  />
                  <div className="text-neutral-600 text-center text-sm font-medium leading-5 self-stretch grow whitespace-nowrap">
                    Previous
                  </div>
                </span>
                <span className="items-start flex gap-2 my-auto">
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 grow whitespace-nowrap my-auto">
                    1
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    ...
                  </div>
                  <span className="text-white text-center text-sm font-medium leading-5 whitespace-nowrap flex justify-center items-center rounded bg-sky-700 self-stretch aspect-square h-7 px-1.5">
                    10
                  </span>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    11
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    12
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    13
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    14
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    15
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    16
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 my-auto">
                    17
                  </div>
                  <div className="self-center text-neutral-600 text-center text-sm leading-5 grow whitespace-nowrap my-auto">
                    18
                  </div>
                </span>
                <span className="justify-between items-center rounded border border-[color:var(--Black-85,#D9D9D9)] bg-white self-stretch flex gap-1.5 pl-3 pr-1.5 py-1.5 border-solid">
                  <div className="text-neutral-600 text-center text-sm font-medium leading-5">
                    Next
                  </div>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="aspect-square text-neutral-600 object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full self-start"
                  />
                </span>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
