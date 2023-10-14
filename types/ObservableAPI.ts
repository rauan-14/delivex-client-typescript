import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ApiApiRequestFactory, ApiApiResponseProcessor} from "../apis/ApiApi";
export class ObservableApiApi {
    private requestFactory: ApiApiRequestFactory;
    private responseProcessor: ApiApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiApiRequestFactory,
        responseProcessor?: ApiApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiApiResponseProcessor();
    }

    /**
     */
    public apiAccountsMeRetrieveWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Account>> {
        const requestContextPromise = this.requestFactory.apiAccountsMeRetrieve(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiAccountsMeRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiAccountsMeRetrieve(_options?: Configuration): Observable<Account> {
        return this.apiAccountsMeRetrieveWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Account>) => apiResponse.data));
    }

    /**
     * @param city The name or ID of the city to search in.
     * @param text The text to search for.
     */
    public apiCatalogSearchRetrieveWithHttpInfo(city?: string, text?: string, _options?: Configuration): Observable<HttpInfo<AddressSearchResult>> {
        const requestContextPromise = this.requestFactory.apiCatalogSearchRetrieve(city, text, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiCatalogSearchRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param city The name or ID of the city to search in.
     * @param text The text to search for.
     */
    public apiCatalogSearchRetrieve(city?: string, text?: string, _options?: Configuration): Observable<AddressSearchResult> {
        return this.apiCatalogSearchRetrieveWithHttpInfo(city, text, _options).pipe(map((apiResponse: HttpInfo<AddressSearchResult>) => apiResponse.data));
    }

    /**
     * @param intracityDeliveryEnabled Intracity delivery enabled.
     * @param search A search term.
     */
    public apiCitiesListWithHttpInfo(intracityDeliveryEnabled?: boolean, search?: string, _options?: Configuration): Observable<HttpInfo<Array<City>>> {
        const requestContextPromise = this.requestFactory.apiCitiesList(intracityDeliveryEnabled, search, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiCitiesListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param intracityDeliveryEnabled Intracity delivery enabled.
     * @param search A search term.
     */
    public apiCitiesList(intracityDeliveryEnabled?: boolean, search?: string, _options?: Configuration): Observable<Array<City>> {
        return this.apiCitiesListWithHttpInfo(intracityDeliveryEnabled, search, _options).pipe(map((apiResponse: HttpInfo<Array<City>>) => apiResponse.data));
    }

    /**
     * @param createContactRequest 
     */
    public apiContactRequestCreateWithHttpInfo(createContactRequest: CreateContactRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiContactRequestCreate(createContactRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiContactRequestCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createContactRequest 
     */
    public apiContactRequestCreate(createContactRequest: CreateContactRequest, _options?: Configuration): Observable<void> {
        return this.apiContactRequestCreateWithHttpInfo(createContactRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Wrapper around https://yandex.ru/dev/geocode/doc/ru/. No need to specify api_key
     */
    public apiGeocoderRetrieveWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiGeocoderRetrieve(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiGeocoderRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Wrapper around https://yandex.ru/dev/geocode/doc/ru/. No need to specify api_key
     */
    public apiGeocoderRetrieve(_options?: Configuration): Observable<void> {
        return this.apiGeocoderRetrieveWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param createInvoice 
     */
    public apiInvoicesCreateWithHttpInfo(createInvoice: CreateInvoice, _options?: Configuration): Observable<HttpInfo<{ [key: string]: any; }>> {
        const requestContextPromise = this.requestFactory.apiInvoicesCreate(createInvoice, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiInvoicesCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createInvoice 
     */
    public apiInvoicesCreate(createInvoice: CreateInvoice, _options?: Configuration): Observable<{ [key: string]: any; }> {
        return this.apiInvoicesCreateWithHttpInfo(createInvoice, _options).pipe(map((apiResponse: HttpInfo<{ [key: string]: any; }>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this order.
     * @param cancelOrderRequest 
     */
    public apiOrdersCancelCreateWithHttpInfo(id: number, cancelOrderRequest?: CancelOrderRequest, _options?: Configuration): Observable<HttpInfo<Order>> {
        const requestContextPromise = this.requestFactory.apiOrdersCancelCreate(id, cancelOrderRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiOrdersCancelCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this order.
     * @param cancelOrderRequest 
     */
    public apiOrdersCancelCreate(id: number, cancelOrderRequest?: CancelOrderRequest, _options?: Configuration): Observable<Order> {
        return this.apiOrdersCancelCreateWithHttpInfo(id, cancelOrderRequest, _options).pipe(map((apiResponse: HttpInfo<Order>) => apiResponse.data));
    }

    /**
     * @param createOrderRequest 
     */
    public apiOrdersCreateWithHttpInfo(createOrderRequest: CreateOrderRequest, _options?: Configuration): Observable<HttpInfo<Order>> {
        const requestContextPromise = this.requestFactory.apiOrdersCreate(createOrderRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiOrdersCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createOrderRequest 
     */
    public apiOrdersCreate(createOrderRequest: CreateOrderRequest, _options?: Configuration): Observable<Order> {
        return this.apiOrdersCreateWithHttpInfo(createOrderRequest, _options).pipe(map((apiResponse: HttpInfo<Order>) => apiResponse.data));
    }

    /**
     * @param orderId 
     */
    public apiOrdersDocumentsSummaryRetrieveWithHttpInfo(orderId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiOrdersDocumentsSummaryRetrieve(orderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiOrdersDocumentsSummaryRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param orderId 
     */
    public apiOrdersDocumentsSummaryRetrieve(orderId: number, _options?: Configuration): Observable<void> {
        return this.apiOrdersDocumentsSummaryRetrieveWithHttpInfo(orderId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param orderId 
     */
    public apiOrdersDocumentsWaybillRetrieveWithHttpInfo(orderId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiOrdersDocumentsWaybillRetrieve(orderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiOrdersDocumentsWaybillRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param orderId 
     */
    public apiOrdersDocumentsWaybillRetrieve(orderId: number, _options?: Configuration): Observable<void> {
        return this.apiOrdersDocumentsWaybillRetrieveWithHttpInfo(orderId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param limit Number of results to return per page.
     * @param minCreatedAt Created after the given date.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     */
    public apiOrdersListWithHttpInfo(limit?: number, minCreatedAt?: Date, offset?: number, ordering?: string, search?: string, _options?: Configuration): Observable<HttpInfo<PaginatedOrderList>> {
        const requestContextPromise = this.requestFactory.apiOrdersList(limit, minCreatedAt, offset, ordering, search, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiOrdersListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param limit Number of results to return per page.
     * @param minCreatedAt Created after the given date.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     */
    public apiOrdersList(limit?: number, minCreatedAt?: Date, offset?: number, ordering?: string, search?: string, _options?: Configuration): Observable<PaginatedOrderList> {
        return this.apiOrdersListWithHttpInfo(limit, minCreatedAt, offset, ordering, search, _options).pipe(map((apiResponse: HttpInfo<PaginatedOrderList>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this order.
     */
    public apiOrdersRetrieveWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Order>> {
        const requestContextPromise = this.requestFactory.apiOrdersRetrieve(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiOrdersRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this order.
     */
    public apiOrdersRetrieve(id: number, _options?: Configuration): Observable<Order> {
        return this.apiOrdersRetrieveWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Order>) => apiResponse.data));
    }

    /**
     * @param orderId 
     */
    public apiOrdersTrackingEventsListWithHttpInfo(orderId: string, _options?: Configuration): Observable<HttpInfo<Array<TrackingEvents>>> {
        const requestContextPromise = this.requestFactory.apiOrdersTrackingEventsList(orderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiOrdersTrackingEventsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param orderId 
     */
    public apiOrdersTrackingEventsList(orderId: string, _options?: Configuration): Observable<Array<TrackingEvents>> {
        return this.apiOrdersTrackingEventsListWithHttpInfo(orderId, _options).pipe(map((apiResponse: HttpInfo<Array<TrackingEvents>>) => apiResponse.data));
    }

    /**
     * @param OTP 
     */
    public apiOtpCreateWithHttpInfo(OTP: OTP, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiOtpCreate(OTP, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiOtpCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param OTP 
     */
    public apiOtpCreate(OTP: OTP, _options?: Configuration): Observable<void> {
        return this.apiOtpCreateWithHttpInfo(OTP, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param point 
     */
    public apiPointsCreateWithHttpInfo(point: Point, _options?: Configuration): Observable<HttpInfo<Point>> {
        const requestContextPromise = this.requestFactory.apiPointsCreate(point, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPointsCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param point 
     */
    public apiPointsCreate(point: Point, _options?: Configuration): Observable<Point> {
        return this.apiPointsCreateWithHttpInfo(point, _options).pipe(map((apiResponse: HttpInfo<Point>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this point.
     */
    public apiPointsDestroyWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiPointsDestroy(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPointsDestroyWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this point.
     */
    public apiPointsDestroy(id: number, _options?: Configuration): Observable<void> {
        return this.apiPointsDestroyWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param city 
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @param type * &#x60;source&#x60; - Source * &#x60;destination&#x60; - Destination  * &#x60;source&#x60; - Source * &#x60;destination&#x60; - Destination
     */
    public apiPointsListWithHttpInfo(city?: string, limit?: number, offset?: number, ordering?: string, search?: string, type?: 'destination' | 'source', _options?: Configuration): Observable<HttpInfo<PaginatedPointList>> {
        const requestContextPromise = this.requestFactory.apiPointsList(city, limit, offset, ordering, search, type, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPointsListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param city 
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param ordering Which field to use when ordering the results.
     * @param search A search term.
     * @param type * &#x60;source&#x60; - Source * &#x60;destination&#x60; - Destination  * &#x60;source&#x60; - Source * &#x60;destination&#x60; - Destination
     */
    public apiPointsList(city?: string, limit?: number, offset?: number, ordering?: string, search?: string, type?: 'destination' | 'source', _options?: Configuration): Observable<PaginatedPointList> {
        return this.apiPointsListWithHttpInfo(city, limit, offset, ordering, search, type, _options).pipe(map((apiResponse: HttpInfo<PaginatedPointList>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this point.
     * @param patchedPoint 
     */
    public apiPointsPartialUpdateWithHttpInfo(id: number, patchedPoint?: PatchedPoint, _options?: Configuration): Observable<HttpInfo<Point>> {
        const requestContextPromise = this.requestFactory.apiPointsPartialUpdate(id, patchedPoint, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPointsPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this point.
     * @param patchedPoint 
     */
    public apiPointsPartialUpdate(id: number, patchedPoint?: PatchedPoint, _options?: Configuration): Observable<Point> {
        return this.apiPointsPartialUpdateWithHttpInfo(id, patchedPoint, _options).pipe(map((apiResponse: HttpInfo<Point>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this point.
     */
    public apiPointsRetrieveWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Point>> {
        const requestContextPromise = this.requestFactory.apiPointsRetrieve(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPointsRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this point.
     */
    public apiPointsRetrieve(id: number, _options?: Configuration): Observable<Point> {
        return this.apiPointsRetrieveWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Point>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this point.
     * @param point 
     */
    public apiPointsUpdateWithHttpInfo(id: number, point: Point, _options?: Configuration): Observable<HttpInfo<Point>> {
        const requestContextPromise = this.requestFactory.apiPointsUpdate(id, point, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPointsUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this point.
     * @param point 
     */
    public apiPointsUpdate(id: number, point: Point, _options?: Configuration): Observable<Point> {
        return this.apiPointsUpdateWithHttpInfo(id, point, _options).pipe(map((apiResponse: HttpInfo<Point>) => apiResponse.data));
    }

    /**
     * @param postPaymentApplication 
     */
    public apiPostpaymentApplicationsCreateWithHttpInfo(postPaymentApplication: PostPaymentApplication, _options?: Configuration): Observable<HttpInfo<PostPaymentApplication>> {
        const requestContextPromise = this.requestFactory.apiPostpaymentApplicationsCreate(postPaymentApplication, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPostpaymentApplicationsCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param postPaymentApplication 
     */
    public apiPostpaymentApplicationsCreate(postPaymentApplication: PostPaymentApplication, _options?: Configuration): Observable<PostPaymentApplication> {
        return this.apiPostpaymentApplicationsCreateWithHttpInfo(postPaymentApplication, _options).pipe(map((apiResponse: HttpInfo<PostPaymentApplication>) => apiResponse.data));
    }

    /**
     * @param previewOrderRequest 
     */
    public apiPreviewOrdersCreateWithHttpInfo(previewOrderRequest: PreviewOrderRequest, _options?: Configuration): Observable<HttpInfo<Array<Order>>> {
        const requestContextPromise = this.requestFactory.apiPreviewOrdersCreate(previewOrderRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPreviewOrdersCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param previewOrderRequest 
     */
    public apiPreviewOrdersCreate(previewOrderRequest: PreviewOrderRequest, _options?: Configuration): Observable<Array<Order>> {
        return this.apiPreviewOrdersCreateWithHttpInfo(previewOrderRequest, _options).pipe(map((apiResponse: HttpInfo<Array<Order>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this order.
     */
    public apiPreviewOrdersRetrieveWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Order>> {
        const requestContextPromise = this.requestFactory.apiPreviewOrdersRetrieve(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiPreviewOrdersRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this order.
     */
    public apiPreviewOrdersRetrieve(id: number, _options?: Configuration): Observable<Order> {
        return this.apiPreviewOrdersRetrieveWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Order>) => apiResponse.data));
    }

    /**
     * @param provider 
     */
    public apiProvidersCreateWithHttpInfo(provider: Provider, _options?: Configuration): Observable<HttpInfo<Provider>> {
        const requestContextPromise = this.requestFactory.apiProvidersCreate(provider, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiProvidersCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param provider 
     */
    public apiProvidersCreate(provider: Provider, _options?: Configuration): Observable<Provider> {
        return this.apiProvidersCreateWithHttpInfo(provider, _options).pipe(map((apiResponse: HttpInfo<Provider>) => apiResponse.data));
    }

    /**
     */
    public apiProvidersListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Provider>>> {
        const requestContextPromise = this.requestFactory.apiProvidersList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiProvidersListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiProvidersList(_options?: Configuration): Observable<Array<Provider>> {
        return this.apiProvidersListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Provider>>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this provider.
     * @param patchedProvider 
     */
    public apiProvidersPartialUpdateWithHttpInfo(id: number, patchedProvider?: PatchedProvider, _options?: Configuration): Observable<HttpInfo<Provider>> {
        const requestContextPromise = this.requestFactory.apiProvidersPartialUpdate(id, patchedProvider, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiProvidersPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this provider.
     * @param patchedProvider 
     */
    public apiProvidersPartialUpdate(id: number, patchedProvider?: PatchedProvider, _options?: Configuration): Observable<Provider> {
        return this.apiProvidersPartialUpdateWithHttpInfo(id, patchedProvider, _options).pipe(map((apiResponse: HttpInfo<Provider>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this provider.
     */
    public apiProvidersRetrieveWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Provider>> {
        const requestContextPromise = this.requestFactory.apiProvidersRetrieve(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiProvidersRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this provider.
     */
    public apiProvidersRetrieve(id: number, _options?: Configuration): Observable<Provider> {
        return this.apiProvidersRetrieveWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Provider>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this provider.
     * @param provider 
     */
    public apiProvidersUpdateWithHttpInfo(id: number, provider: Provider, _options?: Configuration): Observable<HttpInfo<Provider>> {
        const requestContextPromise = this.requestFactory.apiProvidersUpdate(id, provider, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiProvidersUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this provider.
     * @param provider 
     */
    public apiProvidersUpdate(id: number, provider: Provider, _options?: Configuration): Observable<Provider> {
        return this.apiProvidersUpdateWithHttpInfo(id, provider, _options).pipe(map((apiResponse: HttpInfo<Provider>) => apiResponse.data));
    }

    /**
     * @param deliveryRateRequest 
     */
    public apiRatesCreateWithHttpInfo(deliveryRateRequest: DeliveryRateRequest, _options?: Configuration): Observable<HttpInfo<Array<DeliveryRate>>> {
        const requestContextPromise = this.requestFactory.apiRatesCreate(deliveryRateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiRatesCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param deliveryRateRequest 
     */
    public apiRatesCreate(deliveryRateRequest: DeliveryRateRequest, _options?: Configuration): Observable<Array<DeliveryRate>> {
        return this.apiRatesCreateWithHttpInfo(deliveryRateRequest, _options).pipe(map((apiResponse: HttpInfo<Array<DeliveryRate>>) => apiResponse.data));
    }

    /**
     */
    public apiRegionsListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Region>>> {
        const requestContextPromise = this.requestFactory.apiRegionsList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiRegionsListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiRegionsList(_options?: Configuration): Observable<Array<Region>> {
        return this.apiRegionsListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Region>>) => apiResponse.data));
    }

    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     * @param format 
     * @param lang 
     */
    public apiSchemaRetrieveWithHttpInfo(format?: 'json' | 'yaml', lang?: 'af' | 'ar' | 'ar-dz' | 'ast' | 'az' | 'be' | 'bg' | 'bn' | 'br' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'dsb' | 'el' | 'en' | 'en-au' | 'en-gb' | 'eo' | 'es' | 'es-ar' | 'es-co' | 'es-mx' | 'es-ni' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fr' | 'fy' | 'ga' | 'gd' | 'gl' | 'he' | 'hi' | 'hr' | 'hsb' | 'hu' | 'hy' | 'ia' | 'id' | 'ig' | 'io' | 'is' | 'it' | 'ja' | 'ka' | 'kab' | 'kk' | 'km' | 'kn' | 'ko' | 'ky' | 'lb' | 'lt' | 'lv' | 'mk' | 'ml' | 'mn' | 'mr' | 'ms' | 'my' | 'nb' | 'ne' | 'nl' | 'nn' | 'os' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'ro' | 'ru' | 'sk' | 'sl' | 'sq' | 'sr' | 'sr-latn' | 'sv' | 'sw' | 'ta' | 'te' | 'tg' | 'th' | 'tk' | 'tr' | 'tt' | 'udm' | 'uk' | 'ur' | 'uz' | 'vi' | 'zh-hans' | 'zh-hant', _options?: Configuration): Observable<HttpInfo<{ [key: string]: any; }>> {
        const requestContextPromise = this.requestFactory.apiSchemaRetrieve(format, lang, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiSchemaRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     * @param format 
     * @param lang 
     */
    public apiSchemaRetrieve(format?: 'json' | 'yaml', lang?: 'af' | 'ar' | 'ar-dz' | 'ast' | 'az' | 'be' | 'bg' | 'bn' | 'br' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'dsb' | 'el' | 'en' | 'en-au' | 'en-gb' | 'eo' | 'es' | 'es-ar' | 'es-co' | 'es-mx' | 'es-ni' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fr' | 'fy' | 'ga' | 'gd' | 'gl' | 'he' | 'hi' | 'hr' | 'hsb' | 'hu' | 'hy' | 'ia' | 'id' | 'ig' | 'io' | 'is' | 'it' | 'ja' | 'ka' | 'kab' | 'kk' | 'km' | 'kn' | 'ko' | 'ky' | 'lb' | 'lt' | 'lv' | 'mk' | 'ml' | 'mn' | 'mr' | 'ms' | 'my' | 'nb' | 'ne' | 'nl' | 'nn' | 'os' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'ro' | 'ru' | 'sk' | 'sl' | 'sq' | 'sr' | 'sr-latn' | 'sv' | 'sw' | 'ta' | 'te' | 'tg' | 'th' | 'tk' | 'tr' | 'tt' | 'udm' | 'uk' | 'ur' | 'uz' | 'vi' | 'zh-hans' | 'zh-hant', _options?: Configuration): Observable<{ [key: string]: any; }> {
        return this.apiSchemaRetrieveWithHttpInfo(format, lang, _options).pipe(map((apiResponse: HttpInfo<{ [key: string]: any; }>) => apiResponse.data));
    }

    /**
     * @param trackingNumber 
     */
    public apiTrackingTrackingEventsRetrieveWithHttpInfo(trackingNumber: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiTrackingTrackingEventsRetrieve(trackingNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiTrackingTrackingEventsRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param trackingNumber 
     */
    public apiTrackingTrackingEventsRetrieve(trackingNumber: string, _options?: Configuration): Observable<void> {
        return this.apiTrackingTrackingEventsRetrieveWithHttpInfo(trackingNumber, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
    public apiTransactionsListWithHttpInfo(limit?: number, maxCreatedAt?: Date, minCreatedAt?: Date, offset?: number, ordering?: string, search?: string, type?: 'base_charge' | 'cancel_return' | 'price_adjustment', _options?: Configuration): Observable<HttpInfo<PaginatedAccountTransactionList>> {
        const requestContextPromise = this.requestFactory.apiTransactionsList(limit, maxCreatedAt, minCreatedAt, offset, ordering, search, type, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiTransactionsListWithHttpInfo(rsp)));
            }));
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
    public apiTransactionsList(limit?: number, maxCreatedAt?: Date, minCreatedAt?: Date, offset?: number, ordering?: string, search?: string, type?: 'base_charge' | 'cancel_return' | 'price_adjustment', _options?: Configuration): Observable<PaginatedAccountTransactionList> {
        return this.apiTransactionsListWithHttpInfo(limit, maxCreatedAt, minCreatedAt, offset, ordering, search, type, _options).pipe(map((apiResponse: HttpInfo<PaginatedAccountTransactionList>) => apiResponse.data));
    }

    /**
     */
    public apiTransactionsTypesListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<AccountTransactionType>>> {
        const requestContextPromise = this.requestFactory.apiTransactionsTypesList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiTransactionsTypesListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiTransactionsTypesList(_options?: Configuration): Observable<Array<AccountTransactionType>> {
        return this.apiTransactionsTypesListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<AccountTransactionType>>) => apiResponse.data));
    }

    /**
     * @param activation 
     */
    public apiUsersActivationCreateWithHttpInfo(activation: Activation, _options?: Configuration): Observable<HttpInfo<Activation>> {
        const requestContextPromise = this.requestFactory.apiUsersActivationCreate(activation, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersActivationCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param activation 
     */
    public apiUsersActivationCreate(activation: Activation, _options?: Configuration): Observable<Activation> {
        return this.apiUsersActivationCreateWithHttpInfo(activation, _options).pipe(map((apiResponse: HttpInfo<Activation>) => apiResponse.data));
    }

    /**
     * @param userCreate 
     */
    public apiUsersCreateWithHttpInfo(userCreate: UserCreate, _options?: Configuration): Observable<HttpInfo<UserCreate>> {
        const requestContextPromise = this.requestFactory.apiUsersCreate(userCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userCreate 
     */
    public apiUsersCreate(userCreate: UserCreate, _options?: Configuration): Observable<UserCreate> {
        return this.apiUsersCreateWithHttpInfo(userCreate, _options).pipe(map((apiResponse: HttpInfo<UserCreate>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiUsersDestroyWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiUsersDestroy(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersDestroyWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiUsersDestroy(id: number, _options?: Configuration): Observable<void> {
        return this.apiUsersDestroyWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public apiUsersListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<User>>> {
        const requestContextPromise = this.requestFactory.apiUsersList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiUsersList(_options?: Configuration): Observable<Array<User>> {
        return this.apiUsersListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<User>>) => apiResponse.data));
    }

    /**
     */
    public apiUsersMeDestroyWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.apiUsersMeDestroy(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersMeDestroyWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiUsersMeDestroy(_options?: Configuration): Observable<void> {
        return this.apiUsersMeDestroyWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param patchedUser 
     */
    public apiUsersMePartialUpdateWithHttpInfo(patchedUser?: PatchedUser, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiUsersMePartialUpdate(patchedUser, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersMePartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param patchedUser 
     */
    public apiUsersMePartialUpdate(patchedUser?: PatchedUser, _options?: Configuration): Observable<User> {
        return this.apiUsersMePartialUpdateWithHttpInfo(patchedUser, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     */
    public apiUsersMeRetrieveWithHttpInfo(_options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiUsersMeRetrieve(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersMeRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiUsersMeRetrieve(_options?: Configuration): Observable<User> {
        return this.apiUsersMeRetrieveWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param user 
     */
    public apiUsersMeUpdateWithHttpInfo(user?: User, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiUsersMeUpdate(user, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersMeUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param user 
     */
    public apiUsersMeUpdate(user?: User, _options?: Configuration): Observable<User> {
        return this.apiUsersMeUpdateWithHttpInfo(user, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param patchedUser 
     */
    public apiUsersPartialUpdateWithHttpInfo(id: number, patchedUser?: PatchedUser, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiUsersPartialUpdate(id, patchedUser, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersPartialUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param patchedUser 
     */
    public apiUsersPartialUpdate(id: number, patchedUser?: PatchedUser, _options?: Configuration): Observable<User> {
        return this.apiUsersPartialUpdateWithHttpInfo(id, patchedUser, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param sendEmailReset 
     */
    public apiUsersResendActivationCreateWithHttpInfo(sendEmailReset: SendEmailReset, _options?: Configuration): Observable<HttpInfo<SendEmailReset>> {
        const requestContextPromise = this.requestFactory.apiUsersResendActivationCreate(sendEmailReset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersResendActivationCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param sendEmailReset 
     */
    public apiUsersResendActivationCreate(sendEmailReset: SendEmailReset, _options?: Configuration): Observable<SendEmailReset> {
        return this.apiUsersResendActivationCreateWithHttpInfo(sendEmailReset, _options).pipe(map((apiResponse: HttpInfo<SendEmailReset>) => apiResponse.data));
    }

    /**
     * @param usernameResetConfirm 
     */
    public apiUsersResetEmailConfirmCreateWithHttpInfo(usernameResetConfirm: UsernameResetConfirm, _options?: Configuration): Observable<HttpInfo<UsernameResetConfirm>> {
        const requestContextPromise = this.requestFactory.apiUsersResetEmailConfirmCreate(usernameResetConfirm, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersResetEmailConfirmCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param usernameResetConfirm 
     */
    public apiUsersResetEmailConfirmCreate(usernameResetConfirm: UsernameResetConfirm, _options?: Configuration): Observable<UsernameResetConfirm> {
        return this.apiUsersResetEmailConfirmCreateWithHttpInfo(usernameResetConfirm, _options).pipe(map((apiResponse: HttpInfo<UsernameResetConfirm>) => apiResponse.data));
    }

    /**
     * @param sendEmailReset 
     */
    public apiUsersResetEmailCreateWithHttpInfo(sendEmailReset: SendEmailReset, _options?: Configuration): Observable<HttpInfo<SendEmailReset>> {
        const requestContextPromise = this.requestFactory.apiUsersResetEmailCreate(sendEmailReset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersResetEmailCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param sendEmailReset 
     */
    public apiUsersResetEmailCreate(sendEmailReset: SendEmailReset, _options?: Configuration): Observable<SendEmailReset> {
        return this.apiUsersResetEmailCreateWithHttpInfo(sendEmailReset, _options).pipe(map((apiResponse: HttpInfo<SendEmailReset>) => apiResponse.data));
    }

    /**
     * @param passwordResetConfirm 
     */
    public apiUsersResetPasswordConfirmCreateWithHttpInfo(passwordResetConfirm: PasswordResetConfirm, _options?: Configuration): Observable<HttpInfo<PasswordResetConfirm>> {
        const requestContextPromise = this.requestFactory.apiUsersResetPasswordConfirmCreate(passwordResetConfirm, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersResetPasswordConfirmCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param passwordResetConfirm 
     */
    public apiUsersResetPasswordConfirmCreate(passwordResetConfirm: PasswordResetConfirm, _options?: Configuration): Observable<PasswordResetConfirm> {
        return this.apiUsersResetPasswordConfirmCreateWithHttpInfo(passwordResetConfirm, _options).pipe(map((apiResponse: HttpInfo<PasswordResetConfirm>) => apiResponse.data));
    }

    /**
     * @param sendEmailReset 
     */
    public apiUsersResetPasswordCreateWithHttpInfo(sendEmailReset: SendEmailReset, _options?: Configuration): Observable<HttpInfo<SendEmailReset>> {
        const requestContextPromise = this.requestFactory.apiUsersResetPasswordCreate(sendEmailReset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersResetPasswordCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param sendEmailReset 
     */
    public apiUsersResetPasswordCreate(sendEmailReset: SendEmailReset, _options?: Configuration): Observable<SendEmailReset> {
        return this.apiUsersResetPasswordCreateWithHttpInfo(sendEmailReset, _options).pipe(map((apiResponse: HttpInfo<SendEmailReset>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiUsersRetrieveWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiUsersRetrieve(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersRetrieveWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     */
    public apiUsersRetrieve(id: number, _options?: Configuration): Observable<User> {
        return this.apiUsersRetrieveWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param setUsername 
     */
    public apiUsersSetEmailCreateWithHttpInfo(setUsername: SetUsername, _options?: Configuration): Observable<HttpInfo<SetUsername>> {
        const requestContextPromise = this.requestFactory.apiUsersSetEmailCreate(setUsername, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersSetEmailCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param setUsername 
     */
    public apiUsersSetEmailCreate(setUsername: SetUsername, _options?: Configuration): Observable<SetUsername> {
        return this.apiUsersSetEmailCreateWithHttpInfo(setUsername, _options).pipe(map((apiResponse: HttpInfo<SetUsername>) => apiResponse.data));
    }

    /**
     * @param setPassword 
     */
    public apiUsersSetPasswordCreateWithHttpInfo(setPassword: SetPassword, _options?: Configuration): Observable<HttpInfo<SetPassword>> {
        const requestContextPromise = this.requestFactory.apiUsersSetPasswordCreate(setPassword, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersSetPasswordCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param setPassword 
     */
    public apiUsersSetPasswordCreate(setPassword: SetPassword, _options?: Configuration): Observable<SetPassword> {
        return this.apiUsersSetPasswordCreateWithHttpInfo(setPassword, _options).pipe(map((apiResponse: HttpInfo<SetPassword>) => apiResponse.data));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param user 
     */
    public apiUsersUpdateWithHttpInfo(id: number, user?: User, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.apiUsersUpdate(id, user, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiUsersUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id A unique integer value identifying this user.
     * @param user 
     */
    public apiUsersUpdate(id: number, user?: User, _options?: Configuration): Observable<User> {
        return this.apiUsersUpdateWithHttpInfo(id, user, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

}

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     * Use this endpoint to obtain user authentication token.
     * @param tokenCreate 
     */
    public authTokenLoginCreateWithHttpInfo(tokenCreate?: TokenCreate, _options?: Configuration): Observable<HttpInfo<TokenCreate>> {
        const requestContextPromise = this.requestFactory.authTokenLoginCreate(tokenCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authTokenLoginCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to obtain user authentication token.
     * @param tokenCreate 
     */
    public authTokenLoginCreate(tokenCreate?: TokenCreate, _options?: Configuration): Observable<TokenCreate> {
        return this.authTokenLoginCreateWithHttpInfo(tokenCreate, _options).pipe(map((apiResponse: HttpInfo<TokenCreate>) => apiResponse.data));
    }

    /**
     * Use this endpoint to logout user (remove user authentication token).
     */
    public authTokenLogoutCreateWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authTokenLogoutCreate(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authTokenLogoutCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Use this endpoint to logout user (remove user authentication token).
     */
    public authTokenLogoutCreate(_options?: Configuration): Observable<void> {
        return this.authTokenLogoutCreateWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
