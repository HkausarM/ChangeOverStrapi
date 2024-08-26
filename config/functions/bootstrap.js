// path: config/functions/bootstrap.js

module.exports = async () => {
    const pluginStore = strapi.store({
      environment: strapi.config.environment,
      type: 'plugin',
      name: 'users-permissions',
    });
  
    const roles = await pluginStore.get({ key: 'roles' });
  
    roles[0].permissions.application.controllers['import-content'] = {
      enabled: true,
      policy: 'import-content-permission',
    };
  
    await pluginStore.set({ key: 'roles', value: roles });
  };
  