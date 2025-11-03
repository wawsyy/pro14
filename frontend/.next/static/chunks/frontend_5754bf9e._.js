(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/fhevm/GenericStringStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GenericStringInMemoryStorage",
    ()=>GenericStringInMemoryStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
;
;
var _store = /*#__PURE__*/ new WeakMap();
class GenericStringInMemoryStorage {
    getItem(key) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store).has(key) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store).get(key) : null;
    }
    setItem(key, value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store).set(key, value);
    }
    removeItem(key) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store).delete(key);
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _store, {
            writable: true,
            value: new Map()
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/hooks/useInMemoryStorage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InMemoryStorageProvider",
    ()=>InMemoryStorageProvider,
    "useInMemoryStorage",
    ()=>useInMemoryStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$GenericStringStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/GenericStringStorage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
const InMemoryStorageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useInMemoryStorage = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(InMemoryStorageContext);
    if (!context) {
        throw new Error("useInMemoryStorage must be used within a InMemoryStorageProvider");
    }
    return context;
};
_s(useInMemoryStorage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const InMemoryStorageProvider = (param)=>{
    let { children } = param;
    _s1();
    const [storage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$GenericStringStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenericStringInMemoryStorage"]());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InMemoryStorageContext.Provider, {
        value: {
            storage
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/hooks/useInMemoryStorage.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(InMemoryStorageProvider, "x0i4GONcX3DIh8SIX7jgOVd5s3I=");
_c = InMemoryStorageProvider;
var _c;
__turbopack_context__.k.register(_c, "InMemoryStorageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/utils/errorHandler.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Error handling utility functions
 * Convert technical errors to user-friendly messages
 */ __turbopack_context__.s([
    "getFriendlyErrorMessage",
    ()=>getFriendlyErrorMessage,
    "handleNonCriticalError",
    ()=>handleNonCriticalError,
    "isNonCriticalError",
    ()=>isNonCriticalError
]);
function getFriendlyErrorMessage(error) {
    if (!error) return "An unknown error occurred";
    // If error is an object (like transaction object), convert to string
    if (typeof error === 'object' && error !== null && !(error instanceof Error)) {
        // Check if it's a transaction object
        if ('hash' in error || 'blockNumber' in error || 'provider' in error) {
            return "Transaction processing error, please try again";
        }
        // Convert other objects to string
        try {
            return "Error: ".concat(JSON.stringify(error).substring(0, 200));
        } catch (e) {
            return "Error: ".concat(Object.keys(error).join(', '));
        }
    }
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorName = error instanceof Error ? error.name : "";
    // Handle network-related errors
    if (errorMessage.includes("Failed to fetch") || errorMessage.includes("fetch failed") || errorMessage.includes("NetworkError") || errorName === "TypeError" && errorMessage.includes("fetch")) {
        return "Network connection failed, please check your network connection or try again later";
    }
    // Handle RPC-related errors
    if (errorMessage.includes("RPC") || errorMessage.includes("Web3 node") || errorMessage.includes("not reachable")) {
        if (errorMessage.includes("localhost:8545") || errorMessage.includes("127.0.0.1:8545")) {
            return "Unable to connect to local Hardhat node, please ensure 'npx hardhat node' is running";
        }
        return "Unable to connect to blockchain network, please check network configuration";
    }
    // Handle FHEVM SDK loading errors
    if (errorMessage.includes("RelayerSDK") || errorMessage.includes("FHEVM") || errorMessage.includes("SDK")) {
        return "FHEVM SDK loading failed, please refresh the page and try again";
    }
    // Handle FHEVM Relayer errors
    if (errorMessage.includes("Relayer") || errorMessage.includes("relayer") || errorMessage.includes("Bad JSON") || errorMessage.includes("ERR_CONNECTION_CLOSED") || errorMessage.includes("testnet.zama")) {
        return "FHEVM Relayer service is temporarily unavailable. Please try again later or use local Hardhat network for testing";
    }
    // Handle timeout errors
    if (errorMessage.includes("timeout") || errorMessage.includes("aborted")) {
        return "Request timeout, please try again later";
    }
    // Return original error message if not too technical
    if (errorMessage.length < 100) {
        return errorMessage;
    }
    return "Operation failed, please try again later";
}
function isNonCriticalError(error) {
    if (!error) return false;
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorName = error instanceof Error ? error.name : "";
    const errorString = String(error);
    // These errors usually don't affect core functionality and can be silently handled
    const nonCriticalPatterns = [
        "Failed to fetch",
        "fetch failed",
        "NetworkError",
        "aborted",
        "RelayerSDK",
        "TypeError",
        "403",
        "400",
        "ERR_BLOCKED_BY_RESPONSE",
        "NotSameOriginAfterDefaultedToSameOriginByCoep",
        "coinbase.com",
        "walletconnect",
        "web3modal",
        "FHEVM operation was cancelled",
        "FhevmAbortError",
        "operation was cancelled",
        "Relayer",
        "relayer",
        "ERR_CONNECTION_CLOSED",
        "testnet.zama"
    ];
    // Check error message
    const messageMatches = nonCriticalPatterns.some((pattern)=>errorMessage.includes(pattern) || errorString.includes(pattern));
    // Special handling for TypeError: Failed to fetch
    if (errorName === "TypeError" && (errorMessage.includes("fetch") || errorString.includes("fetch") || errorMessage === "" || // Sometimes error message is empty but type is TypeError
    errorString.includes("Failed"))) {
        return true;
    }
    return messageMatches;
}
function handleNonCriticalError(error, context) {
    if (isNonCriticalError(error)) {
        const friendlyMessage = getFriendlyErrorMessage(error);
        console.log("[Non-critical error".concat(context ? " - ".concat(context) : "", "] ").concat(friendlyMessage));
        return;
    }
    // Critical errors are still thrown
    throw error;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@rainbow-me/rainbowkit/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/chains/definitions/sepolia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$hardhat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/chains/definitions/hardhat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/useInMemoryStorage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/utils/errorHandler.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultConfig"])({
    appName: "Weight Trend",
    projectId: "WEIGHT_TREND_FHEVM",
    chains: [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$hardhat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hardhat"]
    ],
    ssr: false,
    transports: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"].id]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])("https://sepolia.infura.io/v3/".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_INFURA_API_KEY || "b18fb7e6ca7045ac83c41157ab93f990")),
        [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$hardhat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hardhat"].id]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])("http://localhost:8545")
    }
});
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]();
function Providers(param) {
    let { children } = param;
    _s();
    // Global error handling: silently handle non-critical network errors
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Providers.useEffect": ()=>{
            // Save original console methods
            const originalConsoleError = console.error;
            const originalConsoleWarn = console.warn;
            // Override console.error to intercept error output
            console.error = ({
                "Providers.useEffect": function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    // Check if it's a "Failed to fetch" related error
                    const errorString = args.map({
                        "Providers.useEffect.errorString": (arg)=>{
                            if (arg instanceof Error) {
                                return "".concat(arg.name, ": ").concat(arg.message);
                            }
                            if (typeof arg === 'string') {
                                return arg;
                            }
                            try {
                                return JSON.stringify(arg);
                            } catch (e) {
                                return String(arg);
                            }
                        }
                    }["Providers.useEffect.errorString"]).join(" ");
                    // Check various possible non-critical error formats
                    // Including bundled anonymous function errors, network errors, third-party service errors
                    const isNonCritical = errorString.includes("Failed to fetch") || errorString.includes("failed to fetch") || errorString.includes("403") || errorString.includes("400") || errorString.includes("ERR_BLOCKED_BY_RESPONSE") || errorString.includes("NotSameOriginAfterDefaultedToSameOriginByCoep") || errorString.includes("coinbase.com") || errorString.includes("walletconnect") || errorString.includes("web3modal") || errorString.includes("FHEVM operation was cancelled") || errorString.includes("FhevmAbortError") || errorString.includes("operation was cancelled") || errorString.includes("TypeError") && (errorString.includes("fetch") || errorString.includes("Failed") || errorString.includes("<anonymous>") // Bundled code location
                    );
                    if (isNonCritical) {
                        // Completely silent handling, no output
                        return;
                    }
                    // Other errors output normally
                    originalConsoleError.apply(console, args);
                }
            })["Providers.useEffect"];
            // Override console.warn to intercept warning output (optional)
            console.warn = ({
                "Providers.useEffect": function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    const warnString = args.map({
                        "Providers.useEffect.warnString": (arg)=>{
                            if (arg instanceof Error) {
                                return "".concat(arg.name, ": ").concat(arg.message);
                            }
                            return String(arg);
                        }
                    }["Providers.useEffect.warnString"]).join(" ");
                    // Silently handle non-critical warnings
                    const isNonCriticalWarn = warnString.includes("Failed to fetch remote project configuration") || warnString.includes("Reown Config") || warnString.includes("Could not load signature") || warnString.includes("Lit is in dev mode") || warnString.includes("React DevTools");
                    if (isNonCriticalWarn) {
                        // Completely silent warning handling
                        return;
                    }
                    // Other warnings output normally
                    originalConsoleWarn.apply(console, args);
                }
            })["Providers.useEffect"];
            const handleError = {
                "Providers.useEffect.handleError": (event)=>{
                    // Ensure error is an Error object, handle special cases like transaction objects
                    let error;
                    if (event.error instanceof Error) {
                        error = event.error;
                    } else if (typeof event.error === 'object' && event.error !== null) {
                        // Check if it's a transaction object
                        if ('hash' in event.error || 'blockNumber' in event.error || 'provider' in event.error) {
                            error = new Error("Transaction processing error, please try again");
                        } else {
                            error = new Error("Error event with object: ".concat(Object.keys(event.error).join(', ')));
                        }
                    } else {
                        error = new Error(event.message || String(event));
                    }
                    // If non-critical error (e.g., Failed to fetch), silently handle
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonCriticalError"])(error)) {
                        event.preventDefault(); // Prevent default error handling
                        event.stopPropagation(); // Stop event propagation
                        // No logging, completely silent
                        return false;
                    }
                }
            }["Providers.useEffect.handleError"];
            const handleUnhandledRejection = {
                "Providers.useEffect.handleUnhandledRejection": (event)=>{
                    // Ensure error is an Error object, handle special cases like transaction objects
                    let error;
                    if (event.reason instanceof Error) {
                        error = event.reason;
                    } else if (typeof event.reason === 'object' && event.reason !== null) {
                        // Check if it's a transaction object
                        if ('hash' in event.reason || 'blockNumber' in event.reason || 'provider' in event.reason) {
                            error = new Error("Transaction processing error, please try again");
                        } else {
                            error = new Error("Promise rejected with object: ".concat(Object.keys(event.reason).join(', ')));
                        }
                    } else {
                        error = new Error(String(event.reason));
                    }
                    // If non-critical error, silently handle
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonCriticalError"])(error)) {
                        event.preventDefault(); // Prevent default error handling
                        // No logging, completely silent
                        return false;
                    }
                }
            }["Providers.useEffect.handleUnhandledRejection"];
            window.addEventListener("error", handleError, true); // Use capture phase
            window.addEventListener("unhandledrejection", handleUnhandledRejection);
            return ({
                "Providers.useEffect": ()=>{
                    // Restore original console methods
                    console.error = originalConsoleError;
                    console.warn = originalConsoleWarn;
                    window.removeEventListener("error", handleError, true);
                    window.removeEventListener("unhandledrejection", handleUnhandledRejection);
                }
            })["Providers.useEffect"];
        }
    }["Providers.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiProvider"], {
        config: config,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RainbowKitProvider"], {
                locale: "en",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InMemoryStorageProvider"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/frontend/app/providers.tsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/providers.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/providers.tsx",
            lineNumber: 174,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/app/providers.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_s(Providers, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/ErrorBoundary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorBoundary",
    ()=>ErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/utils/errorHandler.ts [app-client] (ecmascript)");
"use client";
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    static getDerivedStateFromError(error) {
        // Ensure error is an Error object, wrap it if not
        const errorObj = error instanceof Error ? error : new Error(typeof error === 'object' && error !== null ? JSON.stringify(error) : String(error));
        return {
            hasError: true,
            error: errorObj
        };
    }
    componentDidCatch(error, errorInfo) {
        // Ensure error is an Error object
        const errorObj = error instanceof Error ? error : new Error(typeof error === 'object' && error !== null ? "Non-Error object caught: ".concat(Object.keys(error).join(', ')) : String(error));
        // If non-critical error, silently handle (log to console only)
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonCriticalError"])(errorObj)) {
            // Reset error state to allow app to continue
            setTimeout(()=>{
                this.setState({
                    hasError: false,
                    error: null
                });
            }, 100);
            return;
        }
        // Only log critical errors
        console.error("[ErrorBoundary] Caught error:", errorObj, errorInfo);
    }
    render() {
        if (this.state.hasError && this.state.error) {
            // Non-critical errors don't show fallback, let app continue
            // componentDidCatch already set reset, just return children here
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNonCriticalError"])(this.state.error)) {
                return this.props.children;
            }
            // Critical errors show fallback
            if (this.props.fallback) {
                return this.props.fallback;
            }
            // Ensure error message is a string
            const errorMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFriendlyErrorMessage"])(this.state.error);
            const safeErrorMessage = typeof errorMessage === 'string' ? errorMessage : String(errorMessage);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-red-50 border border-red-200 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-red-800 mb-2",
                        children: "An Error Occurred"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ErrorBoundary.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-600",
                        children: safeErrorMessage
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ErrorBoundary.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>this.setState({
                                hasError: false,
                                error: null
                            }),
                        className: "mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ErrorBoundary.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ErrorBoundary.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_5754bf9e._.js.map