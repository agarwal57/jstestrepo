/*===============================================================================*/
/*********************************************************************************/
/**
 * @fileOverview This file provides bsic client and server error messages and
 *               can be extended based on the requirement of the apis.
 * @author Narendra Kumar Agarwal, narendra@elear.solutions
 * @copyright Copyright (c) 2017 Elear Solutions Tech Private Limited. All rights 
 * reserved. 
 * @license To any person (the "Recipient") obtaining a copy of this software and
 * associated documentation files (the "Software"):
 *                                                                               
 * All information contained in or disclosed by this software is confidential    
 * and proprietary information of Elear Solutions Tech Private Limited and all   
 * rights therein are expressly reserved. By accepting this material the         
 * recipient agrees that this material and the information contained therein is  
 * held in confidence and in trust and will NOT be used, copied, modified,       
 * merged, published, distributed, sublicensed, reproduced in whole or in part,  
 * nor its contents revealed in any manner to others without the express         
 * written permission of Elear Solutions Tech Private Limited.                   
 */
/*********************************************************************************/
/*===============================================================================*/

import ExtendableError from 'es6-error';

/** Class representing a ClientError */
export class ClientError extends ExtendableError {

  /**
   * Creates a ClientError object
   * @param {ClientErrorCodes} errCode the error code
   * @param {string} extra the reason related information
  */
  constructor(errCode, extra) {
    super(errCode.message);
    this.name = this.constructor.name;
    this.code = errCode.code;
    this.message = errCode.message;
    this.reason = errCode.reason + (extra || '');
  }

  /**
  * Get the error info to be passed to client
  * @return {Object} the error info in json format
  */
  getErrorForClient() {
    return {"code": this.code, "message": this.message, "reason": this.reason};
  }
}

/** Class representing a ServerError */
export class ServerError extends ExtendableError {

  /**
   * Creates a ServerError object
   * @param {ServerrrorCodes} errCode the error code
   * @param {string} extra the reason related information
  */
  constructor(errCode, extra) {
    super(errCode.message);
    this.name = this.constructor.name;
    this.code = errCode.code;
    this.message = errCode.message;
    this.reason = errCode.reason + (extra || '');
  }

  /**
  * Get the error info to be passed to client
  * @return {Object} the error info in json format
  */
  getErrorForClient() {
    return {"code": this.code, "message": this.message, "reason": this.reason};
  }
}


export const ClientErrorCodes = {

  // HTTP Status 400 - BAD_REQUEST
  "BAD_REQUEST": {
                   "code": 40000,
                   "message": "Bad Request",
                   "reason": "Reason not specified"
                  },
  "MISSING_PARAM": {
                      "code": 40001,
                      "message": "Required Parameter not present",
                      "reason": "Missing parameter "
                    },
  "INVALID_INPUT": {
                     "code": 40002,
                     "message": "Input Param is not valid",
                     "reason": "InCorrect Param "
                   },

  // HTTP Status 401 - ACCESS_DENIED
  "AUTH_REQUIRED": {
                     "code": 40101,
                     "message": "Authentication Required",
                     "reason": "User not logged in "
                   },
  "SESSION_EXPIRED": {
                     "code": 40102,
                     "message": "Session Expired",
                     "reason": "The access token is Invalid "
                   },

  // HTTP Status 403 - FORBIDDEN
  "ACCESS_RESTRICTED": {
                         "code": 40301,
                         "message": "Access Restricted",
                         "reason": "User is not allowed to access this "
                       },

  // HTTP Status 404 - NOT_FOUND
  "NOT_FOUND": {
                 "code": 40401,
                 "message": "Access Restricted",
                 "reason": "User is not allowed to access this "
               },

}


export const ServerErrorCodes = {

  // HTTP Status 500 - INTERNAL_SERVER_ERROR
  "INTERNAL_SERVER_ERROR": {
                             "code": 50001,
                             "message": "Internal Server Error",
                             "reason": "Internal Server Error "
                           },

  // HTTP Status 503 - SERVICE_UNAVAILABLE
  "DATABASE_ERROR": {
                      "code": 50101,
                      "message": "Database Error",
                      "reason": "Database temporarily unavailable "
                    },
  "SERVER_ERROR": {
                      "code": 50110,
                      "message": "Server Error",
                      "reason": "Server is temporarily unavailable "
                    },
}

