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

export class UpcomingEvent {
    'eventValue': string;
    'eventValueDisplayName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "eventValue",
            "baseName": "event_value",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventValueDisplayName",
            "baseName": "event_value_display_name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpcomingEvent.attributeTypeMap;
    }

    public constructor() {
    }
}

