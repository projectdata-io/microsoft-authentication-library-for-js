/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { INetworkModule, NetworkRequestOptions } from '@azure/msal-common';
import { HttpMethod } from './../utils/Constants';
import axios, {AxiosRequestConfig} from 'axios';

/**
 * This class implements the API for network requests.
 */
export class HttpClient implements INetworkModule {
    /**
     * Http client for REST endpoints - Get request
     * @param url
     * @param options
     */
    async sendGetRequestAsync<T>(
        url: string,
        options?: NetworkRequestOptions
    ): Promise<T> {
     const request: AxiosRequestConfig = {
            method: HttpMethod.GET,
            url: url,
            headers: options && options.headers,
        };

        const response = await axios(request);
        return response.data as T;
    }

    /**
     * Http client for REST endpoints - Post request
     * @param url
     * @param options
     */
    async sendPostRequestAsync<T>(
        url: string,
        options?: NetworkRequestOptions
    ): Promise<T> {
        const request: AxiosRequestConfig = {
            method: HttpMethod.POST,
            url: url,
            data: (options && options.body) || '',
            headers: options && options.headers,
        };

        const response = await axios(request);
        return response.data as T;
    }
}
