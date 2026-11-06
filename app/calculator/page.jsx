"use client";
import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import { checkLogin } from "@/utils/login";

const btnBase =
  "w-[45px] h-[45px] rounded-2xl font-bold text-[1.35rem] cursor-pointer disabled:cursor-not-allowed shadow-md shadow-blue-950/30 active:shadow-inner active:scale-95 transition-all duration-100 disabled:opacity-40 disabled:shadow-none";

const colors = {
  // ปุ่มเมมโมรี่ / operator: พื้นขาว ตัวอักษรน้ำเงิน
  green:
    "bg-gradient-to-br from-white to-blue-100 text-blue-700 border border-blue-200 active:from-blue-100 active:to-white",
  // ปุ่ม CE: น้ำเงินเข้ม ตัวอักษรขาว
  red: "bg-gradient-to-br from-blue-800 to-blue-950 text-white active:from-blue-950 active:to-blue-800",
  // ปุ่มตัวเลข: น้ำเงิน ตัวอักษรขาว
  blue: "bg-gradient-to-br from-blue-500 to-blue-700 text-white active:from-blue-700 active:to-blue-500",
};

const Button = ({ color, onClick, disabled, children }) => (
  <button className={cn(btnBase, colors[color])} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

const insertSeparator = (str, separator = " ", groupSize = 3) => {
  let resultString = " ";
  let counter = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    resultString = str[i] + resultString;
    if (i != 0 && counter++ % groupSize === groupSize - 1)
      resultString = separator + resultString;
  }
  return resultString;
};

