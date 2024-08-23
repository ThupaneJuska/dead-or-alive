// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  ViewChild,
} from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { scheduler } from 'dhtmlx-scheduler'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-schedules',
  templateUrl: './schedules.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class schedulesComponent implements AfterViewInit {
  @ViewChild('scheduler_here', { read: ElementRef })
  public scheduler_here: any = null;
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
      this.sd_1wJes7dj0eqwIzcE(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1wJes7dj0eqwIzcE(bh) {
    try {
      bh = this.sd_D2LECCxuE48GweRQ(bh);
      //appendnew_next_sd_1wJes7dj0eqwIzcE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1wJes7dj0eqwIzcE');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_x0AVTFDWsdElklrU(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6rBp6Sr2hhMRgx1O');
    }
  }

  //appendnew_flow_schedulesComponent_start

  sd_D2LECCxuE48GweRQ(bh) {
    try {
      bh = this.sd_3W3ZKsmzsmz4x7Yf(bh);
      //appendnew_next_sd_D2LECCxuE48GweRQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_D2LECCxuE48GweRQ');
    }
  }

  sd_3W3ZKsmzsmz4x7Yf(bh) {
    try {
      this.page.viewChild = ViewChild;
      this.page.elementRef = ElementRef;
      bh = this.sd_10GshSRIqokJRDnz(bh);
      //appendnew_next_sd_3W3ZKsmzsmz4x7Yf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3W3ZKsmzsmz4x7Yf');
    }
  }

  sd_10GshSRIqokJRDnz(bh) {
    try {
      //appendnew_next_sd_10GshSRIqokJRDnz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_10GshSRIqokJRDnz');
    }
  }

  sd_x0AVTFDWsdElklrU(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        scheduler_here: this.scheduler_here,
      });
      bh = this.intialize(bh);
      //appendnew_next_sd_x0AVTFDWsdElklrU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x0AVTFDWsdElklrU');
    }
  }

  intialize(bh) {
    try {
      const page = this.page;
      scheduler.config.xml_date = '%Y-%m-%d %H:%i';
      // Set up time scale for day and week views
      scheduler.config.first_hour = 8; // Start at 8 AM
      scheduler.config.last_hour = 18; // End at 6 PM
      scheduler.config.time_step = 30; // 30-minute intervals

      // Enable different views: day, week, and month
      scheduler.config.multi_day = true;

      // Initialize scheduler with month view
      scheduler.init(this.scheduler_here.nativeElement, new Date(), 'month');
      //appendnew_next_intialize
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wEsEz7gZSdYiHaIG');
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
  //appendnew_flow_schedulesComponent_Catch
}
