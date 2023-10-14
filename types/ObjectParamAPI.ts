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

import { ObservableApiApi } from "./ObservableAPI";
import { ApiApiRequestFactory, ApiApiResponseProcessor} from "../apis/ApiApi";

export interface ApiApiApiAccountsMeRetrieveRequest {
}

export interface ApiApiApiCatalogSearchRetrieveRequest {
    /**
     * The name or ID of the city to search in.
     * @type string
     * @memberof ApiApiapiCatalogSearchRetrieve
     */
    city?: string
    /**
     * The text to search for.
     * @type string
     * @memberof ApiApiapiCatalogSearchRetrieve
     */
    text?: string
}

export interface ApiApiApiCitiesListRequest {
    /**
     * Intracity delivery enabled.
     * @type boolean
     * @memberof ApiApiapiCitiesList
     */
    intracityDeliveryEnabled?: boolean
    /**
     * A search term.
     * @type string
     * @memberof ApiApiapiCitiesList
     */
    search?: string
}

export interface ApiApiApiContactRequestCreateRequest {
    /**
     * 
     * @type CreateContactRequest
     * @memberof ApiApiapiContactRequestCreate
     */
    createContactRequest: CreateContactRequest
}

export interface ApiApiApiGeocoderRetrieveRequest {
}

export interface ApiApiApiInvoicesCreateRequest {
    /**
     * 
     * @type CreateInvoice
     * @memberof ApiApiapiInvoicesCreate
     */
    createInvoice: CreateInvoice
}

export interface ApiApiApiOrdersCancelCreateRequest {
    /**
     * A unique integer value identifying this order.
     * @type number
     * @memberof ApiApiapiOrdersCancelCreate
     */
    id: number
    /**
     * 
     * @type CancelOrderRequest
     * @memberof ApiApiapiOrdersCancelCreate
     */
    cancelOrderRequest?: CancelOrderRequest
}

export interface ApiApiApiOrdersCreateRequest {
    /**
     * 
     * @type CreateOrderRequest
     * @memberof ApiApiapiOrdersCreate
     */
    createOrderRequest: CreateOrderRequest
}

export interface ApiApiApiOrdersDocumentsSummaryRetrieveRequest {
    /**
     * 
     * @type number
     * @memberof ApiApiapiOrdersDocumentsSummaryRetrieve
     */
    orderId: number
}

export interface ApiApiApiOrdersDocumentsWaybillRetrieveRequest {
    /**
     * 
     * @type number
     * @memberof ApiApiapiOrdersDocumentsWaybillRetrieve
     */
    orderId: number
}

export interface ApiApiApiOrdersListRequest {
    /**
     * Number of results to return per page.
     * @type number
     * @memberof ApiApiapiOrdersList
     */
    limit?: number
    /**
     * Created after the given date.
     * @type Date
     * @memberof ApiApiapiOrdersList
     */
    minCreatedAt?: Date
    /**
     * The initial index from which to return the results.
     * @type number
     * @memberof ApiApiapiOrdersList
     */
    offset?: number
    /**
     * Which field to use when ordering the results.
     * @type string
     * @memberof ApiApiapiOrdersList
     */
    ordering?: string
    /**
     * A search term.
     * @type string
     * @memberof ApiApiapiOrdersList
     */
    search?: string
}

export interface ApiApiApiOrdersRetrieveRequest {
    /**
     * A unique integer value identifying this order.
     * @type number
     * @memberof ApiApiapiOrdersRetrieve
     */
    id: number
}

export interface ApiApiApiOrdersTrackingEventsListRequest {
    /**
     * 
     * @type string
     * @memberof ApiApiapiOrdersTrackingEventsList
     */
    orderId: string
}

export interface ApiApiApiOtpCreateRequest {
    /**
     * 
     * @type OTP
     * @memberof ApiApiapiOtpCreate
     */
    OTP: OTP
}

export interface ApiApiApiPointsCreateRequest {
    /**
     * 
     * @type Point
     * @memberof ApiApiapiPointsCreate
     */
    point: Point
}

export interface ApiApiApiPointsDestroyRequest {
    /**
     * A unique integer value identifying this point.
     * @type number
     * @memberof ApiApiapiPointsDestroy
     */
    id: number
}

export interface ApiApiApiPointsListRequest {
    /**
     * 
     * @type string
     * @memberof ApiApiapiPointsList
     */
    city?: string
    /**
     * Number of results to return per page.
     * @type number
     * @memberof ApiApiapiPointsList
     */
    limit?: number
    /**
     * The initial index from which to return the results.
     * @type number
     * @memberof ApiApiapiPointsList
     */
    offset?: number
    /**
     * Which field to use when ordering the results.
     * @type string
     * @memberof ApiApiapiPointsList
     */
    ordering?: string
    /**
     * A search term.
     * @type string
     * @memberof ApiApiapiPointsList
     */
    search?: string
    /**
     * * &#x60;source&#x60; - Source * &#x60;destination&#x60; - Destination  * &#x60;source&#x60; - Source * &#x60;destination&#x60; - Destination
     * @type &#39;destination&#39; | &#39;source&#39;
     * @memberof ApiApiapiPointsList
     */
    type?: 'destination' | 'source'
}

