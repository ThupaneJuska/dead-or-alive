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
export class randomNumber {
  public random: any;
  public email: any;

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

  //   service flows_randomNumber

  async generateRandomNumber(email: any = undefined, ...others) {
    let bh: any = {
      input: {
        email,
      },
      local: {
        random: 0,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_A3YPHsk36jIM6faH(bh);
      //appendnew_next_generateRandomNumber
      return (
        // formatting output variables
        {
          input: {},
          local: {
            random: bh.local.random,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oKopI3GY933HFwlo');
    }
  }

  async generateRandomNumber2(email: any = undefined, ...others) {
    let bh: any = {
      input: {
        email,
      },
      local: {
        random: 0,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_UbHknMGwyEpQevig(bh);
      //appendnew_next_generateRandomNumber2
      return (
        // formatting output variables
        {
          input: {},
          local: {
            random: bh.local.random,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2rOgF8DvS525MYfE');
    }
  }
  //appendnew_flow_randomNumber_start

  async sd_A3YPHsk36jIM6faH(bh) {
    try {
      // Generates a random number between 10000000 (inclusive) and 100000000 (exclusive)
      bh.local.random = Math.floor(10000000 + Math.random() * 90000000);

      bh = await this.sd_15ou9PzMPfrGKdwn(bh);
      //appendnew_next_sd_A3YPHsk36jIM6faH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_A3YPHsk36jIM6faH');
    }
  }

  async sd_15ou9PzMPfrGKdwn(bh) {
    try {
      this.random = bh.local.random;
      this.email = bh.input.email;
      //appendnew_next_sd_15ou9PzMPfrGKdwn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_15ou9PzMPfrGKdwn');
    }
  }

  async sd_UbHknMGwyEpQevig(bh) {
    try {
      // Generates a random number between 1000 (inclusive) and 10000 (exclusive)
      bh.local.random = Math.floor(1000 + Math.random() * 9000);
      bh = await this.sd_IBLC4oDqfWCiSutT(bh);
      //appendnew_next_sd_UbHknMGwyEpQevig
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UbHknMGwyEpQevig');
    }
  }

  async sd_IBLC4oDqfWCiSutT(bh) {
    try {
      this.random = bh.local.random;
      this.email = bh.input.email;
      //appendnew_next_sd_IBLC4oDqfWCiSutT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IBLC4oDqfWCiSutT');
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
  //appendnew_flow_randomNumber_Catch
}
