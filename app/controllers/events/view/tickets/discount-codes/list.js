import Controller from '@ember/controller';
export default Controller.extend({
  columns: [
    {
      propertyName : 'code',
      title        : 'Discount code'
    },
    {
      propertyName   : 'discount-url',
      template       : 'components/ui-table/cell/events/view/tickets/discount-codes/cell-url',
      title          : 'Discount code URL',
      disableSorting : true
    },
    {
      propertyName : 'value',
      template     : 'components/ui-table/cell/events/view/tickets/discount-codes/cell-value',
      title        : 'Discount Per Ticket'
    },
    {
      propertyName : 'valid-till',
      template     : 'components/ui-table/cell/events/view/tickets/discount-codes/cell-validity',
      title        : 'Validity'
    },
    {
      propertyName   : 'is-active',
      template       : 'components/ui-table/cell/events/view/tickets/discount-codes/cell-status',
      title          : 'Status',
      disableSorting : true
    },
    {
      title          : 'Actions',
      template       : 'components/ui-table/cell/events/view/tickets/discount-codes/cell-actions',
      disableSorting : true
    }
  ],

  actions: {
    deleteDiscountCode(discountCode) {
      this.set('isLoading', true);
      discountCode.destroyRecord()
        .then(() => {
          this.get('model').reload();
          this.notify.success(this.get('l10n').t('Discount Code has been deleted successfully.'));
        })
        .catch(() => {
          this.notify.error(this.get('l10n').t('An unexpected error has occurred.'));
        })
        .finally(() => {
          this.set('isLoading', false);
        });
    }
  }

});