export interface ApiApiApiPointsPartialUpdateRequest {
    /**
     * A unique integer value identifying this point.
     * @type number
     * @memberof ApiApiapiPointsPartialUpdate
     */
    id: number
    /**
     * 
     * @type PatchedPoint
     * @memberof ApiApiapiPointsPartialUpdate
     */
    patchedPoint?: PatchedPoint
}

export interface ApiApiApiPointsRetrieveRequest {
    /**
     * A unique integer value identifying this point.
     * @type number
     * @memberof ApiApiapiPointsRetrieve
     */
    id: number
}

export interface ApiApiApiPointsUpdateRequest {
    /**
     * A unique integer value identifying this point.
     * @type number
     * @memberof ApiApiapiPointsUpdate
     */
    id: number
    /**
     * 
     * @type Point
     * @memberof ApiApiapiPointsUpdate
     */
    point: Point
}

export interface ApiApiApiPostpaymentApplicationsCreateRequest {
    /**
     * 
     * @type PostPaymentApplication
     * @memberof ApiApiapiPostpaymentApplicationsCreate
     */
    postPaymentApplication: PostPaymentApplication
}

export interface ApiApiApiPreviewOrdersCreateRequest {
    /**
     * 
     * @type PreviewOrderRequest
     * @memberof ApiApiapiPreviewOrdersCreate
     */
    previewOrderRequest: PreviewOrderRequest
}

export interface ApiApiApiPreviewOrdersRetrieveRequest {
    /**
     * A unique integer value identifying this order.
     * @type number
     * @memberof ApiApiapiPreviewOrdersRetrieve
     */
    id: number
}

export interface ApiApiApiProvidersCreateRequest {
    /**
     * 
     * @type Provider
     * @memberof ApiApiapiProvidersCreate
     */
    provider: Provider
}

export interface ApiApiApiProvidersListRequest {
}

export interface ApiApiApiProvidersPartialUpdateRequest {
    /**
     * A unique integer value identifying this provider.
     * @type number
     * @memberof ApiApiapiProvidersPartialUpdate
     */
    id: number
    /**
     * 
     * @type PatchedProvider
     * @memberof ApiApiapiProvidersPartialUpdate
     */
    patchedProvider?: PatchedProvider
}

export interface ApiApiApiProvidersRetrieveRequest {
    /**
     * A unique integer value identifying this provider.
     * @type number
     * @memberof ApiApiapiProvidersRetrieve
     */
    id: number
}

export interface ApiApiApiProvidersUpdateRequest {
    /**
     * A unique integer value identifying this provider.
     * @type number
     * @memberof ApiApiapiProvidersUpdate
     */
    id: number
    /**
     * 
     * @type Provider
     * @memberof ApiApiapiProvidersUpdate
     */
    provider: Provider
}

export interface ApiApiApiRatesCreateRequest {
    /**
     * 
     * @type DeliveryRateRequest
     * @memberof ApiApiapiRatesCreate
     */
    deliveryRateRequest: DeliveryRateRequest
}

export interface ApiApiApiRegionsListRequest {
}

