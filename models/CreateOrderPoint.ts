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

import { CreateOrderPointContact } from '../models/CreateOrderPointContact';
import { HttpFile } from '../http/http';

export class CreateOrderPoint {
    'contact'?: CreateOrderPointContact | null;
    'comment'?: string;
    'persist'?: boolean;
    'indriveId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contact",
            "baseName": "contact",
            "type": "CreateOrderPointContact",
            "format": ""
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string",
            "format": ""
        },
        {
            "name": "persist",
            "baseName": "persist",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "indriveId",
            "baseName": "indrive_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateOrderPoint.attributeTypeMap;
    }

    public constructor() {
    }
}

