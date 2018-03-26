import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RestService} from './src/rest.service';
import {ExternalService} from './src/external.service';
import {ResourceService} from './src/resource.service';

<<<<<<< HEAD
export {API_URI, PROXY_URI, ExternalService} from './src/external.service';
=======
import 'rxjs';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

export {ExternalService} from './src/external.service';
>>>>>>> acc3fda... observervable throw
export {RestService} from './src/rest.service';
export {Resource} from './src/resource';
export {ResourceArray} from './src/resource-array';
export {Sort} from './src/sort';
export {ResourceHelper} from './src/resource-helper';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  exports: [HttpClientModule],
  providers: [ExternalService, ResourceService, HttpClient]
})
export class AngularHalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularHalModule,
      providers: [
          ExternalService, ResourceService, HttpClient
      ]
    };
  }
}