export interface ApiApiApiSchemaRetrieveRequest {
    /**
     * 
     * @type &#39;json&#39; | &#39;yaml&#39;
     * @memberof ApiApiapiSchemaRetrieve
     */
    format?: 'json' | 'yaml'
    /**
     * 
     * @type &#39;af&#39; | &#39;ar&#39; | &#39;ar-dz&#39; | &#39;ast&#39; | &#39;az&#39; | &#39;be&#39; | &#39;bg&#39; | &#39;bn&#39; | &#39;br&#39; | &#39;bs&#39; | &#39;ca&#39; | &#39;cs&#39; | &#39;cy&#39; | &#39;da&#39; | &#39;de&#39; | &#39;dsb&#39; | &#39;el&#39; | &#39;en&#39; | &#39;en-au&#39; | &#39;en-gb&#39; | &#39;eo&#39; | &#39;es&#39; | &#39;es-ar&#39; | &#39;es-co&#39; | &#39;es-mx&#39; | &#39;es-ni&#39; | &#39;es-ve&#39; | &#39;et&#39; | &#39;eu&#39; | &#39;fa&#39; | &#39;fi&#39; | &#39;fr&#39; | &#39;fy&#39; | &#39;ga&#39; | &#39;gd&#39; | &#39;gl&#39; | &#39;he&#39; | &#39;hi&#39; | &#39;hr&#39; | &#39;hsb&#39; | &#39;hu&#39; | &#39;hy&#39; | &#39;ia&#39; | &#39;id&#39; | &#39;ig&#39; | &#39;io&#39; | &#39;is&#39; | &#39;it&#39; | &#39;ja&#39; | &#39;ka&#39; | &#39;kab&#39; | &#39;kk&#39; | &#39;km&#39; | &#39;kn&#39; | &#39;ko&#39; | &#39;ky&#39; | &#39;lb&#39; | &#39;lt&#39; | &#39;lv&#39; | &#39;mk&#39; | &#39;ml&#39; | &#39;mn&#39; | &#39;mr&#39; | &#39;ms&#39; | &#39;my&#39; | &#39;nb&#39; | &#39;ne&#39; | &#39;nl&#39; | &#39;nn&#39; | &#39;os&#39; | &#39;pa&#39; | &#39;pl&#39; | &#39;pt&#39; | &#39;pt-br&#39; | &#39;ro&#39; | &#39;ru&#39; | &#39;sk&#39; | &#39;sl&#39; | &#39;sq&#39; | &#39;sr&#39; | &#39;sr-latn&#39; | &#39;sv&#39; | &#39;sw&#39; | &#39;ta&#39; | &#39;te&#39; | &#39;tg&#39; | &#39;th&#39; | &#39;tk&#39; | &#39;tr&#39; | &#39;tt&#39; | &#39;udm&#39; | &#39;uk&#39; | &#39;ur&#39; | &#39;uz&#39; | &#39;vi&#39; | &#39;zh-hans&#39; | &#39;zh-hant&#39;
     * @memberof ApiApiapiSchemaRetrieve
     */
    lang?: 'af' | 'ar' | 'ar-dz' | 'ast' | 'az' | 'be' | 'bg' | 'bn' | 'br' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'dsb' | 'el' | 'en' | 'en-au' | 'en-gb' | 'eo' | 'es' | 'es-ar' | 'es-co' | 'es-mx' | 'es-ni' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fr' | 'fy' | 'ga' | 'gd' | 'gl' | 'he' | 'hi' | 'hr' | 'hsb' | 'hu' | 'hy' | 'ia' | 'id' | 'ig' | 'io' | 'is' | 'it' | 'ja' | 'ka' | 'kab' | 'kk' | 'km' | 'kn' | 'ko' | 'ky' | 'lb' | 'lt' | 'lv' | 'mk' | 'ml' | 'mn' | 'mr' | 'ms' | 'my' | 'nb' | 'ne' | 'nl' | 'nn' | 'os' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'ro' | 'ru' | 'sk' | 'sl' | 'sq' | 'sr' | 'sr-latn' | 'sv' | 'sw' | 'ta' | 'te' | 'tg' | 'th' | 'tk' | 'tr' | 'tt' | 'udm' | 'uk' | 'ur' | 'uz' | 'vi' | 'zh-hans' | 'zh-hant'
}

export interface ApiApiApiTrackingTrackingEventsRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof ApiApiapiTrackingTrackingEventsRetrieve
     */
    trackingNumber: string
}

export interface ApiApiApiTransactionsListRequest {
    /**
     * Number of results to return per page.
     * @type number
     * @memberof ApiApiapiTransactionsList
     */
    limit?: number
    /**
     * Created before the given date.
     * @type Date
     * @memberof ApiApiapiTransactionsList
     */
    maxCreatedAt?: Date
    /**
     * Created after the given date.
     * @type Date
     * @memberof ApiApiapiTransactionsList
     */
    minCreatedAt?: Date
    /**
     * The initial index from which to return the results.
     * @type number
     * @memberof ApiApiapiTransactionsList
     */
    offset?: number
    /**
     * Which field to use when ordering the results.
     * @type string
     * @memberof ApiApiapiTransactionsList
     */
    ordering?: string
    /**
     * A search term.
     * @type string
     * @memberof ApiApiapiTransactionsList
     */
    search?: string
    /**
     * * &#x60;base_charge&#x60; - Base Charge * &#x60;cancel_return&#x60; - Cancel Return * &#x60;price_adjustment&#x60; - Price Adjustment  * &#x60;base_charge&#x60; - Base Charge * &#x60;cancel_return&#x60; - Cancel Return * &#x60;price_adjustment&#x60; - Price Adjustment
     * @type &#39;base_charge&#39; | &#39;cancel_return&#39; | &#39;price_adjustment&#39;
     * @memberof ApiApiapiTransactionsList
     */
    type?: 'base_charge' | 'cancel_return' | 'price_adjustment'
}

export interface ApiApiApiTransactionsTypesListRequest {
}

export interface ApiApiApiUsersActivationCreateRequest {
    /**
     * 
     * @type Activation
     * @memberof ApiApiapiUsersActivationCreate
     */
    activation: Activation
}

export interface ApiApiApiUsersCreateRequest {
    /**
     * 
     * @type UserCreate
     * @memberof ApiApiapiUsersCreate
     */
    userCreate: UserCreate
}

export interface ApiApiApiUsersDestroyRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof ApiApiapiUsersDestroy
     */
    id: number
}

export interface ApiApiApiUsersListRequest {
}

export interface ApiApiApiUsersMeDestroyRequest {
}

export interface ApiApiApiUsersMePartialUpdateRequest {
    /**
     * 
     * @type PatchedUser
     * @memberof ApiApiapiUsersMePartialUpdate
     */
    patchedUser?: PatchedUser
}

export interface ApiApiApiUsersMeRetrieveRequest {
}

export interface ApiApiApiUsersMeUpdateRequest {
    /**
     * 
     * @type User
     * @memberof ApiApiapiUsersMeUpdate
     */
    user?: User
}

export interface ApiApiApiUsersPartialUpdateRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof ApiApiapiUsersPartialUpdate
     */
    id: number
    /**
     * 
     * @type PatchedUser
     * @memberof ApiApiapiUsersPartialUpdate
     */
    patchedUser?: PatchedUser
}

