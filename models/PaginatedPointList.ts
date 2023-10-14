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

import { Point } from '../models/Point';
import { HttpFile } from '../http/http';

export class PaginatedPointList {
    'count'?: number;
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Point>;

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
            "type": "Array<Point>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaginatedPointList.attributeTypeMap;
    }

    public constructor() {
    }
}
