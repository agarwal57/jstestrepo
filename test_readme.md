## Classes

<dl>
<dt><a href="#ClientError">ClientError</a> ⇐ <code>ExtendableError</code></dt>
<dd><p>Class representing a ClientError</p>
</dd>
<dt><a href="#ClientError">ClientError</a></dt>
<dd></dd>
<dt><a href="#ServerError">ServerError</a> ⇐ <code>ExtendableError</code></dt>
<dd><p>Class representing a ServerError</p>
</dd>
<dt><a href="#ServerError">ServerError</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#ClientErrorCodes">ClientErrorCodes</a></dt>
<dd><p>ErrorInfos for the Client Errrors</p>
</dd>
<dt><a href="#ServerErrorCodes">ServerErrorCodes</a></dt>
<dd><p>ErrorInfos for the Server Errrors</p>
</dd>
</dl>

<a name="ClientError"></a>

## ClientError ⇐ <code>ExtendableError</code>
Class representing a ClientError

**Kind**: global class
**Extends**: <code>ExtendableError</code>

* [ClientError](#ClientError) ⇐ <code>ExtendableError</code>
    * [new ClientError(errCode, [extra])](#new_ClientError_new)
    * [.getErrorInfo()](#ClientError+getErrorInfo) ⇒ <code>Object</code>
    * [.getHttpStatus()](#ClientError+getHttpStatus) ⇒ <code>number</code>

<a name="new_ClientError_new"></a>

### new ClientError(errCode, [extra])
Creates a ClientError object


| Param | Type | Description |
| --- | --- | --- |
| errCode | [<code>ClientErrorCodes</code>](#ClientErrorCodes) | the client error code |
| [extra] | <code>string</code> | the reason related information |

<a name="ClientError+getErrorInfo"></a>

### clientError.getErrorInfo() ⇒ <code>Object</code>
Get the error info to be passed to client

**Kind**: instance method of [<code>ClientError</code>](#ClientError)
**Returns**: <code>Object</code> - the error info in json format
<a name="ClientError+getHttpStatus"></a>

### clientError.getHttpStatus() ⇒ <code>number</code>
Get the http status to be passed to client

**Kind**: instance method of [<code>ClientError</code>](#ClientError)
**Returns**: <code>number</code> - the http status
<a name="ClientError"></a>

## ClientError
**Kind**: global class

* [ClientError](#ClientError)
    * [new ClientError(errCode, [extra])](#new_ClientError_new)
    * [.getErrorInfo()](#ClientError+getErrorInfo) ⇒ <code>Object</code>
    * [.getHttpStatus()](#ClientError+getHttpStatus) ⇒ <code>number</code>

<a name="new_ClientError_new"></a>

### new ClientError(errCode, [extra])
Creates a ClientError object


| Param | Type | Description |
| --- | --- | --- |
| errCode | [<code>ClientErrorCodes</code>](#ClientErrorCodes) | the client error code |
| [extra] | <code>string</code> | the reason related information |

<a name="ClientError+getErrorInfo"></a>

### clientError.getErrorInfo() ⇒ <code>Object</code>
Get the error info to be passed to client

**Kind**: instance method of [<code>ClientError</code>](#ClientError)
**Returns**: <code>Object</code> - the error info in json format
<a name="ClientError+getHttpStatus"></a>

### clientError.getHttpStatus() ⇒ <code>number</code>
Get the http status to be passed to client

**Kind**: instance method of [<code>ClientError</code>](#ClientError)
**Returns**: <code>number</code> - the http status
<a name="ServerError"></a>

## ServerError ⇐ <code>ExtendableError</code>
Class representing a ServerError

**Kind**: global class
**Extends**: <code>ExtendableError</code>

* [ServerError](#ServerError) ⇐ <code>ExtendableError</code>
    * [new ServerError(errCode, [extra])](#new_ServerError_new)
    * [.getErrorInfo()](#ServerError+getErrorInfo) ⇒ <code>Object</code>
    * [.getHttpStatus()](#ServerError+getHttpStatus) ⇒ <code>number</code>

<a name="new_ServerError_new"></a>

### new ServerError(errCode, [extra])
Creates a ServerError object


| Param | Type | Description |
| --- | --- | --- |
| errCode | [<code>ServerErrorCodes</code>](#ServerErrorCodes) | the server error code |
| [extra] | <code>string</code> | the reason related information |

<a name="ServerError+getErrorInfo"></a>

### serverError.getErrorInfo() ⇒ <code>Object</code>
Get the error info to be passed to client

**Kind**: instance method of [<code>ServerError</code>](#ServerError)
**Returns**: <code>Object</code> - the error info in json format
<a name="ServerError+getHttpStatus"></a>

### serverError.getHttpStatus() ⇒ <code>number</code>
Get the http status to be passed to client

**Kind**: instance method of [<code>ServerError</code>](#ServerError)
**Returns**: <code>number</code> - the http status
<a name="ServerError"></a>

## ServerError
**Kind**: global class

* [ServerError](#ServerError)
    * [new ServerError(errCode, [extra])](#new_ServerError_new)
    * [.getErrorInfo()](#ServerError+getErrorInfo) ⇒ <code>Object</code>
    * [.getHttpStatus()](#ServerError+getHttpStatus) ⇒ <code>number</code>

<a name="new_ServerError_new"></a>

### new ServerError(errCode, [extra])
Creates a ServerError object


| Param | Type | Description |
| --- | --- | --- |
| errCode | [<code>ServerErrorCodes</code>](#ServerErrorCodes) | the server error code |
| [extra] | <code>string</code> | the reason related information |

<a name="ServerError+getErrorInfo"></a>

### serverError.getErrorInfo() ⇒ <code>Object</code>
Get the error info to be passed to client

**Kind**: instance method of [<code>ServerError</code>](#ServerError)
**Returns**: <code>Object</code> - the error info in json format
<a name="ServerError+getHttpStatus"></a>

### serverError.getHttpStatus() ⇒ <code>number</code>
Get the http status to be passed to client

**Kind**: instance method of [<code>ServerError</code>](#ServerError)
**Returns**: <code>number</code> - the http status
<a name="ClientErrorCodes"></a>

## ClientErrorCodes
ErrorInfos for the Client Errrors

**Kind**: global constant
<a name="ServerErrorCodes"></a>

## ServerErrorCodes
ErrorInfos for the Server Errrors

**Kind**: global constant
