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

import { Address } from '../models/Address';
import { Contact } from '../models/Contact';
import { PointTypeEnum } from '../models/PointTypeEnum';
import { HttpFile } from '../http/http';

export class Point {
    'id': number;
    'address': Address;
    'contact': Contact;
    'comment'?: string;
    'type': PointTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "Address",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "Contact",
            "format": ""
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PointTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Point.attributeTypeMap;
    }

    public constructor() {
    }
}



