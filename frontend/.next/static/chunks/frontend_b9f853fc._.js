(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/fhevm/internal/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SDK_CDN_URL",
    ()=>SDK_CDN_URL
]);
const SDK_CDN_URL = "https://cdn.zama.ai/relayer-sdk-js/0.2.0/relayer-sdk-js.umd.cjs";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/fhevm/internal/RelayerSDKLoader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RelayerSDKLoader",
    ()=>RelayerSDKLoader,
    "isFhevmWindowType",
    ()=>isFhevmWindowType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/internal/constants.ts [app-client] (ecmascript)");
;
;
class RelayerSDKLoader {
    isLoaded() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return isFhevmWindowType(window, this._trace);
    }
    load() {
        console.log("[RelayerSDKLoader] load...");
        // Ensure this only runs in the browser
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if ("relayerSDK" in window) {
            if (!isFhevmRelayerSDKType(window.relayerSDK, this._trace)) {
                console.log("[RelayerSDKLoader] window.relayerSDK === undefined");
                throw new Error("RelayerSDKLoader: Unable to load FHEVM Relayer SDK");
            }
            return Promise.resolve();
        }
        return new Promise((resolve, reject)=>{
            const existingScript = document.querySelector('script[src="'.concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_CDN_URL"], '"]'));
            if (existingScript) {
                if (!isFhevmWindowType(window, this._trace)) {
                    reject(new Error("RelayerSDKLoader: window object does not contain a valid relayerSDK object."));
                }
                resolve();
                return;
            }
            const script = document.createElement("script");
            script.src = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_CDN_URL"];
            script.type = "text/javascript";
            script.async = true;
            script.onload = ()=>{
                if (!isFhevmWindowType(window, this._trace)) {
                    console.log("[RelayerSDKLoader] script onload FAILED...");
                    reject(new Error("RelayerSDKLoader: Relayer SDK script has been successfully loaded from ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_CDN_URL"], ", however, the window.relayerSDK object is invalid.")));
                }
                resolve();
            };
            script.onerror = ()=>{
                console.log("[RelayerSDKLoader] script onerror... ");
                reject(new Error("RelayerSDKLoader: Failed to load Relayer SDK from ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_CDN_URL"])));
            };
            console.log("[RelayerSDKLoader] add script to DOM...");
            document.head.appendChild(script);
            console.log("[RelayerSDKLoader] script added!");
        });
    }
    constructor(options){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "_trace", void 0);
        this._trace = options.trace;
    }
}
function isFhevmRelayerSDKType(o, trace) {
    if (typeof o === "undefined") {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK is undefined");
        return false;
    }
    if (o === null) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK is null");
        return false;
    }
    if (typeof o !== "object") {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK is not an object");
        return false;
    }
    if (!objHasProperty(o, "initSDK", "function", trace)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK.initSDK is invalid");
        return false;
    }
    if (!objHasProperty(o, "createInstance", "function", trace)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK.createInstance is invalid");
        return false;
    }
    if (!objHasProperty(o, "SepoliaConfig", "object", trace)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK.SepoliaConfig is invalid");
        return false;
    }
    if ("__initialized__" in o) {
        if (o.__initialized__ !== true && o.__initialized__ !== false) {
            trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: relayerSDK.__initialized__ is invalid");
            return false;
        }
    }
    return true;
}
function isFhevmWindowType(win, trace) {
    if (typeof win === "undefined") {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: window object is undefined");
        return false;
    }
    if (win === null) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: window object is null");
        return false;
    }
    if (typeof win !== "object") {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: window is not an object");
        return false;
    }
    if (!("relayerSDK" in win)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: window does not contain 'relayerSDK' property");
        return false;
    }
    return isFhevmRelayerSDKType(win.relayerSDK);
}
function objHasProperty(obj, propertyName, propertyType, trace) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (!(propertyName in obj)) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: missing ".concat(String(propertyName), "."));
        return false;
    }
    const value = obj[propertyName];
    if (value === null || value === undefined) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: ".concat(String(propertyName), " is null or undefined."));
        return false;
    }
    if (typeof value !== propertyType) {
        trace === null || trace === void 0 ? void 0 : trace("RelayerSDKLoader: ".concat(String(propertyName), " is not a ").concat(propertyType, "."));
        return false;
    }
    return true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/fhevm/internal/PublicKeyStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "publicKeyStorageGet",
    ()=>publicKeyStorageGet,
    "publicKeyStorageSet",
    ()=>publicKeyStorageSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/idb/build/index.js [app-client] (ecmascript)");
