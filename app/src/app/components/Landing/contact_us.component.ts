// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, HostListener, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-contact_us',
  templateUrl: './contact_us.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class contact_usComponent {
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
      this.sd_hd5ID4SyAIDQ6ziH(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_hd5ID4SyAIDQ6ziH(bh) {
    try {
      bh = this.sd_iNYxRsu8lErBTFfW(bh);
      //appendnew_next_sd_hd5ID4SyAIDQ6ziH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hd5ID4SyAIDQ6ziH');
    }
  }

  @HostListener('document:wheel', ['$event']) sd_T4TpJcBpCObCC90t(event) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.$event = event;
      bh = this.sd_Rbe49ktoIz9qSgrZ(bh);
      //appendnew_next_sd_T4TpJcBpCObCC90t
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T4TpJcBpCObCC90t');
    }
  }

  sendMessage(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_nGFKFjLdJumHKzuI(bh);
      //appendnew_next_sendMessage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ApSpYIma5PeptqEU');
    }
  }
  //appendnew_flow_contact_usComponent_start

  sd_iNYxRsu8lErBTFfW(bh) {
    try {
      bh = this.sd_UJhEms9XJlOq7Ybs(bh);
      //appendnew_next_sd_iNYxRsu8lErBTFfW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iNYxRsu8lErBTFfW');
    }
  }

  sd_UJhEms9XJlOq7Ybs(bh) {
    try {
      this.page.isScrolled = false;
      this.page.loader = undefined;
      bh = this.sd_D4WnzTN0EiFEzzs2(bh);
      //appendnew_next_sd_UJhEms9XJlOq7Ybs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UJhEms9XJlOq7Ybs');
    }
  }

  sd_D4WnzTN0EiFEzzs2(bh) {
    try {
      const page = this.page;
      page.formContact = new FormGroup({
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/),
        ]),
        cellPhone: new FormControl('', [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern(/^0(6|7|8){1}[0-9]{1}[0-9]{7}$/),
        ]),
        title: new FormControl(''),
        message: new FormControl('', Validators.required),
      });
      //appendnew_next_sd_D4WnzTN0EiFEzzs2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_D4WnzTN0EiFEzzs2');
    }
  }

  sd_Rbe49ktoIz9qSgrZ(bh) {
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
      //appendnew_next_sd_Rbe49ktoIz9qSgrZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Rbe49ktoIz9qSgrZ');
    }
  }

  sd_nGFKFjLdJumHKzuI(bh) {
    try {
      const page = this.page;
      console.log('Form of contact us', page.formContact.invalid);
      bh = this.sd_88fZOmalHjiMZPqO(bh);
      //appendnew_next_sd_nGFKFjLdJumHKzuI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nGFKFjLdJumHKzuI');
    }
  }

  async sd_88fZOmalHjiMZPqO(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.formContact.invalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Dpc1pJSwsHY8XYAM(bh);
      } else {
        bh = await this.sd_EIrEnueVaA5tIDVX(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_88fZOmalHjiMZPqO');
    }
  }

  sd_Dpc1pJSwsHY8XYAM(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please fill all required fields', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_Dpc1pJSwsHY8XYAM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Dpc1pJSwsHY8XYAM');
    }
  }

  sd_EIrEnueVaA5tIDVX(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_pno9V6rSOhsgflTA(bh);
      //appendnew_next_sd_EIrEnueVaA5tIDVX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EIrEnueVaA5tIDVX');
    }
  }

  sd_pno9V6rSOhsgflTA(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'send-message';
      page.loader = true;
      bh = this.sd_0OoQ61HMv4DdUhlx(bh);
      //appendnew_next_sd_pno9V6rSOhsgflTA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pno9V6rSOhsgflTA');
    }
  }

  async sd_0OoQ61HMv4DdUhlx(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.formContact.value,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_0V4RBAmL1MP1XOzC(bh);
      //appendnew_next_sd_0OoQ61HMv4DdUhlx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0OoQ61HMv4DdUhlx');
    }
  }

  sd_0V4RBAmL1MP1XOzC(bh) {
    try {
      const page = this.page;
      console.log('Sent message', page.results);
      page.formContact.reset();
      page.loader = false;
      bh = this.sd_0CO7LXCCjcyRhTGJ(bh);
      //appendnew_next_sd_0V4RBAmL1MP1XOzC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0V4RBAmL1MP1XOzC');
    }
  }

  sd_0CO7LXCCjcyRhTGJ(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Enquiry successfully sent', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_0Yx53dxzhkmbNNcf(bh);
      //appendnew_next_sd_0CO7LXCCjcyRhTGJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0CO7LXCCjcyRhTGJ');
    }
  }

  async sd_0Yx53dxzhkmbNNcf(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/DOAServices');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_0Yx53dxzhkmbNNcf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0Yx53dxzhkmbNNcf');
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
  //appendnew_flow_contact_usComponent_Catch
}
