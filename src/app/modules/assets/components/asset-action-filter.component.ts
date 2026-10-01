import { Component, EventEmitter, Output, Input } from '@angular/core';
import { AFilter } from '@congacommerce/core';

@Component({
  selector: 'app-asset-action-filter',
  template: `
    <div class="card animated fadeIn">
      <div class="card-body">
        <h5 class="card-title">{{'INSTALLED_PRODUCTS.ASSET_ACTION_FILTER.ASSET_ACTION' | translate}} </h5>
        <ul class="list-unstyled ps-2">
          <li>
            <div class="form-check">
              <input
                #all
                type="radio"
                id="assetActionAll"
                class="form-check-input"
                name="assetAction"
                value="All"
                (change)="handleChange($event)"
                [checked]="value === 'All' || value == null"
              >
              <label class="form-check-label" for="assetActionAll">
                {{'INSTALLED_PRODUCTS.PRICE_TYPE_FILTER.ALL' | translate}}
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input
                #renew
                type="radio"
                id="renew"
                class="form-check-input"
                name="assetAction"
                value="Renew"
                (change)="handleChange($event)"
                [checked]="value === 'Renew'"
              >
              <label class="form-check-label" for="renew">
                {{'COMMON.RENEW' | translate}}
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input
                #terminate
                type="radio"
                id="terminate"
                class="form-check-input"
                name="assetAction"
                value="Terminate"
                (change)="handleChange($event)"
                [checked]="value === 'Terminate'"
              >
              <label class="form-check-label" for="terminate">
                {{'COMMON.TERMINATE' | translate}}
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input
                #buyMore
                type="radio"
                id="buyMore"
                class="form-check-input"
                name="assetAction"
                value="Buy More"
                (change)="handleChange($event)"
                [checked]="value === 'Buy More'"
              >
              <label class="form-check-label" for="buyMore">
                {{'COMMON.BUY_MORE' | translate}}
              </label>
            </div>
          </li>
          <li>
            <div class="form-check">
              <input
                #changeConfiguration
                type="radio"
                id="changeConfiguration"
                class="form-check-input"
                name="assetAction"
                value="Change Configuration"
                (change)="handleChange($event)"
                [checked]="value === 'Change Configuration'"
              >
              <label class="form-check-label" for="changeConfiguration">
                {{'COMMON.CHANGE_CONFIGURATION' | translate}}
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    li {
      font-size: smaller;
      line-height: 24px;
    }
    .form-check-label:before {
      top: -2px;
    }
    .form-check-label:after {
      top: -2px;
    }
  `],
  standalone: false
})
export class AssetActionFilterComponent {

  @Input() value: string = 'All';

  @Output() valueChange: EventEmitter<AFilter> = new EventEmitter();

  handleChange(event: any) {
    this.valueChange.emit(event.target.value);
  }
}
