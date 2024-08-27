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

  post(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Pq0Yxl5XIWgI4p7B(bh);
      //appendnew_next_post
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L4dULfUlP5xuWsPE');
    }
  }

  getSchedules(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Y8r5GKqnm2ujxEoL(bh);
      //appendnew_next_getSchedules
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G8YN2Rq1FHiszlWV');
    }
  }

  editSchedule(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_bgj0MEdiE4Tv6reS(bh);
      //appendnew_next_editSchedule
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c6G1OGckcY4fA0Pe');
    }
  }

  deleteSchedule(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_aeiaDG1cBQidkd3O(bh);
      //appendnew_next_deleteSchedule
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gfd9El1eZllQsfCX');
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
      this.page.dates = undefined;
      this.page.editDates = undefined;
      this.page.id = undefined;
      bh = this.sd_oTnwqN7gr5BF6zF1(bh);
      //appendnew_next_sd_10GshSRIqokJRDnz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_10GshSRIqokJRDnz');
    }
  }

  sd_oTnwqN7gr5BF6zF1(bh) {
    try {
      let outputVariables = this.getSchedules();

      //appendnew_next_sd_oTnwqN7gr5BF6zF1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oTnwqN7gr5BF6zF1');
    }
  }

  sd_x0AVTFDWsdElklrU(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        scheduler_here: this.scheduler_here,
      });
      bh = this.intializer(bh);
      //appendnew_next_sd_x0AVTFDWsdElklrU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x0AVTFDWsdElklrU');
    }
  }

  intializer(bh) {
    try {
      const page = this.page; // Date format
      scheduler.config.xml_date = '%Y-%m-%d %H:%i';

      // Set up time scale for day and week views
      scheduler.config.first_hour = 8; // Start at 8 AM
      scheduler.config.last_hour = 18; // End at 6 PM
      scheduler.config.time_step = 30; // 30-minute intervals

      // Enable the display of time on the y-axis
      scheduler.config.hour_size_px = 42; // Controls the height of each hour row (default is 42px)

      // Enable different views: day, week, and month
      scheduler.config.multi_day = true;
      scheduler.config.month_date = '%d %M %Y'; // Customize month view display format if needed
      scheduler.config.month_day = '%d'; // Customize day display format

      // Initialize scheduler with week view
      scheduler.init(this.scheduler_here.nativeElement, new Date(), 'week');

      scheduler.parse(this.page.result);

      bh = this.intialized(bh);
      //appendnew_next_intializer
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wEsEz7gZSdYiHaIG');
    }
  }

  intialized(bh) {
    try {
      const page = this.page;
      scheduler.attachEvent('onEventAdded', (id, ev) => {
        page.dates = ev;
        this.post();
      });

      scheduler.attachEvent('onEventChanged', (id, ev) => {
        this.editSchedule(ev);
      });

      scheduler.attachEvent('onEventSave', (id, ev, is_new) => {
        if (!is_new) {
          this.editSchedule(ev);
        }
        return true;
      });

      scheduler.attachEvent('onEventDeleted', (id, ev) => {
        console.log('Deleted Event ID:', id); // Log the id to verify it
        this.deleteSchedule({ id }); // Pass the id properly to the deleteSchedule method
      });

      //appendnew_next_intialized
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I25aKviKxJIfbnnY');
    }
  }

  sd_Pq0Yxl5XIWgI4p7B(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_d9kg0OfMw2kZnLs5(bh);
      //appendnew_next_sd_Pq0Yxl5XIWgI4p7B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Pq0Yxl5XIWgI4p7B');
    }
  }

  sd_d9kg0OfMw2kZnLs5(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'addSchedule';
      bh = this.sd_yooPhpzfRF9ArlKM(bh);
      //appendnew_next_sd_d9kg0OfMw2kZnLs5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d9kg0OfMw2kZnLs5');
    }
  }

  async sd_yooPhpzfRF9ArlKM(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.dates,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_yooPhpzfRF9ArlKM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yooPhpzfRF9ArlKM');
    }
  }

  sd_Y8r5GKqnm2ujxEoL(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_eNR5yjLK8QWsYxa3(bh);
      //appendnew_next_sd_Y8r5GKqnm2ujxEoL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y8r5GKqnm2ujxEoL');
    }
  }

  sd_eNR5yjLK8QWsYxa3(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'getSchedules';
      bh = this.sd_lWLxkvHgBt0cwZ0j(bh);
      //appendnew_next_sd_eNR5yjLK8QWsYxa3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eNR5yjLK8QWsYxa3');
    }
  }

  async sd_lWLxkvHgBt0cwZ0j(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_50SK5Qz8OnvjnZ3v(bh);
      //appendnew_next_sd_lWLxkvHgBt0cwZ0j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lWLxkvHgBt0cwZ0j');
    }
  }

  sd_50SK5Qz8OnvjnZ3v(bh) {
    try {
      const page = this.page;
      scheduler.parse(page.result);
      //appendnew_next_sd_50SK5Qz8OnvjnZ3v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_50SK5Qz8OnvjnZ3v');
    }
  }

  sd_bgj0MEdiE4Tv6reS(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_ESApyGL1mX9CQXgA(bh);
      //appendnew_next_sd_bgj0MEdiE4Tv6reS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bgj0MEdiE4Tv6reS');
    }
  }

  sd_ESApyGL1mX9CQXgA(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'edit-schedule';
      bh.payload = {
        id: bh.input.event.id,
        start_date: bh.input.event.start_date,
        end_date: bh.input.event.end_date,
        text: bh.input.event.text,
      };

      bh = this.sd_ptm2QeIOHrKrY3py(bh);
      //appendnew_next_sd_ESApyGL1mX9CQXgA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ESApyGL1mX9CQXgA');
    }
  }

  async sd_ptm2QeIOHrKrY3py(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.payload,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_ptm2QeIOHrKrY3py
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ptm2QeIOHrKrY3py');
    }
  }

  sd_aeiaDG1cBQidkd3O(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_iB2ZFlixADhzWvXA(bh);
      //appendnew_next_sd_aeiaDG1cBQidkd3O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aeiaDG1cBQidkd3O');
    }
  }

  sd_iB2ZFlixADhzWvXA(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + `delete-schedule/${bh.input.event.id}`;

      bh.payload = {
        id: bh.input.event.id,
      };

      page.id = bh.payload.id;
      console.log('variable id ==>', page.id);

      console.log('Deleting event with id -->:', bh.payload);
      console.log('Url ==>', bh.url);

      bh = this.sd_TlUvdSEpFmLp9TU5(bh);
      //appendnew_next_sd_iB2ZFlixADhzWvXA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iB2ZFlixADhzWvXA');
    }
  }

  async sd_TlUvdSEpFmLp9TU5(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'delete',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.payload,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      this.sd_xA8KprZry4Y82QAO(bh);
      //appendnew_next_sd_TlUvdSEpFmLp9TU5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TlUvdSEpFmLp9TU5');
    }
  }

  sd_xA8KprZry4Y82QAO(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.result);
      //appendnew_next_sd_xA8KprZry4Y82QAO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xA8KprZry4Y82QAO');
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
