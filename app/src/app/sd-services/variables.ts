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
export class variables {
  public data: any;

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

  //   service flows_variables

  async setVariable(data: any = undefined, ...others) {
    let bh: any = {
      input: {
        data,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_hfDnkRMEGQQWILVg(bh);
      //appendnew_next_setVariable
      return (
        // formatting output variables
        {
          input: {
            data: bh.input.data,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jJNBQsNOvW2mw7Dt');
    }
  }

  async getVariable(...others) {
    let bh: any = {
      input: {},
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_QebDOTsYQdY2UDVD(bh);
      //appendnew_next_getVariable
      return (
        // formatting output variables
        {
          input: {},
          local: {
            data: bh.local.data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sr5Ud7ts2hkaks9g');
    }
  }
  //appendnew_flow_variables_start

  async sd_hfDnkRMEGQQWILVg(bh) {
    try {
      this.data = bh.input.data;
      //appendnew_next_sd_hfDnkRMEGQQWILVg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hfDnkRMEGQQWILVg');
    }
  }

  async sd_QebDOTsYQdY2UDVD(bh) {
    try {
      bh.local.data = this.data;
      //appendnew_next_sd_QebDOTsYQdY2UDVD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QebDOTsYQdY2UDVD');
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
  //appendnew_flow_variables_Catch
}