;
let __dbPromise = undefined;
async function _getDB() {
    if (__dbPromise) {
        return __dbPromise;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    __dbPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openDB"])("fhevm", 1, {
        upgrade (db) {
            if (!db.objectStoreNames.contains("paramsStore")) {
                db.createObjectStore("paramsStore", {
                    keyPath: "acl"
                });
            }
            if (!db.objectStoreNames.contains("publicKeyStore")) {
                db.createObjectStore("publicKeyStore", {
                    keyPath: "acl"
                });
            }
        }
    });
    return __dbPromise;
}
function assertFhevmStoredPublicKey(value) {
    if (typeof value !== "object") {
        throw new Error("FhevmStoredPublicKey must be an object");
    }
    if (value === null) {
        return;
    }
    if (!("publicKeyId" in value)) {
        throw new Error("FhevmStoredPublicKey.publicKeyId does not exist");
    }
    if (typeof value.publicKeyId !== "string") {
        throw new Error("FhevmStoredPublicKey.publicKeyId must be a string");
    }
    if (!("publicKey" in value)) {
        throw new Error("FhevmStoredPublicKey.publicKey does not exist");
    }
    if (!(value.publicKey instanceof Uint8Array)) {
        throw new Error("FhevmStoredPublicKey.publicKey must be a Uint8Array");
    }
}
function assertFhevmStoredPublicParams(value) {
    if (typeof value !== "object") {
        throw new Error("FhevmStoredPublicParams must be an object");
    }
    if (value === null) {
        return;
    }
    if (!("publicParamsId" in value)) {
        throw new Error("FhevmStoredPublicParams.publicParamsId does not exist");
    }
    if (typeof value.publicParamsId !== "string") {
        throw new Error("FhevmStoredPublicParams.publicParamsId must be a string");
    }
    if (!("publicParams" in value)) {
        throw new Error("FhevmStoredPublicParams.publicParams does not exist");
    }
    if (!(value.publicParams instanceof Uint8Array)) {
        throw new Error("FhevmStoredPublicParams.publicParams must be a Uint8Array");
    }
}
async function publicKeyStorageGet(aclAddress) {
    const db = await _getDB();
    if (!db) {
        return {
            publicParams: null
        };
    }
    let storedPublicKey = null;
    try {
        const pk = await db.get("publicKeyStore", aclAddress);
        if (pk === null || pk === void 0 ? void 0 : pk.value) {
            assertFhevmStoredPublicKey(pk.value);
            storedPublicKey = pk.value;
        }
    } catch (e) {
    //
    }
    let storedPublicParams = null;
    try {
        const pp = await db.get("paramsStore", aclAddress);
        if (pp === null || pp === void 0 ? void 0 : pp.value) {
            assertFhevmStoredPublicParams(pp.value);
            storedPublicParams = pp.value;
        }
    } catch (e) {
    //
    }
    const publicKeyData = storedPublicKey === null || storedPublicKey === void 0 ? void 0 : storedPublicKey.publicKey;
    const publicKeyId = storedPublicKey === null || storedPublicKey === void 0 ? void 0 : storedPublicKey.publicKeyId;
    const publicParams = storedPublicParams ? {
        "2048": storedPublicParams
    } : null;
    let publicKey = undefined;
    if (publicKeyId && publicKeyData) {
        publicKey = {
            id: publicKeyId,
            data: publicKeyData
        };
    }
    return {
        ...publicKey !== undefined && {
            publicKey
        },
        publicParams
    };
}
async function publicKeyStorageSet(aclAddress, publicKey, publicParams) {
    assertFhevmStoredPublicKey(publicKey);
    assertFhevmStoredPublicParams(publicParams);
    const db = await _getDB();
    if (!db) {
        return;
    }
    if (publicKey) {
        await db.put("publicKeyStore", {
            acl: aclAddress,
            value: publicKey
        });
    }
    if (publicParams) {
        await db.put("paramsStore", {
            acl: aclAddress,
            value: publicParams
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/fhevm/internal/fhevm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmAbortError",
    ()=>FhevmAbortError,
    "FhevmReactError",
    ()=>FhevmReactError,
    "createFhevmInstance",
    ()=>createFhevmInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/address/checks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/internal/RelayerSDKLoader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/internal/PublicKeyStorage.ts [app-client] (ecmascript)");
;
;
;
;
class FhevmReactError extends Error {
    constructor(code, message, options){
        super(message, options), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "code", void 0);
        this.code = code;
        this.name = "FhevmReactError";
    }
}
function throwFhevmError(code, message, cause) {
    throw new FhevmReactError(code, message, cause ? {
        cause
    } : undefined);
}
const isFhevmInitialized = ()=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
        return false;
    }
    return window.relayerSDK.__initialized__ === true;
};
const fhevmLoadSDK = ()=>{
    const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RelayerSDKLoader"]({
        trace: console.log
    });
    return loader.load();
};
const fhevmInitSDK = async (options)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
        throw new Error("window.relayerSDK is not available");
    }
    const result = await window.relayerSDK.initSDK(options);
    window.relayerSDK.__initialized__ = result;
    if (!result) {
        throw new Error("window.relayerSDK.initSDK failed.");
    }
    return true;
};
function checkIsAddress(a) {
    if (typeof a !== "string") {
        return false;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(a)) {
        return false;
    }
    return true;
}
class FhevmAbortError extends Error {
    constructor(message = "FHEVM operation was cancelled"){
        super(message);
        this.name = "FhevmAbortError";
    }
}
async function getChainId(providerOrUrl) {
    if (typeof providerOrUrl === "string") {
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](providerOrUrl);
        return Number((await provider.getNetwork()).chainId);
    }
    const chainId = await providerOrUrl.request({
        method: "eth_chainId"
    });
    return Number.parseInt(chainId, 16);
}
async function getWeb3Client(rpcUrl) {
    const rpc = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](rpcUrl);
    try {
        const version = await rpc.send("web3_clientVersion", []);
        return version;
    } catch (e) {
        throwFhevmError("WEB3_CLIENTVERSION_ERROR", "The URL ".concat(rpcUrl, " is not a Web3 node or is not reachable. Please check the endpoint."), e);
    } finally{
        rpc.destroy();
    }
}
async function tryFetchFHEVMHardhatNodeRelayerMetadata(rpcUrl) {
    const version = await getWeb3Client(rpcUrl);
    if (typeof version !== "string" || !version.toLowerCase().includes("hardhat")) {
        // Not a Hardhat Node
        return undefined;
    }
    try {
        const metadata = await getFHEVMRelayerMetadata(rpcUrl);
        if (!metadata || typeof metadata !== "object") {
            return undefined;
        }
        if (!("ACLAddress" in metadata && typeof metadata.ACLAddress === "string" && metadata.ACLAddress.startsWith("0x"))) {
            return undefined;
        }
        if (!("InputVerifierAddress" in metadata && typeof metadata.InputVerifierAddress === "string" && metadata.InputVerifierAddress.startsWith("0x"))) {
            return undefined;
        }
        if (!("KMSVerifierAddress" in metadata && typeof metadata.KMSVerifierAddress === "string" && metadata.KMSVerifierAddress.startsWith("0x"))) {
            return undefined;
        }
        return metadata;
    } catch (e) {
        // Not a FHEVM Hardhat Node
        return undefined;
    }
}
async function getFHEVMRelayerMetadata(rpcUrl) {
    const rpc = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](rpcUrl);
    try {
        const version = await rpc.send("fhevm_relayer_metadata", []);
        return version;
    } catch (e) {
        throwFhevmError("FHEVM_RELAYER_METADATA_ERROR", "The URL ".concat(rpcUrl, " is not a FHEVM Hardhat node or is not reachable. Please check the endpoint."), e);
    } finally{
        rpc.destroy();
    }
}
async function resolve(providerOrUrl, mockChains) {
    // Resolve chainId
    const chainId = await getChainId(providerOrUrl);
    // Resolve rpc url
    let rpcUrl = typeof providerOrUrl === "string" ? providerOrUrl : undefined;
    const _mockChains = {
        31337: "http://localhost:8545",
        ...mockChains !== null && mockChains !== void 0 ? mockChains : {}
    };
    // Help Typescript solver here:
    if (Object.hasOwn(_mockChains, chainId)) {
        if (!rpcUrl) {
            rpcUrl = _mockChains[chainId];
        }
        return {
            isMock: true,
            chainId,
            rpcUrl
        };
    }
    return {
        isMock: false,
        chainId,
        rpcUrl
    };
}
const createFhevmInstance = async (parameters)=>{
    const throwIfAborted = ()=>{
        if (signal.aborted) throw new FhevmAbortError();
    };
    const notify = (status)=>{
        if (onStatusChange) onStatusChange(status);
    };
    const { signal, onStatusChange, provider: providerOrUrl, mockChains } = parameters;
    // Resolve chainId
    const { isMock, rpcUrl, chainId } = await resolve(providerOrUrl, mockChains);
    if (isMock) {
        // Throws an error if cannot connect or url does not refer to a Web3 client
        const fhevmRelayerMetadata = await tryFetchFHEVMHardhatNodeRelayerMetadata(rpcUrl);
        if (fhevmRelayerMetadata) {
            // fhevmRelayerMetadata is defined, which means rpcUrl refers to a FHEVM Hardhat Node
            notify("creating");
            //////////////////////////////////////////////////////////////////////////
            // 
            // WARNING!!
            // ALWAY USE DYNAMIC IMPORT TO AVOID INCLUDING THE ENTIRE FHEVM MOCK LIB 
            // IN THE FINAL PRODUCTION BUNDLE!!
            // 
            //////////////////////////////////////////////////////////////////////////
            const fhevmMock = await __turbopack_context__.A("[project]/frontend/fhevm/internal/mock/fhevmMock.ts [app-client] (ecmascript, async loader)");
            const mockInstance = await fhevmMock.fhevmMockCreateInstance({
                rpcUrl,
                chainId,
                metadata: fhevmRelayerMetadata
            });
            throwIfAborted();
            return mockInstance;
        }
    }
    throwIfAborted();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
        notify("sdk-loading");
        // throws an error if failed
        await fhevmLoadSDK();
        throwIfAborted();
        notify("sdk-loaded");
    }
    // notify that state === "sdk-loaded"
    if (!isFhevmInitialized()) {
        notify("sdk-initializing");
        // throws an error if failed
        await fhevmInitSDK();
        throwIfAborted();
        notify("sdk-initialized");
    }
    const relayerSDK = window.relayerSDK;
    const aclAddress = relayerSDK.SepoliaConfig.aclContractAddress;
    if (!checkIsAddress(aclAddress)) {
        throw new Error("Invalid address: ".concat(aclAddress));
    }
    const pub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicKeyStorageGet"])(aclAddress);
    throwIfAborted();
    const config = {
        ...relayerSDK.SepoliaConfig,
        network: providerOrUrl,
        publicKey: pub.publicKey,
        publicParams: pub.publicParams
    };
    // notify that state === "creating"
    notify("creating");
    const instance = await relayerSDK.createInstance(config);
    // Save the key even if aborted
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicKeyStorageSet"])(aclAddress, instance.getPublicKey(), instance.getPublicParams(2048));
    throwIfAborted();
    return instance;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/fhevm/useFhevm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFhevm",
    ()=>useFhevm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$fhevm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/internal/fhevm.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function _assert(condition, message) {
    if (!condition) {
        const m = message ? "Assertion failed: ".concat(message) : "Assertion failed.";
        console.error(m);
        throw new Error(m);
    }
}
function useFhevm(parameters) {
    _s();
    const { provider, chainId, initialMockChains, enabled = true } = parameters;
    const [instance, _setInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [status, _setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [error, _setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [_isRunning, _setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(enabled);
    const [_providerChanged, _setProviderChanged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const _abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const _providerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(provider);
    const _chainIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(chainId);
    const _mockChainsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initialMockChains);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFhevm.useCallback[refresh]": ()=>{
            // Provider or chainId has changed. Abort immediately
            if (_abortControllerRef.current) {
                // Make sure _providerRef.current + _chainIdRef.current are undefined during abort
                _providerRef.current = undefined;
                _chainIdRef.current = undefined;
                _abortControllerRef.current.abort();
                _abortControllerRef.current = null;
            }
            _providerRef.current = provider;
            _chainIdRef.current = chainId;
            // Nullify instance immediately
            _setInstance(undefined);
            _setError(undefined);
            _setStatus("idle");
            if (provider !== undefined) {
                // Force call main useEffect
                _setProviderChanged({
                    "useFhevm.useCallback[refresh]": (prev)=>prev + 1
                }["useFhevm.useCallback[refresh]"]);
            }
        // Do not modify the running flag.
        }
    }["useFhevm.useCallback[refresh]"], [
        provider,
        chainId
    ]);
    // Merge in main useEffect!!!
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFhevm.useEffect": ()=>{
            refresh();
        }
    }["useFhevm.useEffect"], [
        refresh
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFhevm.useEffect": ()=>{
            _setIsRunning(enabled);
        }
    }["useFhevm.useEffect"], [
        enabled
    ]);
    // Main useEffect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFhevm.useEffect": ()=>{
            // is _providerRef.current valid here ?
            // even if the first useEffect is rendered in the same render-cycle ?
            if (_isRunning === false) {
                // cancelled
                console.log("cancelled");
                if (_abortControllerRef.current) {
                    _abortControllerRef.current.abort();
                    _abortControllerRef.current = null;
                }
                // May already be null if provider was changed in the previous render-cycle
                _setInstance(undefined);
                _setError(undefined);
                _setStatus("idle");
                return;
            }
            if (_isRunning === true) {
                if (_providerRef.current === undefined) {
                    // instance should be undefined
                    // this code below should be unecessary
                    _setInstance(undefined);
                    _setError(undefined);
                    _setStatus("idle");
                    return;
                }
                if (!_abortControllerRef.current) {
                    _abortControllerRef.current = new AbortController();
                }
                _assert(!_abortControllerRef.current.signal.aborted, "!controllerRef.current.signal.aborted");
                // Keep old instance
                // Was set to undefined if provider changed
                _setStatus("loading");
                _setError(undefined);
                const thisSignal = _abortControllerRef.current.signal;
                const thisProvider = _providerRef.current;
                // Can be undefined, if so, call eth_chainId
                const thisRpcUrlsByChainId = _mockChainsRef.current;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$fhevm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFhevmInstance"])({
                    signal: thisSignal,
                    provider: thisProvider,
                    mockChains: thisRpcUrlsByChainId,
                    onStatusChange: {
                        "useFhevm.useEffect": (s)=>console.log("[useFhevm] createFhevmInstance status changed: ".concat(s))
                    }["useFhevm.useEffect"]
                }).then({
                    "useFhevm.useEffect": (i)=>{
                        console.log("[useFhevm] createFhevmInstance created!");
                        //console.log(`completed (runId=${thisRunId})...`);
                        if (thisSignal.aborted) return;
                        // is there a edge case where the assert below would fail ?
                        // it's not possible to have a _providerRef modified without a prior abort
                        _assert(thisProvider === _providerRef.current, "thisProvider === _providerRef.current");
                        _setInstance(i);
                        _setError(undefined);
                        _setStatus("ready");
                    }
                }["useFhevm.useEffect"]).catch({
                    "useFhevm.useEffect": (e)=>{
                        // If cancellation operation (normal behavior), silently handle
                        if (e instanceof Error && (e.message.includes("FHEVM operation was cancelled") || e.message.includes("operation was cancelled") || e.name === "FhevmAbortError" || e.name === "AbortError")) {
                            // Cancellation is normal, no need to log error
                            if (thisSignal.aborted) return;
                            // Even if not explicitly cancelled, this is normal cancellation behavior
                            return;
                        }
                        // Convert technical errors to friendly error messages
                        const friendlyError = new Error(e instanceof Error && e.message.includes("Failed to fetch") ? "Network connection failed, please check your network connection or ensure Hardhat node is running" : e instanceof Error ? e.message : String(e));
                        friendlyError.name = e instanceof Error ? e.name : "Error";
                        console.log("[useFhevm] Error occurred: ".concat(friendlyError.message));
                        if (thisSignal.aborted) return;
                        // it's not possible to have a _providerRef modified without a prior abort
                        _assert(thisProvider === _providerRef.current, "thisProvider === _providerRef.current");
                        _setInstance(undefined);
                        _setError(friendlyError);
                        _setStatus("error");
                    }
                }["useFhevm.useEffect"]);
            }
        }
    }["useFhevm.useEffect"], [
        _isRunning,
        _providerChanged
    ]);
    return {
        instance,
        refresh,
        error,
        status
    };
}
_s(useFhevm, "FnHDS2iQ+HIIYWVBLBtg967ZgT8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/hooks/useEthersSigner.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEthersProvider",
    ()=>useEthersProvider,
    "useEthersSigner",
    ()=>useEthersSigner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
function walletClientToSigner(walletClient) {
    var _chain_contracts_ensRegistry, _chain_contracts;
    const { account, chain, transport } = walletClient;
    const network = {
        chainId: chain.id,
        name: chain.name,
        ensAddress: (_chain_contracts = chain.contracts) === null || _chain_contracts === void 0 ? void 0 : (_chain_contracts_ensRegistry = _chain_contracts.ensRegistry) === null || _chain_contracts_ensRegistry === void 0 ? void 0 : _chain_contracts_ensRegistry.address
    };
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserProvider"](transport, network);
    const signer = provider.getSigner(account.address);
    return signer;
}
function useEthersSigner() {
    let { chainId } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const { data: walletClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletClient"])({
        chainId
    });
    const [signer, setSigner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEthersSigner.useEffect": ()=>{
            async function getSigner() {
                if (walletClient) {
                    try {
                        const ethSigner = await walletClientToSigner(walletClient);
                        setSigner(ethSigner);
                    } catch (error) {
                        console.error('Error creating signer:', error);
                        setSigner(undefined);
                    }
                } else {
                    setSigner(undefined);
                }
            }
            getSigner();
        }
    }["useEthersSigner.useEffect"], [
        walletClient
    ]);
    return signer;
}
_s(useEthersSigner, "TJ5n3OxceHLE1or5rhoHkfIaAjU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletClient"]
    ];
});
function useEthersProvider() {
    let { chainId } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s1();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"])({
        chainId
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useEthersProvider.useMemo": ()=>{
            var _publicClient_chain_contracts_ensRegistry, _publicClient_chain_contracts;
            if (!publicClient || !chainId) return undefined;
            // Get RPC URL based on chainId
            let rpcUrl;
            if (chainId === 31337) {
                // Hardhat local network
                rpcUrl = "http://localhost:8545";
            } else if (chainId === 11155111) {
                // Sepolia
                rpcUrl = "https://sepolia.infura.io/v3/".concat(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_INFURA_API_KEY || "b18fb7e6ca7045ac83c41157ab93f990");
            } else {
                var _chain_rpcUrls_default, _chain_rpcUrls;
                // Try to get from chain config
                const { chain } = publicClient;
                if (((_chain_rpcUrls = chain.rpcUrls) === null || _chain_rpcUrls === void 0 ? void 0 : (_chain_rpcUrls_default = _chain_rpcUrls.default) === null || _chain_rpcUrls_default === void 0 ? void 0 : _chain_rpcUrls_default.http) && chain.rpcUrls.default.http.length > 0) {
                    rpcUrl = chain.rpcUrls.default.http[0];
                }
            }
            if (!rpcUrl) return undefined;
            const network = {
                chainId: chainId,
                name: publicClient.chain.name,
                ensAddress: (_publicClient_chain_contracts = publicClient.chain.contracts) === null || _publicClient_chain_contracts === void 0 ? void 0 : (_publicClient_chain_contracts_ensRegistry = _publicClient_chain_contracts.ensRegistry) === null || _publicClient_chain_contracts_ensRegistry === void 0 ? void 0 : _publicClient_chain_contracts_ensRegistry.address
            };
            return new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JsonRpcProvider"](rpcUrl, network);
        }
    }["useEthersProvider.useMemo"], [
        publicClient,
        chainId
    ]);
}
_s1(useEthersProvider, "RTBcUO1NBZXz3QpgQ3NsW2pViJM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/fhevm/FhevmDecryptionSignature.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmDecryptionSignature",
    ()=>FhevmDecryptionSignature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@swc/helpers/esm/_class_private_field_set.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
;
;
;
function _timestampNow() {
    return Math.floor(Date.now() / 1000);
}
var _contractAddresses = /*#__PURE__*/ new WeakMap(), _userAddress = /*#__PURE__*/ new WeakMap(), _publicKey = /*#__PURE__*/ new WeakMap(), _key = /*#__PURE__*/ new WeakMap();
class FhevmDecryptionSignatureStorageKey {
    get contractAddresses() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses);
    }
    get userAddress() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress);
    }
    get publicKey() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey);
    }
    get key() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _key);
    }
    constructor(instance, contractAddresses, userAddress, publicKey){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _key, {
            writable: true,
            value: void 0
        });
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].isAddress(userAddress)) {
            throw new TypeError("Invalid address ".concat(userAddress));
        }
        const sortedContractAddresses = contractAddresses.sort();
        const emptyEIP712 = instance.createEIP712(publicKey !== null && publicKey !== void 0 ? publicKey : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress, sortedContractAddresses, 0, 0);
        try {
            const hash = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].TypedDataEncoder.hash(emptyEIP712.domain, {
                UserDecryptRequestVerification: emptyEIP712.types.UserDecryptRequestVerification
            }, emptyEIP712.message);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses, sortedContractAddresses);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress, userAddress);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _key, "".concat(userAddress, ":").concat(hash));
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}
var _publicKey1 = /*#__PURE__*/ new WeakMap(), _privateKey = /*#__PURE__*/ new WeakMap(), _signature = /*#__PURE__*/ new WeakMap(), _startTimestamp = /*#__PURE__*/ new WeakMap(), _durationDays = /*#__PURE__*/ new WeakMap(), _userAddress1 = /*#__PURE__*/ new WeakMap(), _contractAddresses1 = /*#__PURE__*/ new WeakMap(), _eip712 = /*#__PURE__*/ new WeakMap();
class FhevmDecryptionSignature {
    get privateKey() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _privateKey);
    }
    get publicKey() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1);
    }
    get signature() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signature);
    }
    get contractAddresses() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1);
    }
    get startTimestamp() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp);
    }
    get durationDays() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays);
    }
    get userAddress() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1);
    }
    static checkIs(s) {
        if (!s || typeof s !== "object") {
            return false;
        }
        if (!("publicKey" in s && typeof s.publicKey === "string")) {
            return false;
        }
        if (!("privateKey" in s && typeof s.privateKey === "string")) {
            return false;
        }
        if (!("signature" in s && typeof s.signature === "string")) {
            return false;
        }
        if (!("startTimestamp" in s && typeof s.startTimestamp === "number")) {
            return false;
        }
        if (!("durationDays" in s && typeof s.durationDays === "number")) {
            return false;
        }
        if (!("contractAddresses" in s && Array.isArray(s.contractAddresses))) {
            return false;
        }
        for(let i = 0; i < s.contractAddresses.length; ++i){
            if (typeof s.contractAddresses[i] !== "string") return false;
            if (!s.contractAddresses[i].startsWith("0x")) return false;
        }
        if (!("userAddress" in s && typeof s.userAddress === "string" && s.userAddress.startsWith("0x"))) {
            return false;
        }
        if (!("eip712" in s && typeof s.eip712 === "object" && s.eip712 !== null)) {
            return false;
        }
        // Partial type check
        if (!("domain" in s.eip712 && typeof s.eip712.domain === "object")) {
            return false;
        }
        if (!("primaryType" in s.eip712 && typeof s.eip712.primaryType === "string")) {
            return false;
        }
        if (!("message" in s.eip712)) {
            return false;
        }
        if (!("types" in s.eip712 && typeof s.eip712.types === "object" && s.eip712.types !== null)) {
            return false;
        }
        return true;
    }
    toJSON() {
        return {
            publicKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1),
            privateKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _privateKey),
            signature: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signature),
            startTimestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp),
            durationDays: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays),
            userAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1),
            contractAddresses: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1),
            eip712: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _eip712)
        };
    }
    static fromJSON(json) {
        const data = typeof json === "string" ? JSON.parse(json) : json;
        return new FhevmDecryptionSignature(data);
    }
    equals(s) {
        return s.signature === (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signature);
    }
    isValid() {
        return _timestampNow() < (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays) * 24 * 60 * 60;
    }
    async saveToGenericStringStorage(storage, instance, withPublicKey) {
        try {
            const value = JSON.stringify(this);
            const storageKey = new FhevmDecryptionSignatureStorageKey(instance, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1), withPublicKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1) : undefined);
            await storage.setItem(storageKey.key, value);
            console.log("signature saved! contracts=".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1).length));
        } catch (e) {
            console.error("FhevmDecryptionSignature.saveToGenericStringStorage() failed!");
        }
    }
    static async loadFromGenericStringStorage(storage, instance, contractAddresses, userAddress, publicKey) {
        try {
            const storageKey = new FhevmDecryptionSignatureStorageKey(instance, contractAddresses, userAddress, publicKey);
            const result = await storage.getItem(storageKey.key);
            if (!result) {
                console.warn("Could not load signature! key=".concat(storageKey.key));
                return null;
            }
            try {
                const kps = FhevmDecryptionSignature.fromJSON(result);
                if (!kps.isValid()) {
                    return null;
                }
                return kps;
            } catch (e) {
                return null;
            }
        } catch (e) {
            console.error("FhevmDecryptionSignature.loadFromGenericStringStorage() failed!");
            return null;
        }
    }
    static async new(instance, contractAddresses, publicKey, privateKey, signer) {
        try {
            const userAddress = await signer.getAddress();
            const startTimestamp = _timestampNow();
            const durationDays = 365;
            const eip712 = instance.createEIP712(publicKey, contractAddresses, startTimestamp, durationDays);
            const signature = await signer.signTypedData(eip712.domain, {
                UserDecryptRequestVerification: eip712.types.UserDecryptRequestVerification
            }, eip712.message);
            return new FhevmDecryptionSignature({
                publicKey,
                privateKey,
                contractAddresses: contractAddresses,
                startTimestamp,
                durationDays,
                signature,
                eip712: eip712,
                userAddress
            });
        } catch (e) {
            return null;
        }
    }
    static async loadOrSign(instance, contractAddresses, signer, storage, keyPair) {
        const userAddress = await signer.getAddress();
        const cached = await FhevmDecryptionSignature.loadFromGenericStringStorage(storage, instance, contractAddresses, userAddress, keyPair === null || keyPair === void 0 ? void 0 : keyPair.publicKey);
        if (cached) {
            return cached;
        }
        const { publicKey, privateKey } = keyPair !== null && keyPair !== void 0 ? keyPair : instance.generateKeypair();
        const sig = await FhevmDecryptionSignature.new(instance, contractAddresses, publicKey, privateKey, signer);
        if (!sig) {
            return null;
        }
        await sig.saveToGenericStringStorage(storage, instance, Boolean(keyPair === null || keyPair === void 0 ? void 0 : keyPair.publicKey));
        return sig;
    }
    constructor(parameters){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _privateKey, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signature, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp, {
            writable: true,
            value: void 0
        }); // Unix timestamp in seconds
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1, {
            writable: true,
            value: void 0
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _eip712, {
            writable: true,
            value: void 0
        });
        if (!FhevmDecryptionSignature.checkIs(parameters)) {
            throw new TypeError("Invalid FhevmDecryptionSignatureType");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _publicKey1, parameters.publicKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _privateKey, parameters.privateKey);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _signature, parameters.signature);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _startTimestamp, parameters.startTimestamp);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _durationDays, parameters.durationDays);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _userAddress1, parameters.userAddress);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _contractAddresses1, parameters.contractAddresses);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_private_field_set$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _eip712, parameters.eip712);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/abi/WeightTrendAddresses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  This file is auto-generated.
  Command: 'npm run genabi'
