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

import { HttpFile } from '../http/http';

export class PatchedProvider {
    'id'?: number;
    'name'?: string;
    'displayName'?: string;
    'imageUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "imageUrl",
            "baseName": "image_url",
            "type": "string",
            "format": "uri"
        }    ];

    static getAttributeTypeMap() {
        return PatchedProvider.attributeTypeMap;
    }

    public constructor() {
    }
}

