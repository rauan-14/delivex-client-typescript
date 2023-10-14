# .ApiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAccountsMeRetrieve**](ApiApi.md#apiAccountsMeRetrieve) | **GET** /api/accounts/me/ | 
[**apiCatalogSearchRetrieve**](ApiApi.md#apiCatalogSearchRetrieve) | **GET** /api/catalog/search/ | 
[**apiCitiesList**](ApiApi.md#apiCitiesList) | **GET** /api/cities/ | 
[**apiContactRequestCreate**](ApiApi.md#apiContactRequestCreate) | **POST** /api/contact-request/ | 
[**apiGeocoderRetrieve**](ApiApi.md#apiGeocoderRetrieve) | **GET** /api/geocoder/ | 
[**apiInvoicesCreate**](ApiApi.md#apiInvoicesCreate) | **POST** /api/invoices/ | 
[**apiOrdersCancelCreate**](ApiApi.md#apiOrdersCancelCreate) | **POST** /api/orders/{id}/cancel/ | 
[**apiOrdersCreate**](ApiApi.md#apiOrdersCreate) | **POST** /api/orders/ | 
[**apiOrdersDocumentsSummaryRetrieve**](ApiApi.md#apiOrdersDocumentsSummaryRetrieve) | **GET** /api/orders/{order_id}/documents/summary/ | 
[**apiOrdersDocumentsWaybillRetrieve**](ApiApi.md#apiOrdersDocumentsWaybillRetrieve) | **GET** /api/orders/{order_id}/documents/waybill/ | 
[**apiOrdersList**](ApiApi.md#apiOrdersList) | **GET** /api/orders/ | 
[**apiOrdersRetrieve**](ApiApi.md#apiOrdersRetrieve) | **GET** /api/orders/{id}/ | 
[**apiOrdersTrackingEventsList**](ApiApi.md#apiOrdersTrackingEventsList) | **GET** /api/orders/{order_id}/tracking_events/ | 
[**apiOtpCreate**](ApiApi.md#apiOtpCreate) | **POST** /api/otp/ | 
[**apiPointsCreate**](ApiApi.md#apiPointsCreate) | **POST** /api/points/ | 
[**apiPointsDestroy**](ApiApi.md#apiPointsDestroy) | **DELETE** /api/points/{id}/ | 
[**apiPointsList**](ApiApi.md#apiPointsList) | **GET** /api/points/ | 
[**apiPointsPartialUpdate**](ApiApi.md#apiPointsPartialUpdate) | **PATCH** /api/points/{id}/ | 
[**apiPointsRetrieve**](ApiApi.md#apiPointsRetrieve) | **GET** /api/points/{id}/ | 
[**apiPointsUpdate**](ApiApi.md#apiPointsUpdate) | **PUT** /api/points/{id}/ | 
[**apiPostpaymentApplicationsCreate**](ApiApi.md#apiPostpaymentApplicationsCreate) | **POST** /api/postpayment/applications/ | 
[**apiPreviewOrdersCreate**](ApiApi.md#apiPreviewOrdersCreate) | **POST** /api/preview-orders/ | 
[**apiPreviewOrdersRetrieve**](ApiApi.md#apiPreviewOrdersRetrieve) | **GET** /api/preview-orders/{id}/ | 
[**apiProvidersCreate**](ApiApi.md#apiProvidersCreate) | **POST** /api/providers/ | 
[**apiProvidersList**](ApiApi.md#apiProvidersList) | **GET** /api/providers/ | 
[**apiProvidersPartialUpdate**](ApiApi.md#apiProvidersPartialUpdate) | **PATCH** /api/providers/{id}/ | 
[**apiProvidersRetrieve**](ApiApi.md#apiProvidersRetrieve) | **GET** /api/providers/{id}/ | 
[**apiProvidersUpdate**](ApiApi.md#apiProvidersUpdate) | **PUT** /api/providers/{id}/ | 
[**apiRatesCreate**](ApiApi.md#apiRatesCreate) | **POST** /api/rates/ | 
[**apiRegionsList**](ApiApi.md#apiRegionsList) | **GET** /api/regions/ | 
[**apiSchemaRetrieve**](ApiApi.md#apiSchemaRetrieve) | **GET** /api/schema/ | 
[**apiTrackingTrackingEventsRetrieve**](ApiApi.md#apiTrackingTrackingEventsRetrieve) | **GET** /api/tracking/{tracking_number}/tracking_events/ | 
[**apiTransactionsList**](ApiApi.md#apiTransactionsList) | **GET** /api/transactions/ | 
[**apiTransactionsTypesList**](ApiApi.md#apiTransactionsTypesList) | **GET** /api/transactions/types/ | 
[**apiUsersActivationCreate**](ApiApi.md#apiUsersActivationCreate) | **POST** /api/users/activation/ | 
[**apiUsersCreate**](ApiApi.md#apiUsersCreate) | **POST** /api/users/ | 
[**apiUsersDestroy**](ApiApi.md#apiUsersDestroy) | **DELETE** /api/users/{id}/ | 
[**apiUsersList**](ApiApi.md#apiUsersList) | **GET** /api/users/ | 
[**apiUsersMeDestroy**](ApiApi.md#apiUsersMeDestroy) | **DELETE** /api/users/me/ | 
[**apiUsersMePartialUpdate**](ApiApi.md#apiUsersMePartialUpdate) | **PATCH** /api/users/me/ | 
[**apiUsersMeRetrieve**](ApiApi.md#apiUsersMeRetrieve) | **GET** /api/users/me/ | 
[**apiUsersMeUpdate**](ApiApi.md#apiUsersMeUpdate) | **PUT** /api/users/me/ | 
[**apiUsersPartialUpdate**](ApiApi.md#apiUsersPartialUpdate) | **PATCH** /api/users/{id}/ | 
[**apiUsersResendActivationCreate**](ApiApi.md#apiUsersResendActivationCreate) | **POST** /api/users/resend_activation/ | 
[**apiUsersResetEmailConfirmCreate**](ApiApi.md#apiUsersResetEmailConfirmCreate) | **POST** /api/users/reset_email_confirm/ | 
[**apiUsersResetEmailCreate**](ApiApi.md#apiUsersResetEmailCreate) | **POST** /api/users/reset_email/ | 
[**apiUsersResetPasswordConfirmCreate**](ApiApi.md#apiUsersResetPasswordConfirmCreate) | **POST** /api/users/reset_password_confirm/ | 
[**apiUsersResetPasswordCreate**](ApiApi.md#apiUsersResetPasswordCreate) | **POST** /api/users/reset_password/ | 
[**apiUsersRetrieve**](ApiApi.md#apiUsersRetrieve) | **GET** /api/users/{id}/ | 
[**apiUsersSetEmailCreate**](ApiApi.md#apiUsersSetEmailCreate) | **POST** /api/users/set_email/ | 
[**apiUsersSetPasswordCreate**](ApiApi.md#apiUsersSetPasswordCreate) | **POST** /api/users/set_password/ | 
[**apiUsersUpdate**](ApiApi.md#apiUsersUpdate) | **PUT** /api/users/{id}/ | 


# **apiAccountsMeRetrieve**
> Account apiAccountsMeRetrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:any = {};

apiInstance.apiAccountsMeRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Account**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiCatalogSearchRetrieve**
> AddressSearchResult apiCatalogSearchRetrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiCatalogSearchRetrieveRequest = {
  // string | The name or ID of the city to search in. (optional)
  city: "city_example",
  // string | The text to search for. (optional)
  text: "text_example",
};

apiInstance.apiCatalogSearchRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | [**string**] | The name or ID of the city to search in. | (optional) defaults to undefined
 **text** | [**string**] | The text to search for. | (optional) defaults to undefined


### Return type

**AddressSearchResult**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiCitiesList**
> Array<City> apiCitiesList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiCitiesListRequest = {
  // boolean | Intracity delivery enabled. (optional)
  intracityDeliveryEnabled: true,
  // string | A search term. (optional)
  search: "search_example",
};

apiInstance.apiCitiesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **intracityDeliveryEnabled** | [**boolean**] | Intracity delivery enabled. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**Array<City>**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiContactRequestCreate**
> void apiContactRequestCreate(createContactRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiContactRequestCreateRequest = {
  // CreateContactRequest
  createContactRequest: {
    companyName: "companyName_example",
    email: "email_example",
    phoneNumber: "phoneNumber_example",
  },
};

apiInstance.apiContactRequestCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactRequest** | **CreateContactRequest**|  |


### Return type

**void**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiGeocoderRetrieve**
> void apiGeocoderRetrieve()

Wrapper around https://yandex.ru/dev/geocode/doc/ru/. No need to specify api_key

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:any = {};

apiInstance.apiGeocoderRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiInvoicesCreate**
> { [key: string]: any; } apiInvoicesCreate(createInvoice)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiInvoicesCreateRequest = {
  // CreateInvoice
  createInvoice: {
    amount: "-80",
  },
};

apiInstance.apiInvoicesCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInvoice** | **CreateInvoice**|  |


### Return type

**{ [key: string]: any; }**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiOrdersCancelCreate**
> Order apiOrdersCancelCreate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiOrdersCancelCreateRequest = {
  // number | A unique integer value identifying this order.
  id: 1,
  // CancelOrderRequest (optional)
  cancelOrderRequest: {
    cancellationWithPayment: false,
  },
};

apiInstance.apiOrdersCancelCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelOrderRequest** | **CancelOrderRequest**|  |
 **id** | [**number**] | A unique integer value identifying this order. | defaults to undefined


### Return type

**Order**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiOrdersCreate**
> Order apiOrdersCreate(createOrderRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiOrdersCreateRequest = {
  // CreateOrderRequest
  createOrderRequest: {
    previewOrderId: 1,
    srcPoint: {
      contact: null,
      comment: "comment_example",
      persist: true,
      indriveId: "indriveId_example",
    },
    dstPoint: {
      contact: null,
      comment: "comment_example",
      persist: true,
      indriveId: "indriveId_example",
    },
    itemInfos: [
      {
        title: "title_example",
      },
    ],
    crmId: "crmId_example",
    scheduledTime: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.apiOrdersCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderRequest** | **CreateOrderRequest**|  |


### Return type

**Order**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiOrdersDocumentsSummaryRetrieve**
> void apiOrdersDocumentsSummaryRetrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiOrdersDocumentsSummaryRetrieveRequest = {
  // number
  orderId: 1,
};

apiInstance.apiOrdersDocumentsSummaryRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**number**] |  | defaults to undefined


### Return type

**void**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiOrdersDocumentsWaybillRetrieve**
> void apiOrdersDocumentsWaybillRetrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiOrdersDocumentsWaybillRetrieveRequest = {
  // number
  orderId: 1,
};

apiInstance.apiOrdersDocumentsWaybillRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**number**] |  | defaults to undefined


### Return type

**void**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiOrdersList**
> PaginatedOrderList apiOrdersList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiOrdersListRequest = {
  // number | Number of results to return per page. (optional)
  limit: 1,
  // Date | Created after the given date. (optional)
  minCreatedAt: new Date('1970-01-01T00:00:00.00Z'),
  // number | The initial index from which to return the results. (optional)
  offset: 1,
  // string | Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
  // string | A search term. (optional)
  search: "search_example",
};

apiInstance.apiOrdersList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Number of results to return per page. | (optional) defaults to undefined
 **minCreatedAt** | [**Date**] | Created after the given date. | (optional) defaults to undefined
 **offset** | [**number**] | The initial index from which to return the results. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined


### Return type

**PaginatedOrderList**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiOrdersRetrieve**
> Order apiOrdersRetrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiOrdersRetrieveRequest = {
  // number | A unique integer value identifying this order.
  id: 1,
};

apiInstance.apiOrdersRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this order. | defaults to undefined


### Return type

**Order**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiOrdersTrackingEventsList**
> Array<TrackingEvents> apiOrdersTrackingEventsList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiOrdersTrackingEventsListRequest = {
  // string
  orderId: "4",
};

apiInstance.apiOrdersTrackingEventsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] |  | defaults to undefined


### Return type

**Array<TrackingEvents>**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiOtpCreate**
> void apiOtpCreate(OTP)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiOtpCreateRequest = {
  // OTP
  OTP: {
    phoneNumber: "phoneNumber_example",
  },
};

apiInstance.apiOtpCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **OTP** | **OTP**|  |


### Return type

**void**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPointsCreate**
> Point apiPointsCreate(point)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiPointsCreateRequest = {
  // Point
  point: {
    address: {
      street: "street_example",
      streetNumber: "streetNumber_example",
      apartmentNumber: "apartmentNumber_example",
      city: "city_example",
      region: "region_example",
      country: "country_example",
      longitude: "-807",
      latitude: "-807",
    },
    contact: {
      fullname: "fullname_example",
      companyName: "companyName_example",
      phoneNumber: "phoneNumber_example",
      email: "email_example",
    },
    comment: "comment_example",
    type: "source",
  },
};

apiInstance.apiPointsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **point** | **Point**|  |


### Return type

**Point**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPointsDestroy**
> void apiPointsDestroy()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiPointsDestroyRequest = {
  // number | A unique integer value identifying this point.
  id: 1,
};

apiInstance.apiPointsDestroy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this point. | defaults to undefined


### Return type

**void**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPointsList**
> PaginatedPointList apiPointsList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiPointsListRequest = {
  // string (optional)
  city: "city_example",
  // number | Number of results to return per page. (optional)
  limit: 1,
  // number | The initial index from which to return the results. (optional)
  offset: 1,
  // string | Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
  // string | A search term. (optional)
  search: "search_example",
  // 'destination' | 'source' | * `source` - Source * `destination` - Destination  * `source` - Source * `destination` - Destination (optional)
  type: "destination",
};

apiInstance.apiPointsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] | Number of results to return per page. | (optional) defaults to undefined
 **offset** | [**number**] | The initial index from which to return the results. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined
 **type** | [**&#39;destination&#39; | &#39;source&#39;**]**Array<&#39;destination&#39; &#124; &#39;source&#39;>** | * &#x60;source&#x60; - Source * &#x60;destination&#x60; - Destination  * &#x60;source&#x60; - Source * &#x60;destination&#x60; - Destination | (optional) defaults to undefined


### Return type

**PaginatedPointList**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPointsPartialUpdate**
> Point apiPointsPartialUpdate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiPointsPartialUpdateRequest = {
  // number | A unique integer value identifying this point.
  id: 1,
  // PatchedPoint (optional)
  patchedPoint: {
    address: {
      street: "street_example",
      streetNumber: "streetNumber_example",
      apartmentNumber: "apartmentNumber_example",
      city: "city_example",
      region: "region_example",
      country: "country_example",
      longitude: "-807",
      latitude: "-807",
    },
    contact: {
      fullname: "fullname_example",
      companyName: "companyName_example",
      phoneNumber: "phoneNumber_example",
      email: "email_example",
    },
    comment: "comment_example",
    type: "source",
  },
};

apiInstance.apiPointsPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedPoint** | **PatchedPoint**|  |
 **id** | [**number**] | A unique integer value identifying this point. | defaults to undefined


### Return type

**Point**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPointsRetrieve**
> Point apiPointsRetrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiPointsRetrieveRequest = {
  // number | A unique integer value identifying this point.
  id: 1,
};

apiInstance.apiPointsRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this point. | defaults to undefined


### Return type

**Point**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPointsUpdate**
> Point apiPointsUpdate(point)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiPointsUpdateRequest = {
  // number | A unique integer value identifying this point.
  id: 1,
  // Point
  point: {
    address: {
      street: "street_example",
      streetNumber: "streetNumber_example",
      apartmentNumber: "apartmentNumber_example",
      city: "city_example",
      region: "region_example",
      country: "country_example",
      longitude: "-807",
      latitude: "-807",
    },
    contact: {
      fullname: "fullname_example",
      companyName: "companyName_example",
      phoneNumber: "phoneNumber_example",
      email: "email_example",
    },
    comment: "comment_example",
    type: "source",
  },
};

apiInstance.apiPointsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **point** | **Point**|  |
 **id** | [**number**] | A unique integer value identifying this point. | defaults to undefined


### Return type

**Point**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPostpaymentApplicationsCreate**
> PostPaymentApplication apiPostpaymentApplicationsCreate(postPaymentApplication)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiPostpaymentApplicationsCreateRequest = {
  // PostPaymentApplication
  postPaymentApplication: {
    companyName: "companyName_example",
    companyLegalName: "companyLegalName_example",
    bin: "bin_example",
    address: "address_example",
    companySector: "companySector_example",
    phoneNumber: "phoneNumber_example",
  },
};

apiInstance.apiPostpaymentApplicationsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postPaymentApplication** | **PostPaymentApplication**|  |


### Return type

**PostPaymentApplication**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPreviewOrdersCreate**
> Array<Order> apiPreviewOrdersCreate(previewOrderRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiPreviewOrdersCreateRequest = {
  // PreviewOrderRequest
  previewOrderRequest: {
    deliveryMethod: "door_to_door",
    deliveryClass: "courier",
    srcPoint: {
      id: 1,
      address: {
        street: "street_example",
        streetNumber: "streetNumber_example",
        apartmentNumber: "apartmentNumber_example",
        city: "city_example",
        region: "region_example",
        country: "country_example",
        longitude: "-807",
        latitude: "-807",
      },
      contact: {
        fullname: "fullname_example",
        companyName: "companyName_example",
        phoneNumber: "phoneNumber_example",
        email: "email_example",
      },
      comment: "comment_example",
    },
    dstPoint: {
      id: 1,
      address: {
        street: "street_example",
        streetNumber: "streetNumber_example",
        apartmentNumber: "apartmentNumber_example",
        city: "city_example",
        region: "region_example",
        country: "country_example",
        longitude: "-807",
        latitude: "-807",
      },
      contact: {
        fullname: "fullname_example",
        companyName: "companyName_example",
        phoneNumber: "phoneNumber_example",
        email: "email_example",
      },
      comment: "comment_example",
    },
    items: [
      {
        size: {
          height: 3.14,
          length: 3.14,
          width: 3.14,
        },
        weight: 3.14,
        quantity: 1,
        title: "title_example",
        costCurrency: "KZT",
        costValue: 0.0,
      },
    ],
  },
};

apiInstance.apiPreviewOrdersCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **previewOrderRequest** | **PreviewOrderRequest**|  |


### Return type

**Array<Order>**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiPreviewOrdersRetrieve**
> Order apiPreviewOrdersRetrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiPreviewOrdersRetrieveRequest = {
  // number | A unique integer value identifying this order.
  id: 1,
};

apiInstance.apiPreviewOrdersRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this order. | defaults to undefined


### Return type

**Order**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiProvidersCreate**
> Provider apiProvidersCreate(provider)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiProvidersCreateRequest = {
  // Provider
  provider: {
    name: "name_example",
    displayName: "displayName_example",
    imageUrl: "imageUrl_example",
  },
};

apiInstance.apiProvidersCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **Provider**|  |


### Return type

**Provider**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiProvidersList**
> Array<Provider> apiProvidersList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:any = {};

apiInstance.apiProvidersList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Provider>**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiProvidersPartialUpdate**
> Provider apiProvidersPartialUpdate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiProvidersPartialUpdateRequest = {
  // number | A unique integer value identifying this provider.
  id: 1,
  // PatchedProvider (optional)
  patchedProvider: {
    name: "name_example",
    displayName: "displayName_example",
    imageUrl: "imageUrl_example",
  },
};

apiInstance.apiProvidersPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedProvider** | **PatchedProvider**|  |
 **id** | [**number**] | A unique integer value identifying this provider. | defaults to undefined


### Return type

**Provider**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiProvidersRetrieve**
> Provider apiProvidersRetrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiProvidersRetrieveRequest = {
  // number | A unique integer value identifying this provider.
  id: 1,
};

apiInstance.apiProvidersRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this provider. | defaults to undefined


### Return type

**Provider**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiProvidersUpdate**
> Provider apiProvidersUpdate(provider)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiProvidersUpdateRequest = {
  // number | A unique integer value identifying this provider.
  id: 1,
  // Provider
  provider: {
    name: "name_example",
    displayName: "displayName_example",
    imageUrl: "imageUrl_example",
  },
};

apiInstance.apiProvidersUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **Provider**|  |
 **id** | [**number**] | A unique integer value identifying this provider. | defaults to undefined


### Return type

**Provider**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiRatesCreate**
> Array<DeliveryRate> apiRatesCreate(deliveryRateRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiRatesCreateRequest = {
  // DeliveryRateRequest
  deliveryRateRequest: {
    srcPoint: {
      address: {
        street: "street_example",
        streetNumber: "streetNumber_example",
        apartmentNumber: "apartmentNumber_example",
        city: "city_example",
        region: "region_example",
        country: "country_example",
        longitude: "-807",
        latitude: "-807",
      },
    },
    dstPoint: {
      address: {
        street: "street_example",
        streetNumber: "streetNumber_example",
        apartmentNumber: "apartmentNumber_example",
        city: "city_example",
        region: "region_example",
        country: "country_example",
        longitude: "-807",
        latitude: "-807",
      },
    },
    items: [
      {
        size: {
          height: 3.14,
          length: 3.14,
          width: 3.14,
        },
        weight: 3.14,
        quantity: 1,
        title: "title_example",
        costCurrency: "KZT",
        costValue: 0.0,
      },
    ],
  },
};

apiInstance.apiRatesCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deliveryRateRequest** | **DeliveryRateRequest**|  |


### Return type

**Array<DeliveryRate>**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiRegionsList**
> Array<Region> apiRegionsList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:any = {};

apiInstance.apiRegionsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Region>**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiSchemaRetrieve**
> { [key: string]: any; } apiSchemaRetrieve()

OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiSchemaRetrieveRequest = {
  // 'json' | 'yaml' (optional)
  format: "json",
  // 'af' | 'ar' | 'ar-dz' | 'ast' | 'az' | 'be' | 'bg' | 'bn' | 'br' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'dsb' | 'el' | 'en' | 'en-au' | 'en-gb' | 'eo' | 'es' | 'es-ar' | 'es-co' | 'es-mx' | 'es-ni' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fr' | 'fy' | 'ga' | 'gd' | 'gl' | 'he' | 'hi' | 'hr' | 'hsb' | 'hu' | 'hy' | 'ia' | 'id' | 'ig' | 'io' | 'is' | 'it' | 'ja' | 'ka' | 'kab' | 'kk' | 'km' | 'kn' | 'ko' | 'ky' | 'lb' | 'lt' | 'lv' | 'mk' | 'ml' | 'mn' | 'mr' | 'ms' | 'my' | 'nb' | 'ne' | 'nl' | 'nn' | 'os' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'ro' | 'ru' | 'sk' | 'sl' | 'sq' | 'sr' | 'sr-latn' | 'sv' | 'sw' | 'ta' | 'te' | 'tg' | 'th' | 'tk' | 'tr' | 'tt' | 'udm' | 'uk' | 'ur' | 'uz' | 'vi' | 'zh-hans' | 'zh-hant' (optional)
  lang: "af",
};

apiInstance.apiSchemaRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | [**&#39;json&#39; | &#39;yaml&#39;**]**Array<&#39;json&#39; &#124; &#39;yaml&#39;>** |  | (optional) defaults to undefined
 **lang** | [**&#39;af&#39; | &#39;ar&#39; | &#39;ar-dz&#39; | &#39;ast&#39; | &#39;az&#39; | &#39;be&#39; | &#39;bg&#39; | &#39;bn&#39; | &#39;br&#39; | &#39;bs&#39; | &#39;ca&#39; | &#39;cs&#39; | &#39;cy&#39; | &#39;da&#39; | &#39;de&#39; | &#39;dsb&#39; | &#39;el&#39; | &#39;en&#39; | &#39;en-au&#39; | &#39;en-gb&#39; | &#39;eo&#39; | &#39;es&#39; | &#39;es-ar&#39; | &#39;es-co&#39; | &#39;es-mx&#39; | &#39;es-ni&#39; | &#39;es-ve&#39; | &#39;et&#39; | &#39;eu&#39; | &#39;fa&#39; | &#39;fi&#39; | &#39;fr&#39; | &#39;fy&#39; | &#39;ga&#39; | &#39;gd&#39; | &#39;gl&#39; | &#39;he&#39; | &#39;hi&#39; | &#39;hr&#39; | &#39;hsb&#39; | &#39;hu&#39; | &#39;hy&#39; | &#39;ia&#39; | &#39;id&#39; | &#39;ig&#39; | &#39;io&#39; | &#39;is&#39; | &#39;it&#39; | &#39;ja&#39; | &#39;ka&#39; | &#39;kab&#39; | &#39;kk&#39; | &#39;km&#39; | &#39;kn&#39; | &#39;ko&#39; | &#39;ky&#39; | &#39;lb&#39; | &#39;lt&#39; | &#39;lv&#39; | &#39;mk&#39; | &#39;ml&#39; | &#39;mn&#39; | &#39;mr&#39; | &#39;ms&#39; | &#39;my&#39; | &#39;nb&#39; | &#39;ne&#39; | &#39;nl&#39; | &#39;nn&#39; | &#39;os&#39; | &#39;pa&#39; | &#39;pl&#39; | &#39;pt&#39; | &#39;pt-br&#39; | &#39;ro&#39; | &#39;ru&#39; | &#39;sk&#39; | &#39;sl&#39; | &#39;sq&#39; | &#39;sr&#39; | &#39;sr-latn&#39; | &#39;sv&#39; | &#39;sw&#39; | &#39;ta&#39; | &#39;te&#39; | &#39;tg&#39; | &#39;th&#39; | &#39;tk&#39; | &#39;tr&#39; | &#39;tt&#39; | &#39;udm&#39; | &#39;uk&#39; | &#39;ur&#39; | &#39;uz&#39; | &#39;vi&#39; | &#39;zh-hans&#39; | &#39;zh-hant&#39;**]**Array<&#39;af&#39; &#124; &#39;ar&#39; &#124; &#39;ar-dz&#39; &#124; &#39;ast&#39; &#124; &#39;az&#39; &#124; &#39;be&#39; &#124; &#39;bg&#39; &#124; &#39;bn&#39; &#124; &#39;br&#39; &#124; &#39;bs&#39; &#124; &#39;ca&#39; &#124; &#39;cs&#39; &#124; &#39;cy&#39; &#124; &#39;da&#39; &#124; &#39;de&#39; &#124; &#39;dsb&#39; &#124; &#39;el&#39; &#124; &#39;en&#39; &#124; &#39;en-au&#39; &#124; &#39;en-gb&#39; &#124; &#39;eo&#39; &#124; &#39;es&#39; &#124; &#39;es-ar&#39; &#124; &#39;es-co&#39; &#124; &#39;es-mx&#39; &#124; &#39;es-ni&#39; &#124; &#39;es-ve&#39; &#124; &#39;et&#39; &#124; &#39;eu&#39; &#124; &#39;fa&#39; &#124; &#39;fi&#39; &#124; &#39;fr&#39; &#124; &#39;fy&#39; &#124; &#39;ga&#39; &#124; &#39;gd&#39; &#124; &#39;gl&#39; &#124; &#39;he&#39; &#124; &#39;hi&#39; &#124; &#39;hr&#39; &#124; &#39;hsb&#39; &#124; &#39;hu&#39; &#124; &#39;hy&#39; &#124; &#39;ia&#39; &#124; &#39;id&#39; &#124; &#39;ig&#39; &#124; &#39;io&#39; &#124; &#39;is&#39; &#124; &#39;it&#39; &#124; &#39;ja&#39; &#124; &#39;ka&#39; &#124; &#39;kab&#39; &#124; &#39;kk&#39; &#124; &#39;km&#39; &#124; &#39;kn&#39; &#124; &#39;ko&#39; &#124; &#39;ky&#39; &#124; &#39;lb&#39; &#124; &#39;lt&#39; &#124; &#39;lv&#39; &#124; &#39;mk&#39; &#124; &#39;ml&#39; &#124; &#39;mn&#39; &#124; &#39;mr&#39; &#124; &#39;ms&#39; &#124; &#39;my&#39; &#124; &#39;nb&#39; &#124; &#39;ne&#39; &#124; &#39;nl&#39; &#124; &#39;nn&#39; &#124; &#39;os&#39; &#124; &#39;pa&#39; &#124; &#39;pl&#39; &#124; &#39;pt&#39; &#124; &#39;pt-br&#39; &#124; &#39;ro&#39; &#124; &#39;ru&#39; &#124; &#39;sk&#39; &#124; &#39;sl&#39; &#124; &#39;sq&#39; &#124; &#39;sr&#39; &#124; &#39;sr-latn&#39; &#124; &#39;sv&#39; &#124; &#39;sw&#39; &#124; &#39;ta&#39; &#124; &#39;te&#39; &#124; &#39;tg&#39; &#124; &#39;th&#39; &#124; &#39;tk&#39; &#124; &#39;tr&#39; &#124; &#39;tt&#39; &#124; &#39;udm&#39; &#124; &#39;uk&#39; &#124; &#39;ur&#39; &#124; &#39;uz&#39; &#124; &#39;vi&#39; &#124; &#39;zh-hans&#39; &#124; &#39;zh-hant&#39;>** |  | (optional) defaults to undefined


### Return type

**{ [key: string]: any; }**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.oai.openapi, application/yaml, application/vnd.oai.openapi+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiTrackingTrackingEventsRetrieve**
> void apiTrackingTrackingEventsRetrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiTrackingTrackingEventsRetrieveRequest = {
  // string
  trackingNumber: "tracking_number_example",
};

apiInstance.apiTrackingTrackingEventsRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackingNumber** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiTransactionsList**
> PaginatedAccountTransactionList apiTransactionsList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiTransactionsListRequest = {
  // number | Number of results to return per page. (optional)
  limit: 1,
  // Date | Created before the given date. (optional)
  maxCreatedAt: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Created after the given date. (optional)
  minCreatedAt: new Date('1970-01-01T00:00:00.00Z'),
  // number | The initial index from which to return the results. (optional)
  offset: 1,
  // string | Which field to use when ordering the results. (optional)
  ordering: "ordering_example",
  // string | A search term. (optional)
  search: "search_example",
  // 'base_charge' | 'cancel_return' | 'price_adjustment' | * `base_charge` - Base Charge * `cancel_return` - Cancel Return * `price_adjustment` - Price Adjustment  * `base_charge` - Base Charge * `cancel_return` - Cancel Return * `price_adjustment` - Price Adjustment (optional)
  type: "base_charge",
};

apiInstance.apiTransactionsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Number of results to return per page. | (optional) defaults to undefined
 **maxCreatedAt** | [**Date**] | Created before the given date. | (optional) defaults to undefined
 **minCreatedAt** | [**Date**] | Created after the given date. | (optional) defaults to undefined
 **offset** | [**number**] | The initial index from which to return the results. | (optional) defaults to undefined
 **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined
 **search** | [**string**] | A search term. | (optional) defaults to undefined
 **type** | [**&#39;base_charge&#39; | &#39;cancel_return&#39; | &#39;price_adjustment&#39;**]**Array<&#39;base_charge&#39; &#124; &#39;cancel_return&#39; &#124; &#39;price_adjustment&#39;>** | * &#x60;base_charge&#x60; - Base Charge * &#x60;cancel_return&#x60; - Cancel Return * &#x60;price_adjustment&#x60; - Price Adjustment  * &#x60;base_charge&#x60; - Base Charge * &#x60;cancel_return&#x60; - Cancel Return * &#x60;price_adjustment&#x60; - Price Adjustment | (optional) defaults to undefined


### Return type

**PaginatedAccountTransactionList**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiTransactionsTypesList**
> Array<AccountTransactionType> apiTransactionsTypesList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:any = {};

apiInstance.apiTransactionsTypesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<AccountTransactionType>**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersActivationCreate**
> Activation apiUsersActivationCreate(activation)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersActivationCreateRequest = {
  // Activation
  activation: {
    uid: "uid_example",
    token: "token_example",
  },
};

apiInstance.apiUsersActivationCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activation** | **Activation**|  |


### Return type

**Activation**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersCreate**
> UserCreate apiUsersCreate(userCreate)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersCreateRequest = {
  // UserCreate
  userCreate: {
    name: "name_example",
    email: "email_example",
    phoneNumber: "phoneNumber_example",
    password: "password_example",
    otp: "048072",
  },
};

apiInstance.apiUsersCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreate** | **UserCreate**|  |


### Return type

**UserCreate**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersDestroy**
> void apiUsersDestroy()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersDestroyRequest = {
  // number | A unique integer value identifying this user.
  id: 1,
};

apiInstance.apiUsersDestroy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined


### Return type

**void**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersList**
> Array<User> apiUsersList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:any = {};

apiInstance.apiUsersList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<User>**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersMeDestroy**
> void apiUsersMeDestroy()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:any = {};

apiInstance.apiUsersMeDestroy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersMePartialUpdate**
> User apiUsersMePartialUpdate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersMePartialUpdateRequest = {
  // PatchedUser (optional)
  patchedUser: {
    name: "name_example",
    bin: "bin_example",
    address: "address_example",
    bankName: "bankName_example",
    bankBik: "bankBik_example",
    bankAccountNumber: "bankAccountNumber_example",
  },
};

apiInstance.apiUsersMePartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedUser** | **PatchedUser**|  |


### Return type

**User**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersMeRetrieve**
> User apiUsersMeRetrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:any = {};

apiInstance.apiUsersMeRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**User**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersMeUpdate**
> User apiUsersMeUpdate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersMeUpdateRequest = {
  // User (optional)
  user: {
    name: "name_example",
    bin: "bin_example",
    address: "address_example",
    bankName: "bankName_example",
    bankBik: "bankBik_example",
    bankAccountNumber: "bankAccountNumber_example",
  },
};

apiInstance.apiUsersMeUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **User**|  |


### Return type

**User**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersPartialUpdate**
> User apiUsersPartialUpdate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersPartialUpdateRequest = {
  // number | A unique integer value identifying this user.
  id: 1,
  // PatchedUser (optional)
  patchedUser: {
    name: "name_example",
    bin: "bin_example",
    address: "address_example",
    bankName: "bankName_example",
    bankBik: "bankBik_example",
    bankAccountNumber: "bankAccountNumber_example",
  },
};

apiInstance.apiUsersPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedUser** | **PatchedUser**|  |
 **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined


### Return type

**User**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersResendActivationCreate**
> SendEmailReset apiUsersResendActivationCreate(sendEmailReset)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersResendActivationCreateRequest = {
  // SendEmailReset
  sendEmailReset: {
    email: "email_example",
  },
};

apiInstance.apiUsersResendActivationCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendEmailReset** | **SendEmailReset**|  |


### Return type

**SendEmailReset**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersResetEmailConfirmCreate**
> UsernameResetConfirm apiUsersResetEmailConfirmCreate(usernameResetConfirm)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersResetEmailConfirmCreateRequest = {
  // UsernameResetConfirm
  usernameResetConfirm: {
    newEmail: "newEmail_example",
  },
};

apiInstance.apiUsersResetEmailConfirmCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usernameResetConfirm** | **UsernameResetConfirm**|  |


### Return type

**UsernameResetConfirm**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersResetEmailCreate**
> SendEmailReset apiUsersResetEmailCreate(sendEmailReset)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersResetEmailCreateRequest = {
  // SendEmailReset
  sendEmailReset: {
    email: "email_example",
  },
};

apiInstance.apiUsersResetEmailCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendEmailReset** | **SendEmailReset**|  |


### Return type

**SendEmailReset**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersResetPasswordConfirmCreate**
> PasswordResetConfirm apiUsersResetPasswordConfirmCreate(passwordResetConfirm)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersResetPasswordConfirmCreateRequest = {
  // PasswordResetConfirm
  passwordResetConfirm: {
    uid: "uid_example",
    token: "token_example",
    newPassword: "newPassword_example",
  },
};

apiInstance.apiUsersResetPasswordConfirmCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordResetConfirm** | **PasswordResetConfirm**|  |


### Return type

**PasswordResetConfirm**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersResetPasswordCreate**
> SendEmailReset apiUsersResetPasswordCreate(sendEmailReset)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersResetPasswordCreateRequest = {
  // SendEmailReset
  sendEmailReset: {
    email: "email_example",
  },
};

apiInstance.apiUsersResetPasswordCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendEmailReset** | **SendEmailReset**|  |


### Return type

**SendEmailReset**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersRetrieve**
> User apiUsersRetrieve()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersRetrieveRequest = {
  // number | A unique integer value identifying this user.
  id: 1,
};

apiInstance.apiUsersRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined


### Return type

**User**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersSetEmailCreate**
> SetUsername apiUsersSetEmailCreate(setUsername)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersSetEmailCreateRequest = {
  // SetUsername
  setUsername: {
    currentPassword: "currentPassword_example",
    newEmail: "newEmail_example",
  },
};

apiInstance.apiUsersSetEmailCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setUsername** | **SetUsername**|  |


### Return type

**SetUsername**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersSetPasswordCreate**
> SetPassword apiUsersSetPasswordCreate(setPassword)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersSetPasswordCreateRequest = {
  // SetPassword
  setPassword: {
    newPassword: "newPassword_example",
    currentPassword: "currentPassword_example",
  },
};

apiInstance.apiUsersSetPasswordCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setPassword** | **SetPassword**|  |


### Return type

**SetPassword**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiUsersUpdate**
> User apiUsersUpdate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiApi(configuration);

let body:.ApiApiApiUsersUpdateRequest = {
  // number | A unique integer value identifying this user.
  id: 1,
  // User (optional)
  user: {
    name: "name_example",
    bin: "bin_example",
    address: "address_example",
    bankName: "bankName_example",
    bankBik: "bankBik_example",
    bankAccountNumber: "bankAccountNumber_example",
  },
};

apiInstance.apiUsersUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **User**|  |
 **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined


### Return type

**User**

### Authorization

[cookieAuth](README.md#cookieAuth), [tokenAuth](README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


