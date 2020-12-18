import { CustomError, HttpCodes, customTypes } from '@demo/app-common';

export enum ErrorCodes {
  ERR_SHORT_NAME_EMPTY = 'ERR_SHORT_NAME_EMPTY',
  ERR_FULL_NAME_EMPTY = 'ERR_FULL_NAME_EMPTY',
  ERR_PERMIT_NUMBER_EMPTY = 'ERR_PERMIT_NUMBER_EMPTY',
  ERR_DUP_PERMIT_NUMBER = 'ERR_DUP_PERMIT_NUMBER',
}

const _codes: Array<customTypes.ICodeObject> = [
  {
    alias: ErrorCodes.ERR_SHORT_NAME_EMPTY,
    code: 10001,
    httpStatus: HttpCodes.BAD_REQ,
    message: 'Short name is empty',
  },
  {
    alias: ErrorCodes.ERR_FULL_NAME_EMPTY,
    code: 10002,
    httpStatus: HttpCodes.BAD_REQ,
    message: 'Full name is empty',
  },
  {
    alias: ErrorCodes.ERR_PERMIT_NUMBER_EMPTY,
    code: 10003,
    httpStatus: HttpCodes.BAD_REQ,
    message: 'Permit number is empty',
  },
  {
    alias: ErrorCodes.ERR_DUP_PERMIT_NUMBER,
    code: 10004,
    httpStatus: HttpCodes.BAD_REQ,
    message: 'Duplicated permit number was founded',
  }
];

CustomError.mergeCodes(_codes);

