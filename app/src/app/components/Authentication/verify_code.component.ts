// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { otp } from 'app/sd-services/otp'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-verify_code',
  templateUrl: './verify_code.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class verify_codeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_RfdQgkNWzgshEVK2(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_RfdQgkNWzgshEVK2(bh) {
    try {
      bh = this.sd_RYMcR3P2Lx9974CT(bh);
      //appendnew_next_sd_RfdQgkNWzgshEVK2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RfdQgkNWzgshEVK2');
    }
  }

  verifyOtp(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_NAj9RQigeHdXyDOc(bh);
      //appendnew_next_verifyOtp
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MXPxZBgoBVPfgnAc');
    }
  }
  //appendnew_flow_verify_codeComponent_start

  sd_RYMcR3P2Lx9974CT(bh) {
    try {
      this.page.otpForm = {};
      this.page.loading = false;
      //appendnew_next_sd_RYMcR3P2Lx9974CT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RYMcR3P2Lx9974CT');
    }
  }

  async sd_NAj9RQigeHdXyDOc(bh) {
    try {
      const otpInstance: otp = this.__page_injector__.get(otp);

      let outputVariables = await otpInstance.getOtp();
      bh.otp = outputVariables.local.otp_code;

      bh = this.sd_jNT8sosvN1TFGWhc(bh);
      //appendnew_next_sd_NAj9RQigeHdXyDOc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NAj9RQigeHdXyDOc');
    }
  }

  async sd_jNT8sosvN1TFGWhc(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.otp,
          bh.input.form.value.otp,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_wQG3wVQfe7O2LNaO(bh);
      } else {
        bh = await this.sd_eaXCQF8jMNhEKdST(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jNT8sosvN1TFGWhc');
    }
  }

  sd_wQG3wVQfe7O2LNaO(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('OTP Match!!', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_FnvAmvk0wxrkFCII(bh);
      //appendnew_next_sd_wQG3wVQfe7O2LNaO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wQG3wVQfe7O2LNaO');
    }
  }

  async sd_FnvAmvk0wxrkFCII(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/reset-password');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_FnvAmvk0wxrkFCII
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FnvAmvk0wxrkFCII');
    }
  }

  sd_eaXCQF8jMNhEKdST(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Wrong OTP Entered', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_eaXCQF8jMNhEKdST
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eaXCQF8jMNhEKdST');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_verify_codeComponent_Catch
}
