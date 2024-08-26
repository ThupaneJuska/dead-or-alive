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
      bh = this.sd_BZk5VYcbok7vTCa5(bh);
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

  fetchLoggedInUser(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9ULu0EXL31v1xkfC(bh);
      //appendnew_next_fetchLoggedInUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_56AGvs0kJAnAzGrL');
    }
  }

  getInitials(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_aSuB2dcKyxmaLU6f(bh);
      //appendnew_next_getInitials
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AXTFUrLCHdiuiemj');
    }
  }
  //appendnew_flow_dashboardComponent_start

  sd_BZk5VYcbok7vTCa5(bh) {
    try {
      bh = this.sd_p4UqDj3fR0sGlSfo(bh);
      //appendnew_next_sd_BZk5VYcbok7vTCa5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BZk5VYcbok7vTCa5');
    }
  }

  sd_p4UqDj3fR0sGlSfo(bh) {
    try {
      let outputVariables = this.fetchLoggedInUser();

      bh = this.sd_WD0j2CjRN6RRbsuo(bh);
      //appendnew_next_sd_p4UqDj3fR0sGlSfo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p4UqDj3fR0sGlSfo');
    }
  }

  sd_WD0j2CjRN6RRbsuo(bh) {
    try {
      this.page.navItem = 'Home';
      this.page.selectedItem = 0;
      this.page.name = this.page.user.name;
      this.page.surname = this.page.user.surname;
      bh = this.sd_pSDSROkDxza5Z3hc(bh);
      //appendnew_next_sd_WD0j2CjRN6RRbsuo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WD0j2CjRN6RRbsuo');
    }
  }

  sd_pSDSROkDxza5Z3hc(bh) {
    try {
      let outputVariables = this.getInitials();

      bh = this.sd_72RyqGrd9xSHuPJ4(bh);
      //appendnew_next_sd_pSDSROkDxza5Z3hc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pSDSROkDxza5Z3hc');
    }
  }

  sd_72RyqGrd9xSHuPJ4(bh) {
    try {
      const page = this.page;
      page.sideNav = [
        { label: 'Home', icon: 'home', route: '/dashboard/home' },
        { label: 'Claims', icon: 'description', route: '/dashboard/claims' },
        { label: 'Register Client', icon: 'edit', route: '/register' },
        { label: 'Schedules', icon: 'today', route: '/dashboard/schedules' },
        { label: 'Reports', icon: 'folder_open' },
        { label: 'Audit Logs', icon: 'trending_up' },
      ];
      //appendnew_next_sd_72RyqGrd9xSHuPJ4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_72RyqGrd9xSHuPJ4');
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

  sd_9ULu0EXL31v1xkfC(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      //appendnew_next_sd_9ULu0EXL31v1xkfC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9ULu0EXL31v1xkfC');
    }
  }

  sd_aSuB2dcKyxmaLU6f(bh) {
    try {
      const page = this.page;
      page.name = page.name.charAt(0).toUpperCase();
      page.surname = page.surname.charAt(0).toUpperCase();

      //appendnew_next_sd_aSuB2dcKyxmaLU6f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aSuB2dcKyxmaLU6f');
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