export default function Calculator() {
  const router = useRouter()
    useEffect(() => checkLogin(router, '/calculator'), [router])

  // State สำหรับเก็บค่าต่างๆ ของเครื่องคิดเลข
  const [state, setState] = useState("first"); // first/operator/second
  const [display, setDisplay] = useState("0"); // ตัวเลขที่แสดงบนหน้าจอ
  const [first, setFirst] = useState(0); // เลขตัวแรก
  const [second, setSecond] = useState(0); // เลขตัวที่สอง
  const [operator, setOperator] = useState("?"); // ตัวดำเนินการ (+, -)
  const [lastOperator, setLastOperator] = useState("?"); // operator ล่าสุดสำหรับกด = ซ้ำ
  const [lastSecond, setLastSecond] = useState(0); // เลขตัวที่สองล่าสุดสำหรับกด = ซ้ำ

  const debug = true;

  // รีเซ็ตค่าทั้งหมด
  const init = () => {
    setState("first");
    setDisplay("0");
    setFirst(0);
    setSecond(0);
    setOperator("?");
    setLastOperator("?");
    setLastSecond(0);
  };

  // กดปุ่มตัวเลข
  const numberClick = (num) => {
    console.log(num);
    switch (state) {
      case "first":
        if (display.length < 9) {
          if (display === "0") {
            setDisplay(String(num));
          } else {
            setDisplay(display + String(num));
          }
        }
        break;
      case "operator":
        setDisplay(String(num));
        setState("second");
        break;
      case "second":
        if (display.length < 9) {
          if (display === "0") {
            setDisplay(String(num));
          } else {
            setDisplay(display + String(num));
          }
        }
        break;
    }
  };

  // กดปุ่ม operator (+, -)
  const operatorClick = (op) => {
    console.log(op);
    switch (state) {
      case "first":
        setFirst(Number(display));
        setOperator(String(op));
        setState("operator");
        break;
      case "operator":
        setOperator(String(op));
        break;
      case "second":
        const newSecond = Number(display);
        let result;
        switch (operator) {
          case "+":
            result = first + newSecond;
            break;
          case "-":
            result = first - newSecond;
            break;
          default:
            result = 0;
        }
        setDisplay(String(result));
        setFirst(result);
        setSecond(0);
        setOperator(String(op));
        setState("operator");
        break;
    }
  };

  // กดปุ่มเท่ากับ (=)
  const equalClick = () => {
    console.log("=");
    switch (state) {
      case "first":
        if (lastOperator !== "?") {
          const newSecond = lastSecond;
          let result;
          switch (lastOperator) {
            case "+":
              result = first + newSecond;
              break;
            case "-":
              result = first - newSecond;
              break;
            default:
              result = first;
          }
          setDisplay(String(result));
          setFirst(result);
        }
        break;
      case "operator":
        break;
      case "second":
        const newSecond = Number(display);
        let result;
        switch (operator) {
          case "+":
            result = first + newSecond;
            break;
          case "-":
            result = first - newSecond;
            break;
          default:
            result = 0;
        }
        setDisplay(String(result));
        setState("first");
        setFirst(result);
        setLastOperator(operator);
        setLastSecond(newSecond);
        setSecond(0);
        setOperator("?");
        break;
    }
  };

  // กดปุ่ม CE (Clear)
  const ceClick = () => {
    init();
  };

  // รองรับ keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") ceClick();
      else if (e.key === "Enter") equalClick();
      else if (e.key >= "0" && e.key <= "9") numberClick(Number(e.key));
      else if (e.key === "-") operatorClick("-");
      else if (e.key === "+") operatorClick("+");
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [state, display, first, second, operator, lastOperator, lastSecond]);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-[270px]">
        <div className="border-[3px] border-blue-950 rounded-[28px] bg-blue-900 shadow-2xl overflow-hidden">
          <div className="border-[5px] border-blue-300 rounded-[22px] p-1.25 bg-white">
            <div
              id="screen"
              className="border border-blue-200 rounded-2xl h-10 bg-gradient-to-b from-blue-50 to-white text-blue-950 flex justify-end items-center px-3 pb-1 text-[1.75rem] mb-6.25 overflow-hidden shadow-inner"
            >
              {insertSeparator(display)}
            </div>
            <div className="mt-1.25 flex justify-between">
              <Button color="green" disabled>MC</Button>
              <Button color="green" disabled>MR</Button>
              <Button color="green" disabled>M+</Button>
              <Button color="green" disabled>M-</Button>
              <Button color="red" onClick={ceClick}>CE</Button>
            </div>
            <div className="mt-1.25 flex justify-between">
              <Button color="blue" onClick={() => numberClick(7)}>7</Button>
              <Button color="blue" onClick={() => numberClick(8)}>8</Button>
              <Button color="blue" onClick={() => numberClick(9)}>9</Button>
              <Button color="green" disabled>÷</Button>
              <Button color="green" disabled>√</Button>
            </div>
            <div className="mt-1.25 flex justify-between">
              <Button color="blue" onClick={() => numberClick(4)}>4</Button>
              <Button color="blue" onClick={() => numberClick(5)}>5</Button>
              <Button color="blue" onClick={() => numberClick(6)}>6</Button>
              <Button color="green" disabled>×</Button>
              <Button color="green" disabled>%</Button>
            </div>
            <div className="mt-1.25 flex justify-between">
              <Button color="blue" onClick={() => numberClick(1)}>1</Button>
              <Button color="blue" onClick={() => numberClick(2)}>2</Button>
              <Button color="blue" onClick={() => numberClick(3)}>3</Button>
              <Button color="green" onClick={() => operatorClick("-")}>–</Button>
              <Button color="green" disabled>1/x</Button>
            </div>
            <div className="mt-1.25 flex justify-between">
              <Button color="blue" onClick={() => numberClick(0)}>0</Button>
              <Button color="blue" disabled>.</Button>
              <Button color="blue" disabled>±</Button>
              <Button color="green" onClick={() => operatorClick("+")}>+</Button>
              <Button color="green" onClick={equalClick}>=</Button>
            </div>
          </div>
          <div className="text-blue-100 text-center font-mono text-[0.8rem] py-1">
            68077310 นางสาวพิชชาภา สุวรรณะ
          </div>
        </div>
      </div>
    </div>
  );
}