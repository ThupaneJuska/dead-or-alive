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

  massege(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_nGFKFjLdJumHKzuI(bh);
      //appendnew_next_massege
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
        email: new FormControl('', Validators.required),
        title: new FormControl(''),
        massege: new FormControl('', Validators.required),
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
      console.log(page.formContact);
      //appendnew_next_sd_nGFKFjLdJumHKzuI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nGFKFjLdJumHKzuI');
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
