export * from '../models/Account';
export * from '../models/AccountTransaction';
export * from '../models/AccountTransactionType';
export * from '../models/AccountTransactionTypeEnum';
export * from '../models/Activation';
export * from '../models/Address';
export * from '../models/AddressSearchResult';
export * from '../models/CancelOrderRequest';
export * from '../models/City';
export * from '../models/Contact';
export * from '../models/CreateContactRequest';
export * from '../models/CreateInvoice';
export * from '../models/CreateOrderPoint';
export * from '../models/CreateOrderPointContact';
export * from '../models/CreateOrderRequest';
export * from '../models/DeliveryClassEnum';
export * from '../models/DeliveryMethodEnum';
export * from '../models/DeliveryRate';
export * from '../models/DeliveryRatePoint';
export * from '../models/DeliveryRateRequest';
export * from '../models/EventTypeEnum';
export * from '../models/Item';
export * from '../models/ItemInfo';
export * from '../models/OTP';
export * from '../models/Order';
export * from '../models/OrderEvent';
export * from '../models/PaginatedAccountTransactionList';
export * from '../models/PaginatedOrderList';
export * from '../models/PaginatedPointList';
export * from '../models/PasswordResetConfirm';
export * from '../models/PatchedPoint';
export * from '../models/PatchedProvider';
export * from '../models/PatchedUser';
export * from '../models/Point';
export * from '../models/PointTypeEnum';
export * from '../models/PostPaymentApplication';
export * from '../models/PreviewOrderPoint';
export * from '../models/PreviewOrderRequest';
export * from '../models/Provider';
export * from '../models/Region';
export * from '../models/SendEmailReset';
export * from '../models/SetPassword';
export * from '../models/SetUsername';
export * from '../models/Size';
export * from '../models/StatusEnum';
export * from '../models/TokenCreate';
export * from '../models/TrackingEvents';
export * from '../models/TransactionOrder';
export * from '../models/UpcomingEvent';
export * from '../models/User';
export * from '../models/UserCreate';
export * from '../models/UsernameResetConfirm';

import { Account } from '../models/Account';
import { AccountTransaction       } from '../models/AccountTransaction';
import { AccountTransactionType } from '../models/AccountTransactionType';
import { AccountTransactionTypeEnum } from '../models/AccountTransactionTypeEnum';
import { Activation } from '../models/Activation';
import { Address } from '../models/Address';
import { AddressSearchResult } from '../models/AddressSearchResult';
import { CancelOrderRequest } from '../models/CancelOrderRequest';
import { City } from '../models/City';
import { Contact } from '../models/Contact';
import { CreateContactRequest } from '../models/CreateContactRequest';
import { CreateInvoice } from '../models/CreateInvoice';
import { CreateOrderPoint } from '../models/CreateOrderPoint';
import { CreateOrderPointContact } from '../models/CreateOrderPointContact';
import { CreateOrderRequest } from '../models/CreateOrderRequest';
import { DeliveryClassEnum } from '../models/DeliveryClassEnum';
import { DeliveryMethodEnum } from '../models/DeliveryMethodEnum';
import { DeliveryRate } from '../models/DeliveryRate';
import { DeliveryRatePoint } from '../models/DeliveryRatePoint';
import { DeliveryRateRequest } from '../models/DeliveryRateRequest';
import { EventTypeEnum } from '../models/EventTypeEnum';
import { Item } from '../models/Item';
import { ItemInfo } from '../models/ItemInfo';
import { OTP } from '../models/OTP';
import { Order                        } from '../models/Order';
import { OrderEvent       } from '../models/OrderEvent';
import { PaginatedAccountTransactionList } from '../models/PaginatedAccountTransactionList';
import { PaginatedOrderList } from '../models/PaginatedOrderList';
import { PaginatedPointList } from '../models/PaginatedPointList';
import { PasswordResetConfirm } from '../models/PasswordResetConfirm';
import { PatchedPoint      } from '../models/PatchedPoint';
import { PatchedProvider } from '../models/PatchedProvider';
import { PatchedUser } from '../models/PatchedUser';
import { Point      } from '../models/Point';
import { PointTypeEnum } from '../models/PointTypeEnum';
import { PostPaymentApplication } from '../models/PostPaymentApplication';
import { PreviewOrderPoint } from '../models/PreviewOrderPoint';
import { PreviewOrderRequest      } from '../models/PreviewOrderRequest';
import { Provider } from '../models/Provider';
import { Region } from '../models/Region';
import { SendEmailReset } from '../models/SendEmailReset';
import { SetPassword } from '../models/SetPassword';
import { SetUsername } from '../models/SetUsername';
import { Size } from '../models/Size';
import { StatusEnum } from '../models/StatusEnum';
import { TokenCreate } from '../models/TokenCreate';
import { TrackingEvents } from '../models/TrackingEvents';
import { TransactionOrder } from '../models/TransactionOrder';
import { UpcomingEvent } from '../models/UpcomingEvent';
import { User } from '../models/User';
import { UserCreate } from '../models/UserCreate';
import { UsernameResetConfirm } from '../models/UsernameResetConfirm';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/json-patch+json": 1,
  "application/merge-patch+json": 1,
  "application/strategic-merge-patch+json": 1,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "AccountTransactionTypeEnum",
    "DeliveryClassEnum",
    "DeliveryMethodEnum",
    "EventTypeEnum",
    "PointTypeEnum",
    "StatusEnum",
]);

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountTransaction": AccountTransaction,
    "AccountTransactionType": AccountTransactionType,
    "Activation": Activation,
    "Address": Address,
    "AddressSearchResult": AddressSearchResult,
    "CancelOrderRequest": CancelOrderRequest,
    "City": City,
    "Contact": Contact,
    "CreateContactRequest": CreateContactRequest,
    "CreateInvoice": CreateInvoice,
    "CreateOrderPoint": CreateOrderPoint,
    "CreateOrderPointContact": CreateOrderPointContact,
    "CreateOrderRequest": CreateOrderRequest,
    "DeliveryRate": DeliveryRate,
    "DeliveryRatePoint": DeliveryRatePoint,
    "DeliveryRateRequest": DeliveryRateRequest,
    "Item": Item,
    "ItemInfo": ItemInfo,
    "OTP": OTP,
    "Order": Order,
    "OrderEvent": OrderEvent,
    "PaginatedAccountTransactionList": PaginatedAccountTransactionList,
    "PaginatedOrderList": PaginatedOrderList,
    "PaginatedPointList": PaginatedPointList,
    "PasswordResetConfirm": PasswordResetConfirm,
    "PatchedPoint": PatchedPoint,
    "PatchedProvider": PatchedProvider,
    "PatchedUser": PatchedUser,
    "Point": Point,
    "PostPaymentApplication": PostPaymentApplication,
    "PreviewOrderPoint": PreviewOrderPoint,
    "PreviewOrderRequest": PreviewOrderRequest,
    "Provider": Provider,
    "Region": Region,
    "SendEmailReset": SendEmailReset,
    "SetPassword": SetPassword,
    "SetUsername": SetUsername,
    "Size": Size,
    "TokenCreate": TokenCreate,
    "TrackingEvents": TrackingEvents,
    "TransactionOrder": TransactionOrder,
    "UpcomingEvent": UpcomingEvent,
    "User": User,
    "UserCreate": UserCreate,
    "UsernameResetConfirm": UsernameResetConfirm,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
