// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class otp {
  public setOtp: any;

  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_otp

  async otpService(otp_code: any = undefined, ...others) {
    let bh: any = {
      input: {
        otp_code,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_tTfgJfslztSufprN(bh);
      //appendnew_next_otpService
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_09Bm08p2OwW8ujPC');
    }
  }

  async getOtp(...others) {
    let bh: any = {
      input: {},
      local: {
        otp_code: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_6fV3TCBKQD4w93ap(bh);
      //appendnew_next_getOtp
      return (
        // formatting output variables
        {
          input: {},
          local: {
            otp_code: bh.local.otp_code,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0E1cDi89uWuvLIHb');
    }
  }
  //appendnew_flow_otp_start

  async sd_tTfgJfslztSufprN(bh) {
    try {
      this.setOtp = bh.input.otp_code;
      //appendnew_next_sd_tTfgJfslztSufprN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tTfgJfslztSufprN');
    }
  }

  async sd_6fV3TCBKQD4w93ap(bh) {
    try {
      bh.local.otp_code = this.setOtp;
      //appendnew_next_sd_6fV3TCBKQD4w93ap
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6fV3TCBKQD4w93ap');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_otp_Catch
}
