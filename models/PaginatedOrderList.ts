/**
 * delivex API
 * Documentation of API endpoints of delivex
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Order } from '../models/Order';
import { HttpFile } from '../http/http';

export class PaginatedOrderList {
    'count'?: number;
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Order>;
    /**
    * Number of delivered orders
    */
    'countDelivered'?: number;
    /**
    * Number of orders in progress
    */
    'countInProgress'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Order>",
            "format": ""
        },
        {
            "name": "countDelivered",
            "baseName": "count_delivered",
            "type": "number",
            "format": ""
        },
        {
            "name": "countInProgress",
            "baseName": "count_in_progress",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaginatedOrderList.attributeTypeMap;
    }

    public constructor() {
    }
}
