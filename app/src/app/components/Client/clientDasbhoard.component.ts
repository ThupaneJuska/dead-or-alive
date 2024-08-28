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
  selector: 'bh-clientDasbhoard',
  templateUrl: './clientDasbhoard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class clientDasbhoardComponent {
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
      this.sd_C84EzFuQLOc7Ay9z(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_C84EzFuQLOc7Ay9z(bh) {
    try {
      bh = this.sd_bAvzTsY9PtbZGAd9(bh);
      //appendnew_next_sd_C84EzFuQLOc7Ay9z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C84EzFuQLOc7Ay9z');
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
      bh = this.sd_OBeE6JyxXZbYRb71(bh);
      //appendnew_next_navItems
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HIVVI0lWlBnXLDKq');
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
      bh = this.sd_ZKiBWGzTMiuxequ8(bh);
      //appendnew_next_fetchLoggedInUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SS1Hp8pDGm5GJhPO');
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
      bh = this.sd_DGRVLYYk7tZskvqn(bh);
      //appendnew_next_getInitials
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VnU30ITVqDgcgx4o');
    }
  }
  //appendnew_flow_clientDasbhoardComponent_start

  sd_bAvzTsY9PtbZGAd9(bh) {
    try {
      bh = this.sd_TpHSdwI2PToOajmB(bh);
      //appendnew_next_sd_bAvzTsY9PtbZGAd9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bAvzTsY9PtbZGAd9');
    }
  }

  sd_TpHSdwI2PToOajmB(bh) {
    try {
      let outputVariables = this.fetchLoggedInUser();

      bh = this.sd_tw2Gv2IcebnfHypQ(bh);
      //appendnew_next_sd_TpHSdwI2PToOajmB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TpHSdwI2PToOajmB');
    }
  }

  sd_tw2Gv2IcebnfHypQ(bh) {
    try {
      this.page.navItem = 'Home';
      this.page.selectedItem = 0;
      this.page.name = this.page.user.firstName;
      this.page.surname = this.page.user.lastName;
      bh = this.sd_KhTwW46eG3z76W1L(bh);
      //appendnew_next_sd_tw2Gv2IcebnfHypQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tw2Gv2IcebnfHypQ');
    }
  }

  sd_KhTwW46eG3z76W1L(bh) {
    try {
      let outputVariables = this.getInitials();

      bh = this.sd_gTpAdpgdhVuSsnsk(bh);
      //appendnew_next_sd_KhTwW46eG3z76W1L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KhTwW46eG3z76W1L');
    }
  }

  sd_gTpAdpgdhVuSsnsk(bh) {
    try {
      const page = this.page;
      page.sideNav = [
        { label: 'Plan details', icon: 'description', route: '/plan-details' },
        { label: 'Payment History', icon: 'edit', route: '/payment-history' },
        { label: 'Claims', icon: 'today', route: '/claims' },
      ];

      //appendnew_next_sd_gTpAdpgdhVuSsnsk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gTpAdpgdhVuSsnsk');
    }
  }

  sd_OBeE6JyxXZbYRb71(bh) {
    try {
      const page = this.page;
      page.navItem = bh.input.index.label;
      //appendnew_next_sd_OBeE6JyxXZbYRb71
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OBeE6JyxXZbYRb71');
    }
  }

  sd_ZKiBWGzTMiuxequ8(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      //appendnew_next_sd_ZKiBWGzTMiuxequ8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZKiBWGzTMiuxequ8');
    }
  }

  sd_DGRVLYYk7tZskvqn(bh) {
    try {
      const page = this.page;
      page.name = (page.user.firstName?.charAt(0) || '').toUpperCase();
      page.surname = (page.user.lastName?.charAt(0) || '').toUpperCase();
      //appendnew_next_sd_DGRVLYYk7tZskvqn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DGRVLYYk7tZskvqn');
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
  //appendnew_flow_clientDasbhoardComponent_Catch
}