export interface ApiApiApiUsersResendActivationCreateRequest {
    /**
     * 
     * @type SendEmailReset
     * @memberof ApiApiapiUsersResendActivationCreate
     */
    sendEmailReset: SendEmailReset
}

export interface ApiApiApiUsersResetEmailConfirmCreateRequest {
    /**
     * 
     * @type UsernameResetConfirm
     * @memberof ApiApiapiUsersResetEmailConfirmCreate
     */
    usernameResetConfirm: UsernameResetConfirm
}

export interface ApiApiApiUsersResetEmailCreateRequest {
    /**
     * 
     * @type SendEmailReset
     * @memberof ApiApiapiUsersResetEmailCreate
     */
    sendEmailReset: SendEmailReset
}

export interface ApiApiApiUsersResetPasswordConfirmCreateRequest {
    /**
     * 
     * @type PasswordResetConfirm
     * @memberof ApiApiapiUsersResetPasswordConfirmCreate
     */
    passwordResetConfirm: PasswordResetConfirm
}

export interface ApiApiApiUsersResetPasswordCreateRequest {
    /**
     * 
     * @type SendEmailReset
     * @memberof ApiApiapiUsersResetPasswordCreate
     */
    sendEmailReset: SendEmailReset
}

export interface ApiApiApiUsersRetrieveRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof ApiApiapiUsersRetrieve
     */
    id: number
}

export interface ApiApiApiUsersSetEmailCreateRequest {
    /**
     * 
     * @type SetUsername
     * @memberof ApiApiapiUsersSetEmailCreate
     */
    setUsername: SetUsername
}

export interface ApiApiApiUsersSetPasswordCreateRequest {
    /**
     * 
     * @type SetPassword
     * @memberof ApiApiapiUsersSetPasswordCreate
     */
    setPassword: SetPassword
}

export interface ApiApiApiUsersUpdateRequest {
    /**
     * A unique integer value identifying this user.
     * @type number
     * @memberof ApiApiapiUsersUpdate
     */
    id: number
    /**
     * 
     * @type User
     * @memberof ApiApiapiUsersUpdate
     */
    user?: User
}

export class ObjectApiApi {
    private api: ObservableApiApi

