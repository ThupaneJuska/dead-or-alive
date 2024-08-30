// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector, OnChanges, SimpleChanges } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { variables } from 'app/sd-services/variables'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-payment_form',
  templateUrl: './payment_form.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class payment_formComponent implements OnChanges {
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
      this.sd_pv9WDQQTAb5TdcRu(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_pv9WDQQTAb5TdcRu(bh) {
    try {
      bh = this.sd_1mWJDUJMcNFR2L50(bh);
      //appendnew_next_sd_pv9WDQQTAb5TdcRu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pv9WDQQTAb5TdcRu');
    }
  }

  packageType(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ZcCdk3M89Mu75WMQ(bh);
      //appendnew_next_packageType
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cKmiPodGA3tDIBUK');
    }
  }

  logPayment(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_VcaQ1xF5Yh44J1gA(bh);
      //appendnew_next_logPayment
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v3rJupcK1WyIppav');
    }
  }

  close(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_gu3HmZZofEmUAShG(bh);
      //appendnew_next_close
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lTyEMTbjU8Va6qET');
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.changes = changes;
      bh = this.getService2(bh);
      //appendnew_next_ngOnChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0i3SdyDhQNDUdx2z');
    }
  }

  //appendnew_flow_payment_formComponent_start

  sd_1mWJDUJMcNFR2L50(bh) {
    try {
      this.page.userData = undefined;
      this.page.amount = undefined;
      bh = this.sd_6JYmM4GgmH550ZuL(bh);
      //appendnew_next_sd_1mWJDUJMcNFR2L50
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1mWJDUJMcNFR2L50');
    }
  }

  sd_6JYmM4GgmH550ZuL(bh) {
    try {
      bh = this.getService(bh);
      //appendnew_next_sd_6JYmM4GgmH550ZuL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6JYmM4GgmH550ZuL');
    }
  }

  async getService(bh) {
    try {
      const variablesInstance: variables =
        this.__page_injector__.get(variables);

      let outputVariables = await variablesInstance.getVariable();
      this.page.userData = outputVariables.local.data;

      bh = this.sd_pHYVQ6qVqoPeCrHB(bh);
      //appendnew_next_getService
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wFLj92XcWVhb5iwB');
    }
  }

  sd_pHYVQ6qVqoPeCrHB(bh) {
    try {
      let outputVariables = this.packageType();

      bh = this.sd_U9h9VOBbE3QabBzk(bh);
      //appendnew_next_sd_pHYVQ6qVqoPeCrHB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pHYVQ6qVqoPeCrHB');
    }
  }

  sd_U9h9VOBbE3QabBzk(bh) {
    try {
      this.page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_LV7KwD0nrfUeJXen(bh);
      //appendnew_next_sd_U9h9VOBbE3QabBzk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U9h9VOBbE3QabBzk');
    }
  }

  sd_LV7KwD0nrfUeJXen(bh) {
    try {
      const page = this.page;
      page.paymentForm = new FormGroup({
        name: new FormControl(page.userData.firstName),
        surname: new FormControl(page.userData.lastName),
        policyNumber: new FormControl(page.userData.policyNumber),
        amount: new FormControl(page.amount),
        loggedBY: new FormControl(page.loggedInUser.email),
        event: new FormControl('', [Validators.required]),
      });

      console.log('form value', page.paymentForm.value);
      //appendnew_next_sd_LV7KwD0nrfUeJXen
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LV7KwD0nrfUeJXen');
    }
  }

  sd_ZcCdk3M89Mu75WMQ(bh) {
    try {
      const page = this.page;
      if (page.userData.packageType == 'Package 1') {
        page.amount = 90;
      } else if (page.userData.packageType == 'Package 2') {
        page.amount = 110;
      } else {
        page.amount = 130;
      }

      //appendnew_next_sd_ZcCdk3M89Mu75WMQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZcCdk3M89Mu75WMQ');
    }
  }

  sd_VcaQ1xF5Yh44J1gA(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_b3DUrK8OijuTIvWT(bh);
      //appendnew_next_sd_VcaQ1xF5Yh44J1gA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VcaQ1xF5Yh44J1gA');
    }
  }

  sd_b3DUrK8OijuTIvWT(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'log-payment';
      bh = this.sd_K8VOPjLQKX8kul5n(bh);
      //appendnew_next_sd_b3DUrK8OijuTIvWT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b3DUrK8OijuTIvWT');
    }
  }

  async sd_K8VOPjLQKX8kul5n(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.paymentForm.value,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_mEg74lKeqcx440aD(bh);
      //appendnew_next_sd_K8VOPjLQKX8kul5n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K8VOPjLQKX8kul5n');
    }
  }

  sd_mEg74lKeqcx440aD(bh) {
    try {
      let outputVariables = this.close();

      //appendnew_next_sd_mEg74lKeqcx440aD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mEg74lKeqcx440aD');
    }
  }

  sd_gu3HmZZofEmUAShG(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.system);

      //appendnew_next_sd_gu3HmZZofEmUAShG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gu3HmZZofEmUAShG');
    }
  }

  async getService2(bh) {
    try {
      const variablesInstance: variables =
        this.__page_injector__.get(variables);

      let outputVariables = await variablesInstance.getVariable();
      this.page.userData = outputVariables.local.data;

      //appendnew_next_getService2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IJvi4mnr0YOvwVXV');
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
  //appendnew_flow_payment_formComponent_Catch
}
