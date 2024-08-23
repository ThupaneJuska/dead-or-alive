// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
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
import { randomNumber } from 'app/sd-services/randomNumber'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-register',
  templateUrl: './register.template.html',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true, displayDefaultIndicatorType: false },
    },
    //appendnew_element_providers
  ],
})
export class registerComponent {
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
      this.sd_XNtrphGkAEvTnJkY(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_XNtrphGkAEvTnJkY(bh) {
    try {
      bh = this.sd_21M8r6uomCRnf45y(bh);
      //appendnew_next_sd_XNtrphGkAEvTnJkY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XNtrphGkAEvTnJkY');
    }
  }

  upload(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_l6SiwAtJD0vilMVM(bh);
      //appendnew_next_upload
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4jpHOcBeJ9oMy5gC');
    }
  }

  showBeneficaryForm2(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_78h5y7Mch4eGS5T9(bh);
      //appendnew_next_showBeneficaryForm2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4yeHIdvBwIqJ34hG');
    }
  }

  showDependencyForm2(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_NscpuoQXRbfmWzVJ(bh);
      //appendnew_next_showDependencyForm2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZIboZ8CwblF94SEp');
    }
  }

  confirm(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_5FvUEd3TbUxOODvU(bh);
      //appendnew_next_confirm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mfn5TNjxg1EDrkux');
    }
  }

  goToBackend(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_RqtM6SLXw5cveimP(bh);
      //appendnew_next_goToBackend
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8TYG7d0QanhgKFMo');
    }
  }

  getFromBackend(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Piy2OPiATT4VA7Dk(bh);
      //appendnew_next_getFromBackend
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZSLYaSB5AEVYwkSZ');
    }
  }
  //appendnew_flow_registerComponent_start

  sd_21M8r6uomCRnf45y(bh) {
    try {
      bh = this.sd_7K2noVNldq6MAAbT(bh);
      //appendnew_next_sd_21M8r6uomCRnf45y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_21M8r6uomCRnf45y');
    }
  }

  sd_7K2noVNldq6MAAbT(bh) {
    try {
      this.page.showBeneficaryForm2 = false;
      this.page.showDependencyForm = false;
      this.page.counter = 0;
      this.page.showDependencyForm1 = false;
      this.page.hideIcon = true;
      this.page.hideIcon2 = true;
      bh = this.sd_qjesZ9T9zyxXQtfe(bh);
      //appendnew_next_sd_7K2noVNldq6MAAbT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7K2noVNldq6MAAbT');
    }
  }

  sd_qjesZ9T9zyxXQtfe(bh) {
    try {
      const page = this.page;
      page.fileForm = new FormGroup({
        _id: new FormControl(''),
        filename: new FormControl(''),
        chunkSize: new FormControl(''),
        length: new FormControl(''),
      });

      page.beneficaryForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        gender: new FormControl('', [Validators.required]),
        idNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(13),
        ]),
        cellphone: new FormControl('', [Validators.required]),
        relationship: new FormControl('', [Validators.required]),
      });

      page.beneficaryForm2 = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        gender: new FormControl('', [Validators.required]),
        idNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(13),
        ]),
        cellphone: new FormControl('', [Validators.required]),
        relationship: new FormControl('', [Validators.required]),
      });

      page.dependencyForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        idNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(13),
        ]),
      });

      page.dependencyForm2 = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        idNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(13),
        ]),
      });

      page.dependencyForm3 = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        idNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(13),
        ]),
      });

      page.clientForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        gender: new FormControl('', [Validators.required]),
        idNumber: new FormControl('', [
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(13),
        ]),
        cellphone: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        packageType: new FormControl('', [Validators.required]),
        file2: new FormControl('', [Validators.required]),
        file: page.fileForm,
      });

      page.package = [
        { value: 'Package 1', viewValue: 'Package 1' },
        { value: 'Package 2', viewValue: 'Package 2' },
        { value: 'Package 3', viewValue: 'Package 3' },
      ];

      page.genders = [
        { value: 'Male', viewValue: 'Male' },
        { value: 'Female', viewValue: 'Female' },
      ];
      //appendnew_next_sd_qjesZ9T9zyxXQtfe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qjesZ9T9zyxXQtfe');
    }
  }

  sd_l6SiwAtJD0vilMVM(bh) {
    try {
      const page = this.page;
      bh.upload = document.getElementById('upload') as HTMLInputElement;
      if (bh.upload) {
        bh.upload.addEventListener('change', (event: Event) => {
          const input = event.target as HTMLInputElement;
          if (input.files && input.files.length > 0) {
            bh.file = input.files[0];
            page.uploadedFile = new FormData();
            page.uploadedFile.append('file', bh.file);
            this.goToBackend();
          }
        });
      }

      //appendnew_next_sd_l6SiwAtJD0vilMVM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l6SiwAtJD0vilMVM');
    }
  }

  sd_78h5y7Mch4eGS5T9(bh) {
    try {
      const page = this.page;
      page.showBeneficaryForm2 = true;
      page.hideIcon = false;
      //appendnew_next_sd_78h5y7Mch4eGS5T9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_78h5y7Mch4eGS5T9');
    }
  }

  sd_NscpuoQXRbfmWzVJ(bh) {
    try {
      const page = this.page;
      page.showDependencyForm = true;
      page.counter++;
      if (page.counter == 2) {
        page.showDependencyForm1 = true;
        page.hideIcon2 = false;
      }
      //appendnew_next_sd_NscpuoQXRbfmWzVJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NscpuoQXRbfmWzVJ');
    }
  }

  sd_5FvUEd3TbUxOODvU(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_uaLP5pYLb4eJZafw(bh);
      //appendnew_next_sd_5FvUEd3TbUxOODvU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5FvUEd3TbUxOODvU');
    }
  }

  async sd_uaLP5pYLb4eJZafw(bh) {
    try {
      const randomNumberInstance: randomNumber =
        this.__page_injector__.get(randomNumber);

      let outputVariables = await randomNumberInstance.generateRandomNumber(
        this.page.clientForm.email
      );
      bh.random = outputVariables.local.random;

      bh = this.sd_lL2rQ9BIoBqeZaCn(bh);
      //appendnew_next_sd_uaLP5pYLb4eJZafw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uaLP5pYLb4eJZafw');
    }
  }

  sd_lL2rQ9BIoBqeZaCn(bh) {
    try {
      const page = this.page;
      page.clientForm.value.file._id = page.userFile._id;
      page.clientForm.value.file.filename = page.userFile.filename;
      page.clientForm.value.file.length = page.userFile.length;
      page.clientForm.value.file.chunkSize = page.userFile.chunkSize;

      bh.url = page.ssdUrl + 'register';

      delete page.clientForm.file2;

      bh.body = page.clientForm.value;
      bh.body.role = 'client';
      bh.body.policyNumber = bh.random;
      bh.body.password = bh.random.toString();
      bh.body.beneficaries = [
        page.beneficaryForm.value,
        page.beneficaryForm2.value,
      ];
      bh.body.dependencies = [
        page.dependencyForm.value,
        page.dependencyForm2.value,
        page.dependencyForm3.value,
      ];

      bh = this.sd_feAbYysgRL7fgGGm(bh);
      //appendnew_next_sd_lL2rQ9BIoBqeZaCn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lL2rQ9BIoBqeZaCn');
    }
  }

  async sd_feAbYysgRL7fgGGm(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_QnaW4yCDpoY9Cu3b(bh);
      //appendnew_next_sd_feAbYysgRL7fgGGm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_feAbYysgRL7fgGGm');
    }
  }

  sd_QnaW4yCDpoY9Cu3b(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Client Registered', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_IKDCeaKDglhchiOD(bh);
      //appendnew_next_sd_QnaW4yCDpoY9Cu3b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QnaW4yCDpoY9Cu3b');
    }
  }

  async sd_IKDCeaKDglhchiOD(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/dashboard/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_IKDCeaKDglhchiOD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IKDCeaKDglhchiOD');
    }
  }

  sd_RqtM6SLXw5cveimP(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_XSPvXcLY8nKgPJZk(bh);
      //appendnew_next_sd_RqtM6SLXw5cveimP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RqtM6SLXw5cveimP');
    }
  }

  sd_XSPvXcLY8nKgPJZk(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload';

      bh = this.sd_Z0u2uGd5YO9ydjps(bh);
      //appendnew_next_sd_XSPvXcLY8nKgPJZk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XSPvXcLY8nKgPJZk');
    }
  }

  async sd_Z0u2uGd5YO9ydjps(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_vR3yJnYv3XKsLrq8(bh);
      //appendnew_next_sd_Z0u2uGd5YO9ydjps
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z0u2uGd5YO9ydjps');
    }
  }

  sd_vR3yJnYv3XKsLrq8(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('file', JSON.stringify(bh.result));
      this.getFromBackend();
      bh = this.sd_em3ylD24zJZE2On9(bh);
      //appendnew_next_sd_vR3yJnYv3XKsLrq8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vR3yJnYv3XKsLrq8');
    }
  }

  sd_em3ylD24zJZE2On9(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Upload Successful', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_em3ylD24zJZE2On9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_em3ylD24zJZE2On9');
    }
  }

  sd_Piy2OPiATT4VA7Dk(bh) {
    try {
      this.page.userFile = JSON.parse(sessionStorage.getItem('file'));
      //appendnew_next_sd_Piy2OPiATT4VA7Dk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Piy2OPiATT4VA7Dk');
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
  //appendnew_flow_registerComponent_Catch
}
