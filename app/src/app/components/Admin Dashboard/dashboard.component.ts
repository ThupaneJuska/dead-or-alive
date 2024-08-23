// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dashboard',
  templateUrl: './dashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dashboardComponent {
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
      this.sd_4EgQNEX4lGDSV4H7(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_4EgQNEX4lGDSV4H7(bh) {
    try {
      bh = this.sd_Fes81ouNq6OVHJG2(bh);
      //appendnew_next_sd_4EgQNEX4lGDSV4H7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4EgQNEX4lGDSV4H7');
    }
  }

  navItems(index: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { index };
      bh.local = {};
      bh = this.sd_MzHFd7vzx5yvrY4O(bh);
      //appendnew_next_navItems
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_daPh54ERMYaeDgOn');
    }
  }
  //appendnew_flow_dashboardComponent_start

  sd_Fes81ouNq6OVHJG2(bh) {
    try {
      this.page.navItem = 'Home';
      this.page.selectedItem = 0;
      bh = this.sd_BZk5VYcbok7vTCa5(bh);
      //appendnew_next_sd_Fes81ouNq6OVHJG2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fes81ouNq6OVHJG2');
    }
  }

  sd_BZk5VYcbok7vTCa5(bh) {
    try {
      bh = this.sd_6vIzrnwUGbfiq4Y8(bh);
      //appendnew_next_sd_BZk5VYcbok7vTCa5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BZk5VYcbok7vTCa5');
    }
  }

  sd_6vIzrnwUGbfiq4Y8(bh) {
    try {
      const page = this.page;
      page.sideNav = [
        { label: 'Home', icon: 'home', route: '/dashboard/home' },
        { label: 'Claims', icon: 'description' },
        { label: 'Register Client', icon: 'edit' },
        { label: 'Schedules', icon: 'today' },
        { label: 'Reports', icon: 'folder_open' },
      ];
      //appendnew_next_sd_6vIzrnwUGbfiq4Y8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6vIzrnwUGbfiq4Y8');
    }
  }

  sd_MzHFd7vzx5yvrY4O(bh) {
    try {
      const page = this.page;
      page.navItem = bh.input.index.label;
      //appendnew_next_sd_MzHFd7vzx5yvrY4O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MzHFd7vzx5yvrY4O');
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
  //appendnew_flow_dashboardComponent_Catch
}
