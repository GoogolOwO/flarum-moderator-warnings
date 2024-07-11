import app from 'flarum/app';

app.initializers.add('GoogolOwO/flarum-warnings', () => {
  app.extensionData
    .for('GoogolOwO-moderator-warnings')
    .registerPermission(
      {
        icon: 'fas fa-images',
        label: app.translator.trans('GoogolOwO-moderator-warnings.admin.permissions.view_warnings'),
        permission: 'user.viewWarnings',
      },
      'moderate',
      3
    )
    .registerPermission(
      {
        icon: 'fas fa-edit',
        label: app.translator.trans('GoogolOwO-moderator-warnings.admin.permissions.manage_warnings'),
        permission: 'user.manageWarnings',
      },
      'moderate',
      3
    )
    .registerPermission(
      {
        icon: 'fas fa-times',
        label: app.translator.trans('GoogolOwO-moderator-warnings.admin.permissions.delete_warnings'),
        permission: 'user.deleteWarnings',
      },
      'moderate',
      3
    );
});
