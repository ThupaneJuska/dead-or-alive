// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort } from '@angular/material/sort'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { variables } from 'app/sd-services/variables'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent implements AfterViewInit {
  @ViewChild(MatSort, { read: MatSort })
  public MatSort: any = null;
  @ViewChild(MatPaginator, { read: MatPaginator })
  public MatPaginator: any = null;
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
      this.sd_1t0DhsI5kAmqEWqm(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1t0DhsI5kAmqEWqm(bh) {
    try {
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_1t0DhsI5kAmqEWqm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1t0DhsI5kAmqEWqm');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pC5QoH5IEuEP1VZe');
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
      return this.errorHandler(bh, e, 'sd_c9oNeYPHHXzRmfhx');
    }
  }

  cardsFilter(plan: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { plan };
      bh.local = {};
      bh = this.sd_cDHK0KhL1bspOFcv(bh);
      //appendnew_next_cardsFilter
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k3j5KbTZTS6UvlPT');
    }
  }

  setClientData(row: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { row };
      bh.local = {};
      bh = this.sd_iLkoHwTtrAd37cM8(bh);
      //appendnew_next_setClientData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yN9biohu3MCF1RRs');
    }
  }

  goToViewPayment(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_WnahUlnrdMBkCHsS(bh);
      //appendnew_next_goToViewPayment
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oYuxO86FKvA3jf09');
    }
  }

  getRow(index: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { index };
      bh.local = {};
      bh = this.sd_vjvOEe8HldDTwwSd(bh);
      //appendnew_next_getRow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XA6taVXHZXbQwG6V');
    }
  }
  //appendnew_flow_homeComponent_start

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      this.page.table = [];
      this.page.searchValue = '';
      this.page.backupapplicationsDatasource = undefined;
      bh = this.sd_MVMh0WBg4s6QqZUr(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lu9ZRRD821iOeI1F');
    }
  }

  sd_MVMh0WBg4s6QqZUr(bh) {
    try {
      bh = this.sd_SqQamlbgHC0CMDv2(bh);
      //appendnew_next_sd_MVMh0WBg4s6QqZUr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MVMh0WBg4s6QqZUr');
    }
  }

  sd_SqQamlbgHC0CMDv2(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_7gioBFKVWHaZ95Yw(bh);
      //appendnew_next_sd_SqQamlbgHC0CMDv2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SqQamlbgHC0CMDv2');
    }
  }

  sd_7gioBFKVWHaZ95Yw(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-users';
      bh = this.sd_RRKQV3ETWYI7Umxb(bh);
      //appendnew_next_sd_7gioBFKVWHaZ95Yw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7gioBFKVWHaZ95Yw');
    }
  }

  async sd_RRKQV3ETWYI7Umxb(bh) {
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
      bh = this.sd_sQz2RUgYmK2eNRYZ(bh);
      //appendnew_next_sd_RRKQV3ETWYI7Umxb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RRKQV3ETWYI7Umxb');
    }
  }

  sd_sQz2RUgYmK2eNRYZ(bh) {
    try {
      const page = this.page;
      bh.tableDataSource = page.result.filter((user: any) => {
        return user.role == 'client';
      });

      page.table = bh.tableDataSource;
      page.backupapplicationsDatasource = page.table;
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_sQz2RUgYmK2eNRYZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sQz2RUgYmK2eNRYZ');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page; // bh.local.dataSource = new MatTableDataSource(page.table);
      // this.page.tableData = new MatTableDataSource(this.page.table);
      bh = this.sd_XAIP7JuvVAj0wF4F(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_spTRV34Jpqa8LdXM');
    }
  }

  sd_XAIP7JuvVAj0wF4F(bh) {
    try {
      this.page.tableData.paginator = bh.pageViews.MatPaginator;
      this.page.tableData.sort = bh.pageViews.MatSort;
      this.page.backupapplicationsDatasource = undefined;
      //appendnew_next_sd_XAIP7JuvVAj0wF4F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XAIP7JuvVAj0wF4F');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yXzumKKxSbYco4AV');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.table.sort = this.MatSort;
      bh = this.sd_xKCCTWKzvgDN0rx7_3(bh);
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8gLYlYJxO77ugSE3');
    }
  }

  sd_xKCCTWKzvgDN0rx7_3(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
        MatSort: this.MatSort,
      });
      bh = this.sd_2VNGqvcKee34lvOz_3(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j9NHkoiSeBkcAAoX');
    }
  }

  sd_2VNGqvcKee34lvOz_3(bh) {
    try {
      const page = this.page;
      this.page.table.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n4SpLejeJimyp45K');
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
              (row.firstName &&
                row.firstName.toLowerCase().includes(searchValue)) ||
              (row.lastName &&
                row.lastName.toLowerCase().includes(searchValue)) ||
              (row.policyNumber &&
                row.policyNumber
                  .toString()
                  .toLowerCase()
                  .includes(searchValue)) || // Convert policyNumber to string
              (row.packageType &&
                row.packageType.toLowerCase().includes(searchValue))
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
      return this.errorHandler(bh, e, 'sd_26B83wPaElPthlwe');
    }
  }

  sd_cDHK0KhL1bspOFcv(bh) {
    try {
      const page = this.page;
      if (!page.backupapplicationsDatasource) {
        page.backupapplicationsDatasource = [...page.table];
      }

      const filteredResults = page.backupapplicationsDatasource.filter(
        (row) => {
          return (
            row.packageType &&
            row.packageType.toLowerCase() === bh.input.plan.toLowerCase()
          );
        }
      );

      page.table = filteredResults;

      //appendnew_next_sd_cDHK0KhL1bspOFcv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cDHK0KhL1bspOFcv');
    }
  }

  async sd_iLkoHwTtrAd37cM8(bh) {
    try {
      const variablesInstance: variables =
        this.__page_injector__.get(variables);

      let outputVariables = await variablesInstance.setVariable(bh.input.row);

      //appendnew_next_sd_iLkoHwTtrAd37cM8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iLkoHwTtrAd37cM8');
    }
  }

  async sd_WnahUlnrdMBkCHsS(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/view-payments');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_WnahUlnrdMBkCHsS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WnahUlnrdMBkCHsS');
    }
  }

  sd_vjvOEe8HldDTwwSd(bh) {
    try {
      const page = this.page;
      console.log('row data==>', bh.input.index);
      bh = this.sd_1IR3bJIDZWBKYOBA(bh);
      //appendnew_next_sd_vjvOEe8HldDTwwSd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vjvOEe8HldDTwwSd');
    }
  }

  sd_1IR3bJIDZWBKYOBA(bh) {
    try {
      sessionStorage.setItem('userData', JSON.stringify(bh.input.index));
      //appendnew_next_sd_1IR3bJIDZWBKYOBA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1IR3bJIDZWBKYOBA');
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
  //appendnew_flow_homeComponent_Catch
}
