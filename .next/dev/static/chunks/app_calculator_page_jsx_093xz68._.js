(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/calculator/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Calculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$login$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/login.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const btnBase = "w-[45px] h-[45px] rounded-2xl font-bold text-[1.35rem] cursor-pointer disabled:cursor-not-allowed shadow-md shadow-blue-950/30 active:shadow-inner active:scale-95 transition-all duration-100 disabled:opacity-40 disabled:shadow-none";
const colors = {
    // ปุ่มเมมโมรี่ / operator: พื้นขาว ตัวอักษรน้ำเงิน
    green: "bg-gradient-to-br from-white to-blue-100 text-blue-700 border border-blue-200 active:from-blue-100 active:to-white",
    // ปุ่ม CE: น้ำเงินเข้ม ตัวอักษรขาว
    red: "bg-gradient-to-br from-blue-800 to-blue-950 text-white active:from-blue-950 active:to-blue-800",
    // ปุ่มตัวเลข: น้ำเงิน ตัวอักษรขาว
    blue: "bg-gradient-to-br from-blue-500 to-blue-700 text-white active:from-blue-700 active:to-blue-500"
};
const Button = ({ color, onClick, disabled, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(btnBase, colors[color]),
        onClick: onClick,
        disabled: disabled,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/calculator/page.jsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Button;
const insertSeparator = (str, separator = " ", groupSize = 3)=>{
    let resultString = " ";
    let counter = 0;
    for(let i = str.length - 1; i >= 0; i--){
        resultString = str[i] + resultString;
        if (i != 0 && counter++ % groupSize === groupSize - 1) resultString = separator + resultString;
    }
    return resultString;
};
function Calculator() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Calculator.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$login$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkLogin"])(router, '/calculator')
    }["Calculator.useEffect"], [
        router
    ]);
    // State สำหรับเก็บค่าต่างๆ ของเครื่องคิดเลข
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("first"); // first/operator/second
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0"); // ตัวเลขที่แสดงบนหน้าจอ
    const [first, setFirst] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // เลขตัวแรก
    const [second, setSecond] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // เลขตัวที่สอง
    const [operator, setOperator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("?"); // ตัวดำเนินการ (+, -)
    const [lastOperator, setLastOperator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("?"); // operator ล่าสุดสำหรับกด = ซ้ำ
    const [lastSecond, setLastSecond] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // เลขตัวที่สองล่าสุดสำหรับกด = ซ้ำ
    const debug = true;
    // รีเซ็ตค่าทั้งหมด
    const init = ()=>{
        setState("first");
        setDisplay("0");
        setFirst(0);
        setSecond(0);
        setOperator("?");
        setLastOperator("?");
        setLastSecond(0);
    };
    // กดปุ่มตัวเลข
    const numberClick = (num)=>{
        console.log(num);
        switch(state){
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
    const operatorClick = (op)=>{
        console.log(op);
        switch(state){
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
                switch(operator){
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
    const equalClick = ()=>{
        console.log("=");
        switch(state){
            case "first":
                if (lastOperator !== "?") {
                    const newSecond = lastSecond;
                    let result;
                    switch(lastOperator){
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
                switch(operator){
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
    const ceClick = ()=>{
        init();
    };
    // รองรับ keyboard input
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Calculator.useEffect": ()=>{
            const handleKeyDown = {
                "Calculator.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "Escape") ceClick();
                    else if (e.key === "Enter") equalClick();
                    else if (e.key >= "0" && e.key <= "9") numberClick(Number(e.key));
                    else if (e.key === "-") operatorClick("-");
                    else if (e.key === "+") operatorClick("+");
                }
            }["Calculator.useEffect.handleKeyDown"];
            document.addEventListener("keydown", handleKeyDown);
            return ({
                "Calculator.useEffect": ()=>document.removeEventListener("keydown", handleKeyDown)
            })["Calculator.useEffect"];
        }
    }["Calculator.useEffect"], [
        state,
        display,
        first,
        second,
        operator,
        lastOperator,
        lastSecond
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center mt-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[270px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-[3px] border-blue-950 rounded-[28px] bg-blue-900 shadow-2xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-[5px] border-blue-300 rounded-[22px] p-1.25 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "screen",
                                className: "border border-blue-200 rounded-2xl h-10 bg-gradient-to-b from-blue-50 to-white text-blue-950 flex justify-end items-center px-3 pb-1 text-[1.75rem] mb-6.25 overflow-hidden shadow-inner",
                                children: insertSeparator(display)
                            }, void 0, false, {
                                fileName: "[project]/app/calculator/page.jsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1.25 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "green",
                                        disabled: true,
                                        children: "MC"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "green",
                                        disabled: true,
                                        children: "MR"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "green",
                                        disabled: true,
                                        children: "M+"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "green",
                                        disabled: true,
                                        children: "M-"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "red",
                                        onClick: ceClick,
                                        children: "CE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/calculator/page.jsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1.25 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "blue",
                                        onClick: ()=>numberClick(7),
                                        children: "7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "blue",
                                        onClick: ()=>numberClick(8),
                                        children: "8"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "blue",
                                        onClick: ()=>numberClick(9),
                                        children: "9"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "green",
                                        disabled: true,
                                        children: "÷"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "green",
                                        disabled: true,
                                        children: "√"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/calculator/page.jsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1.25 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "blue",
                                        onClick: ()=>numberClick(4),
                                        children: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "blue",
                                        onClick: ()=>numberClick(5),
                                        children: "5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "blue",
                                        onClick: ()=>numberClick(6),
                                        children: "6"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "green",
                                        disabled: true,
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "green",
                                        disabled: true,
                                        children: "%"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/calculator/page.jsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1.25 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "blue",
                                        onClick: ()=>numberClick(1),
                                        children: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "blue",
                                        onClick: ()=>numberClick(2),
                                        children: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "blue",
                                        onClick: ()=>numberClick(3),
                                        children: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "green",
                                        onClick: ()=>operatorClick("-"),
                                        children: "–"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "green",
                                        disabled: true,
                                        children: "1/x"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/calculator/page.jsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1.25 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "blue",
                                        onClick: ()=>numberClick(0),
                                        children: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "blue",
                                        disabled: true,
                                        children: "."
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "blue",
                                        disabled: true,
                                        children: "±"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "green",
                                        onClick: ()=>operatorClick("+"),
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        color: "green",
                                        onClick: equalClick,
                                        children: "="
                                    }, void 0, false, {
                                        fileName: "[project]/app/calculator/page.jsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/calculator/page.jsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/calculator/page.jsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-blue-100 text-center font-mono text-[0.8rem] py-1",
                        children: "68077310 นางสาวพิชชาภา สุวรรณะ"
                    }, void 0, false, {
                        fileName: "[project]/app/calculator/page.jsx",
                        lineNumber: 240,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/calculator/page.jsx",
                lineNumber: 196,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/calculator/page.jsx",
            lineNumber: 195,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/calculator/page.jsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_s(Calculator, "CuXx9dpWl1xo7Imo3/7WNcCxzZM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = Calculator;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "Calculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_calculator_page_jsx_093xz68._.js.map