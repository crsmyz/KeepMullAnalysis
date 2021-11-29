import { FormatRequestFunc } from "./format-request-modules/format-request-interfaces/formatCardFuncInterface.ts";
import { ApiRequestFunc } from "./api-request-modules/api-request-interfaces/apiRequestFuncInterface.ts";

// async fetch function for scryfall data
export async function fetchDeckData(bodyData: string, apiRequestFunc: ApiRequestFunc, apiUrl: string, suffixUrl: string, formatRequestFunc: FormatRequestFunc) {
    return await apiRequestFunc(apiUrl + suffixUrl, formatRequestFunc(bodyData)).then((resp: any) => resp.data);
}