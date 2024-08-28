// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_otGe0ZttRfKuTfoN from 'app/sd-services/otp'; //_splitter_
import * as sd_GBFfAkOjFZO1abZf from 'app/sd-services/randomNumber'; //_splitter_
import * as sd_mZtkuYkkTI8tLdyV from 'app/sd-services/variables'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(
    private sd_otGe0ZttRfKuTfoN: sd_otGe0ZttRfKuTfoN.otp,
    private sd_GBFfAkOjFZO1abZf: sd_GBFfAkOjFZO1abZf.randomNumber,
    private sd_mZtkuYkkTI8tLdyV: sd_mZtkuYkkTI8tLdyV.variables
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
