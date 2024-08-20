// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, HostListener, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-landing',
  templateUrl: './landing.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class landingComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_ByFe7BtyVy41DnTx(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ByFe7BtyVy41DnTx(bh) {
    try {
      bh = this.sd_FJVIE0SwZ4pVtZwy(bh);
      //appendnew_next_sd_ByFe7BtyVy41DnTx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ByFe7BtyVy41DnTx');
    }
  }

  @HostListener('document:wheel', ['$event']) sd_EZA5vzCitJkCx2Z4(event) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.$event = event;
      bh = this.sd_v9PTfBLExBjAc9ot(bh);
      //appendnew_next_sd_EZA5vzCitJkCx2Z4
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EZA5vzCitJkCx2Z4');
    }
  }

  //appendnew_flow_landingComponent_start

  sd_FJVIE0SwZ4pVtZwy(bh) {
    try {
      this.page.isScrolled = false;
      //appendnew_next_sd_FJVIE0SwZ4pVtZwy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FJVIE0SwZ4pVtZwy');
    }
  }

  sd_v9PTfBLExBjAc9ot(bh) {
    try {
      const page = this.page; // console.log("check", bh.input.event)
      // console.log("w", window)
      console.log('p', page.isScrolled);
      if (window.scrollY > 1) {
        console.log('moved', window.scrollY);
        // page.toolbar.classList.add('scrolled');
        page.isScrolled = true;
      } else {
        page.isScrolled = false;
      }
      //appendnew_next_sd_v9PTfBLExBjAc9ot
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v9PTfBLExBjAc9ot');
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
  //appendnew_flow_landingComponent_Catch
}
