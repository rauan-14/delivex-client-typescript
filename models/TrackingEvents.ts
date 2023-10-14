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

import { OrderEvent } from '../models/OrderEvent';
import { UpcomingEvent } from '../models/UpcomingEvent';
import { HttpFile } from '../http/http';

export class TrackingEvents {
    'isDelivered'?: string;
    'upcomingEvents': Array<UpcomingEvent>;
    'finishedEvents': Array<OrderEvent>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isDelivered",
            "baseName": "is_delivered",
            "type": "string",
            "format": ""
        },
        {
            "name": "upcomingEvents",
            "baseName": "upcoming_events",
            "type": "Array<UpcomingEvent>",
            "format": ""
        },
        {
            "name": "finishedEvents",
            "baseName": "finished_events",
            "type": "Array<OrderEvent>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TrackingEvents.attributeTypeMap;
    }

    public constructor() {
    }
}
