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
import { Point } from '../models/Point';
import { Provider } from '../models/Provider';
import { StatusEnum } from '../models/StatusEnum';
import { HttpFile } from '../http/http';

export class Order {
    'id': number;
    'user': number;
    'provider': Provider;
    'providerExternalId'?: string;
    'companyExternalId'?: string;
    'method': DeliveryMethodEnum;
    'type': DeliveryClassEnum;
    'createdAt': Date;
    'priceUpdatedAt': Date;
    'statusUpdatedAt': Date;
    'price': string;
    'deliveryRangeLow': number;
    'deliveryRangeUp': number;
    'estimatedDeliveryDate': string;
    'status': StatusEnum;
    'items': Array<Item>;
    'srcPoint': Point;
    'dstPoint': Point;
    'statusDisplayName': string;
    'typeDisplayName': string;
    'maybeCancelable': string;
    'scheduledDeliveryEnabled': string;
    'trackingNumber': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "number",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "Provider",
            "format": ""
        },
        {
            "name": "providerExternalId",
            "baseName": "provider_external_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "companyExternalId",
            "baseName": "company_external_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "DeliveryMethodEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DeliveryClassEnum",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "priceUpdatedAt",
            "baseName": "price_updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "statusUpdatedAt",
            "baseName": "status_updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string",
            "format": "decimal"
        },
        {
            "name": "deliveryRangeLow",
            "baseName": "delivery_range_low",
            "type": "number",
            "format": ""
        },
        {
            "name": "deliveryRangeUp",
            "baseName": "delivery_range_up",
            "type": "number",
            "format": ""
        },
        {
            "name": "estimatedDeliveryDate",
            "baseName": "estimated_delivery_date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "StatusEnum",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Item>",
            "format": ""
        },
        {
            "name": "srcPoint",
            "baseName": "src_point",
            "type": "Point",
            "format": ""
        },
        {
            "name": "dstPoint",
            "baseName": "dst_point",
            "type": "Point",
            "format": ""
        },
        {
            "name": "statusDisplayName",
            "baseName": "status_display_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "typeDisplayName",
            "baseName": "type_display_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "maybeCancelable",
            "baseName": "maybe_cancelable",
            "type": "string",
            "format": ""
        },
        {
            "name": "scheduledDeliveryEnabled",
            "baseName": "scheduled_delivery_enabled",
            "type": "string",
            "format": ""
        },
        {
            "name": "trackingNumber",
            "baseName": "tracking_number",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Order.attributeTypeMap;
    }

    public constructor() {
    }
}



