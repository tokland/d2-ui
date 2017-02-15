// Do not compile css when running mocha tests
require.extensions['.css'] = () => undefined;
