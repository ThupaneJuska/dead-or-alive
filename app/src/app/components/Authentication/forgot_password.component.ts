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
  selector: 'bh-forgot_password',
  templateUrl: './forgot_password.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class forgot_passwordComponent {
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
      this.sd_Q2KdWywrGhe8zw0F(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Q2KdWywrGhe8zw0F(bh) {
    try {
      bh = this.sd_2xPb8e5lbuyZpL5o(bh);
      //appendnew_next_sd_Q2KdWywrGhe8zw0F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q2KdWywrGhe8zw0F');
    }
  }

  forgotPassword(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_wDTcAztC1BORrzvS(bh);
      //appendnew_next_forgotPassword
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qd0KT6L7RCtk5uIt');
    }
  }
  //appendnew_flow_forgot_passwordComponent_start

  sd_2xPb8e5lbuyZpL5o(bh) {
    try {
      this.page.forgotPassForm = {};
      this.page.loading = false;
      //appendnew_next_sd_2xPb8e5lbuyZpL5o
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2xPb8e5lbuyZpL5o');
    }
  }

  sd_wDTcAztC1BORrzvS(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_F2cswVxl5IINt1tL(bh);
      //appendnew_next_sd_wDTcAztC1BORrzvS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wDTcAztC1BORrzvS');
    }
  }

  sd_F2cswVxl5IINt1tL(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'forgot-password';
      page.loading = true;
      bh = this.sd_PPUc4pfvpQ1yUhOw(bh);
      //appendnew_next_sd_F2cswVxl5IINt1tL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F2cswVxl5IINt1tL');
    }
  }

  async sd_PPUc4pfvpQ1yUhOw(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.form.value,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_iv0DjSy4OdMb078P(bh);
      //appendnew_next_sd_PPUc4pfvpQ1yUhOw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PPUc4pfvpQ1yUhOw');
    }
  }

  sd_iv0DjSy4OdMb078P(bh) {
    try {
      const page = this.page;
      console.log('Result', bh.result.OTP);
      page.loading = false;
      bh = this.sd_nCQTEX5HqE8Oa6g5(bh);
      //appendnew_next_sd_iv0DjSy4OdMb078P
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iv0DjSy4OdMb078P');
    }
  }

  async sd_nCQTEX5HqE8Oa6g5(bh) {
    try {
      const otpInstance: otp = this.__page_injector__.get(otp);

      let outputVariables = await otpInstance.otpService(bh.result.OTP);

      bh = this.sd_00lFbMVZ7E4x2qZw(bh);
      //appendnew_next_sd_nCQTEX5HqE8Oa6g5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nCQTEX5HqE8Oa6g5');
    }
  }

  async sd_00lFbMVZ7E4x2qZw(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.result.message,
          "User doesn't exist",
          undefined,
          undefined
        )
      ) {
        bh = this.sd_5fpxQgxyErmiHZlT(bh);
      } else {
        bh = await this.sd_PmcIjYEu7LUVOXzl(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_00lFbMVZ7E4x2qZw');
    }
  }

  sd_5fpxQgxyErmiHZlT(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open("User don't exist", 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_5fpxQgxyErmiHZlT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5fpxQgxyErmiHZlT');
    }
  }

  sd_PmcIjYEu7LUVOXzl(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('OTP Sent, Check your email!!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_YYzTF387EUsYVKSF(bh);
      //appendnew_next_sd_PmcIjYEu7LUVOXzl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PmcIjYEu7LUVOXzl');
    }
  }

  sd_YYzTF387EUsYVKSF(bh) {
    try {
      sessionStorage.setItem('user', JSON.stringify(bh.result));
      bh = this.sd_LDSoMTwx5vuklkci(bh);
      //appendnew_next_sd_YYzTF387EUsYVKSF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YYzTF387EUsYVKSF');
    }
  }

  async sd_LDSoMTwx5vuklkci(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/verify-code');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_LDSoMTwx5vuklkci
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LDSoMTwx5vuklkci');
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
  //appendnew_flow_forgot_passwordComponent_Catch
}
