# .AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authTokenLoginCreate**](AuthApi.md#authTokenLoginCreate) | **POST** /auth/token/login/ | 
[**authTokenLogoutCreate**](AuthApi.md#authTokenLogoutCreate) | **POST** /auth/token/logout/ | 


# **authTokenLoginCreate**
> TokenCreate authTokenLoginCreate()

Use this endpoint to obtain user authentication token.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthTokenLoginCreateRequest = {
  // TokenCreate (optional)
  tokenCreate: {
    password: "password_example",
    email: "email_example",
  },
};

apiInstance.authTokenLoginCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenCreate** | **TokenCreate**|  |


### Return type

**TokenCreate**

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

# **authTokenLogoutCreate**
> void authTokenLogoutCreate()

Use this endpoint to logout user (remove user authentication token).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.authTokenLogoutCreate(body).then((data:any) => {
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


