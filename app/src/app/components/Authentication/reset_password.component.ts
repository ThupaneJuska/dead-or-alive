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
//append_imports_end

@Component({
  selector: 'bh-reset_password',
  templateUrl: './reset_password.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class reset_passwordComponent {
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
      this.sd_AzKiTpPjfoAfEiin(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_AzKiTpPjfoAfEiin(bh) {
    try {
      bh = this.sd_8Wh6qZngi0Z3LBpn(bh);
      //appendnew_next_sd_AzKiTpPjfoAfEiin
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AzKiTpPjfoAfEiin');
    }
  }

  resetPassword(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_qmHfZt6ba5eypNG2(bh);
      //appendnew_next_resetPassword
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_35RD3DUq7Evt0GSA');
    }
  }
  //appendnew_flow_reset_passwordComponent_start

  sd_8Wh6qZngi0Z3LBpn(bh) {
    try {
      this.page.resetPasswordForm = {};
      this.page.loading = false;
      bh = this.sd_crcaO18Y2ibturmY(bh);
      //appendnew_next_sd_8Wh6qZngi0Z3LBpn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8Wh6qZngi0Z3LBpn');
    }
  }

  sd_crcaO18Y2ibturmY(bh) {
    try {
      this.page.dataFromSession = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_ZCTBduJbMPkgxcwR(bh);
      //appendnew_next_sd_crcaO18Y2ibturmY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_crcaO18Y2ibturmY');
    }
  }

  sd_ZCTBduJbMPkgxcwR(bh) {
    try {
      const page = this.page;
      console.log('_id', page.dataFromSession._id);
      //appendnew_next_sd_ZCTBduJbMPkgxcwR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZCTBduJbMPkgxcwR');
    }
  }

  sd_qmHfZt6ba5eypNG2(bh) {
    try {
      const page = this.page;
      console.log('Rest form', bh.input.form.value.password);
      bh = this.sd_89Oli2iDypd98IWc(bh);
      //appendnew_next_sd_qmHfZt6ba5eypNG2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qmHfZt6ba5eypNG2');
    }
  }

  sd_89Oli2iDypd98IWc(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_PiexsvqTOWM62dBX(bh);
      //appendnew_next_sd_89Oli2iDypd98IWc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_89Oli2iDypd98IWc');
    }
  }

  sd_PiexsvqTOWM62dBX(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + `reset-password/${page.dataFromSession._id}`;
      console.log('Dataa', bh.url);
      page.loading = true;
      bh = this.sd_mgR6ulEmuPpuCjHQ(bh);
      //appendnew_next_sd_PiexsvqTOWM62dBX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PiexsvqTOWM62dBX');
    }
  }

  async sd_mgR6ulEmuPpuCjHQ(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.form.value,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_B6ie9nLiery2kRQr(bh);
      //appendnew_next_sd_mgR6ulEmuPpuCjHQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mgR6ulEmuPpuCjHQ');
    }
  }

  sd_B6ie9nLiery2kRQr(bh) {
    try {
      const page = this.page;
      page.loading = false;
      bh = this.sd_iuLRjJ6rgRb5sg8z(bh);
      //appendnew_next_sd_B6ie9nLiery2kRQr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B6ie9nLiery2kRQr');
    }
  }

  sd_iuLRjJ6rgRb5sg8z(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Successfully changed your Password', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_fCe5uRpgm9JEiv6Z(bh);
      //appendnew_next_sd_iuLRjJ6rgRb5sg8z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iuLRjJ6rgRb5sg8z');
    }
  }

  async sd_fCe5uRpgm9JEiv6Z(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_JXhJ5aozTOIOXF6H(bh);
      //appendnew_next_sd_fCe5uRpgm9JEiv6Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fCe5uRpgm9JEiv6Z');
    }
  }

  sd_JXhJ5aozTOIOXF6H(bh) {
    try {
      sessionStorage.clear();
      //appendnew_next_sd_JXhJ5aozTOIOXF6H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JXhJ5aozTOIOXF6H');
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
  //appendnew_flow_reset_passwordComponent_Catch
}
