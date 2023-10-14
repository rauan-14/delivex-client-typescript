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

import { DeliveryClassEnum } from '../models/DeliveryClassEnum';
import { DeliveryMethodEnum } from '../models/DeliveryMethodEnum';
import { Item } from '../models/Item';
import { PreviewOrderPoint } from '../models/PreviewOrderPoint';
import { HttpFile } from '../http/http';

export class PreviewOrderRequest {
    'deliveryMethod': DeliveryMethodEnum;
    'deliveryClass'?: DeliveryClassEnum;
    'srcPoint': PreviewOrderPoint;
    'dstPoint': PreviewOrderPoint;
    'items': Array<Item>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deliveryMethod",
            "baseName": "delivery_method",
            "type": "DeliveryMethodEnum",
            "format": ""
        },
        {
            "name": "deliveryClass",
            "baseName": "delivery_class",
            "type": "DeliveryClassEnum",
            "format": ""
        },
        {
            "name": "srcPoint",
            "baseName": "src_point",
            "type": "PreviewOrderPoint",
            "format": ""
        },
        {
            "name": "dstPoint",
            "baseName": "dst_point",
            "type": "PreviewOrderPoint",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Item>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PreviewOrderRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


