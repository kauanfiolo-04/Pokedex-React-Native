module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[
      ['module-resolver',{
        root:['./'],
        alias:{
          components:'./components',
          screents:'./screens',
          loaders:'./loaders',
          assets:'./assets'
        }
      }]
    ]
  };
};
