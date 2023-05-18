module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
<<<<<<< HEAD
    plugins: ['nativewind/babel', require.resolve('expo-router/babel')],
=======
    plugins: ['nativewind/babel'],
>>>>>>> 7a56d27 (Aula 01)
  }
}
