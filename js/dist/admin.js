(()=>{var r={n:e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a}),a},d:(e,a)=>{for(var s in a)r.o(a,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e),r:r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}},e={};(()=>{"use strict";r.r(e);const a=flarum.core.compat.app;var s=r.n(a);s().initializers.add("askvortsov/flarum-moderator-warnings",(function(){s().extensionData.for("askvortsov-moderator-warnings").registerPermission({icon:"fas fa-images",label:s().translator.trans("askvortsov-moderator-warnings.admin.permissions.view_warnings"),permission:"user.viewWarnings"},"moderate",3).registerPermission({icon:"fas fa-edit",label:s().translator.trans("askvortsov-moderator-warnings.admin.permissions.manage_warnings"),permission:"user.manageWarnings"},"moderate",3).registerPermission({icon:"fas fa-times",label:s().translator.trans("askvortsov-moderator-warnings.admin.permissions.delete_warnings"),permission:"user.deleteWarnings"},"moderate",3)}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map