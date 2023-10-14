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

import { Provider } from '../models/Provider';
import { HttpFile } from '../http/http';

export class TransactionOrder {
    'id': number;
    'provider': Provider;
    'companyExternalId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
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
            "name": "companyExternalId",
            "baseName": "company_external_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionOrder.attributeTypeMap;
    }

    public constructor() {
    }
}