*/ __turbopack_context__.s([
    "WeightTrendAddresses",
    ()=>WeightTrendAddresses
]);
const WeightTrendAddresses = {
    "11155111": {
        address: "0x6f39f4caD4C3ca052BB0CAe7AD4C957DE964E66B",
        chainId: 11155111,
        chainName: "sepolia"
    },
    "31337": {
        address: "0x68B1D87F95878fE05B998F19b66F4baba5De1aed",
        chainId: 31337,
        chainName: "hardhat"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/abi/WeightTrendABI.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  This file is auto-generated.
  Command: 'npm run genabi'
*/ __turbopack_context__.s([
    "WeightTrendABI",
    ()=>WeightTrendABI
]);
const WeightTrendABI = {
    "abi": [
        {
            "inputs": [],
            "name": "compareWeightTrend",
            "outputs": [
                {
                    "internalType": "ebool",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getLastUpdateDay",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getTodayWeight",
            "outputs": [
                {
                    "internalType": "euint32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "day",
                    "type": "uint256"
                }
            ],
            "name": "getWeight",
            "outputs": [
                {
                    "internalType": "euint32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getYesterdayWeight",
            "outputs": [
                {
                    "internalType": "euint32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "day",
                    "type": "uint256"
                }
            ],
            "name": "hasRecord",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "protocolId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "externalEuint32",
                    "name": "weight",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes",
                    "name": "inputProof",
                    "type": "bytes"
                }
            ],
            "name": "submitWeight",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/hooks/useWeightTrend.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWeightTrend",
    ()=>useWeightTrend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$FhevmDecryptionSignature$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/FhevmDecryptionSignature.ts [app-client] (ecmascript)");
// These files are auto-generated by genabi.mjs
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$WeightTrendAddresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/abi/WeightTrendAddresses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$WeightTrendABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/abi/WeightTrendABI.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function getWeightTrendByChainId(chainId) {
    if (!chainId) {
        return {
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$WeightTrendABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeightTrendABI"].abi
        };
    }
    const entry = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$WeightTrendAddresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeightTrendAddresses"][chainId.toString()];
    if (!("address" in entry) || entry.address === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress) {
        return {
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$WeightTrendABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeightTrendABI"].abi,
            chainId
        };
    }
    var _entry_chainId;
    return {
        address: entry === null || entry === void 0 ? void 0 : entry.address,
        chainId: (_entry_chainId = entry === null || entry === void 0 ? void 0 : entry.chainId) !== null && _entry_chainId !== void 0 ? _entry_chainId : chainId,
        chainName: entry === null || entry === void 0 ? void 0 : entry.chainName,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$WeightTrendABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeightTrendABI"].abi
    };
}
const useWeightTrend = (parameters)=>{
    _s();
    const { instance, fhevmDecryptionSignatureStorage, chainId, ethersSigner, ethersReadonlyProvider, sameChain, sameSigner } = parameters;
    const [todayWeightHandle, setTodayWeightHandle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [trendHandle, setTrendHandle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [clearTodayWeight, setClearTodayWeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [clearTrend, setClearTrend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const clearTodayWeightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const clearTrendRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDecrypting, setIsDecrypting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isComparing, setIsComparing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const weightTrendRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const isRefreshingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isRefreshing);
    const isDecryptingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isDecrypting);
    const isSubmittingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isSubmitting);
    const isComparingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isComparing);
    const isTodayWeightDecrypted = todayWeightHandle && todayWeightHandle === (clearTodayWeight === null || clearTodayWeight === void 0 ? void 0 : clearTodayWeight.handle);
    const isTrendDecrypted = trendHandle && trendHandle === (clearTrend === null || clearTrend === void 0 ? void 0 : clearTrend.handle);
    const weightTrend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWeightTrend.useMemo[weightTrend]": ()=>{
            const c = getWeightTrendByChainId(chainId);
            weightTrendRef.current = c;
            if (!c.address) {
                setMessage("WeightTrend deployment not found for chainId=".concat(chainId, "."));
            }
            return c;
        }
    }["useWeightTrend.useMemo[weightTrend]"], [
        chainId
    ]);
    const isDeployed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWeightTrend.useMemo[isDeployed]": ()=>{
            if (!weightTrend) {
                return undefined;
            }
            return Boolean(weightTrend.address) && weightTrend.address !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress;
        }
    }["useWeightTrend.useMemo[isDeployed]"], [
        weightTrend
    ]);
    const canGetTodayWeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWeightTrend.useMemo[canGetTodayWeight]": ()=>{
            return weightTrend.address && ethersReadonlyProvider && !isRefreshing;
        }
    }["useWeightTrend.useMemo[canGetTodayWeight]"], [
        weightTrend.address,
        ethersReadonlyProvider,
        isRefreshing
    ]);
    const refreshTodayWeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWeightTrend.useCallback[refreshTodayWeight]": ()=>{
            var _weightTrendRef_current, _weightTrendRef_current1;
            if (isRefreshingRef.current) {
                return;
            }
            if (!weightTrendRef.current || !((_weightTrendRef_current = weightTrendRef.current) === null || _weightTrendRef_current === void 0 ? void 0 : _weightTrendRef_current.chainId) || !((_weightTrendRef_current1 = weightTrendRef.current) === null || _weightTrendRef_current1 === void 0 ? void 0 : _weightTrendRef_current1.address) || !ethersReadonlyProvider) {
                setTodayWeightHandle(undefined);
                return;
            }
            isRefreshingRef.current = true;
            setIsRefreshing(true);
            const thisChainId = weightTrendRef.current.chainId;
            const thisAddress = weightTrendRef.current.address;
            const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(thisAddress, weightTrendRef.current.abi, ethersReadonlyProvider);
            contract.getTodayWeight().then({
                "useWeightTrend.useCallback[refreshTodayWeight]": (value)=>{
                    var _weightTrendRef_current;
                    if (sameChain.current(thisChainId) && thisAddress === ((_weightTrendRef_current = weightTrendRef.current) === null || _weightTrendRef_current === void 0 ? void 0 : _weightTrendRef_current.address)) {
                        setTodayWeightHandle(value);
                    }
                    isRefreshingRef.current = false;
                    setIsRefreshing(false);
                }
            }["useWeightTrend.useCallback[refreshTodayWeight]"]).catch({
                "useWeightTrend.useCallback[refreshTodayWeight]": (e)=>{
                    // Ensure error message is a string to avoid rendering objects
                    const errorMsg = e instanceof Error ? e.message : typeof e === 'object' && e !== null && ('hash' in e || 'blockNumber' in e) ? "Transaction processing failed, please try again" : String(e);
                    setMessage("WeightTrend.getTodayWeight() call failed! error=" + errorMsg);
                    isRefreshingRef.current = false;
                    setIsRefreshing(false);
                }
            }["useWeightTrend.useCallback[refreshTodayWeight]"]);
        }
    }["useWeightTrend.useCallback[refreshTodayWeight]"], [
        ethersReadonlyProvider,
        sameChain
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWeightTrend.useEffect": ()=>{
            refreshTodayWeight();
        }
    }["useWeightTrend.useEffect"], [
        refreshTodayWeight
    ]);
    const canDecryptTodayWeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWeightTrend.useMemo[canDecryptTodayWeight]": ()=>{
            return weightTrend.address && instance && ethersSigner && !isRefreshing && !isDecrypting && todayWeightHandle && todayWeightHandle !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash && todayWeightHandle !== (clearTodayWeight === null || clearTodayWeight === void 0 ? void 0 : clearTodayWeight.handle);
        }
    }["useWeightTrend.useMemo[canDecryptTodayWeight]"], [
        weightTrend.address,
        instance,
        ethersSigner,
        isRefreshing,
        isDecrypting,
        todayWeightHandle,
        clearTodayWeight
    ]);
    const decryptTodayWeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWeightTrend.useCallback[decryptTodayWeight]": ()=>{
            var _clearTodayWeightRef_current;
            if (isRefreshingRef.current || isDecryptingRef.current) {
                return;
            }
            if (!weightTrend.address || !instance || !ethersSigner) {
                return;
            }
            if (todayWeightHandle === ((_clearTodayWeightRef_current = clearTodayWeightRef.current) === null || _clearTodayWeightRef_current === void 0 ? void 0 : _clearTodayWeightRef_current.handle)) {
                return;
            }
            if (!todayWeightHandle) {
                setClearTodayWeight(undefined);
                clearTodayWeightRef.current = undefined;
                return;
            }
            if (todayWeightHandle === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash) {
                setClearTodayWeight({
                    handle: todayWeightHandle,
                    clear: BigInt(0)
                });
                clearTodayWeightRef.current = {
                    handle: todayWeightHandle,
                    clear: BigInt(0)
                };
                return;
            }
            const thisChainId = chainId;
            const thisAddress = weightTrend.address;
            const thisHandle = todayWeightHandle;
            const thisEthersSigner = ethersSigner;
            isDecryptingRef.current = true;
            setIsDecrypting(true);
            setMessage("Start decrypting today's weight...");
            const run = {
                "useWeightTrend.useCallback[decryptTodayWeight].run": async ()=>{
                    const isStale = {
                        "useWeightTrend.useCallback[decryptTodayWeight].run.isStale": ()=>{
                            var _weightTrendRef_current;
                            return thisAddress !== ((_weightTrendRef_current = weightTrendRef.current) === null || _weightTrendRef_current === void 0 ? void 0 : _weightTrendRef_current.address) || !sameChain.current(thisChainId) || !sameSigner.current(thisEthersSigner);
                        }
                    }["useWeightTrend.useCallback[decryptTodayWeight].run.isStale"];
                    try {
                        const sig = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$FhevmDecryptionSignature$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmDecryptionSignature"].loadOrSign(instance, [
                            weightTrend.address
                        ], ethersSigner, fhevmDecryptionSignatureStorage);
                        if (!sig) {
                            setMessage("Unable to build FHEVM decryption signature");
                            return;
                        }
                        if (isStale()) {
                            setMessage("Ignore FHEVM decryption");
                            return;
                        }
                        setMessage("Call FHEVM userDecrypt...");
                        const res = await instance.userDecrypt([
                            {
                                handle: thisHandle,
                                contractAddress: thisAddress
                            }
                        ], sig.privateKey, sig.publicKey, sig.signature, sig.contractAddresses, sig.userAddress, sig.startTimestamp, sig.durationDays);
                        setMessage("FHEVM userDecrypt completed!");
                        if (isStale()) {
                            setMessage("Ignore FHEVM decryption");
                            return;
                        }
                        setClearTodayWeight({
                            handle: thisHandle,
                            clear: res[thisHandle]
                        });
                        clearTodayWeightRef.current = {
                            handle: thisHandle,
                            clear: res[thisHandle]
                        };
                        setMessage("Today's weight decrypted: " + clearTodayWeightRef.current.clear);
                    } finally{
                        isDecryptingRef.current = false;
                        setIsDecrypting(false);
                    }
                }
            }["useWeightTrend.useCallback[decryptTodayWeight].run"];
            run();
        }
    }["useWeightTrend.useCallback[decryptTodayWeight]"], [
        fhevmDecryptionSignatureStorage,
        ethersSigner,
        weightTrend.address,
        instance,
        todayWeightHandle,
        chainId,
        sameChain,
        sameSigner
    ]);
    const canSubmitWeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWeightTrend.useMemo[canSubmitWeight]": ()=>{
            return weightTrend.address && instance && ethersSigner && !isRefreshing && !isSubmitting;
        }
    }["useWeightTrend.useMemo[canSubmitWeight]"], [
        weightTrend.address,
        instance,
        ethersSigner,
        isRefreshing,
        isSubmitting
    ]);
    const submitWeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWeightTrend.useCallback[submitWeight]": (weight)=>{
            if (isRefreshingRef.current || isSubmittingRef.current) {
                return;
            }
            if (!weightTrend.address || !instance || !ethersSigner || weight <= 0) {
                return;
            }
            const thisChainId = chainId;
            const thisAddress = weightTrend.address;
            const thisEthersSigner = ethersSigner;
            const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(thisAddress, weightTrend.abi, thisEthersSigner);
            isSubmittingRef.current = true;
            setIsSubmitting(true);
            setMessage("Submitting weight ".concat(weight, "..."));
            const run = {
                "useWeightTrend.useCallback[submitWeight].run": async ()=>{
                    await new Promise({
                        "useWeightTrend.useCallback[submitWeight].run": (resolve)=>setTimeout(resolve, 100)
                    }["useWeightTrend.useCallback[submitWeight].run"]);
                    const isStale = {
                        "useWeightTrend.useCallback[submitWeight].run.isStale": ()=>{
                            var _weightTrendRef_current;
                            return thisAddress !== ((_weightTrendRef_current = weightTrendRef.current) === null || _weightTrendRef_current === void 0 ? void 0 : _weightTrendRef_current.address) || !sameChain.current(thisChainId) || !sameSigner.current(thisEthersSigner);
                        }
                    }["useWeightTrend.useCallback[submitWeight].run.isStale"];
                    try {
                        const input = instance.createEncryptedInput(thisAddress, thisEthersSigner.address);
                        input.add32(weight);
                        const enc = await input.encrypt();
                        if (isStale()) {
                            setMessage("Ignore submitWeight");
                            return;
                        }
                        setMessage("Call submitWeight...");
                        const tx = await contract.submitWeight(enc.handles[0], enc.inputProof);
                        setMessage("Wait for tx:".concat(tx.hash, "..."));
                        const receipt = await tx.wait();
                        setMessage("SubmitWeight completed status=".concat(receipt === null || receipt === void 0 ? void 0 : receipt.status));
                        if (isStale()) {
                            setMessage("Ignore submitWeight");
                            return;
                        }
                        refreshTodayWeight();
                    } catch (e) {
                        // Ensure error message is a string to avoid rendering objects
                        const errorMsg = e instanceof Error ? e.message : typeof e === 'object' && e !== null && ('hash' in e || 'blockNumber' in e) ? "Transaction processing failed, please try again" : String(e);
                        setMessage("SubmitWeight Failed! ".concat(errorMsg));
                    } finally{
                        isSubmittingRef.current = false;
                        setIsSubmitting(false);
                    }
                }
            }["useWeightTrend.useCallback[submitWeight].run"];
            run();
        }
    }["useWeightTrend.useCallback[submitWeight]"], [
        ethersSigner,
        weightTrend.address,
        weightTrend.abi,
        instance,
        chainId,
        refreshTodayWeight,
        sameChain,
        sameSigner
    ]);
    const canCompareTrend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWeightTrend.useMemo[canCompareTrend]": ()=>{
            return weightTrend.address && ethersSigner && // Need signer because compareWeightTrend is nonpayable
            !isRefreshing && !isComparing;
        }
    }["useWeightTrend.useMemo[canCompareTrend]"], [
        weightTrend.address,
        ethersSigner,
        isRefreshing,
        isComparing
    ]);
    const compareTrend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWeightTrend.useCallback[compareTrend]": ()=>{
            var _weightTrendRef_current, _weightTrendRef_current1;
            if (isRefreshingRef.current || isComparingRef.current) {
                return;
            }
            if (!weightTrendRef.current || !((_weightTrendRef_current = weightTrendRef.current) === null || _weightTrendRef_current === void 0 ? void 0 : _weightTrendRef_current.chainId) || !((_weightTrendRef_current1 = weightTrendRef.current) === null || _weightTrendRef_current1 === void 0 ? void 0 : _weightTrendRef_current1.address) || !ethersSigner // Need signer because compareWeightTrend is nonpayable
            ) {
                setTrendHandle(undefined);
                setMessage("Please connect wallet to compare weight trend");
                return;
            }
            isComparingRef.current = true;
            setIsComparing(true);
            setMessage("Comparing weight trend...");
            const thisChainId = weightTrendRef.current.chainId;
            const thisAddress = weightTrendRef.current.address;
            const thisEthersSigner = ethersSigner;
            const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(thisAddress, weightTrendRef.current.abi, thisEthersSigner // Use signer instead of readonly provider
            );
            const run = {
                "useWeightTrend.useCallback[compareTrend].run": async ()=>{
                    try {
                        const isStale = {
                            "useWeightTrend.useCallback[compareTrend].run.isStale": ()=>{
                                var _weightTrendRef_current;
                                return thisAddress !== ((_weightTrendRef_current = weightTrendRef.current) === null || _weightTrendRef_current === void 0 ? void 0 : _weightTrendRef_current.address) || !sameChain.current(thisChainId) || !sameSigner.current(thisEthersSigner);
                            }
                        }["useWeightTrend.useCallback[compareTrend].run.isStale"];
                        setMessage("Calling compareWeightTrend...");
                        // compareWeightTrend is nonpayable and will send a transaction
                        // In ethers.js v6, nonpayable functions with return values may return TransactionResponse
                        // We need to check the return type and handle it correctly
                        const result = await contract.compareWeightTrend();
                        // Check return type: if TransactionResponse, wait for confirmation then use staticCall
                        let encryptedTrend;
                        if (result && typeof result === 'object' && 'hash' in result && 'wait' in result) {
                            // Returned TransactionResponse, need to wait for confirmation
                            const tx = result;
                            setMessage("Waiting for transaction confirmation: ".concat(tx.hash, "..."));
                            const receipt = await tx.wait();
                            if (isStale()) {
                                setMessage("Ignoring compareWeightTrend result");
                                return;
                            }
                            if (!receipt || receipt.status !== 1) {
                                setMessage("Transaction failed, please try again");
                                return;
                            }
                            // After confirmation, use staticCall to get return value
                            setMessage("Getting comparison result...");
                            const callResult = await contract.compareWeightTrend.staticCall();
                            // Ensure return value is a string
                            if (typeof callResult === 'string') {
                                encryptedTrend = callResult;
                            } else {
                                encryptedTrend = String(callResult);
                            }
                        } else if (typeof result === 'string') {
                            // Directly returned string (ebool handle)
                            encryptedTrend = result;
                        } else {
                            // Other cases, convert to string
                            encryptedTrend = String(result);
                        }
                        if (isStale()) {
                            setMessage("Ignoring compareWeightTrend result");
                            return;
                        }
                        // Check return value
                        if (!encryptedTrend || encryptedTrend === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash || encryptedTrend === "0x0000000000000000000000000000000000000000000000000000000000000000") {
                            setMessage("No trend data available (need at least 2 days of data)");
                            setTrendHandle(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash);
                        } else {
                            setMessage("Comparison completed, encrypted trend result obtained");
                            setTrendHandle(encryptedTrend);
                        }
                        if (isStale()) {
                            setMessage("Ignoring compareWeightTrend result");
                            return;
                        }
                    } catch (e) {
                        // Ensure error message is a string to avoid rendering objects
                        const errorMessage = e instanceof Error ? e.message : typeof e === 'object' && e !== null && ('hash' in e || 'blockNumber' in e) ? "Transaction processing failed, please try again" : String(e);
                        setMessage("WeightTrend.compareWeightTrend() call failed! error=".concat(errorMessage));
                        console.error("compareWeightTrend error:", e);
                    } finally{
                        isComparingRef.current = false;
                        setIsComparing(false);
                    }
                }
            }["useWeightTrend.useCallback[compareTrend].run"];
            run();
        }
    }["useWeightTrend.useCallback[compareTrend]"], [
        ethersSigner,
        sameChain,
        sameSigner
    ]);
    const canDecryptTrend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWeightTrend.useMemo[canDecryptTrend]": ()=>{
            return weightTrend.address && instance && ethersSigner && !isRefreshing && !isDecrypting && trendHandle && trendHandle !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash && trendHandle !== (clearTrend === null || clearTrend === void 0 ? void 0 : clearTrend.handle);
        }
    }["useWeightTrend.useMemo[canDecryptTrend]"], [
        weightTrend.address,
        instance,
        ethersSigner,
        isRefreshing,
        isDecrypting,
        trendHandle,
        clearTrend
    ]);
    const decryptTrend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWeightTrend.useCallback[decryptTrend]": ()=>{
            var _clearTrendRef_current;
            if (isRefreshingRef.current || isDecryptingRef.current) {
                return;
            }
            if (!weightTrend.address || !instance || !ethersSigner) {
                return;
            }
            if (trendHandle === ((_clearTrendRef_current = clearTrendRef.current) === null || _clearTrendRef_current === void 0 ? void 0 : _clearTrendRef_current.handle)) {
                return;
            }
            if (!trendHandle) {
                setClearTrend(undefined);
                clearTrendRef.current = undefined;
                return;
            }
            if (trendHandle === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash) {
                setClearTrend({
                    handle: trendHandle,
                    clear: false
                });
                clearTrendRef.current = {
                    handle: trendHandle,
                    clear: false
                };
                return;
            }
            const thisChainId = chainId;
            const thisAddress = weightTrend.address;
            const thisHandle = trendHandle;
            const thisEthersSigner = ethersSigner;
            isDecryptingRef.current = true;
            setIsDecrypting(true);
            setMessage("Start decrypting trend...");
            const run = {
                "useWeightTrend.useCallback[decryptTrend].run": async ()=>{
                    const isStale = {
                        "useWeightTrend.useCallback[decryptTrend].run.isStale": ()=>{
                            var _weightTrendRef_current;
                            return thisAddress !== ((_weightTrendRef_current = weightTrendRef.current) === null || _weightTrendRef_current === void 0 ? void 0 : _weightTrendRef_current.address) || !sameChain.current(thisChainId) || !sameSigner.current(thisEthersSigner);
                        }
                    }["useWeightTrend.useCallback[decryptTrend].run.isStale"];
                    try {
                        const sig = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$FhevmDecryptionSignature$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FhevmDecryptionSignature"].loadOrSign(instance, [
                            weightTrend.address
                        ], ethersSigner, fhevmDecryptionSignatureStorage);
                        if (!sig) {
                            setMessage("Unable to build FHEVM decryption signature");
                            return;
                        }
                        if (isStale()) {
                            setMessage("Ignore FHEVM decryption");
                            return;
                        }
                        setMessage("Call FHEVM userDecrypt...");
                        // Use userDecrypt method to decrypt ebool (same way as decrypting euint32)
                        const res = await instance.userDecrypt([
                            {
                                handle: thisHandle,
                                contractAddress: thisAddress
                            }
                        ], sig.privateKey, sig.publicKey, sig.signature, sig.contractAddresses, sig.userAddress, sig.startTimestamp, sig.durationDays);
                        setMessage("FHEVM userDecrypt completed!");
                        if (isStale()) {
                            setMessage("Ignore FHEVM decryption");
                            return;
                        }
                        // res is a DecryptedResults object, key is handle, value is decrypted value (boolean for ebool)
                        const decryptedValue = res[thisHandle];
                        // Ensure value is boolean type
                        const clearTrend = typeof decryptedValue === 'boolean' ? decryptedValue : typeof decryptedValue === 'bigint' ? decryptedValue !== 0n : Boolean(decryptedValue);
                        setClearTrend({
                            handle: thisHandle,
                            clear: clearTrend
                        });
                        clearTrendRef.current = {
                            handle: thisHandle,
                            clear: clearTrend
                        };
                        setMessage("Trend decrypted: " + (clearTrend ? "Weight decreased! 📉" : "Weight increased or same 📈"));
                    } finally{
                        isDecryptingRef.current = false;
                        setIsDecrypting(false);
                    }
                }
            }["useWeightTrend.useCallback[decryptTrend].run"];
            run();
        }
    }["useWeightTrend.useCallback[decryptTrend]"], [
        fhevmDecryptionSignatureStorage,
        ethersSigner,
        weightTrend.address,
        instance,
        trendHandle,
        chainId,
        sameChain,
        sameSigner
    ]);
    return {
        contractAddress: weightTrend.address,
        canGetTodayWeight,
        canDecryptTodayWeight,
        canSubmitWeight,
        canCompareTrend,
        canDecryptTrend,
        submitWeight,
        refreshTodayWeight,
        decryptTodayWeight,
        compareTrend,
        decryptTrend,
        isTodayWeightDecrypted,
        isTrendDecrypted,
        message,
        clearTodayWeight: clearTodayWeight === null || clearTodayWeight === void 0 ? void 0 : clearTodayWeight.clear,
        clearTrend: clearTrend === null || clearTrend === void 0 ? void 0 : clearTrend.clear,
        todayWeightHandle,
        trendHandle,
        isDecrypting,
        isRefreshing,
        isSubmitting,
        isComparing,
        isDeployed
    };
};
_s(useWeightTrend, "4+CWDFmI6fa0Z7L/UG2THA7HZT4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/ErrorNotDeployed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "errorNotDeployed",
    ()=>errorNotDeployed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function errorNotDeployed(chainId) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid w-full gap-4 mx-auto font-semibold bg-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-span-full mx-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-4xl leading-relaxed",
                    children: [
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono bg-red-500",
                            children: "Error"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
                            lineNumber: 7,
                            columnNumber: 11
                        }, this),
                        ":",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono bg-white",
                            children: "WeightTrend.sol"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
                            lineNumber: 8,
                            columnNumber: 11
                        }, this),
                        " Contract Not Deployed on",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono bg-white",
                            children: [
                                "chainId=",
                                chainId
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        " ",
                        chainId === 11155111 ? "(Sepolia)" : "",
                        " or Deployment Address Missing."
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl leading-relaxed mt-8",
                    children: [
                        "It appears that the",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono bg-white",
                            children: "WeightTrend.sol"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        " contract has either not been deployed yet, or the deployment address is missing from the ABI directory",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono bg-white",
                            children: "frontend/abi"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        ". To deploy ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono bg-white",
                            children: "WeightTrend.sol"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
                            lineNumber: 20,
                            columnNumber: 18
                        }, this),
                        " on Sepolia, run the following command:"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-mono text-2xl leading-relaxed bg-black text-white p-4 mt-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "opacity-50 italic text-red-500",
                            children: "#from root directory"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        "npx hardhat deploy --network",
                        " ",
                        chainId === 11155111 ? "sepolia" : "your-network-name"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl leading-relaxed mt-12",
                    children: [
                        "Alternatively, switch to the local",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono bg-white",
                            children: "Hardhat Node"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        " using the Rainbow wallet browser extension."
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/ErrorNotDeployed.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/WeightTrendDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeightTrendDemo",
    ()=>WeightTrendDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/useFhevm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/useInMemoryStorage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useEthersSigner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/useEthersSigner.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useWeightTrend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/useWeightTrend.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ErrorNotDeployed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ErrorNotDeployed.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
const WeightTrendDemo = ()=>{
    _s();
    const { storage: fhevmDecryptionSignatureStorage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInMemoryStorage"])();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])();
    const ethersSigner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useEthersSigner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEthersSigner"])({
        chainId
    });
    const ethersReadonlyProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useEthersSigner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEthersProvider"])({
        chainId
    });
    const sameChainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "WeightTrendDemo.useRef[sameChainRef]": (c)=>c === chainId
    }["WeightTrendDemo.useRef[sameChainRef]"]);
    const sameSignerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "WeightTrendDemo.useRef[sameSignerRef]": (s)=>(s === null || s === void 0 ? void 0 : s.address) === address
    }["WeightTrendDemo.useRef[sameSignerRef]"]);
    const [weightInput, setWeightInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Prevent hydration mismatch by only rendering after mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WeightTrendDemo.useEffect": ()=>{
            setMounted(true);
        }
    }["WeightTrendDemo.useEffect"], []);
    // Get provider from wagmi
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"])({
        chainId
    });
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeightTrendDemo.useMemo[provider]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Use window.ethereum if available, otherwise use wagmi's publicClient
            if (window.ethereum) {
                return window.ethereum;
            }
            return undefined;
        }
    }["WeightTrendDemo.useMemo[provider]"], []);
    const { instance: fhevmInstance, status: fhevmStatus, error: fhevmError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFhevm"])({
        provider: provider,
        chainId,
        initialMockChains: {
            31337: "http://localhost:8545"
        },
        enabled: true
    });
    const weightTrend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useWeightTrend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWeightTrend"])({
        instance: fhevmInstance,
        fhevmDecryptionSignatureStorage,
        chainId,
        ethersSigner,
        ethersReadonlyProvider,
        sameChain: sameChainRef,
        sameSigner: sameSignerRef
    });
    const buttonClass = "inline-flex items-center justify-center rounded-xl bg-black px-4 py-4 font-semibold text-white shadow-sm " + "transition-colors duration-200 hover:bg-blue-700 active:bg-blue-800 " + "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 " + "disabled:opacity-50 disabled:pointer-events-none";
    const titleClass = "font-semibold text-black text-lg mt-4";
    // Show consistent structure during SSR to prevent hydration mismatch
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid w-full gap-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-full mx-20 bg-black text-white rounded-lg p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold text-3xl m-5",
                        children: "Encrypted Weight Trend System"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 ml-5",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid w-full gap-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-full mx-20 bg-black text-white rounded-lg p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl text-white mb-4",
                        children: "Please connect your Rainbow wallet"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white",
                        children: "Use the Connect button in the top right corner"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (weightTrend.isDeployed === false) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ErrorNotDeployed$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorNotDeployed"])(chainId);
    }
    const handleSubmitWeight = ()=>{
        const weight = parseFloat(weightInput);
        if (weight > 0 && weight <= 1000) {
            weightTrend.submitWeight(Math.round(weight * 10)); // Convert to integer (store as 0.1kg precision)
            setWeightInput("");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid w-full gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-full mx-20 bg-black text-white rounded-lg p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold text-3xl m-5",
                        children: "Encrypted Weight Trend System"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 ml-5",
                        children: "Track your daily weight changes with fully homomorphic encryption"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-full mx-20 mt-4 px-5 pb-4 rounded-lg bg-white border-2 border-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: titleClass,
                        children: "Chain Info"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black",
                        children: [
                            "ChainId: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold",
                                children: chainId
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                lineNumber: 123,
                                columnNumber: 20
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black",
                        children: [
                            "Account: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold",
                                children: address
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                lineNumber: 126,
                                columnNumber: 20
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: titleClass,
                        children: "Contract"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black",
                        children: [
                            "WeightTrend: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold",
                                children: weightTrend.contractAddress || "Not deployed"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                lineNumber: 130,
                                columnNumber: 24
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black",
                        children: [
                            "isDeployed: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold text-green-500",
                                children: String(weightTrend.isDeployed)
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                lineNumber: 133,
                                columnNumber: 23
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-full mx-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg bg-white border-2 border-black pb-4 px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: titleClass,
                                    children: "FHEVM Instance"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-black",
                                    children: [
                                        "Fhevm Instance: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-semibold",
                                            children: fhevmInstance ? "OK" : "undefined"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                            lineNumber: 142,
                                            columnNumber: 31
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-black",
                                    children: [
                                        "Fhevm Status: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-semibold",
                                            children: fhevmStatus
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                            lineNumber: 145,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-black",
                                    children: [
                                        "Fhevm Error: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-semibold ".concat(fhevmError ? "text-red-600" : "text-green-600"),
                                            children: fhevmError ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFriendlyErrorMessage"])(fhevmError) : "No Error"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                            lineNumber: 148,
                                            columnNumber: 28
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                fhevmError && fhevmStatus === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold",
                                            children: "Tip:"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "If this is a network connection error, please ensure:"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-disc list-inside ml-2 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "Hardhat node is running (run 'npx hardhat node')"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "Network connection is normal"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "Refresh the page and try again"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg bg-white border-2 border-black pb-4 px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: titleClass,
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-black",
                                    children: [
                                        "isRefreshing: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-semibold",
                                            children: String(weightTrend.isRefreshing)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                            lineNumber: 167,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-black",
                                    children: [
                                        "isDecrypting: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-semibold",
                                            children: String(weightTrend.isDecrypting)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                            lineNumber: 170,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-black",
                                    children: [
                                        "isSubmitting: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-semibold",
                                            children: String(weightTrend.isSubmitting)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                            lineNumber: 173,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-black",
                                    children: [
                                        "isComparing: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-semibold",
                                            children: String(weightTrend.isComparing)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                            lineNumber: 176,
                                            columnNumber: 28
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-full mx-20 px-4 pb-4 rounded-lg bg-white border-2 border-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: titleClass,
                        children: "Submit Weight"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: weightInput,
                                onChange: (e)=>setWeightInput(e.target.value),
                                placeholder: "Enter weight in kg (e.g., 70.5)",
                                className: "flex-1 px-4 py-2 border-2 border-black rounded-lg",
                                min: "0",
                                max: "1000",
                                step: "0.1"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: buttonClass,
                                disabled: !weightTrend.canSubmitWeight || !weightInput,
                                onClick: handleSubmitWeight,
                                children: weightTrend.isSubmitting ? "Submitting..." : weightTrend.canSubmitWeight ? "Submit Weight" : "Cannot submit"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-full mx-20 px-4 pb-4 rounded-lg bg-white border-2 border-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: titleClass,
                        children: "Today's Weight"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black",
                        children: [
                            "Weight Handle: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold text-gray-600",
                                children: typeof weightTrend.todayWeightHandle === 'string' ? weightTrend.todayWeightHandle : weightTrend.todayWeightHandle ? String(weightTrend.todayWeightHandle) : "Not set"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                lineNumber: 212,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black",
                        children: [
                            "Clear Weight: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold text-green-500",
                                children: weightTrend.isTodayWeightDecrypted ? "".concat(Number(weightTrend.clearTodayWeight) / 10, " kg") : "Not decrypted"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                lineNumber: 221,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: buttonClass,
                                disabled: !weightTrend.canGetTodayWeight,
                                onClick: weightTrend.refreshTodayWeight,
                                children: weightTrend.canGetTodayWeight ? "Refresh Today's Weight" : "Cannot refresh"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: buttonClass,
                                disabled: !weightTrend.canDecryptTodayWeight,
                                onClick: weightTrend.decryptTodayWeight,
                                children: weightTrend.canDecryptTodayWeight ? "Decrypt Today's Weight" : weightTrend.isTodayWeightDecrypted ? "Already Decrypted" : weightTrend.isDecrypting ? "Decrypting..." : "Nothing to decrypt"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-full mx-20 px-4 pb-4 rounded-lg bg-white border-2 border-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: titleClass,
                        children: "Weight Trend Comparison"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black",
                        children: [
                            "Trend Handle: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold text-gray-600",
                                children: typeof weightTrend.trendHandle === 'string' ? weightTrend.trendHandle : weightTrend.trendHandle ? String(weightTrend.trendHandle) : "Not compared"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                lineNumber: 256,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black",
                        children: [
                            "Trend Result: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold text-green-500",
                                children: weightTrend.isTrendDecrypted ? weightTrend.clearTrend ? "📉 Weight Decreased!" : "📈 Weight Increased or Same" : "Not decrypted"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                lineNumber: 265,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: buttonClass,
                                disabled: !weightTrend.canCompareTrend,
                                onClick: weightTrend.compareTrend,
                                children: weightTrend.canCompareTrend ? "Compare Trend" : weightTrend.isComparing ? "Comparing..." : "Cannot compare"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: buttonClass,
                                disabled: !weightTrend.canDecryptTrend,
                                onClick: weightTrend.decryptTrend,
                                children: weightTrend.canDecryptTrend ? "Decrypt Trend" : weightTrend.isTrendDecrypted ? "Already Decrypted" : weightTrend.isDecrypting ? "Decrypting..." : "Nothing to decrypt"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-full mx-20 p-4 rounded-lg bg-white border-2 border-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: titleClass,
                        children: "Message"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black font-mono",
                        children: typeof weightTrend.message === 'string' ? weightTrend.message : weightTrend.message ? String(weightTrend.message) : "Ready"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/WeightTrendDemo.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WeightTrendDemo, "cvQZFzptFQCYl4nAi2x6X80/BAk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useInMemoryStorage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInMemoryStorage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useEthersSigner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEthersSigner"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useEthersSigner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEthersProvider"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFhevm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useWeightTrend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWeightTrend"]
    ];
});
_c = WeightTrendDemo;
var _c;
__turbopack_context__.k.register(_c, "WeightTrendDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_b9f853fc._.js.map