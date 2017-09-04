# jstestrepo
To verify various aspects of JavaScript learnings
## Classes

<dl>
<dt><a href="#ClientError">ClientError</a></dt>
<dd><p>Class representing a ClientError</p>
</dd>
<dt><a href="#ClientError">ClientError</a></dt>
<dd></dd>
<dt><a href="#ServerError">ServerError</a></dt>
<dd><p>Class representing a ServerError</p>
</dd>
<dt><a href="#ServerError">ServerError</a></dt>
<dd></dd>
</dl>

<a name="ClientError"></a>

## ClientError
Class representing a ClientError

**Kind**: global class

* [ClientError](#ClientError)
    * [new ClientError(errCode, extra)](#new_ClientError_new)
    * [.getErrorForClient()](#ClientError+getErrorForClient) ⇒ <code>Object</code>

<a name="new_ClientError_new"></a>

### new ClientError(errCode, extra)
Creates a ClientError object


| Param | Type | Description |
| --- | --- | --- |
| errCode | <code>ClientErrorCodes</code> | the error code |
| extra | <code>string</code> | the reason related information |

<a name="ClientError+getErrorForClient"></a>

### clientError.getErrorForClient() ⇒ <code>Object</code>
Get the error info to be passed to client

**Kind**: instance method of [<code>ClientError</code>](#ClientError)
**Returns**: <code>Object</code> - the error info in json format
<a name="ClientError"></a>

## ClientError
**Kind**: global class

* [ClientError](#ClientError)
    * [new ClientError(errCode, extra)](#new_ClientError_new)
    * [.getErrorForClient()](#ClientError+getErrorForClient) ⇒ <code>Object</code>

<a name="new_ClientError_new"></a>

### new ClientError(errCode, extra)
Creates a ClientError object


| Param | Type | Description |
| --- | --- | --- |
| errCode | <code>ClientErrorCodes</code> | the error code |
| extra | <code>string</code> | the reason related information |

<a name="ClientError+getErrorForClient"></a>

### clientError.getErrorForClient() ⇒ <code>Object</code>
Get the error info to be passed to client

**Kind**: instance method of [<code>ClientError</code>](#ClientError)
**Returns**: <code>Object</code> - the error info in json format
<a name="ServerError"></a>

## ServerError
Class representing a ServerError

**Kind**: global class

* [ServerError](#ServerError)
    * [new ServerError(errCode, extra)](#new_ServerError_new)
    * [.getErrorForClient()](#ServerError+getErrorForClient) ⇒ <code>Object</code>

<a name="new_ServerError_new"></a>

### new ServerError(errCode, extra)
Creates a ServerError object


| Param | Type | Description |
| --- | --- | --- |
| errCode | <code>ServerrrorCodes</code> | the error code |
| extra | <code>string</code> | the reason related information |

<a name="ServerError+getErrorForClient"></a>

### serverError.getErrorForClient() ⇒ <code>Object</code>
Get the error info to be passed to client

**Kind**: instance method of [<code>ServerError</code>](#ServerError)
**Returns**: <code>Object</code> - the error info in json format
<a name="ServerError"></a>

## ServerError
**Kind**: global class

* [ServerError](#ServerError)
    * [new ServerError(errCode, extra)](#new_ServerError_new)
    * [.getErrorForClient()](#ServerError+getErrorForClient) ⇒ <code>Object</code>

<a name="new_ServerError_new"></a>

### new ServerError(errCode, extra)
Creates a ServerError object


| Param | Type | Description |
| --- | --- | --- |
| errCode | <code>ServerrrorCodes</code> | the error code |
| extra | <code>string</code> | the reason related information |

<a name="ServerError+getErrorForClient"></a>

### serverError.getErrorForClient() ⇒ <code>Object</code>
Get the error info to be passed to client

**Kind**: instance method of [<code>ServerError</code>](#ServerError)
**Returns**: <code>Object</code> - the error info in json format

