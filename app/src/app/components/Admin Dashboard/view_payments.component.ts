// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { payment_formComponent } from 'app/components/Admin Dashboard/payment_form.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { variables } from 'app/sd-services/variables'; //_splitter_
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
      bh = this.getService(bh);
      //appendnew_next_sd_8ERDj4aRLjWBU2zY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8ERDj4aRLjWBU2zY');
    }
  }

  getPayments(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_wgXg74zMQAWEBLTw(bh);
      //appendnew_next_getPayments
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hitXP2aD8V5Moowo');
    }
  }

  onFilter(filterEvent: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent };
      bh.local = {};
      bh = this.sd_iBlFYTlpoczCmWts_5(bh);
      //appendnew_next_onFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MgZZry3yYloPBFnZ');
    }
  }

  openPaymentForm(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_gfsbZ8Sd5skDsAgI(bh);
      //appendnew_next_openPaymentForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_42iesCMKtG2KiN8V');
    }
  }
  //appendnew_flow_view_paymentsComponent_start

  async getService(bh) {
    try {
      const variablesInstance: variables =
        this.__page_injector__.get(variables);

      let outputVariables = await variablesInstance.getVariable();
      this.page.userData = outputVariables.local.data;

      bh = this.getPay(bh);
      //appendnew_next_getService
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zBN1wooAp0qdf8a7');
    }
  }

  getPay(bh) {
    try {
      let outputVariables = this.getPayments();

      bh = this.sd_SlpYk6IiKJZiKpGd(bh);
      //appendnew_next_getPay
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bO4PwXb9Xdw0OOos');
    }
  }

  sd_SlpYk6IiKJZiKpGd(bh) {
    try {
      this.page.userData = this.page.userData;
      this.page.backupapplicationsDatasource = undefined;
      this.page.loading = false;
      this.page.table = this.page.table;
      bh = this.sd_cB8uLKsTNJPOdGmG(bh);
      //appendnew_next_sd_SlpYk6IiKJZiKpGd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SlpYk6IiKJZiKpGd');
    }
  }

  sd_cB8uLKsTNJPOdGmG(bh) {
    try {
      let outputVariables = this.getPayments();

      //appendnew_next_sd_cB8uLKsTNJPOdGmG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cB8uLKsTNJPOdGmG');
    }
  }

  sd_wgXg74zMQAWEBLTw(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_jJBD6QAaFSK0aGUV(bh);
      //appendnew_next_sd_wgXg74zMQAWEBLTw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wgXg74zMQAWEBLTw');
    }
  }

  sd_jJBD6QAaFSK0aGUV(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-monthly-payments';

      page.loading = true;
      bh = this.sd_lwCNYItgPe4iBb7i(bh);
      //appendnew_next_sd_jJBD6QAaFSK0aGUV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jJBD6QAaFSK0aGUV');
    }
  }

  async sd_lwCNYItgPe4iBb7i(bh) {
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
      bh = this.sd_a7UeVsjQcHMmLMcX(bh);
      //appendnew_next_sd_lwCNYItgPe4iBb7i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lwCNYItgPe4iBb7i');
    }
  }

  sd_a7UeVsjQcHMmLMcX(bh) {
    try {
      const page = this.page;
      page.table = page.result.filter((user: any) => {
        return (page.userData.policyNumber = user.policyNumber);
      });

      page.backupapplicationsDatasource = page.table;
      console.log('from api', page.table);

      page.loading = false;

      //appendnew_next_sd_a7UeVsjQcHMmLMcX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a7UeVsjQcHMmLMcX');
    }
  }

  sd_iBlFYTlpoczCmWts_5(bh) {
    try {
      const page = this.page;
      if (!page.backupapplicationsDatasource) {
        page.backupapplicationsDatasource = [...page.table];
      }

      const searchValue = (
        bh.input.filterEvent.target as HTMLInputElement
      ).value
        .trim()
        .toLowerCase();
      page.searchValue = searchValue;

      if (searchValue) {
        const searchResults = page.backupapplicationsDatasource.filter(
          (row) => {
            return (
              (row.amount && row.amount.toLowerCase().includes(searchValue)) ||
              (row.date && row.date.toLowerCase().includes(searchValue))
            );
          }
        );
        page.table = searchResults;
      } else {
        // Reset to original data if search value is empty
        page.table = [...page.backupapplicationsDatasource];
      }

      //appendnew_next_sd_iBlFYTlpoczCmWts_5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sJPKFnOc5xM7bGTZ');
    }
  }

  sd_gfsbZ8Sd5skDsAgI(bh) {
    try {
      const payment_formDialog = this.__page_injector__.get(MatDialog);
      const payment_formDialogRef = payment_formDialog.open(
        payment_formComponent,
        { height: '75vh', width: '50vw' }
      );
      payment_formDialogRef.beforeClosed().subscribe((event) => {
        this.sd_VtI0lmylmkampM9c(bh);
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gfsbZ8Sd5skDsAgI');
    }
  }

  sd_VtI0lmylmkampM9c(bh) {
    try {
      let outputVariables = this.getPayments();

      //appendnew_next_sd_VtI0lmylmkampM9c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VtI0lmylmkampM9c');
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
