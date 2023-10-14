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

import { CreateOrderPoint } from '../models/CreateOrderPoint';
import { ItemInfo } from '../models/ItemInfo';
import { HttpFile } from '../http/http';

export class CreateOrderRequest {
    'previewOrderId': number;
    'srcPoint': CreateOrderPoint;
    'dstPoint': CreateOrderPoint;
    'itemInfos': Array<ItemInfo>;
    'crmId'?: string;
    'scheduledTime'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "previewOrderId",
            "baseName": "preview_order_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "srcPoint",
            "baseName": "src_point",
            "type": "CreateOrderPoint",
            "format": ""
        },
        {
            "name": "dstPoint",
            "baseName": "dst_point",
            "type": "CreateOrderPoint",
            "format": ""
        },
        {
            "name": "itemInfos",
            "baseName": "item_infos",
            "type": "Array<ItemInfo>",
            "format": ""
        },
        {
            "name": "crmId",
            "baseName": "crm_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "scheduledTime",
            "baseName": "scheduled_time",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return CreateOrderRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

