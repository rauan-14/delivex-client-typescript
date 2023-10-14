import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { AccountTransaction } from '../models/AccountTransaction';
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
import { Order } from '../models/Order';
import { OrderEvent } from '../models/OrderEvent';
import { PaginatedAccountTransactionList } from '../models/PaginatedAccountTransactionList';
import { PaginatedOrderList } from '../models/PaginatedOrderList';
import { PaginatedPointList } from '../models/PaginatedPointList';
import { PasswordResetConfirm } from '../models/PasswordResetConfirm';
import { PatchedPoint } from '../models/PatchedPoint';
import { PatchedProvider } from '../models/PatchedProvider';
import { PatchedUser } from '../models/PatchedUser';
import { Point } from '../models/Point';
import { PointTypeEnum } from '../models/PointTypeEnum';
import { PostPaymentApplication } from '../models/PostPaymentApplication';
import { PreviewOrderPoint } from '../models/PreviewOrderPoint';
import { PreviewOrderRequest } from '../models/PreviewOrderRequest';
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
import { ObservableApiApi } from './ObservableAPI';

import { ApiApiRequestFactory, ApiApiResponseProcessor} from "../apis/ApiApi";
export class PromiseApiApi {
    private api: ObservableApiApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiApiRequestFactory,
        responseProcessor?: ApiApiResponseProcessor
    ) {
        this.api = new ObservableApiApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public apiAccountsMeRetrieveWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Account>> {
        const result = this.api.apiAccountsMeRetrieveWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiAccountsMeRetrieve(_options?: Configuration): Promise<Account> {
        const result = this.api.apiAccountsMeRetrieve(_options);
        return result.toPromise();
    }

    /**
     * @param city The name or ID of the city to search in.
     * @param text The text to search for.
     */
    public apiCatalogSearchRetrieveWithHttpInfo(city?: string, text?: string, _options?: Configuration): Promise<HttpInfo<AddressSearchResult>> {
        const result = this.api.apiCatalogSearchRetrieveWithHttpInfo(city, text, _options);
        return result.toPromise();
    }

    /**
     * @param city The name or ID of the city to search in.
     * @param text The text to search for.
     */
    public apiCatalogSearchRetrieve(city?: string, text?: string, _options?: Configuration): Promise<AddressSearchResult> {
        const result = this.api.apiCatalogSearchRetrieve(city, text, _options);
        return result.toPromise();
    }

    /**
     * @param intracityDeliveryEnabled Intracity delivery enabled.
     * @param search A search term.
     */
    public apiCitiesListWithHttpInfo(intracityDeliveryEnabled?: boolean, search?: string, _options?: Configuration): Promise<HttpInfo<Array<City>>> {
        const result = this.api.apiCitiesListWithHttpInfo(intracityDeliveryEnabled, search, _options);
        return result.toPromise();
    }

    /**
     * @param intracityDeliveryEnabled Intracity delivery enabled.
     * @param search A search term.
     */
    public apiCitiesList(intracityDeliveryEnabled?: boolean, search?: string, _options?: Configuration): Promise<Array<City>> {
        const result = this.api.apiCitiesList(intracityDeliveryEnabled, search, _options);
        return result.toPromise();
    }

    /**
     * @param createContactRequest 
     */
    public apiContactRequestCreateWithHttpInfo(createContactRequest: CreateContactRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiContactRequestCreateWithHttpInfo(createContactRequest, _options);
        return result.toPromise();
    }

    /**
     * @param createContactRequest 
     */
    public apiContactRequestCreate(createContactRequest: CreateContactRequest, _options?: Configuration): Promise<void> {
        const result = this.api.apiContactRequestCreate(createContactRequest, _options);
        return result.toPromise();
    }

    /**
     * Wrapper around https://yandex.ru/dev/geocode/doc/ru/. No need to specify api_key
     */
    public apiGeocoderRetrieveWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiGeocoderRetrieveWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Wrapper around https://yandex.ru/dev/geocode/doc/ru/. No need to specify api_key
     */
    public apiGeocoderRetrieve(_options?: Configuration): Promise<void> {
        const result = this.api.apiGeocoderRetrieve(_options);
        return result.toPromise();
    }

    /**
     * @param createInvoice 
     */
    public apiInvoicesCreateWithHttpInfo(createInvoice: CreateInvoice, _options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        const result = this.api.apiInvoicesCreateWithHttpInfo(createInvoice, _options);
        return result.toPromise();
    }

    /**
     * @param createInvoice 
     */
    public apiInvoicesCreate(createInvoice: CreateInvoice, _options?: Configuration): Promise<{ [key: string]: any; }> {
        const result = this.api.apiInvoicesCreate(createInvoice, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this order.
     * @param cancelOrderRequest 
     */
    public apiOrdersCancelCreateWithHttpInfo(id: number, cancelOrderRequest?: CancelOrderRequest, _options?: Configuration): Promise<HttpInfo<Order>> {
        const result = this.api.apiOrdersCancelCreateWithHttpInfo(id, cancelOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this order.
     * @param cancelOrderRequest 
     */
    public apiOrdersCancelCreate(id: number, cancelOrderRequest?: CancelOrderRequest, _options?: Configuration): Promise<Order> {
        const result = this.api.apiOrdersCancelCreate(id, cancelOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * @param createOrderRequest 
     */
    public apiOrdersCreateWithHttpInfo(createOrderRequest: CreateOrderRequest, _options?: Configuration): Promise<HttpInfo<Order>> {
        const result = this.api.apiOrdersCreateWithHttpInfo(createOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * @param createOrderRequest 
     */
    public apiOrdersCreate(createOrderRequest: CreateOrderRequest, _options?: Configuration): Promise<Order> {
        const result = this.api.apiOrdersCreate(createOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * @param orderId 
     */
    public apiOrdersDocumentsSummaryRetrieveWithHttpInfo(orderId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiOrdersDocumentsSummaryRetrieveWithHttpInfo(orderId, _options);
        return result.toPromise();
    }

    /**
     * @param orderId 
     */
    public apiOrdersDocumentsSummaryRetrieve(orderId: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiOrdersDocumentsSummaryRetrieve(orderId, _options);
        return result.toPromise();
    }

    /**
     * @param orderId 
     */
    public apiOrdersDocumentsWaybillRetrieveWithHttpInfo(orderId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiOrdersDocumentsWaybillRetrieveWithHttpInfo(orderId, _options);
        return result.toPromise();
    }

    /**
     * @param orderId 
     */
    public apiOrdersDocumentsWaybillRetrieve(orderId: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiOrdersDocumentsWaybillRetrieve(orderId, _options);
        return result.toPromise();
    }

    /**
     * @param limit Number of results to return per page.
     * @param minCreatedAt Created after the given date.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     */
    public apiOrdersListWithHttpInfo(limit?: number, minCreatedAt?: Date, offset?: number, ordering?: string, search?: string, _options?: Configuration): Promise<HttpInfo<PaginatedOrderList>> {
        const result = this.api.apiOrdersListWithHttpInfo(limit, minCreatedAt, offset, ordering, search, _options);
        return result.toPromise();
    }

    /**
     * @param limit Number of results to return per page.
     * @param minCreatedAt Created after the given date.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     */
    public apiOrdersList(limit?: number, minCreatedAt?: Date, offset?: number, ordering?: string, search?: string, _options?: Configuration): Promise<PaginatedOrderList> {
        const result = this.api.apiOrdersList(limit, minCreatedAt, offset, ordering, search, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this order.
     */
    public apiOrdersRetrieveWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Order>> {
        const result = this.api.apiOrdersRetrieveWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this order.
     */
    public apiOrdersRetrieve(id: number, _options?: Configuration): Promise<Order> {
        const result = this.api.apiOrdersRetrieve(id, _options);
        return result.toPromise();
    }

    /**
     * @param orderId 
     */
    public apiOrdersTrackingEventsListWithHttpInfo(orderId: string, _options?: Configuration): Promise<HttpInfo<Array<TrackingEvents>>> {
        const result = this.api.apiOrdersTrackingEventsListWithHttpInfo(orderId, _options);
        return result.toPromise();
    }

    /**
     * @param orderId 
     */
    public apiOrdersTrackingEventsList(orderId: string, _options?: Configuration): Promise<Array<TrackingEvents>> {
        const result = this.api.apiOrdersTrackingEventsList(orderId, _options);
        return result.toPromise();
    }

    /**
     * @param OTP 
     */
    public apiOtpCreateWithHttpInfo(OTP: OTP, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiOtpCreateWithHttpInfo(OTP, _options);
        return result.toPromise();
    }

    /**
     * @param OTP 
     */
    public apiOtpCreate(OTP: OTP, _options?: Configuration): Promise<void> {
        const result = this.api.apiOtpCreate(OTP, _options);
        return result.toPromise();
    }

    /**
     * @param point 
     */
    public apiPointsCreateWithHttpInfo(point: Point, _options?: Configuration): Promise<HttpInfo<Point>> {
        const result = this.api.apiPointsCreateWithHttpInfo(point, _options);
        return result.toPromise();
    }

    /**
     * @param point 
     */
    public apiPointsCreate(point: Point, _options?: Configuration): Promise<Point> {
        const result = this.api.apiPointsCreate(point, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this point.
     */
    public apiPointsDestroyWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiPointsDestroyWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this point.
     */
    public apiPointsDestroy(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiPointsDestroy(id, _options);
        return result.toPromise();
    }

    /**
     * @param city 
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @param type * &#x60;source&#x60; - Source * &#x60;destination&#x60; - Destination  * &#x60;source&#x60; - Source * &#x60;destination&#x60; - Destination
     */
    public apiPointsListWithHttpInfo(city?: string, limit?: number, offset?: number, ordering?: string, search?: string, type?: 'destination' | 'source', _options?: Configuration): Promise<HttpInfo<PaginatedPointList>> {
        const result = this.api.apiPointsListWithHttpInfo(city, limit, offset, ordering, search, type, _options);
        return result.toPromise();
    }

    /**
     * @param city 
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @param type * &#x60;source&#x60; - Source * &#x60;destination&#x60; - Destination  * &#x60;source&#x60; - Source * &#x60;destination&#x60; - Destination
     */
    public apiPointsList(city?: string, limit?: number, offset?: number, ordering?: string, search?: string, type?: 'destination' | 'source', _options?: Configuration): Promise<PaginatedPointList> {
        const result = this.api.apiPointsList(city, limit, offset, ordering, search, type, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this point.
     * @param patchedPoint 
     */
    public apiPointsPartialUpdateWithHttpInfo(id: number, patchedPoint?: PatchedPoint, _options?: Configuration): Promise<HttpInfo<Point>> {
        const result = this.api.apiPointsPartialUpdateWithHttpInfo(id, patchedPoint, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this point.
     * @param patchedPoint 
     */
    public apiPointsPartialUpdate(id: number, patchedPoint?: PatchedPoint, _options?: Configuration): Promise<Point> {
        const result = this.api.apiPointsPartialUpdate(id, patchedPoint, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this point.
     */
    public apiPointsRetrieveWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Point>> {
        const result = this.api.apiPointsRetrieveWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this point.
     */
    public apiPointsRetrieve(id: number, _options?: Configuration): Promise<Point> {
        const result = this.api.apiPointsRetrieve(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this point.
     * @param point 
     */
    public apiPointsUpdateWithHttpInfo(id: number, point: Point, _options?: Configuration): Promise<HttpInfo<Point>> {
        const result = this.api.apiPointsUpdateWithHttpInfo(id, point, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this point.
     * @param point 
     */
    public apiPointsUpdate(id: number, point: Point, _options?: Configuration): Promise<Point> {
        const result = this.api.apiPointsUpdate(id, point, _options);
        return result.toPromise();
    }

    /**
     * @param postPaymentApplication 
     */
    public apiPostpaymentApplicationsCreateWithHttpInfo(postPaymentApplication: PostPaymentApplication, _options?: Configuration): Promise<HttpInfo<PostPaymentApplication>> {
        const result = this.api.apiPostpaymentApplicationsCreateWithHttpInfo(postPaymentApplication, _options);
        return result.toPromise();
    }

    /**
     * @param postPaymentApplication 
     */
    public apiPostpaymentApplicationsCreate(postPaymentApplication: PostPaymentApplication, _options?: Configuration): Promise<PostPaymentApplication> {
        const result = this.api.apiPostpaymentApplicationsCreate(postPaymentApplication, _options);
        return result.toPromise();
    }

    /**
     * @param previewOrderRequest 
     */
    public apiPreviewOrdersCreateWithHttpInfo(previewOrderRequest: PreviewOrderRequest, _options?: Configuration): Promise<HttpInfo<Array<Order>>> {
        const result = this.api.apiPreviewOrdersCreateWithHttpInfo(previewOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * @param previewOrderRequest 
     */
    public apiPreviewOrdersCreate(previewOrderRequest: PreviewOrderRequest, _options?: Configuration): Promise<Array<Order>> {
        const result = this.api.apiPreviewOrdersCreate(previewOrderRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this order.
     */
    public apiPreviewOrdersRetrieveWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Order>> {
        const result = this.api.apiPreviewOrdersRetrieveWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this order.
     */
    public apiPreviewOrdersRetrieve(id: number, _options?: Configuration): Promise<Order> {
        const result = this.api.apiPreviewOrdersRetrieve(id, _options);
        return result.toPromise();
    }

    /**
     * @param provider 
     */
    public apiProvidersCreateWithHttpInfo(provider: Provider, _options?: Configuration): Promise<HttpInfo<Provider>> {
        const result = this.api.apiProvidersCreateWithHttpInfo(provider, _options);
        return result.toPromise();
    }

    /**
     * @param provider 
     */
    public apiProvidersCreate(provider: Provider, _options?: Configuration): Promise<Provider> {
        const result = this.api.apiProvidersCreate(provider, _options);
        return result.toPromise();
    }

    /**
     */
    public apiProvidersListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Provider>>> {
        const result = this.api.apiProvidersListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiProvidersList(_options?: Configuration): Promise<Array<Provider>> {
        const result = this.api.apiProvidersList(_options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this provider.
     * @param patchedProvider 
     */
    public apiProvidersPartialUpdateWithHttpInfo(id: number, patchedProvider?: PatchedProvider, _options?: Configuration): Promise<HttpInfo<Provider>> {
        const result = this.api.apiProvidersPartialUpdateWithHttpInfo(id, patchedProvider, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this provider.
     * @param patchedProvider 
     */
    public apiProvidersPartialUpdate(id: number, patchedProvider?: PatchedProvider, _options?: Configuration): Promise<Provider> {
        const result = this.api.apiProvidersPartialUpdate(id, patchedProvider, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this provider.
     */
    public apiProvidersRetrieveWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Provider>> {
        const result = this.api.apiProvidersRetrieveWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this provider.
     */
    public apiProvidersRetrieve(id: number, _options?: Configuration): Promise<Provider> {
        const result = this.api.apiProvidersRetrieve(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this provider.
     * @param provider 
     */
    public apiProvidersUpdateWithHttpInfo(id: number, provider: Provider, _options?: Configuration): Promise<HttpInfo<Provider>> {
        const result = this.api.apiProvidersUpdateWithHttpInfo(id, provider, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this provider.
     * @param provider 
     */
    public apiProvidersUpdate(id: number, provider: Provider, _options?: Configuration): Promise<Provider> {
        const result = this.api.apiProvidersUpdate(id, provider, _options);
        return result.toPromise();
    }

    /**
     * @param deliveryRateRequest 
     */
    public apiRatesCreateWithHttpInfo(deliveryRateRequest: DeliveryRateRequest, _options?: Configuration): Promise<HttpInfo<Array<DeliveryRate>>> {
        const result = this.api.apiRatesCreateWithHttpInfo(deliveryRateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param deliveryRateRequest 
     */
    public apiRatesCreate(deliveryRateRequest: DeliveryRateRequest, _options?: Configuration): Promise<Array<DeliveryRate>> {
        const result = this.api.apiRatesCreate(deliveryRateRequest, _options);
        return result.toPromise();
    }

    /**
     */
    public apiRegionsListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Region>>> {
        const result = this.api.apiRegionsListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiRegionsList(_options?: Configuration): Promise<Array<Region>> {
        const result = this.api.apiRegionsList(_options);
        return result.toPromise();
    }

    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     * @param format 
     * @param lang 
     */
    public apiSchemaRetrieveWithHttpInfo(format?: 'json' | 'yaml', lang?: 'af' | 'ar' | 'ar-dz' | 'ast' | 'az' | 'be' | 'bg' | 'bn' | 'br' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'dsb' | 'el' | 'en' | 'en-au' | 'en-gb' | 'eo' | 'es' | 'es-ar' | 'es-co' | 'es-mx' | 'es-ni' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fr' | 'fy' | 'ga' | 'gd' | 'gl' | 'he' | 'hi' | 'hr' | 'hsb' | 'hu' | 'hy' | 'ia' | 'id' | 'ig' | 'io' | 'is' | 'it' | 'ja' | 'ka' | 'kab' | 'kk' | 'km' | 'kn' | 'ko' | 'ky' | 'lb' | 'lt' | 'lv' | 'mk' | 'ml' | 'mn' | 'mr' | 'ms' | 'my' | 'nb' | 'ne' | 'nl' | 'nn' | 'os' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'ro' | 'ru' | 'sk' | 'sl' | 'sq' | 'sr' | 'sr-latn' | 'sv' | 'sw' | 'ta' | 'te' | 'tg' | 'th' | 'tk' | 'tr' | 'tt' | 'udm' | 'uk' | 'ur' | 'uz' | 'vi' | 'zh-hans' | 'zh-hant', _options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        const result = this.api.apiSchemaRetrieveWithHttpInfo(format, lang, _options);
        return result.toPromise();
    }

    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     * @param format 
     * @param lang 
     */
    public apiSchemaRetrieve(format?: 'json' | 'yaml', lang?: 'af' | 'ar' | 'ar-dz' | 'ast' | 'az' | 'be' | 'bg' | 'bn' | 'br' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'dsb' | 'el' | 'en' | 'en-au' | 'en-gb' | 'eo' | 'es' | 'es-ar' | 'es-co' | 'es-mx' | 'es-ni' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fr' | 'fy' | 'ga' | 'gd' | 'gl' | 'he' | 'hi' | 'hr' | 'hsb' | 'hu' | 'hy' | 'ia' | 'id' | 'ig' | 'io' | 'is' | 'it' | 'ja' | 'ka' | 'kab' | 'kk' | 'km' | 'kn' | 'ko' | 'ky' | 'lb' | 'lt' | 'lv' | 'mk' | 'ml' | 'mn' | 'mr' | 'ms' | 'my' | 'nb' | 'ne' | 'nl' | 'nn' | 'os' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'ro' | 'ru' | 'sk' | 'sl' | 'sq' | 'sr' | 'sr-latn' | 'sv' | 'sw' | 'ta' | 'te' | 'tg' | 'th' | 'tk' | 'tr' | 'tt' | 'udm' | 'uk' | 'ur' | 'uz' | 'vi' | 'zh-hans' | 'zh-hant', _options?: Configuration): Promise<{ [key: string]: any; }> {
        const result = this.api.apiSchemaRetrieve(format, lang, _options);
        return result.toPromise();
    }

    /**
     * @param trackingNumber 
     */
    public apiTrackingTrackingEventsRetrieveWithHttpInfo(trackingNumber: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiTrackingTrackingEventsRetrieveWithHttpInfo(trackingNumber, _options);
        return result.toPromise();
    }

    /**
     * @param trackingNumber 
     */
    public apiTrackingTrackingEventsRetrieve(trackingNumber: string, _options?: Configuration): Promise<void> {
        const result = this.api.apiTrackingTrackingEventsRetrieve(trackingNumber, _options);
        return result.toPromise();
    }

    /**
     * @param limit Number of results to return per page.
     * @param maxCreatedAt Created before the given date.
     * @param minCreatedAt Created after the given date.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @param type * &#x60;base_charge&#x60; - Base Charge * &#x60;cancel_return&#x60; - Cancel Return * &#x60;price_adjustment&#x60; - Price Adjustment  * &#x60;base_charge&#x60; - Base Charge * &#x60;cancel_return&#x60; - Cancel Return * &#x60;price_adjustment&#x60; - Price Adjustment
     */
    public apiTransactionsListWithHttpInfo(limit?: number, maxCreatedAt?: Date, minCreatedAt?: Date, offset?: number, ordering?: string, search?: string, type?: 'base_charge' | 'cancel_return' | 'price_adjustment', _options?: Configuration): Promise<HttpInfo<PaginatedAccountTransactionList>> {
        const result = this.api.apiTransactionsListWithHttpInfo(limit, maxCreatedAt, minCreatedAt, offset, ordering, search, type, _options);
        return result.toPromise();
    }

    /**
     * @param limit Number of results to return per page.
     * @param maxCreatedAt Created before the given date.
     * @param minCreatedAt Created after the given date.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @param type * &#x60;base_charge&#x60; - Base Charge * &#x60;cancel_return&#x60; - Cancel Return * &#x60;price_adjustment&#x60; - Price Adjustment  * &#x60;base_charge&#x60; - Base Charge * &#x60;cancel_return&#x60; - Cancel Return * &#x60;price_adjustment&#x60; - Price Adjustment
     */
    public apiTransactionsList(limit?: number, maxCreatedAt?: Date, minCreatedAt?: Date, offset?: number, ordering?: string, search?: string, type?: 'base_charge' | 'cancel_return' | 'price_adjustment', _options?: Configuration): Promise<PaginatedAccountTransactionList> {
        const result = this.api.apiTransactionsList(limit, maxCreatedAt, minCreatedAt, offset, ordering, search, type, _options);
        return result.toPromise();
    }

    /**
     */
    public apiTransactionsTypesListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<AccountTransactionType>>> {
        const result = this.api.apiTransactionsTypesListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiTransactionsTypesList(_options?: Configuration): Promise<Array<AccountTransactionType>> {
        const result = this.api.apiTransactionsTypesList(_options);
        return result.toPromise();
    }

    /**
     * @param activation 
     */
    public apiUsersActivationCreateWithHttpInfo(activation: Activation, _options?: Configuration): Promise<HttpInfo<Activation>> {
        const result = this.api.apiUsersActivationCreateWithHttpInfo(activation, _options);
        return result.toPromise();
    }

    /**
     * @param activation 
     */
    public apiUsersActivationCreate(activation: Activation, _options?: Configuration): Promise<Activation> {
        const result = this.api.apiUsersActivationCreate(activation, _options);
        return result.toPromise();
    }

    /**
     * @param userCreate 
     */
    public apiUsersCreateWithHttpInfo(userCreate: UserCreate, _options?: Configuration): Promise<HttpInfo<UserCreate>> {
        const result = this.api.apiUsersCreateWithHttpInfo(userCreate, _options);
        return result.toPromise();
    }

    /**
     * @param userCreate 
     */
    public apiUsersCreate(userCreate: UserCreate, _options?: Configuration): Promise<UserCreate> {
        const result = this.api.apiUsersCreate(userCreate, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiUsersDestroyWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiUsersDestroyWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiUsersDestroy(id: number, _options?: Configuration): Promise<void> {
        const result = this.api.apiUsersDestroy(id, _options);
        return result.toPromise();
    }

    /**
     */
    public apiUsersListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<User>>> {
        const result = this.api.apiUsersListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiUsersList(_options?: Configuration): Promise<Array<User>> {
        const result = this.api.apiUsersList(_options);
        return result.toPromise();
    }

    /**
     */
    public apiUsersMeDestroyWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.apiUsersMeDestroyWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiUsersMeDestroy(_options?: Configuration): Promise<void> {
        const result = this.api.apiUsersMeDestroy(_options);
        return result.toPromise();
    }

    /**
     * @param patchedUser 
     */
    public apiUsersMePartialUpdateWithHttpInfo(patchedUser?: PatchedUser, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiUsersMePartialUpdateWithHttpInfo(patchedUser, _options);
        return result.toPromise();
    }

    /**
     * @param patchedUser 
     */
    public apiUsersMePartialUpdate(patchedUser?: PatchedUser, _options?: Configuration): Promise<User> {
        const result = this.api.apiUsersMePartialUpdate(patchedUser, _options);
        return result.toPromise();
    }

    /**
     */
    public apiUsersMeRetrieveWithHttpInfo(_options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiUsersMeRetrieveWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiUsersMeRetrieve(_options?: Configuration): Promise<User> {
        const result = this.api.apiUsersMeRetrieve(_options);
        return result.toPromise();
    }

    /**
     * @param user 
     */
    public apiUsersMeUpdateWithHttpInfo(user?: User, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiUsersMeUpdateWithHttpInfo(user, _options);
        return result.toPromise();
    }

    /**
     * @param user 
     */
    public apiUsersMeUpdate(user?: User, _options?: Configuration): Promise<User> {
        const result = this.api.apiUsersMeUpdate(user, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param patchedUser 
     */
    public apiUsersPartialUpdateWithHttpInfo(id: number, patchedUser?: PatchedUser, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiUsersPartialUpdateWithHttpInfo(id, patchedUser, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param patchedUser 
     */
    public apiUsersPartialUpdate(id: number, patchedUser?: PatchedUser, _options?: Configuration): Promise<User> {
        const result = this.api.apiUsersPartialUpdate(id, patchedUser, _options);
        return result.toPromise();
    }

    /**
     * @param sendEmailReset 
     */
    public apiUsersResendActivationCreateWithHttpInfo(sendEmailReset: SendEmailReset, _options?: Configuration): Promise<HttpInfo<SendEmailReset>> {
        const result = this.api.apiUsersResendActivationCreateWithHttpInfo(sendEmailReset, _options);
        return result.toPromise();
    }

    /**
     * @param sendEmailReset 
     */
    public apiUsersResendActivationCreate(sendEmailReset: SendEmailReset, _options?: Configuration): Promise<SendEmailReset> {
        const result = this.api.apiUsersResendActivationCreate(sendEmailReset, _options);
        return result.toPromise();
    }

    /**
     * @param usernameResetConfirm 
     */
    public apiUsersResetEmailConfirmCreateWithHttpInfo(usernameResetConfirm: UsernameResetConfirm, _options?: Configuration): Promise<HttpInfo<UsernameResetConfirm>> {
        const result = this.api.apiUsersResetEmailConfirmCreateWithHttpInfo(usernameResetConfirm, _options);
        return result.toPromise();
    }

    /**
     * @param usernameResetConfirm 
     */
    public apiUsersResetEmailConfirmCreate(usernameResetConfirm: UsernameResetConfirm, _options?: Configuration): Promise<UsernameResetConfirm> {
        const result = this.api.apiUsersResetEmailConfirmCreate(usernameResetConfirm, _options);
        return result.toPromise();
    }

    /**
     * @param sendEmailReset 
     */
    public apiUsersResetEmailCreateWithHttpInfo(sendEmailReset: SendEmailReset, _options?: Configuration): Promise<HttpInfo<SendEmailReset>> {
        const result = this.api.apiUsersResetEmailCreateWithHttpInfo(sendEmailReset, _options);
        return result.toPromise();
    }

    /**
     * @param sendEmailReset 
     */
    public apiUsersResetEmailCreate(sendEmailReset: SendEmailReset, _options?: Configuration): Promise<SendEmailReset> {
        const result = this.api.apiUsersResetEmailCreate(sendEmailReset, _options);
        return result.toPromise();
    }

    /**
     * @param passwordResetConfirm 
     */
    public apiUsersResetPasswordConfirmCreateWithHttpInfo(passwordResetConfirm: PasswordResetConfirm, _options?: Configuration): Promise<HttpInfo<PasswordResetConfirm>> {
        const result = this.api.apiUsersResetPasswordConfirmCreateWithHttpInfo(passwordResetConfirm, _options);
        return result.toPromise();
    }

    /**
     * @param passwordResetConfirm 
     */
    public apiUsersResetPasswordConfirmCreate(passwordResetConfirm: PasswordResetConfirm, _options?: Configuration): Promise<PasswordResetConfirm> {
        const result = this.api.apiUsersResetPasswordConfirmCreate(passwordResetConfirm, _options);
        return result.toPromise();
    }

    /**
     * @param sendEmailReset 
     */
    public apiUsersResetPasswordCreateWithHttpInfo(sendEmailReset: SendEmailReset, _options?: Configuration): Promise<HttpInfo<SendEmailReset>> {
        const result = this.api.apiUsersResetPasswordCreateWithHttpInfo(sendEmailReset, _options);
        return result.toPromise();
    }

    /**
     * @param sendEmailReset 
     */
    public apiUsersResetPasswordCreate(sendEmailReset: SendEmailReset, _options?: Configuration): Promise<SendEmailReset> {
        const result = this.api.apiUsersResetPasswordCreate(sendEmailReset, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiUsersRetrieveWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiUsersRetrieveWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiUsersRetrieve(id: number, _options?: Configuration): Promise<User> {
        const result = this.api.apiUsersRetrieve(id, _options);
        return result.toPromise();
    }

    /**
     * @param setUsername 
     */
    public apiUsersSetEmailCreateWithHttpInfo(setUsername: SetUsername, _options?: Configuration): Promise<HttpInfo<SetUsername>> {
        const result = this.api.apiUsersSetEmailCreateWithHttpInfo(setUsername, _options);
        return result.toPromise();
    }

    /**
     * @param setUsername 
     */
    public apiUsersSetEmailCreate(setUsername: SetUsername, _options?: Configuration): Promise<SetUsername> {
        const result = this.api.apiUsersSetEmailCreate(setUsername, _options);
        return result.toPromise();
    }

    /**
     * @param setPassword 
     */
    public apiUsersSetPasswordCreateWithHttpInfo(setPassword: SetPassword, _options?: Configuration): Promise<HttpInfo<SetPassword>> {
        const result = this.api.apiUsersSetPasswordCreateWithHttpInfo(setPassword, _options);
        return result.toPromise();
    }

    /**
     * @param setPassword 
     */
    public apiUsersSetPasswordCreate(setPassword: SetPassword, _options?: Configuration): Promise<SetPassword> {
        const result = this.api.apiUsersSetPasswordCreate(setPassword, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param user 
     */
    public apiUsersUpdateWithHttpInfo(id: number, user?: User, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.apiUsersUpdateWithHttpInfo(id, user, _options);
        return result.toPromise();
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param user 
     */
    public apiUsersUpdate(id: number, user?: User, _options?: Configuration): Promise<User> {
        const result = this.api.apiUsersUpdate(id, user, _options);
        return result.toPromise();
    }


}



import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this endpoint to obtain user authentication token.
     * @param tokenCreate 
     */
    public authTokenLoginCreateWithHttpInfo(tokenCreate?: TokenCreate, _options?: Configuration): Promise<HttpInfo<TokenCreate>> {
        const result = this.api.authTokenLoginCreateWithHttpInfo(tokenCreate, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to obtain user authentication token.
     * @param tokenCreate 
     */
    public authTokenLoginCreate(tokenCreate?: TokenCreate, _options?: Configuration): Promise<TokenCreate> {
        const result = this.api.authTokenLoginCreate(tokenCreate, _options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to logout user (remove user authentication token).
     */
    public authTokenLogoutCreateWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authTokenLogoutCreateWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Use this endpoint to logout user (remove user authentication token).
     */
    public authTokenLogoutCreate(_options?: Configuration): Promise<void> {
        const result = this.api.authTokenLogoutCreate(_options);
        return result.toPromise();
    }


}



