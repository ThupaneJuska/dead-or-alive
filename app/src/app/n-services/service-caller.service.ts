// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_otGe0ZttRfKuTfoN from 'app/sd-services/otp'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(private sd_otGe0ZttRfKuTfoN: sd_otGe0ZttRfKuTfoN.otp) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
