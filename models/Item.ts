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

import { Size } from '../models/Size';
import { HttpFile } from '../http/http';

export class Item {
    'size': Size;
    'weight': number;
    'quantity'?: number;
    'title'?: string;
    'costCurrency'?: string;
    'costValue'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "size",
            "baseName": "size",
            "type": "Size",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": "double"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "costCurrency",
            "baseName": "cost_currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "costValue",
            "baseName": "cost_value",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return Item.attributeTypeMap;
    }

    public constructor() {
    }
}
