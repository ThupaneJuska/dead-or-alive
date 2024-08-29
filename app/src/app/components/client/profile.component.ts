// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { client_formComponent } from 'app/components/client/client_form.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-profile',
  templateUrl: './profile.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class profileComponent {
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
      this.sd_Ulek6TDKhKGRApma(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Ulek6TDKhKGRApma(bh) {
    try {
      bh = this.sd_c9BRyen4EAmFj0g9(bh);
      //appendnew_next_sd_Ulek6TDKhKGRApma
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ulek6TDKhKGRApma');
    }
  }

  editProfile(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_omOKQpOO6TFRH305(bh);
      //appendnew_next_editProfile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XJUodCaFkJL3lsDy');
    }
  }
  //appendnew_flow_profileComponent_start

  sd_c9BRyen4EAmFj0g9(bh) {
    try {
      bh = this.sd_STng32Sf7lsjxLuB(bh);
      //appendnew_next_sd_c9BRyen4EAmFj0g9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c9BRyen4EAmFj0g9');
    }
  }

  sd_STng32Sf7lsjxLuB(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_WyX8tH6lIl8lZgf8(bh);
      //appendnew_next_sd_STng32Sf7lsjxLuB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_STng32Sf7lsjxLuB');
    }
  }

  sd_WyX8tH6lIl8lZgf8(bh) {
    try {
      const page = this.page; // page.currentUser = Object.keys(page.user).map(key => {
      //     return { key: key, value: page.user[key] };
      // });

      page.currentUser = page.user;

      console.log('page user', page.currentUser);
      console.log('bene', page.currentUser.beneficaries);
      //appendnew_next_sd_WyX8tH6lIl8lZgf8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WyX8tH6lIl8lZgf8');
    }
  }

  sd_omOKQpOO6TFRH305(bh) {
    try {
      const client_formDialog = this.__page_injector__.get(MatDialog);
      const client_formDialogRef = client_formDialog.open(
        client_formComponent,
        {}
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_omOKQpOO6TFRH305');
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
  //appendnew_flow_profileComponent_Catch
}
