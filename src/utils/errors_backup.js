'use strict';

import ExtendableError from 'es6-error';

export class ClientError extends ExtendableError {
  constructor(object, param) {
    super(object.message || 'Client Error');
    this.name = this.constructor.name;
    this.code = object.code || '4XX';
    this.message = object.message || 'Client Error';
    this.reason = (object.reason || 'generic error') + ' ' + (param || ' ');
  }
  getErrorForClient() {
    return {"code": this.code, "message": this.message, "reason": this.reason};
  }
}

//export const Clienterror = ClientError;

export const ClientErrorCodes = {

  // For BAD Request
  'BAD_REQUEST': {
                   "code": 10000,
                   "message": "BAD REQUEST",
                   "reason": "BAD REQUEST "
                  },
  'MISSING_PARAMS': {
                      "code": 10001,
                      "message": "Required Parameter not present",
                      "reason": "Missing parameter "
                    },
  'INVALID_INPUT': {
                     "code": 10002,
                     "message": "Given Input is Invalid",
                     "reason": "InCorrect Input "
                   }

}

