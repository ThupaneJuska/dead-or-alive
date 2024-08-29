// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-edit_personalInfo',
  templateUrl: './edit_personalInfo.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class edit_personalInfoComponent {
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
      this.sd_GiOL8QuTONvO1QYL(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_GiOL8QuTONvO1QYL(bh) {
    try {
      bh = this.sd_gVQaHXs38htCSDBJ(bh);
      //appendnew_next_sd_GiOL8QuTONvO1QYL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GiOL8QuTONvO1QYL');
    }
  }

  update(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_FsVk6s2tPHK0ALhx(bh);
      //appendnew_next_update
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_86yneFfUNLGPQGtt');
    }
  }

  openBeneficiries(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_5nhxWC6xzWqUMH6w(bh);
      //appendnew_next_openBeneficiries
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UbfJ8q5a8V7xLZqx');
    }
  }

  openDependencies(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_WQQZU7S1MJVM0lrL(bh);
      //appendnew_next_openDependencies
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AkNHYq7o3lsF76C8');
    }
  }
  //appendnew_flow_edit_personalInfoComponent_start

  sd_gVQaHXs38htCSDBJ(bh) {
    try {
      bh = this.sd_Y3mN2lQwd5HnEduh(bh);
      //appendnew_next_sd_gVQaHXs38htCSDBJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gVQaHXs38htCSDBJ');
    }
  }

  sd_Y3mN2lQwd5HnEduh(bh) {
    try {
      this.page.results = undefined;
      this.page.formdata = undefined;
      this.page.beneficaries1Form = undefined;
      this.page.beneficariesForm = undefined;
      this.page.dependencyForm = undefined;
      this.page.dependency1Form = undefined;
      this.page.dependency2Form = undefined;
      this.page.showbeneficaries1Form = this.page.false;
      this.page.showdependencies1Form = this.page.false;
      this.page.counter = 0;
      this.page.showdependencies2Form = this.page.false;
      bh = this.sd_JfSFbebXgEzrA6yw(bh);
      //appendnew_next_sd_Y3mN2lQwd5HnEduh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y3mN2lQwd5HnEduh');
    }
  }

  sd_JfSFbebXgEzrA6yw(bh) {
    try {
      this.page.userData = JSON.parse(sessionStorage.getItem('userData'));
      bh = this.sd_ECrTSDWg9bec5qWR(bh);
      //appendnew_next_sd_JfSFbebXgEzrA6yw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JfSFbebXgEzrA6yw');
    }
  }

  sd_ECrTSDWg9bec5qWR(bh) {
    try {
      const page = this.page;
      console.log('userData==>', page.userData);
      //console.log("depe", page.userData.dependencies)

      page.ben1 = page.userData.beneficaries[0];
      page.ben2 = page.userData.beneficaries[1];
      //console.log("ben1", page.ben1)
      //console.log("ben2", page.ben2)
      page.depe1 = page.userData.dependencies[0];
      page.depe2 = page.userData.dependencies[1];
      page.depe3 = page.userData.dependencies[2];
      //console.log("depe1", page.depe1)

      page.formdata = new FormGroup({
        firstName: new FormControl(page.userData?.firstName, [
          Validators.required,
          Validators.minLength(18),
          Validators.maxLength(25),
        ]),
        lastName: new FormControl(page.userData?.lastName, [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(80),
        ]),
        cellphone: new FormControl(page.userData?.cellphone, [
          Validators.required,
        ]),
        idNumber: new FormControl(page.userData?.idNumber || '', [
          Validators.required,
        ]),
        gender: new FormControl(page.userData?.gender || '', [
          Validators.required,
        ]),
        address: new FormControl(page.userData?.address || '', [
          Validators.required,
        ]),
        email: new FormControl(page.userData?.email || '', [
          Validators.required,
        ]),
        packageType: new FormControl(page.userData?.packageType || '', [
          Validators.required,
        ]),
      });

      page.beneficariesForm = new FormGroup({
        firstName: new FormControl(page.ben1?.firstName || '', [
          Validators.required,
        ]),
        lastName: new FormControl(page.ben1?.lastName || '', [
          Validators.required,
        ]),
        idNumber: new FormControl(page.ben1?.idNumber || '', [
          Validators.required,
        ]),
        gender: new FormControl(page.ben1?.gender || '', [Validators.required]),
        email: new FormControl(page.ben1?.email || '', [Validators.required]),
        cellphone: new FormControl(page.ben1?.cellphone || '', [
          Validators.required,
        ]),
        relationship: new FormControl(page.ben1?.relationship || '', [
          Validators.required,
        ]),
      });
      page.beneficaries1Form = new FormGroup({
        firstName: new FormControl(page.ben2.firstName),
        lastName: new FormControl(page.ben2.lastName),
        idNumber: new FormControl(page.ben2.idNumber),
        gender: new FormControl(page.ben2.gender),
        email: new FormControl(page.ben2.email),
        cellphone: new FormControl(page.ben2.cellphone),
        relationship: new FormControl(page.ben2.relationship),
      });

      page.dependencyForm = new FormGroup({
        firstName: new FormControl(page.depe1?.firstName),
        lastName: new FormControl(page.depe1?.lastName),
        gender: new FormControl(page.depe1?.gender),
        idNumber: new FormControl(page.depe1?.idNumber),
      });

      page.dependency1Form = new FormGroup({
        firstName: new FormControl(page.depe2?.firstName || '', [
          Validators.required,
        ]),
        lastName: new FormControl(page.depe2?.lastName || '', [
          Validators.required,
        ]),
        gender: new FormControl(page.depe2?.gender || '', [
          Validators.required,
        ]),
        idNumber: new FormControl(page.depe2?.idNumber || '', [
          Validators.required,
        ]),
      });

      page.dependency2Form = new FormGroup({
        firstName: new FormControl(page.depe3?.firstName || '', [
          Validators.required,
        ]),
        lastName: new FormControl(page.depe3?.lastName || '', [
          Validators.required,
        ]),
        gender: new FormControl(page.depe3?.gender || '', [
          Validators.required,
        ]),
        idNumber: new FormControl(page.depe3?.idNumber || '', [
          Validators.required,
        ]),
      });

      //combine beneficaries
      page.beneficary = [
        page.beneficariesForm.value,
        page.beneficaries1Form.value,
      ];

      //console.log("beneficaries", page.beneficaries)

      //combine dependencies
      page.dependencies = [
        page.dependencyForm.value,
        page.dependency1Form.value,
        page.dependency2Form.value,
      ];
      //console.log("dependencies", page.dependencies)

      //appendnew_next_sd_ECrTSDWg9bec5qWR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ECrTSDWg9bec5qWR');
    }
  }

  sd_FsVk6s2tPHK0ALhx(bh) {
    try {
      const page = this.page;
      bh.structuredData = page.formdata.value;

      bh.structuredData.beneficaries = page.beneficary;
      console.log(page.beneficary);

      bh.structuredData.dependencies = page.dependencies;

      page.ben2 = page.beneficaries1Form.value;
      bh.structuredData.beneficaries[1] = page.ben2;

      page.depe2 = page.dependency1Form.value;
      bh.structuredData.dependencies[1] = page.depe2;

      page.depe3 = page.dependency2Form.value;
      bh.structuredData.dependencies[2] = page.depe3;

      // console.log("form", page.formdata.value)

      // console.log("ben==>", page.ben2)
      console.log('structured data: ', bh.structuredData);
      // console.log("ben value==>", page.beneficaries1Form.value)

      bh = this.sd_esjR1J0mKRyRAwFA(bh);
      //appendnew_next_sd_FsVk6s2tPHK0ALhx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FsVk6s2tPHK0ALhx');
    }
  }

  sd_esjR1J0mKRyRAwFA(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_N2zAqcAwssUX9pC6(bh);
      //appendnew_next_sd_esjR1J0mKRyRAwFA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_esjR1J0mKRyRAwFA');
    }
  }

  sd_N2zAqcAwssUX9pC6(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'update/' + `${page.user._id}`;
      bh = this.sd_bMnbUq5poe9SegbD(bh);
      //appendnew_next_sd_N2zAqcAwssUX9pC6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N2zAqcAwssUX9pC6');
    }
  }

  async sd_bMnbUq5poe9SegbD(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.structuredData.value,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_CrzHebrXy1FWqqr3(bh);
      //appendnew_next_sd_bMnbUq5poe9SegbD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bMnbUq5poe9SegbD');
    }
  }

  sd_CrzHebrXy1FWqqr3(bh) {
    try {
      const page = this.page;
      console.log('results', page.results);

      //appendnew_next_sd_CrzHebrXy1FWqqr3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CrzHebrXy1FWqqr3');
    }
  }

  sd_5nhxWC6xzWqUMH6w(bh) {
    try {
      const page = this.page;
      page.showbeneficaries1Form = true;
      //page.hideIcon = false
      console.log('form', page.showbeneficaries1Form);

      //appendnew_next_sd_5nhxWC6xzWqUMH6w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5nhxWC6xzWqUMH6w');
    }
  }

  sd_WQQZU7S1MJVM0lrL(bh) {
    try {
      const page = this.page;
      page.showdependencies1Form = true;
      //page.hideIcon = false
      console.log('form', page.showdependencies1Form);

      page.counter++;
      if (page.counter == 2) {
        page.showdependencies2Form = true;
      }
      //appendnew_next_sd_WQQZU7S1MJVM0lrL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WQQZU7S1MJVM0lrL');
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
  //appendnew_flow_edit_personalInfoComponent_Catch
}
