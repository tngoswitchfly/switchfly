// es module import/export wrapper for index.cjs commonjs module code
// see ./index.cjs for actual module code in one place

// es modules import of the commonjs module specified as *.cjs
import cjsModule from './index.cjs';

// export the hi function from the imported cjs module
export const hi = cjsModule.hi;

// export the cjs module as default
export default cjsModule;
