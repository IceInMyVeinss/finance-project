import React, { useEffect, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Select from "react-select";
const tempcategories = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Gift",
  },
  {
    id: 3,
    name: "Food",
  },
];

const selectOptions = tempcategories.map((category) => {
  return {
    value: category.id,
    label: category.name,
  };
});

export default function RecordsCategoryList() {
  const [categories, setCategories] = useState({});

  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  // modal config
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  console.log({ selectedOption });

  useEffect(() => {
    //database fetch
    setCategories(tempcategories);
  }, []);

  function HandleSubmit() {
    console.log({
      inputName,
      inputDescription,
      inputCategory: selectedOption.value,
    });
  }
  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white m-auto p-8 size-3/5 rounded-2xl dark:text-white dark:bg-black ">
            {/* modal title */}
            <div className="flex flex-row justify-between items-center  border-solid">
              <div className=" pl-2 py-1 text-xl font-semibold text-black dark:text-white">
                Add Record
              </div>
              <Link href={pathname}>
                <div className="text-base dark: stroke-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z"
                      fill="#0F172A"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <hr />
            <div className="flex flex-row">
              <div className="flex flex-col mt-3">
                <div className="flex flex-row text-black h-10 w-96 mb-5 dark:text-white">
                  <div className="btn h-10 w-40 rounded-3xl border-gray-400">
                    Expense
                  </div>
                  <div className="btn h-10 w-40 rounded-3xl ml-1 border-gray-400">
                    Income
                  </div>
                </div>
                <div className="flex flex-col w-80 h-11 border-solid border-gray-400  bg-zinc-100 dark:bg-neutral-800 rounded-lg justify-center ">
                  <span className="px-4 text-xs dark:text-slate-200">
                    Amount
                  </span>
                  <input
                    className="outline-none px-4 bg-transparent "
                    type="text"
                    placeholder="₮ 000.00"
                    value={inputName}
                    onChange={(event) => setInputName(event.target.value)}
                  />
                </div>
                <div className="my-2">Category</div>
                <Select
                  className="w-80 bg-zinc-100 border-gray-400"
                  options={selectOptions}
                  defaultValue={selectedOption}
                  onChange={(value) => {
                    setSelectedOption(value);
                  }}
                />
                <div className="flex flex-row ">
                  <div className="flex flex-col items-start">
                    <span className="my-2">Date</span>
                    <input
                      type="date"
                      className="w-36 h-6 p-2 rounded-md border-2 border-gray-400"
                    />
                  </div>
                  <div className="flex flex-col ml-6">
                    <span className="my-2">Time</span>
                    <input
                      type="time"
                      className="w-36 h-6 p-2 rounded-md border-2 border-gray-400 "
                    />
                  </div>
                </div>
                <button
                  className="my-3 rounded-2xl w-80 h-10 dark: bg-sky-600"
                  onClick={HandleSubmit}
                >
                  Add Record
                </button>
              </div>
              <div className="flex flex-col mx-auto">
                <div className="flex flex-col">
                  <div className="my-2">Payee</div>
                  <input
                    className="w-80 h-10 rounded-md p-4 border-2 border-gray-400 outline-none "
                    type="text"
                    placeholder="Write here"
                  />
                </div>
                <div className="my-3">Note</div>
                <textarea
                  className="h-48 p-4 border-2 border-gray-400 outline-none"
                  placeholder="description"
                  value={inputDescription}
                  onChange={(event) => setInputDescription(event.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