    public constructor(configuration: Configuration, requestFactory?: ApiApiRequestFactory, responseProcessor?: ApiApiResponseProcessor) {
        this.api = new ObservableApiApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiAccountsMeRetrieveWithHttpInfo(param: ApiApiApiAccountsMeRetrieveRequest = {}, options?: Configuration): Promise<HttpInfo<Account>> {
        return this.api.apiAccountsMeRetrieveWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiAccountsMeRetrieve(param: ApiApiApiAccountsMeRetrieveRequest = {}, options?: Configuration): Promise<Account> {
        return this.api.apiAccountsMeRetrieve( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiCatalogSearchRetrieveWithHttpInfo(param: ApiApiApiCatalogSearchRetrieveRequest = {}, options?: Configuration): Promise<HttpInfo<AddressSearchResult>> {
        return this.api.apiCatalogSearchRetrieveWithHttpInfo(param.city, param.text,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiCatalogSearchRetrieve(param: ApiApiApiCatalogSearchRetrieveRequest = {}, options?: Configuration): Promise<AddressSearchResult> {
        return this.api.apiCatalogSearchRetrieve(param.city, param.text,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiCitiesListWithHttpInfo(param: ApiApiApiCitiesListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<City>>> {
        return this.api.apiCitiesListWithHttpInfo(param.intracityDeliveryEnabled, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiCitiesList(param: ApiApiApiCitiesListRequest = {}, options?: Configuration): Promise<Array<City>> {
        return this.api.apiCitiesList(param.intracityDeliveryEnabled, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiContactRequestCreateWithHttpInfo(param: ApiApiApiContactRequestCreateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiContactRequestCreateWithHttpInfo(param.createContactRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiContactRequestCreate(param: ApiApiApiContactRequestCreateRequest, options?: Configuration): Promise<void> {
        return this.api.apiContactRequestCreate(param.createContactRequest,  options).toPromise();
    }

    /**
     * Wrapper around https://yandex.ru/dev/geocode/doc/ru/. No need to specify api_key
     * @param param the request object
     */
    public apiGeocoderRetrieveWithHttpInfo(param: ApiApiApiGeocoderRetrieveRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiGeocoderRetrieveWithHttpInfo( options).toPromise();
    }

    /**
     * Wrapper around https://yandex.ru/dev/geocode/doc/ru/. No need to specify api_key
     * @param param the request object
     */
    public apiGeocoderRetrieve(param: ApiApiApiGeocoderRetrieveRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiGeocoderRetrieve( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiInvoicesCreateWithHttpInfo(param: ApiApiApiInvoicesCreateRequest, options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        return this.api.apiInvoicesCreateWithHttpInfo(param.createInvoice,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiInvoicesCreate(param: ApiApiApiInvoicesCreateRequest, options?: Configuration): Promise<{ [key: string]: any; }> {
        return this.api.apiInvoicesCreate(param.createInvoice,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrdersCancelCreateWithHttpInfo(param: ApiApiApiOrdersCancelCreateRequest, options?: Configuration): Promise<HttpInfo<Order>> {
        return this.api.apiOrdersCancelCreateWithHttpInfo(param.id, param.cancelOrderRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrdersCancelCreate(param: ApiApiApiOrdersCancelCreateRequest, options?: Configuration): Promise<Order> {
        return this.api.apiOrdersCancelCreate(param.id, param.cancelOrderRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrdersCreateWithHttpInfo(param: ApiApiApiOrdersCreateRequest, options?: Configuration): Promise<HttpInfo<Order>> {
        return this.api.apiOrdersCreateWithHttpInfo(param.createOrderRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrdersCreate(param: ApiApiApiOrdersCreateRequest, options?: Configuration): Promise<Order> {
        return this.api.apiOrdersCreate(param.createOrderRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrdersDocumentsSummaryRetrieveWithHttpInfo(param: ApiApiApiOrdersDocumentsSummaryRetrieveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiOrdersDocumentsSummaryRetrieveWithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrdersDocumentsSummaryRetrieve(param: ApiApiApiOrdersDocumentsSummaryRetrieveRequest, options?: Configuration): Promise<void> {
        return this.api.apiOrdersDocumentsSummaryRetrieve(param.orderId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrdersDocumentsWaybillRetrieveWithHttpInfo(param: ApiApiApiOrdersDocumentsWaybillRetrieveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiOrdersDocumentsWaybillRetrieveWithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrdersDocumentsWaybillRetrieve(param: ApiApiApiOrdersDocumentsWaybillRetrieveRequest, options?: Configuration): Promise<void> {
        return this.api.apiOrdersDocumentsWaybillRetrieve(param.orderId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrdersListWithHttpInfo(param: ApiApiApiOrdersListRequest = {}, options?: Configuration): Promise<HttpInfo<PaginatedOrderList>> {
        return this.api.apiOrdersListWithHttpInfo(param.limit, param.minCreatedAt, param.offset, param.ordering, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrdersList(param: ApiApiApiOrdersListRequest = {}, options?: Configuration): Promise<PaginatedOrderList> {
        return this.api.apiOrdersList(param.limit, param.minCreatedAt, param.offset, param.ordering, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrdersRetrieveWithHttpInfo(param: ApiApiApiOrdersRetrieveRequest, options?: Configuration): Promise<HttpInfo<Order>> {
        return this.api.apiOrdersRetrieveWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrdersRetrieve(param: ApiApiApiOrdersRetrieveRequest, options?: Configuration): Promise<Order> {
        return this.api.apiOrdersRetrieve(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrdersTrackingEventsListWithHttpInfo(param: ApiApiApiOrdersTrackingEventsListRequest, options?: Configuration): Promise<HttpInfo<Array<TrackingEvents>>> {
        return this.api.apiOrdersTrackingEventsListWithHttpInfo(param.orderId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOrdersTrackingEventsList(param: ApiApiApiOrdersTrackingEventsListRequest, options?: Configuration): Promise<Array<TrackingEvents>> {
        return this.api.apiOrdersTrackingEventsList(param.orderId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOtpCreateWithHttpInfo(param: ApiApiApiOtpCreateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiOtpCreateWithHttpInfo(param.OTP,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiOtpCreate(param: ApiApiApiOtpCreateRequest, options?: Configuration): Promise<void> {
        return this.api.apiOtpCreate(param.OTP,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPointsCreateWithHttpInfo(param: ApiApiApiPointsCreateRequest, options?: Configuration): Promise<HttpInfo<Point>> {
        return this.api.apiPointsCreateWithHttpInfo(param.point,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPointsCreate(param: ApiApiApiPointsCreateRequest, options?: Configuration): Promise<Point> {
        return this.api.apiPointsCreate(param.point,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPointsDestroyWithHttpInfo(param: ApiApiApiPointsDestroyRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiPointsDestroyWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPointsDestroy(param: ApiApiApiPointsDestroyRequest, options?: Configuration): Promise<void> {
        return this.api.apiPointsDestroy(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPointsListWithHttpInfo(param: ApiApiApiPointsListRequest = {}, options?: Configuration): Promise<HttpInfo<PaginatedPointList>> {
        return this.api.apiPointsListWithHttpInfo(param.city, param.limit, param.offset, param.ordering, param.search, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPointsList(param: ApiApiApiPointsListRequest = {}, options?: Configuration): Promise<PaginatedPointList> {
        return this.api.apiPointsList(param.city, param.limit, param.offset, param.ordering, param.search, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPointsPartialUpdateWithHttpInfo(param: ApiApiApiPointsPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Point>> {
        return this.api.apiPointsPartialUpdateWithHttpInfo(param.id, param.patchedPoint,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPointsPartialUpdate(param: ApiApiApiPointsPartialUpdateRequest, options?: Configuration): Promise<Point> {
        return this.api.apiPointsPartialUpdate(param.id, param.patchedPoint,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPointsRetrieveWithHttpInfo(param: ApiApiApiPointsRetrieveRequest, options?: Configuration): Promise<HttpInfo<Point>> {
        return this.api.apiPointsRetrieveWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPointsRetrieve(param: ApiApiApiPointsRetrieveRequest, options?: Configuration): Promise<Point> {
        return this.api.apiPointsRetrieve(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPointsUpdateWithHttpInfo(param: ApiApiApiPointsUpdateRequest, options?: Configuration): Promise<HttpInfo<Point>> {
        return this.api.apiPointsUpdateWithHttpInfo(param.id, param.point,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPointsUpdate(param: ApiApiApiPointsUpdateRequest, options?: Configuration): Promise<Point> {
        return this.api.apiPointsUpdate(param.id, param.point,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPostpaymentApplicationsCreateWithHttpInfo(param: ApiApiApiPostpaymentApplicationsCreateRequest, options?: Configuration): Promise<HttpInfo<PostPaymentApplication>> {
        return this.api.apiPostpaymentApplicationsCreateWithHttpInfo(param.postPaymentApplication,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPostpaymentApplicationsCreate(param: ApiApiApiPostpaymentApplicationsCreateRequest, options?: Configuration): Promise<PostPaymentApplication> {
        return this.api.apiPostpaymentApplicationsCreate(param.postPaymentApplication,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPreviewOrdersCreateWithHttpInfo(param: ApiApiApiPreviewOrdersCreateRequest, options?: Configuration): Promise<HttpInfo<Array<Order>>> {
        return this.api.apiPreviewOrdersCreateWithHttpInfo(param.previewOrderRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPreviewOrdersCreate(param: ApiApiApiPreviewOrdersCreateRequest, options?: Configuration): Promise<Array<Order>> {
        return this.api.apiPreviewOrdersCreate(param.previewOrderRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPreviewOrdersRetrieveWithHttpInfo(param: ApiApiApiPreviewOrdersRetrieveRequest, options?: Configuration): Promise<HttpInfo<Order>> {
        return this.api.apiPreviewOrdersRetrieveWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiPreviewOrdersRetrieve(param: ApiApiApiPreviewOrdersRetrieveRequest, options?: Configuration): Promise<Order> {
        return this.api.apiPreviewOrdersRetrieve(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProvidersCreateWithHttpInfo(param: ApiApiApiProvidersCreateRequest, options?: Configuration): Promise<HttpInfo<Provider>> {
        return this.api.apiProvidersCreateWithHttpInfo(param.provider,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProvidersCreate(param: ApiApiApiProvidersCreateRequest, options?: Configuration): Promise<Provider> {
        return this.api.apiProvidersCreate(param.provider,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProvidersListWithHttpInfo(param: ApiApiApiProvidersListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Provider>>> {
        return this.api.apiProvidersListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProvidersList(param: ApiApiApiProvidersListRequest = {}, options?: Configuration): Promise<Array<Provider>> {
        return this.api.apiProvidersList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProvidersPartialUpdateWithHttpInfo(param: ApiApiApiProvidersPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<Provider>> {
        return this.api.apiProvidersPartialUpdateWithHttpInfo(param.id, param.patchedProvider,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProvidersPartialUpdate(param: ApiApiApiProvidersPartialUpdateRequest, options?: Configuration): Promise<Provider> {
        return this.api.apiProvidersPartialUpdate(param.id, param.patchedProvider,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProvidersRetrieveWithHttpInfo(param: ApiApiApiProvidersRetrieveRequest, options?: Configuration): Promise<HttpInfo<Provider>> {
        return this.api.apiProvidersRetrieveWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProvidersRetrieve(param: ApiApiApiProvidersRetrieveRequest, options?: Configuration): Promise<Provider> {
        return this.api.apiProvidersRetrieve(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProvidersUpdateWithHttpInfo(param: ApiApiApiProvidersUpdateRequest, options?: Configuration): Promise<HttpInfo<Provider>> {
        return this.api.apiProvidersUpdateWithHttpInfo(param.id, param.provider,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiProvidersUpdate(param: ApiApiApiProvidersUpdateRequest, options?: Configuration): Promise<Provider> {
        return this.api.apiProvidersUpdate(param.id, param.provider,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRatesCreateWithHttpInfo(param: ApiApiApiRatesCreateRequest, options?: Configuration): Promise<HttpInfo<Array<DeliveryRate>>> {
        return this.api.apiRatesCreateWithHttpInfo(param.deliveryRateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRatesCreate(param: ApiApiApiRatesCreateRequest, options?: Configuration): Promise<Array<DeliveryRate>> {
        return this.api.apiRatesCreate(param.deliveryRateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRegionsListWithHttpInfo(param: ApiApiApiRegionsListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Region>>> {
        return this.api.apiRegionsListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiRegionsList(param: ApiApiApiRegionsListRequest = {}, options?: Configuration): Promise<Array<Region>> {
        return this.api.apiRegionsList( options).toPromise();
    }

    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     * @param param the request object
     */
    public apiSchemaRetrieveWithHttpInfo(param: ApiApiApiSchemaRetrieveRequest = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: any; }>> {
        return this.api.apiSchemaRetrieveWithHttpInfo(param.format, param.lang,  options).toPromise();
    }

    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     * @param param the request object
     */
    public apiSchemaRetrieve(param: ApiApiApiSchemaRetrieveRequest = {}, options?: Configuration): Promise<{ [key: string]: any; }> {
        return this.api.apiSchemaRetrieve(param.format, param.lang,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTrackingTrackingEventsRetrieveWithHttpInfo(param: ApiApiApiTrackingTrackingEventsRetrieveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiTrackingTrackingEventsRetrieveWithHttpInfo(param.trackingNumber,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTrackingTrackingEventsRetrieve(param: ApiApiApiTrackingTrackingEventsRetrieveRequest, options?: Configuration): Promise<void> {
        return this.api.apiTrackingTrackingEventsRetrieve(param.trackingNumber,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTransactionsListWithHttpInfo(param: ApiApiApiTransactionsListRequest = {}, options?: Configuration): Promise<HttpInfo<PaginatedAccountTransactionList>> {
        return this.api.apiTransactionsListWithHttpInfo(param.limit, param.maxCreatedAt, param.minCreatedAt, param.offset, param.ordering, param.search, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTransactionsList(param: ApiApiApiTransactionsListRequest = {}, options?: Configuration): Promise<PaginatedAccountTransactionList> {
        return this.api.apiTransactionsList(param.limit, param.maxCreatedAt, param.minCreatedAt, param.offset, param.ordering, param.search, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTransactionsTypesListWithHttpInfo(param: ApiApiApiTransactionsTypesListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<AccountTransactionType>>> {
        return this.api.apiTransactionsTypesListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiTransactionsTypesList(param: ApiApiApiTransactionsTypesListRequest = {}, options?: Configuration): Promise<Array<AccountTransactionType>> {
        return this.api.apiTransactionsTypesList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersActivationCreateWithHttpInfo(param: ApiApiApiUsersActivationCreateRequest, options?: Configuration): Promise<HttpInfo<Activation>> {
        return this.api.apiUsersActivationCreateWithHttpInfo(param.activation,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersActivationCreate(param: ApiApiApiUsersActivationCreateRequest, options?: Configuration): Promise<Activation> {
        return this.api.apiUsersActivationCreate(param.activation,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersCreateWithHttpInfo(param: ApiApiApiUsersCreateRequest, options?: Configuration): Promise<HttpInfo<UserCreate>> {
        return this.api.apiUsersCreateWithHttpInfo(param.userCreate,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersCreate(param: ApiApiApiUsersCreateRequest, options?: Configuration): Promise<UserCreate> {
        return this.api.apiUsersCreate(param.userCreate,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersDestroyWithHttpInfo(param: ApiApiApiUsersDestroyRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiUsersDestroyWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersDestroy(param: ApiApiApiUsersDestroyRequest, options?: Configuration): Promise<void> {
        return this.api.apiUsersDestroy(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersListWithHttpInfo(param: ApiApiApiUsersListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<User>>> {
        return this.api.apiUsersListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersList(param: ApiApiApiUsersListRequest = {}, options?: Configuration): Promise<Array<User>> {
        return this.api.apiUsersList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersMeDestroyWithHttpInfo(param: ApiApiApiUsersMeDestroyRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.apiUsersMeDestroyWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersMeDestroy(param: ApiApiApiUsersMeDestroyRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiUsersMeDestroy( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersMePartialUpdateWithHttpInfo(param: ApiApiApiUsersMePartialUpdateRequest = {}, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiUsersMePartialUpdateWithHttpInfo(param.patchedUser,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersMePartialUpdate(param: ApiApiApiUsersMePartialUpdateRequest = {}, options?: Configuration): Promise<User> {
        return this.api.apiUsersMePartialUpdate(param.patchedUser,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersMeRetrieveWithHttpInfo(param: ApiApiApiUsersMeRetrieveRequest = {}, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiUsersMeRetrieveWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersMeRetrieve(param: ApiApiApiUsersMeRetrieveRequest = {}, options?: Configuration): Promise<User> {
        return this.api.apiUsersMeRetrieve( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersMeUpdateWithHttpInfo(param: ApiApiApiUsersMeUpdateRequest = {}, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiUsersMeUpdateWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersMeUpdate(param: ApiApiApiUsersMeUpdateRequest = {}, options?: Configuration): Promise<User> {
        return this.api.apiUsersMeUpdate(param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersPartialUpdateWithHttpInfo(param: ApiApiApiUsersPartialUpdateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiUsersPartialUpdateWithHttpInfo(param.id, param.patchedUser,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersPartialUpdate(param: ApiApiApiUsersPartialUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.apiUsersPartialUpdate(param.id, param.patchedUser,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersResendActivationCreateWithHttpInfo(param: ApiApiApiUsersResendActivationCreateRequest, options?: Configuration): Promise<HttpInfo<SendEmailReset>> {
        return this.api.apiUsersResendActivationCreateWithHttpInfo(param.sendEmailReset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersResendActivationCreate(param: ApiApiApiUsersResendActivationCreateRequest, options?: Configuration): Promise<SendEmailReset> {
        return this.api.apiUsersResendActivationCreate(param.sendEmailReset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersResetEmailConfirmCreateWithHttpInfo(param: ApiApiApiUsersResetEmailConfirmCreateRequest, options?: Configuration): Promise<HttpInfo<UsernameResetConfirm>> {
        return this.api.apiUsersResetEmailConfirmCreateWithHttpInfo(param.usernameResetConfirm,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersResetEmailConfirmCreate(param: ApiApiApiUsersResetEmailConfirmCreateRequest, options?: Configuration): Promise<UsernameResetConfirm> {
        return this.api.apiUsersResetEmailConfirmCreate(param.usernameResetConfirm,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersResetEmailCreateWithHttpInfo(param: ApiApiApiUsersResetEmailCreateRequest, options?: Configuration): Promise<HttpInfo<SendEmailReset>> {
        return this.api.apiUsersResetEmailCreateWithHttpInfo(param.sendEmailReset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersResetEmailCreate(param: ApiApiApiUsersResetEmailCreateRequest, options?: Configuration): Promise<SendEmailReset> {
        return this.api.apiUsersResetEmailCreate(param.sendEmailReset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersResetPasswordConfirmCreateWithHttpInfo(param: ApiApiApiUsersResetPasswordConfirmCreateRequest, options?: Configuration): Promise<HttpInfo<PasswordResetConfirm>> {
        return this.api.apiUsersResetPasswordConfirmCreateWithHttpInfo(param.passwordResetConfirm,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersResetPasswordConfirmCreate(param: ApiApiApiUsersResetPasswordConfirmCreateRequest, options?: Configuration): Promise<PasswordResetConfirm> {
        return this.api.apiUsersResetPasswordConfirmCreate(param.passwordResetConfirm,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersResetPasswordCreateWithHttpInfo(param: ApiApiApiUsersResetPasswordCreateRequest, options?: Configuration): Promise<HttpInfo<SendEmailReset>> {
        return this.api.apiUsersResetPasswordCreateWithHttpInfo(param.sendEmailReset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersResetPasswordCreate(param: ApiApiApiUsersResetPasswordCreateRequest, options?: Configuration): Promise<SendEmailReset> {
        return this.api.apiUsersResetPasswordCreate(param.sendEmailReset,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersRetrieveWithHttpInfo(param: ApiApiApiUsersRetrieveRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiUsersRetrieveWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersRetrieve(param: ApiApiApiUsersRetrieveRequest, options?: Configuration): Promise<User> {
        return this.api.apiUsersRetrieve(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersSetEmailCreateWithHttpInfo(param: ApiApiApiUsersSetEmailCreateRequest, options?: Configuration): Promise<HttpInfo<SetUsername>> {
        return this.api.apiUsersSetEmailCreateWithHttpInfo(param.setUsername,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersSetEmailCreate(param: ApiApiApiUsersSetEmailCreateRequest, options?: Configuration): Promise<SetUsername> {
        return this.api.apiUsersSetEmailCreate(param.setUsername,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersSetPasswordCreateWithHttpInfo(param: ApiApiApiUsersSetPasswordCreateRequest, options?: Configuration): Promise<HttpInfo<SetPassword>> {
        return this.api.apiUsersSetPasswordCreateWithHttpInfo(param.setPassword,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersSetPasswordCreate(param: ApiApiApiUsersSetPasswordCreateRequest, options?: Configuration): Promise<SetPassword> {
        return this.api.apiUsersSetPasswordCreate(param.setPassword,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersUpdateWithHttpInfo(param: ApiApiApiUsersUpdateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.apiUsersUpdateWithHttpInfo(param.id, param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiUsersUpdate(param: ApiApiApiUsersUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.apiUsersUpdate(param.id, param.user,  options).toPromise();
    }

}

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthTokenLoginCreateRequest {
    /**
     * 
     * @type TokenCreate
     * @memberof AuthApiauthTokenLoginCreate
     */
    tokenCreate?: TokenCreate
}

export interface AuthApiAuthTokenLogoutCreateRequest {
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this endpoint to obtain user authentication token.
     * @param param the request object
     */
    public authTokenLoginCreateWithHttpInfo(param: AuthApiAuthTokenLoginCreateRequest = {}, options?: Configuration): Promise<HttpInfo<TokenCreate>> {
        return this.api.authTokenLoginCreateWithHttpInfo(param.tokenCreate,  options).toPromise();
    }

    /**
     * Use this endpoint to obtain user authentication token.
     * @param param the request object
     */
    public authTokenLoginCreate(param: AuthApiAuthTokenLoginCreateRequest = {}, options?: Configuration): Promise<TokenCreate> {
        return this.api.authTokenLoginCreate(param.tokenCreate,  options).toPromise();
    }

    /**
     * Use this endpoint to logout user (remove user authentication token).
     * @param param the request object
     */
    public authTokenLogoutCreateWithHttpInfo(param: AuthApiAuthTokenLogoutCreateRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authTokenLogoutCreateWithHttpInfo( options).toPromise();
    }

    /**
     * Use this endpoint to logout user (remove user authentication token).
     * @param param the request object
     */
    public authTokenLogoutCreate(param: AuthApiAuthTokenLogoutCreateRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authTokenLogoutCreate( options).toPromise();
    }

}
