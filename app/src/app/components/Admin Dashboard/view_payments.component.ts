// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-view_payments',
  templateUrl: './view_payments.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class view_paymentsComponent {
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
      this.sd_8ERDj4aRLjWBU2zY(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_8ERDj4aRLjWBU2zY(bh) {
    try {
      bh = this.sd_Zv2T4TVj8X1FFd3H(bh);
      //appendnew_next_sd_8ERDj4aRLjWBU2zY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8ERDj4aRLjWBU2zY');
    }
  }

  //appendnew_flow_view_paymentsComponent_start

  sd_Zv2T4TVj8X1FFd3H(bh) {
    try {
      //appendnew_next_sd_Zv2T4TVj8X1FFd3H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zv2T4TVj8X1FFd3H');
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
  //appendnew_flow_view_paymentsComponent_Catch
}
