# jstestrepo
To verify various aspects of JavaScript learnings

## Classes

<dl>
<dt><a href="#ClientError">ClientError</a></dt>
<dd><p>Generic class for creating Client Error objects</p>
</dd>
<dt><a href="#for creating cleint error errCode">for creating cleint error errCode</a></dt>
<dd></dd>
<dt><a href="#ServerError">ServerError</a></dt>
<dd><p>Generic class for creating Server Error objects</p>
</dd>
</dl>

<a name="ClientError"></a>

## ClientError
Generic class for creating Client Error objects

**Kind**: global class
<a name="ClientError+getErrorForClient"></a>

### clientError.getErrorForClient() ⇒ <code>Object</code>
provides the erro info to the client

**Kind**: instance method of [<code>ClientError</code>](#ClientError)
**Returns**: <code>Object</code> - the error info in json format
<a name="for creating cleint error errCode"></a>

## for creating cleint error errCode
**Kind**: global class
<a name="new_for creating cleint error errCode_new"></a>

### new for creating cleint error errCode(errCode, extra)

| Param | Type | Description |
| --- | --- | --- |
| errCode | <code>ClientErrorCodes</code> | the error code |
| extra | <code>string</code> | the reason related information |

<a name="ServerError"></a>

## ServerError
Generic class for creating Server Error objects

**Kind**: global class

