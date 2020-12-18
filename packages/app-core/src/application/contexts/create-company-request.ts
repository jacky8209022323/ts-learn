import { AbstractBundleModel, CustomValidator } from '@demo/app-common';
import { ErrorCodes } from '../../domain/enums/error-codes';

export class CreateCompanyRequest extends AbstractBundleModel<CreateCompanyRequest> {

  public shortName: string = '';
  public fullName: string = '';
  public permitNumber: string = '';

  constructor() {
    super();
  }
  checkRequired(): CreateCompanyRequest {
    new CustomValidator()
      .nonEmptyStringThrows(this.shortName, ErrorCodes.ERR_SHORT_NAME_EMPTY)
      .nonEmptyStringThrows(this.fullName, ErrorCodes.ERR_FULL_NAME_EMPTY)
      .nonEmptyStringThrows(this.permitNumber, ErrorCodes.ERR_PERMIT_NUMBER_EMPTY);

    return this;
  }
}