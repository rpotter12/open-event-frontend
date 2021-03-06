import Route from '@ember/routing/route';

export default Route.extend({
  titleToken() {
    return this.get('l10n').t('All');
  },
  model() {
    return this.get('authManager.currentUser').query('notifications', {
      sort: '-received-at'
    });
  }
});
