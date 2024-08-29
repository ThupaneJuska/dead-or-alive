// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-payment_formComponent
import { payment_formComponent } from '../components/Admin Dashboard/payment_form.component';
//CORE_REFERENCE_IMPORT-variables
import { variables } from '../sd-services/variables';
//CORE_REFERENCE_IMPORT-view_paymentsComponent
import { view_paymentsComponent } from '../components/Admin Dashboard/view_payments.component';
//CORE_REFERENCE_IMPORT-clientDasbhoardComponent
import { clientDasbhoardComponent } from '../components/Client/clientDasbhoard.component';
//CORE_REFERENCE_IMPORT-claims_registerComponent
import { claims_registerComponent } from '../components/Admin claims/claims_register.component';
//CORE_REFERENCE_IMPORT-authorizationService
import { authorizationService } from '../services/authorization/authorization.service';
//CORE_REFERENCE_IMPORT-claimsComponent
import { claimsComponent } from '../components/Admin Dashboard/claims.component';
//CORE_REFERENCE_IMPORT-schedulesComponent
import { schedulesComponent } from '../components/Admin Dashboard/schedules.component';
//CORE_REFERENCE_IMPORT-randomNumber
import { randomNumber } from '../sd-services/randomNumber';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/Admin Dashboard/home.component';
//CORE_REFERENCE_IMPORT-loaderComponent
import { loaderComponent } from '../components/loader/loader.component';
//CORE_REFERENCE_IMPORT-reset_passwordComponent
import { reset_passwordComponent } from '../components/Authentication/reset_password.component';
//CORE_REFERENCE_IMPORT-otp
import { otp } from '../sd-services/otp';
//CORE_REFERENCE_IMPORT-verify_codeComponent
import { verify_codeComponent } from '../components/Authentication/verify_code.component';
//CORE_REFERENCE_IMPORT-forgot_passwordComponent
import { forgot_passwordComponent } from '../components/Authentication/forgot_password.component';
//CORE_REFERENCE_IMPORT-contact_usComponent
import { contact_usComponent } from '../components/Landing/contact_us.component';
//CORE_REFERENCE_IMPORT-landingComponent
import { landingComponent } from '../components/Landing/landing.component';
//CORE_REFERENCE_IMPORT-dashboardComponent
import { dashboardComponent } from '../components/Admin Dashboard/dashboard.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/Authentication/login.component';
//CORE_REFERENCE_IMPORT-registerComponent
import { registerComponent } from '../components/Authentication/register.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-payment_formComponent
  payment_formComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-view_paymentsComponent
  view_paymentsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-clientDasbhoardComponent
  clientDasbhoardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-claims_registerComponent
  claims_registerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-claimsComponent
  claimsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-schedulesComponent
  schedulesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loaderComponent
  loaderComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-reset_passwordComponent
  reset_passwordComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-verify_codeComponent
  verify_codeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-forgot_passwordComponent
  forgot_passwordComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-contact_usComponent
  contact_usComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-landingComponent
  landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
  dashboardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-registerComponent
  registerComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-variables
  variables,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-authorizationService
  authorizationService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-randomNumber
  randomNumber,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-otp
  otp,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'dashboard',
    component: dashboardComponent,
    canActivate: [authorizationService],
    children: [
      { path: 'home', component: homeComponent },
      { path: 'schedules', component: schedulesComponent },
      { path: 'claim_register', component: claims_registerComponent },
      { path: 'claims', component: claimsComponent },
      { path: 'register', component: registerComponent },
      { path: 'view-payments', component: view_paymentsComponent },
    ],
  },
  { path: 'DOAServices', component: landingComponent },
  { path: 'contact-us', component: contact_usComponent },
  { path: 'login', component: loginComponent },
  { path: 'forgot-password', component: forgot_passwordComponent },
  { path: 'verify-code', component: verify_codeComponent },
  { path: 'reset-password', component: reset_passwordComponent },
  { path: '', redirectTo: '/DOAServices', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
