(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/data/credential.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "login",
    ()=>login,
    "logout",
    ()=>logout
]);
const users = [
    {
        email: "user@company.com",
        password: "pass",
        name: "A",
        role: "user",
        other: "..."
    },
    {
        email: "admin@company.com",
        password: "pass",
        name: "B",
        role: "admin",
        other: "..."
    },
    {
        email: "manager@company.com",
        password: "pass",
        name: "C",
        role: "manager",
        other: "..."
    }
];
const login = (email, pass)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (Math.random() <= 0.8) {
                // find user by email and password
                const user = users.find((u)=>u.email === email && u.password === pass);
                //user not found
                if (user === undefined) {
                    reject("user not found");
                    return;
                }
                //user found
                const newCredential = {
                    email: user.email,
                    name: user.name,
                    token: crypto.randomUUID(),
                    role: user.role
                };
                // ... store credential
                resolve(newCredential);
            } else {
                reject("connection refused");
            }
        }, 1000 + Math.random() * 2000);
    });
};
const logout = (token)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (Math.random() <= 0.8) {
                //... remove credential
                resolve("success");
            } else {
                reject("connection refused");
            }
        }, 1000 + Math.random() * 2000);
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_data_credential_ts_1e_esxc._.js.map