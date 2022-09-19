/* tslint:disable */
/* eslint-disable */
/**
 * Awesome Boilerplate
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponse } from '../models';
/**
 * WhoamiApi - axios parameter creator
 * @export
 */
export const WhoamiApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Information On Authenticated User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        whoami: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/whoami/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2AuthorizationCodeBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2AuthorizationCodeBearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WhoamiApi - functional programming interface
 * @export
 */
export const WhoamiApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WhoamiApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Information On Authenticated User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async whoami(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.whoami(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WhoamiApi - factory interface
 * @export
 */
export const WhoamiApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WhoamiApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Information On Authenticated User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        whoami(options?: any): AxiosPromise<any> {
            return localVarFp.whoami(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WhoamiApi - object-oriented interface
 * @export
 * @class WhoamiApi
 * @extends {BaseAPI}
 */
export class WhoamiApi extends BaseAPI {
    /**
     * 
     * @summary Get Information On Authenticated User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WhoamiApi
     */
    public whoami(options?: any) {
        return WhoamiApiFp(this.configuration).whoami(options).then((request) => request(this.axios, this.basePath));
    }
}
