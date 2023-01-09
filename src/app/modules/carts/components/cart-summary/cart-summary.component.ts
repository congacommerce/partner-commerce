import { Component, OnInit, ViewChild, TemplateRef, Input, OnChanges } from '@angular/core';
import { Cart, StorefrontService, Storefront, UserService, CartService, TaxBreakup, TaxService, ConstraintRuleService } from '@congacommerce/ecommerce';
import { Router } from '@angular/router';
// import { QuoteService, Quote } from '@congacommerce/ecommerce';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable, of } from 'rxjs';
import * as _ from 'lodash';
import { take, flatMap } from 'rxjs/operators';
import { SummaryState } from '../../../checkout/component/summary.component';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})


export class CartSummaryComponent implements OnInit, OnChanges {
  @Input() cart: Cart;
  @ViewChild('discardChangesTemplate') discardChangesTemplate: TemplateRef<any>;
  loading: boolean = false;
  discardChangesModal: BsModalRef;
  _cart: Cart;
  state: SummaryState;

  // generatedQuote: Quote;
  isLoggedIn$: Observable<boolean>;
  hasErrors: boolean = true;

  totalPromotions: number = 0;
  storefront$: Observable<Storefront>;

  @ViewChild('confirmationTemplate') confirmationTemplate: TemplateRef<any>;

  showTaxPopUp: boolean = false;
  taxItems: Array<TaxBreakup>;
  totalEstimatedTax: number = 0;
  taxPopHoverModal: BsModalRef;

  constructor(private modalService: BsModalService, private crService: ConstraintRuleService,
    private storefrontService: StorefrontService, private userService: UserService, private cartService: CartService,
    private taxService: TaxService) {
    this.state = {
      configurationMessage: null,
      downloadLoading: false,
      requestQuoteMessage: null,
      requestQuoteLoading: false
    };
  }

  ngOnInit() {
    this.isLoggedIn$ = of(true); // this.userService.isLoggedIn();
    this.crService.hasPendingErrors().subscribe(val => this.hasErrors = val);
    this.storefront$ = this.storefrontService.getStorefront();

    this.storefront$.subscribe(store => {
      if (store.EnableTaxCalculations)
        this.calculateTotalTax();
    });
  }

  ngOnChanges() {
    this.totalPromotions = ((this.cart && _.get(this.cart, 'LineItems.length') > 0)) ? _.sum(this.cart.LineItems.map(res => res.IncentiveAdjustmentAmount)) : 0;
  }

  openDiscardChageModals() {
    this.discardChangesModal = this.modalService.show(this.discardChangesTemplate);
  }

  onDiscardChages() {
    // this.loading = true;
    // this.quoteService.abandonCart()
    //   .pipe(
    //     take(1),
    //     flatMap(() => this.cartService.createNewCart()),
    //     flatMap(cart => this.cartService.setCartActive(cart))
    //   )
    //   .subscribe(()  => {
    //     this.loading = false;
    //     this.router.navigate(['/Proposals', this.cart.Proposald.Id]);
    //     this.discardChangesModal.hide();
    //   });
  }

  openEstimateTaxPopup() {
    this.taxService.getTaxBreakUpsForConfiguration().subscribe((taxBreakupLines) => {
      this.taxItems = taxBreakupLines;
      this.showTaxPopUp = !this.showTaxPopUp;
    }).unsubscribe();
  }

  calculateTotalTax() {
    this.taxService.getTaxBreakUpsForConfiguration().subscribe(taxBreakup => {
      this.totalEstimatedTax = ((_.get(this.cart, 'LineItems.length') > 0)) ? _.sum(taxBreakup.map(res => res.TaxAmount)) : 0;
    });
  }
}
