!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired7c6;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},n.parcelRequired7c6=a),a.register("c69b4",(function(e,n){t(e.exports,"getFirestore",(function(){return a("hbbGa").getFirestore})),t(e.exports,"getDoc",(function(){return a("hbbGa").getDoc})),t(e.exports,"doc",(function(){return a("hbbGa").doc})),t(e.exports,"setDoc",(function(){return a("hbbGa").setDoc})),t(e.exports,"updateDoc",(function(){return a("hbbGa").updateDoc})),t(e.exports,"arrayRemove",(function(){return a("hbbGa").arrayRemove})),t(e.exports,"arrayUnion",(function(){return a("hbbGa").arrayUnion})),a("hbbGa")})),a.register("hbbGa",(function(n,r){t(n.exports,"getFirestore",(function(){return De})),t(n.exports,"doc",(function(){return Ne})),t(n.exports,"getDoc",(function(){return hn})),t(n.exports,"setDoc",(function(){return dn})),t(n.exports,"updateDoc",(function(){return vn})),t(n.exports,"arrayUnion",(function(){return yn})),t(n.exports,"arrayRemove",(function(){return pn}));var i=a("bpxeT"),u=a("8MBJY"),o=a("ge8co"),s=a("a2hTj"),l=a("jh8P3"),c=a("fVNic"),f=a("eYQtU"),h=a("jmhxu"),d=a("1t1Wn"),v=a("8nrFW"),y=(a("l5bVx"),a("2MbLg")),p=a("2TvXO"),m=a("MjY8E"),g=a("6ExWU"),k=a("kZfxc"),w=a("2xDiJ"),b=function(){"use strict";function t(n){e(u)(this,t),this.uid=n}return e(s)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(t){return t.uid===this.uid}}]),t}();b.UNAUTHENTICATED=new b(null),b.GOOGLE_CREDENTIALS=new b("google-credentials-uid"),b.FIRST_PARTY=new b("first-party-uid"),b.MOCK_USER=new b("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _="9.9.4",T=new(0,k.Logger)("@firebase/firestore");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=k.LogLevel.DEBUG){var a,u=r.map(V);(a=T).debug.apply(a,["Firestore (".concat(_,"): ").concat(t)].concat(e(v)(u)))}}function S(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=k.LogLevel.ERROR){var a,u=r.map(V);(a=T).error.apply(a,["Firestore (".concat(_,"): ").concat(t)].concat(e(v)(u)))}}function I(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=k.LogLevel.WARN){var a,u=r.map(V);(a=T).warn.apply(a,["Firestore (".concat(_,"): ").concat(t)].concat(e(v)(u)))}}function V(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",e="FIRESTORE (".concat(_,") INTERNAL ASSERTION FAILED: ")+t;throw S(e),new Error(e)}function A(t,e){t||D()}function P(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x="cancelled",N="unknown",R="invalid-argument",F="deadline-exceeded",C="not-found",M="permission-denied",L="unauthenticated",O="resource-exhausted",U="failed-precondition",j="aborted",q="out-of-range",z="unimplemented",B="internal",G="unavailable",K=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){var a;return e(u)(this,r),(a=n.call(this,t,i)).code=t,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},e(h)(a)}return r}(w.FirebaseError),Y=function t(n,r){"use strict";e(u)(this,t),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},W=function(){"use strict";function t(){e(u)(this,t)}return e(s)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(t,e){t.enqueueRetryable((function(){return e(b.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),H=function(){"use strict";function t(n){var r=this;e(u)(this,t),this.auth=null,n.onInit((function(t){r.auth=t}))}return e(s)(t,[{key:"getToken",value:function(){var t=this;return this.auth?this.auth.getToken().then((function(e){return e?(A("string"==typeof e.accessToken),new Y(e.accessToken,new b(t.auth.getUid()))):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(t,e){}},{key:"shutdown",value:function(){}}]),t}(),X=function(){"use strict";function t(n,r,i,a){e(u)(this,t),this.t=n,this.i=r,this.o=i,this.u=a,this.type="FirstParty",this.user=b.FIRST_PARTY,this.h=new Map}return e(s)(t,[{key:"l",value:function(){return this.u?this.u():(A(!("object"!=typeof this.t||null===this.t||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}},{key:"headers",get:function(){this.h.set("X-Goog-AuthUser",this.i);var t=this.l();return t&&this.h.set("Authorization",t),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}]),t}(),J=function(){"use strict";function t(n,r,i,a){e(u)(this,t),this.t=n,this.i=r,this.o=i,this.u=a}return e(s)(t,[{key:"getToken",value:function(){return Promise.resolve(new X(this.t,this.i,this.o,this.u))}},{key:"start",value:function(t,e){t.enqueueRetryable((function(){return e(b.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),Z=function t(n){"use strict";e(u)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},Q=function(){"use strict";function t(n){var r=this;e(u)(this,t),this.m=n,this.appCheck=null,n.onInit((function(t){r.appCheck=t}))}return e(s)(t,[{key:"getToken",value:function(){return this.appCheck?this.appCheck.getToken().then((function(t){return t?(A("string"==typeof t.token),new Z(t.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(t,e){}},{key:"shutdown",value:function(){}}]),t}(),$=function t(n,r,i,a,o,s,l,c){"use strict";e(u)(this,t),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.useFetchStreams=c},tt=function(){"use strict";function t(n,r){e(u)(this,t),this.projectId=n,this.database=r||"(default)"}return e(s)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}(),et=function(){"use strict";function t(n,r,i){e(u)(this,t),void 0===r?r=0:r>n.length&&D(),void 0===i?i=n.length-r:i>n.length-r&&D(),this.segments=n,this.offset=r,this.len=i}return e(s)(t,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(e){return 0===t.comparator(this,e)}},{key:"child",value:function(e){var n=this.segments.slice(this.offset,this.limit());return e instanceof t?e.forEach((function(t){n.push(t)})):n.push(e),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(t){return this.segments[this.offset+t]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(t){if(t.length<this.length)return!1;for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}},{key:"isImmediateParentOf",value:function(t){if(this.length+1!==t.length)return!1;for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}},{key:"forEach",value:function(t){for(var e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n;r++){var i=t.get(r),a=e.get(r);if(i<a)return-1;if(i>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}]),t}(),nt=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(){return e(u)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"construct",value:function(t,e,n){return new r(t,e,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var a=[],u=!0,o=!1,s=void 0;try{for(var l,c=n[Symbol.iterator]();!(u=(l=c.next()).done);u=!0){var f,h=l.value;if(h.indexOf("//")>=0)throw new K(R,"Invalid segment (".concat(h,"). Paths must not contain // in them."));(f=a).push.apply(f,e(v)(h.split("/").filter((function(t){return t.length>0}))))}}catch(t){o=!0,s=t}finally{try{u||null==c.return||c.return()}finally{if(o)throw s}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(et),rt=/^[_a-zA-Z][_a-zA-Z0-9]*$/,it=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(){return e(u)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"construct",value:function(t,e,n){return new r(t,e,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(t){return t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(t)||(t="`"+t+"`"),t})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(t){return rt.test(t)}},{key:"keyField",value:function(){return new r(["__name__"])}},{key:"fromServerFormat",value:function(t){for(var e=[],n="",i=0,a=function(){if(0===n.length)throw new K(R,"Invalid field path (".concat(t,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));e.push(n),n=""},u=!1;i<t.length;){var o=t[i];if("\\"===o){if(i+1===t.length)throw new K(R,"Path has trailing escape character: "+t);var s=t[i+1];if("\\"!==s&&"."!==s&&"`"!==s)throw new K(R,"Path has invalid escape sequence: "+t);n+=s,i+=2}else"`"===o?(u=!u,i++):"."!==o||u?(n+=o,i++):(a(),i++)}if(a(),u)throw new K(R,"Unterminated ` in path: "+t);return new r(e)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(et),at=function(){"use strict";function t(n){e(u)(this,t),this.path=n}return e(s)(t,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(t){return null!==t&&0===nt.comparator(this.path,t.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(e){return new t(nt.fromString(e))}},{key:"fromName",value:function(e){return new t(nt.fromString(e).popFirst(5))}},{key:"empty",value:function(){return new t(nt.emptyPath())}},{key:"comparator",value:function(t,e){return nt.comparator(t.path,e.path)}},{key:"isDocumentKey",value:function(t){return t.length%2==0}},{key:"fromSegments",value:function(e){return new t(new nt(e.slice()))}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ut(t,e,n){if(!n)throw new K(R,"Function ".concat(t,"() cannot be called with an empty ").concat(e,"."))}function ot(t){if(!at.isDocumentKey(t))throw new K(R,"Invalid document reference. Document references must have an even number of segments, but ".concat(t," has ").concat(t.length,"."))}function st(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t="".concat(t.substring(0,20),"...")),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";var e=(n=t).constructor?n.constructor.name:null;return e?"a custom ".concat(e," object"):"an object"}var n;return"function"==typeof t?"a function":D()}function lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(R,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=st(t);throw new K(R,"Expected type '".concat(e.name,"', but it was: ").concat(n))}return t}function ct(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,ht,dt={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){if(void 0===t)return S("RPC_ERROR","HTTP error has no status"),N;switch(t){case 200:return"ok";case 400:return U;case 401:return L;case 403:return M;case 404:return C;case 409:return j;case 416:return q;case 429:return O;case 499:return x;case 500:return N;case 501:return z;case 503:return G;case 504:return F;default:return t>=200&&t<300?"ok":t>=400&&t<500?U:t>=500&&t<600?B:N}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ht=ft||(ft={}))[ht.OK=0]="OK",ht[ht.CANCELLED=1]="CANCELLED",ht[ht.UNKNOWN=2]="UNKNOWN",ht[ht.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ht[ht.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ht[ht.NOT_FOUND=5]="NOT_FOUND",ht[ht.ALREADY_EXISTS=6]="ALREADY_EXISTS",ht[ht.PERMISSION_DENIED=7]="PERMISSION_DENIED",ht[ht.UNAUTHENTICATED=16]="UNAUTHENTICATED",ht[ht.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ht[ht.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ht[ht.ABORTED=10]="ABORTED",ht[ht.OUT_OF_RANGE=11]="OUT_OF_RANGE",ht[ht.UNIMPLEMENTED=12]="UNIMPLEMENTED",ht[ht.INTERNAL=13]="INTERNAL",ht[ht.UNAVAILABLE=14]="UNAVAILABLE",ht[ht.DATA_LOSS=15]="DATA_LOSS";var yt=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){var a;return e(u)(this,r),(a=n.call(this,t)).P=i,e(h)(a)}return e(s)(r,[{key:"V",value:function(t,e){throw new Error("Not supported by FetchConnection")}},{key:"A",value:function(t,n,r,a){var u=this;return e(i)(e(p).mark((function t(){var i,o;return e(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=JSON.stringify(a),t.prev=2,t.next=5,u.P(n,{method:"POST",headers:r,body:i});case 5:o=t.sent,t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(2),new K(vt(t.t0.status),"Request failed with error: "+t.t0.statusText);case 11:if(o.ok){t.next=13;break}throw new K(vt(o.status),"Request failed with error: "+o.statusText);case 13:return t.abrupt("return",o.json());case 14:case"end":return t.stop()}}),t,null,[[2,8]])})))()}}]),r}(function(){"use strict";function t(n){e(u)(this,t),this.databaseInfo=n,this.databaseId=n.databaseId;var r=n.ssl?"https":"http";this.p=r+"://"+n.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}return e(s)(t,[{key:"v",value:function(t,e,n,r,i){var a=this.T(t,e);E("RestConnection","Sending: ",a,n);var u={};return this.I(u,r,i),this.A(t,a,u,n).then((function(t){return E("RestConnection","Received: ",t),t}),(function(e){throw I("RestConnection","".concat(t," failed with error: "),e,"url: ",a,"request:",n),e}))}},{key:"R",value:function(t,e,n,r,i,a){return this.v(t,e,n,r,i)}},{key:"I",value:function(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+_,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((function(e,n){return t[n]=e})),n&&n.headers.forEach((function(e,n){return t[n]=e}))}},{key:"T",value:function(t,e){var n=dt[t];return"".concat(this.p,"/v1/").concat(e,":").concat(n)}}]),t}());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){var e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(var r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt=function(){"use strict";function t(){e(u)(this,t)}return e(s)(t,null,[{key:"N",value:function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length,n="";n.length<20;)for(var r=pt(40),i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length));return n}}]),t}();function gt(t,e){return t<e?-1:t>e?1:0}function kt(t,e,n){return t.length===e.length&&t.every((function(t,r){return n(t,e[r])}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt=function(){"use strict";function t(n,r){if(e(u)(this,t),this.seconds=n,this.nanoseconds=r,r<0)throw new K(R,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new K(R,"Timestamp nanoseconds out of range: "+r);if(n<-62135596800)throw new K(R,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new K(R,"Timestamp seconds out of range: "+n)}return e(s)(t,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(t){return this.seconds===t.seconds?gt(this.nanoseconds,t.nanoseconds):gt(this.seconds,t.seconds)}},{key:"isEqual",value:function(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return t.fromMillis(Date.now())}},{key:"fromDate",value:function(e){return t.fromMillis(e.getTime())}},{key:"fromMillis",value:function(e){var n=Math.floor(e/1e3);return new t(n,Math.floor(1e6*(e-1e3*n)))}}]),t}(),bt=function(){"use strict";function t(n){e(u)(this,t),this.timestamp=n}return e(s)(t,[{key:"compareTo",value:function(t){return this.timestamp._compareTo(t.timestamp)}},{key:"isEqual",value:function(t){return this.timestamp.isEqual(t.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(e){return new t(e)}},{key:"min",value:function(){return new t(new wt(0,0))}},{key:"max",value:function(){return new t(new wt(253402300799,999999999))}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _t(t){var e=0;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Tt(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et=function(){"use strict";function t(n,r){e(u)(this,t),this.comparator=n,this.root=r||It.EMPTY}return e(s)(t,[{key:"insert",value:function(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,It.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,It.BLACK,null,null))}},{key:"get",value:function(t){for(var e=this.root;!e.isEmpty();){var n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}},{key:"indexOf",value:function(t){for(var e=0,n=this.root;!n.isEmpty();){var r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(t){return this.root.inorderTraversal(t)}},{key:"forEach",value:function(t){this.inorderTraversal((function(e,n){return t(e,n),!1}))}},{key:"toString",value:function(){var t=[];return this.inorderTraversal((function(e,n){return t.push("".concat(e,":").concat(n)),!1})),"{".concat(t.join(", "),"}")}},{key:"reverseTraversal",value:function(t){return this.root.reverseTraversal(t)}},{key:"getIterator",value:function(){return new St(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(t){return new St(this.root,t,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new St(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(t){return new St(this.root,t,this.comparator,!0)}}]),t}(),St=function(){"use strict";function t(n,r,i,a){e(u)(this,t),this.isReverse=a,this.nodeStack=[];for(var o=1;!n.isEmpty();)if(o=r?i(n.key,r):1,r&&a&&(o*=-1),o<0)n=this.isReverse?n.left:n.right;else{if(0===o){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return e(s)(t,[{key:"getNext",value:function(){var t=this.nodeStack.pop(),e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}]),t}(),It=function(){"use strict";function t(n,r,i,a,o){e(u)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:t.EMPTY,this.right=null!=o?o:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(s)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}},{key:"reverseTraversal",value:function(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(t,e,n){var r=this,i=n(t,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(e,i.key)){if(i.right.isEmpty())return t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}},{key:"moveRedLeft",value:function(){var t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}},{key:"moveRedRight",value:function(){var t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}},{key:"checkMaxDepth",value:function(){var t=this.check();return Math.pow(2,t)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw D();if(this.right.isRed())throw D();var t=this.left.check();if(t!==this.right.check())throw D();return t+(this.isRed()?0:1)}}]),t}();It.EMPTY=null,It.RED=!0,It.BLACK=!1,It.EMPTY=new(function(){"use strict";function t(){e(u)(this,t),this.size=0}return e(s)(t,[{key:"key",get:function(){throw D()}},{key:"value",get:function(){throw D()}},{key:"color",get:function(){throw D()}},{key:"left",get:function(){throw D()}},{key:"right",get:function(){throw D()}},{key:"copy",value:function(t,e,n,r,i){return this}},{key:"insert",value:function(t,e,n){return new It(t,e)}},{key:"remove",value:function(t,e){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(t){return!1}},{key:"reverseTraversal",value:function(t){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vt=function(){"use strict";function t(n){e(u)(this,t),this.comparator=n,this.data=new Et(this.comparator)}return e(s)(t,[{key:"has",value:function(t){return null!==this.data.get(t)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(t){return this.data.indexOf(t)}},{key:"forEach",value:function(t){this.data.inorderTraversal((function(e,n){return t(e),!1}))}},{key:"forEachInRange",value:function(t,e){for(var n=this.data.getIteratorFrom(t[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}},{key:"forEachWhile",value:function(t,e){var n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(t){var e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}},{key:"getIterator",value:function(){return new Dt(this.data.getIterator())}},{key:"getIteratorFrom",value:function(t){return new Dt(this.data.getIteratorFrom(t))}},{key:"add",value:function(t){return this.copy(this.data.remove(t).insert(t,!0))}},{key:"delete",value:function(t){return this.has(t)?this.copy(this.data.remove(t)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(t){var e=this;return e.size<t.size&&(e=t,t=this),t.forEach((function(t){e=e.add(t)})),e}},{key:"isEqual",value:function(e){if(!(e instanceof t))return!1;if(this.size!==e.size)return!1;for(var n=this.data.getIterator(),r=e.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var t=[];return this.forEach((function(e){t.push(e)})),t}},{key:"toString",value:function(){var t=[];return this.forEach((function(e){return t.push(e)})),"SortedSet("+t.toString()+")"}},{key:"copy",value:function(e){var n=new t(this.comparator);return n.data=e,n}}]),t}(),Dt=function(){"use strict";function t(n){e(u)(this,t),this.iter=n}return e(s)(t,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),t}(),At=function(){"use strict";function t(n){e(u)(this,t),this.fields=n,n.sort(it.comparator)}return e(s)(t,[{key:"unionWith",value:function(e){var n=new Vt(it.comparator),r=!0,i=!1,a=void 0;try{for(var u,o=this.fields[Symbol.iterator]();!(r=(u=o.next()).done);r=!0){var s=u.value;n=n.add(s)}}catch(t){i=!0,a=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}var l=!0,c=!1,f=void 0;try{for(var h,d=e[Symbol.iterator]();!(l=(h=d.next()).done);l=!0){var v=h.value;n=n.add(v)}}catch(t){c=!0,f=t}finally{try{l||null==d.return||d.return()}finally{if(c)throw f}}return new t(n.toArray())}},{key:"covers",value:function(t){var e=!0,n=!1,r=void 0;try{for(var i,a=this.fields[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){if(i.value.isPrefixOf(t))return!0}}catch(t){n=!0,r=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"isEqual",value:function(t){return kt(this.fields,t.fields,(function(t,e){return t.isEqual(e)}))}}],[{key:"empty",value:function(){return new t([])}}]),t}(),Pt=Symbol.iterator,xt=function(){"use strict";function t(n){e(u)(this,t),this.binaryString=n}return e(s)(t,[{key:Pt,value:function(){var t=this,e=0;return{next:function(){return e<t.binaryString.length?{value:t.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var t;return t=this.binaryString,btoa(t)}},{key:"toUint8Array",value:function(){return function(t){for(var e=new Uint8Array(t.length),n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(t){return gt(this.binaryString,t.binaryString)}},{key:"isEqual",value:function(t){return this.binaryString===t.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(atob(e))}},{key:"fromUint8Array",value:function(e){return new t(function(t){for(var e="",n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(e))}}]),t}();xt.EMPTY_BYTE_STRING=new xt("");var Nt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rt(t){if(A(!!t),"string"==typeof t){var e=0,n=Nt.exec(t);if(A(!!n),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}var i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ft(t.seconds),nanos:Ft(t.nanos)}}function Ft(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ct(t){return"string"==typeof t?xt.fromBase64String(t):xt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Lt(t){var e=t.mapValue.fields.__previous_value__;return Mt(e)?Lt(e):e}function Ot(t){var e=Rt(t.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mt(t)?4:"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue?9007199254740991:10:D()}function jt(t,e){if(t===e)return!0;var n,r=Ut(t);if(r!==Ut(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ot(t).isEqual(Ot(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;var n=Rt(t.timestampValue),r=Rt(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return n=e,Ct(t.bytesValue).isEqual(Ct(n.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ft(t.geoPointValue.latitude)===Ft(e.geoPointValue.latitude)&&Ft(t.geoPointValue.longitude)===Ft(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ft(t.integerValue)===Ft(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){var n=Ft(t.doubleValue),r=Ft(e.doubleValue);return n===r?ct(n)===ct(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return kt(t.arrayValue.values||[],e.arrayValue.values||[],jt);case 10:return function(t,e){var n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(_t(n)!==_t(r))return!1;for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!jt(n[i],r[i])))return!1;return!0}(t,e);default:return D()}}function qt(t){return!!t&&"mapValue"in t}function zt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){var e={mapValue:{fields:{}}};return Tt(t.mapValue.fields,(function(t,n){return e.mapValue.fields[t]=zt(n)})),e}if(t.arrayValue){for(var n={arrayValue:{values:[]}},r=0;r<(t.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=zt(t.arrayValue.values[r]);return n}return Object.assign({},t)}var Bt=function(){"use strict";function t(n){e(u)(this,t),this.value=n}return e(s)(t,[{key:"field",value:function(t){if(t.isEmpty())return this.value;for(var e=this.value,n=0;n<t.length-1;++n)if(!qt(e=(e.mapValue.fields||{})[t.get(n)]))return null;return(e=(e.mapValue.fields||{})[t.lastSegment()])||null}},{key:"set",value:function(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=zt(e)}},{key:"setAll",value:function(t){var e=this,n=it.emptyPath(),r={},i=[];t.forEach((function(t,a){if(!n.isImmediateParentOf(a)){var u=e.getFieldsMap(n);e.applyChanges(u,r,i),r={},i=[],n=a.popLast()}t?r[a.lastSegment()]=zt(t):i.push(a.lastSegment())}));var a=this.getFieldsMap(n);this.applyChanges(a,r,i)}},{key:"delete",value:function(t){var e=this.field(t.popLast());qt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}},{key:"isEqual",value:function(t){return jt(this.value,t.value)}},{key:"getFieldsMap",value:function(t){var e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(var n=0;n<t.length;++n){var r=e.mapValue.fields[t.get(n)];qt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}},{key:"applyChanges",value:function(t,e,n){Tt(e,(function(e,n){return t[e]=n}));var r=!0,i=!1,a=void 0;try{for(var u,o=n[Symbol.iterator]();!(r=(u=o.next()).done);r=!0){var s=u.value;delete t[s]}}catch(t){i=!0,a=t}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"clone",value:function(){return new t(zt(this.value))}}],[{key:"empty",value:function(){return new t({mapValue:{}})}}]),t}(),Gt=function(){"use strict";function t(n,r,i,a,o,s){e(u)(this,t),this.key=n,this.documentType=r,this.version=i,this.readTime=a,this.data=o,this.documentState=s}return e(s)(t,[{key:"convertToFoundDocument",value:function(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}},{key:"convertToNoDocument",value:function(t){return this.version=t,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(t){return this.version=t,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=bt.min(),this}},{key:"setReadTime",value:function(t){return this.readTime=t,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(e){return e instanceof t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}},{key:"mutableCopy",value:function(){return new t(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(e){return new t(e,0,bt.min(),bt.min(),Bt.empty(),0)}},{key:"newFoundDocument",value:function(e,n,r){return new t(e,1,n,bt.min(),r,0)}},{key:"newNoDocument",value:function(e,n){return new t(e,2,n,bt.min(),Bt.empty(),0)}},{key:"newUnknownDocument",value:function(e,n){return new t(e,3,n,bt.min(),Bt.empty(),2)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Kt=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;e(u)(this,t),this.path=n,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=a,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=c,this.q=null,this.O=null,this.startAt,this.endAt};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(t,e){return"number"==typeof(n=e)&&Number.isInteger(n)&&!ct(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?function(t){return{integerValue:""+t}}(e):function(t,e){if(t.k){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ct(e)?"-0":e}}(t,e);var n}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt=function t(){"use strict";e(u)(this,t),this._=void 0},Ht=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(){return e(u)(this,r),n.apply(this,arguments)}return r}(Wt),Xt=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t){var i;return e(u)(this,r),(i=n.call(this)).elements=t,e(h)(i)}return r}(Wt),Jt=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t){var i;return e(u)(this,r),(i=n.call(this)).elements=t,e(h)(i)}return r}(Wt),Zt=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){var a;return e(u)(this,r),(a=n.call(this)).C=t,a.L=i,e(h)(a)}return r}(Wt),Qt=function t(n,r){"use strict";e(u)(this,t),this.field=n,this.transform=r},$t=function(){"use strict";function t(n,r){e(u)(this,t),this.updateTime=n,this.exists=r}return e(s)(t,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}],[{key:"none",value:function(){return new t}},{key:"exists",value:function(e){return new t(void 0,e)}},{key:"updateTime",value:function(e){return new t(e)}}]),t}(),te=function t(){"use strict";e(u)(this,t)},ee=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return e(u)(this,r),(o=n.call(this)).key=t,o.value=i,o.precondition=a,o.fieldTransforms=s,o.type=0,e(h)(o)}return e(s)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(te),ne=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i,a,o){var s,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return e(u)(this,r),(s=n.call(this)).key=t,s.data=i,s.fieldMask=a,s.precondition=o,s.fieldTransforms=l,s.type=1,e(h)(s)}return e(s)(r,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),r}(te),re=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){var a;return e(u)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=2,a.fieldTransforms=[],e(h)(a)}return e(s)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(te),ie=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){var a;return e(u)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=3,a.fieldTransforms=[],e(h)(a)}return e(s)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(te),ae=function t(n,r){"use strict";e(u)(this,t),this.databaseId=n,this.k=r};function ue(t,e){return t.k?"".concat(new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+e.nanoseconds).slice(-9),"Z"):{seconds:""+e.seconds,nanos:e.nanoseconds}}function oe(t,e){return t.k?e.toBase64():e.toUint8Array()}function se(t,e){return ue(t,e.toTimestamp())}function le(t){return A(!!t),bt.fromTimestamp((e=Rt(t),new wt(e.seconds,e.nanos)));var e}function ce(t,e){return(n=t,new nt(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function fe(t,e){return ce(t.databaseId,e.path)}function he(t,e){var n,r,i,a=(n=e,A(me(r=nt.fromString(n))),r);if(a.get(1)!==t.databaseId.projectId)throw new K(R,"Tried to deserialize key from different project: "+a.get(1)+" vs "+t.databaseId.projectId);if(a.get(3)!==t.databaseId.database)throw new K(R,"Tried to deserialize key from different database: "+a.get(3)+" vs "+t.databaseId.database);return new at((A((i=a).length>4&&"documents"===i.get(4)),i.popFirst(5)))}function de(t){return new nt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ve(t,e,n){return{name:fe(t,e),fields:n.value.mapValue.fields}}function ye(t,e){return"found"in e?function(t,e){A(!!e.found),e.found.name,e.found.updateTime;var n=he(t,e.found.name),r=le(e.found.updateTime),i=new Bt({mapValue:{fields:e.found.fields}});return Gt.newFoundDocument(n,r,i)}(t,e):"missing"in e?function(t,e){A(!!e.missing),A(!!e.readTime);var n=he(t,e.missing),r=le(e.readTime);return Gt.newNoDocument(n,r)}(t,e):D()}function pe(t,e){var n,r,i;if(e instanceof ee)n={update:ve(t,e.key,e.value)};else if(e instanceof re)n={delete:fe(t,e.key)};else if(e instanceof ne)n={update:ve(t,e.key,e.data),updateMask:(r=e.fieldMask,i=[],r.fields.forEach((function(t){return i.push(t.canonicalString())})),{fieldPaths:i})};else{if(!(e instanceof ie))return D();n={verify:fe(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((function(t){return function(t,e){var n=e.transform;if(n instanceof Ht)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Xt)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Jt)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Zt)return{fieldPath:e.field.canonicalString(),increment:n.L};throw D()}(0,t)}))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:se(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:D()}(t,e.precondition)),n}function me(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t){return new ae(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke=function(t){"use strict";e(f)(r,(function t(){e(u)(this,t)}));var n=e(y)(r);function r(t,i,a,o){var s;return e(u)(this,r),(s=n.call(this)).authCredentials=t,s.appCheckCredentials=i,s.Z=a,s.C=o,s.tt=!1,e(h)(s)}return e(s)(r,[{key:"et",value:function(){if(this.tt)throw new K(U,"The client has already been terminated.")}},{key:"v",value:function(t,n,r){var i=this;return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var u=e(d)(a,2),o=u[0],s=u[1];return i.Z.v(t,n,r,o,s)})).catch((function(t){throw"FirebaseError"===t.name?(t.code===L&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),t):new K(N,t.toString())}))}},{key:"R",value:function(t,n,r,i){var a=this;return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(u){var o=e(d)(u,2),s=o[0],l=o[1];return a.Z.R(t,n,r,s,l,i)})).catch((function(t){throw"FirebaseError"===t.name?(t.code===L&&(a.authCredentials.invalidateToken(),a.appCheckCredentials.invalidateToken()),t):new K(N,t.toString())}))}},{key:"terminate",value:function(){this.tt=!0}}]),r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t,e){return be.apply(this,arguments)}function be(){return(be=e(i)(e(p).mark((function t(n,r){var i,a,u;return e(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=P(n),a=de(i.C)+"/documents",u={writes:r.map((function(t){return pe(i.C,t)}))},t.next=3,i.v("Commit",a,u);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _e(t,e){return Te.apply(this,arguments)}function Te(){return(Te=e(i)(e(p).mark((function t(n,r){var i,a,u,o,s,l;return e(p).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=P(n),a=de(i.C)+"/documents",u={documents:r.map((function(t){return fe(i.C,t)}))},t.next=5,i.R("BatchGetDocuments",a,u,r.length);case 5:return o=t.sent,s=new Map,o.forEach((function(t){var e=ye(i.C,t);s.set(e.key.toString(),e)})),l=[],t.abrupt("return",(r.forEach((function(t){var e=s.get(t.toString());A(!!e),l.push(e)})),l));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ee=new Map;function Se(t){if(t._terminated)throw new K(U,"The client has already been terminated.");if(!Ee.has(t)){E("ComponentProvider","Initializing Datastore");var e=(a=t._databaseId,u=t.app.options.appId||"",o=t._persistenceKey,s=t._freezeSettings(),i=new $(a,u,o,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams),new yt(i,fetch.bind(null))),n=ge(t._databaseId),r=function(t,e,n,r){return new ke(t,e,n,r)}(t._authCredentials,t._appCheckCredentials,e,n);Ee.set(t,r)}var i,a,u,o,s;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return Ee.get(t)}var Ie=function(){"use strict";function t(n){var r;if(e(u)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new K(R,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new K(R,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new K(R,"".concat("experimentalForceLongPolling"," and ").concat("experimentalAutoDetectLongPolling"," cannot be used together."))}(0,n.experimentalForceLongPolling,0,n.experimentalAutoDetectLongPolling)}return e(s)(t,[{key:"isEqual",value:function(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}]),t}(),Ve=function(){"use strict";function t(n,r,i,a){e(u)(this,t),this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ie({}),this._settingsFrozen=!1}return e(s)(t,[{key:"app",get:function(){if(!this._app)throw new K(U,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(t){if(this._settingsFrozen)throw new K(U,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ie(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new W;switch(t.type){case"gapi":var e=t.client;return new J(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new K(R,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return t=this,(e=Ee.get(t))&&(E("ComponentProvider","Removing Datastore"),Ee.delete(t),e.terminate()),Promise.resolve();var t,e}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t,e){var n="object"==typeof t?t:(0,m.getApp)(),r="string"==typeof t?t:e||"(default)";return(0,m._getProvider)(n,"firestore/lite").getImmediate({identifier:r})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ae=function(){"use strict";function t(n,r,i){e(u)(this,t),this.converter=r,this._key=i,this.type="document",this.firestore=n}return e(s)(t,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new xe(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(e){return new t(this.firestore,e,this._key)}}]),t}(),Pe=function(){"use strict";function t(n,r,i){e(u)(this,t),this.converter=r,this._query=i,this.type="query",this.firestore=n}return e(s)(t,[{key:"withConverter",value:function(e){return new t(this.firestore,e,this._query)}}]),t}(),xe=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i,a){var o;return e(u)(this,r),(o=n.call(this,t,i,new Kt(a)))._path=a,o.type="collection",e(h)(o)}return e(s)(r,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var t=this._path.popLast();return t.isEmpty()?null:new Ae(this.firestore,null,new at(t))}},{key:"withConverter",value:function(t){return new r(this.firestore,t,this._path)}}]),r}(Pe);function Ne(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=(0,w.getModularInstance)(t),1===arguments.length&&(n=mt.N()),ut("doc","path",n),t instanceof Ve){var u,o=(u=nt).fromString.apply(u,[n].concat(e(v)(i)));return ot(o),new Ae(t,null,new at(o))}var s;if(!(t instanceof Ae||t instanceof xe))throw new K(R,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var l=t._path.child((s=nt).fromString.apply(s,[n].concat(e(v)(i))));return ot(l),new Ae(t.firestore,t instanceof xe?t.converter:null,new at(l))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Re=function(){"use strict";function t(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e(u)(this,t);for(var a=0;a<r.length;++a)if(0===r[a].length)throw new K(R,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(r)}return e(s)(t,[{key:"isEqual",value:function(t){return this._internalPath.isEqual(t._internalPath)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fe=function(){"use strict";function t(n){e(u)(this,t),this._byteString=n}return e(s)(t,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(t){return this._byteString.isEqual(t._byteString)}}],[{key:"fromBase64String",value:function(e){try{return new t(xt.fromBase64String(e))}catch(t){throw new K(R,"Failed to construct data from Base64 string: "+t)}}},{key:"fromUint8Array",value:function(e){return new t(xt.fromUint8Array(e))}}]),t}(),Ce=function t(n){"use strict";e(u)(this,t),this._methodName=n},Me=function(){"use strict";function t(n,r){if(e(u)(this,t),!isFinite(n)||n<-90||n>90)throw new K(R,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(r)||r<-180||r>180)throw new K(R,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=n,this._long=r}return e(s)(t,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(t){return this._lat===t._lat&&this._long===t._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(t){return gt(this._lat,t._lat)||gt(this._long,t._long)}}]),t}(),Le=/^__.*__$/,Oe=function(){"use strict";function t(n,r,i){e(u)(this,t),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return e(s)(t,[{key:"toMutation",value:function(t,e){return null!==this.fieldMask?new ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new ee(t,this.data,e,this.fieldTransforms)}}]),t}(),Ue=function(){"use strict";function t(n,r,i){e(u)(this,t),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return e(s)(t,[{key:"toMutation",value:function(t,e){return new ne(t,this.data,this.fieldMask,e,this.fieldTransforms)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}var qe=function(){"use strict";function t(n,r,i,a,o,s){e(u)(this,t),this.settings=n,this.databaseId=r,this.C=i,this.ignoreUndefinedProperties=a,void 0===o&&this.nt(),this.fieldTransforms=o||[],this.fieldMask=s||[]}return e(s)(t,[{key:"path",get:function(){return this.settings.path}},{key:"rt",get:function(){return this.settings.rt}},{key:"st",value:function(e){return new t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"it",value:function(t){var e,n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.st({path:n,ot:!1});return r.ut(t),r}},{key:"ct",value:function(t){var e,n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.st({path:n,ot:!1});return r.nt(),r}},{key:"at",value:function(t){return this.st({path:void 0,ot:!0})}},{key:"ht",value:function(t){return an(t,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ft)}},{key:"contains",value:function(t){return void 0!==this.fieldMask.find((function(e){return t.isPrefixOf(e)}))||void 0!==this.fieldTransforms.find((function(e){return t.isPrefixOf(e.field)}))}},{key:"nt",value:function(){if(this.path)for(var t=0;t<this.path.length;t++)this.ut(this.path.get(t))}},{key:"ut",value:function(t){if(0===t.length)throw this.ht("Document fields must not be empty");if(je(this.rt)&&Le.test(t))throw this.ht('Document fields cannot begin and end with "__"')}}]),t}(),ze=function(){"use strict";function t(n,r,i){e(u)(this,t),this.databaseId=n,this.ignoreUndefinedProperties=r,this.C=i||ge(n)}return e(s)(t,[{key:"dt",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new qe({rt:t,methodName:e,ft:n,path:it.emptyPath(),ot:!1,lt:r},this.databaseId,this.C,this.ignoreUndefinedProperties)}}]),t}();function Be(t){var e=t._freezeSettings(),n=ge(t._databaseId);return new ze(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ge(t,e,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},u=t.dt(a.merge||a.mergeFields?2:0,e,n,i);tn("Data must be an object, but it was:",u,r);var o,s,l=Qe(r,u);if(a.merge)o=new At(u.fieldMask),s=u.fieldTransforms;else if(a.mergeFields){var c=[],f=!0,h=!1,d=void 0;try{for(var v,y=a.mergeFields[Symbol.iterator]();!(f=(v=y.next()).done);f=!0){var p=v.value,m=en(e,p,n);if(!u.contains(m))throw new K(R,"Field '".concat(m,"' is specified in your field mask but missing from your input data."));un(c,m)||c.push(m)}}catch(t){h=!0,d=t}finally{try{f||null==y.return||y.return()}finally{if(h)throw d}}o=new At(c),s=u.fieldTransforms.filter((function(t){return o.covers(t.field)}))}else o=null,s=u.fieldTransforms;return new Oe(new Bt(l),o,s)}var Ke=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(){return e(u)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"_toFieldTransform",value:function(t){if(2!==t.rt)throw 1===t.rt?t.ht("".concat(this._methodName,"() can only appear at the top level of your update data")):t.ht("".concat(this._methodName,"() cannot be used with set() unless you pass {merge:true}"));return t.fieldMask.push(t.path),null}},{key:"isEqual",value:function(t){return t instanceof r}}]),r}(Ce);function Ye(t,e,n){return new qe({rt:3,ft:e.settings.ft,methodName:t._methodName,ot:n},e.databaseId,e.C,e.ignoreUndefinedProperties)}var We=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){var a;return e(u)(this,r),(a=n.call(this,t)).wt=i,e(h)(a)}return e(s)(r,[{key:"_toFieldTransform",value:function(t){var e=Ye(this,t,!0),n=this.wt.map((function(t){return Ze(t,e)})),r=new Xt(n);return new Qt(t.path,r)}},{key:"isEqual",value:function(t){return this===t}}]),r}(Ce),He=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){var a;return e(u)(this,r),(a=n.call(this,t)).wt=i,e(h)(a)}return e(s)(r,[{key:"_toFieldTransform",value:function(t){var e=Ye(this,t,!0),n=this.wt.map((function(t){return Ze(t,e)})),r=new Jt(n);return new Qt(t.path,r)}},{key:"isEqual",value:function(t){return this===t}}]),r}(Ce);function Xe(t,e,n,r){var i=t.dt(1,e,n);tn("Data must be an object, but it was:",i,r);var a=[],u=Bt.empty();Tt(r,(function(t,r){var o=rn(e,t,n);r=(0,w.getModularInstance)(r);var s=i.ct(o);if(r instanceof Ke)a.push(o);else{var l=Ze(r,s);null!=l&&(a.push(o),u.set(o,l))}}));var o=new At(a);return new Ue(u,o,i.fieldTransforms)}function Je(t,e,n,r,i,a){var u=t.dt(1,e,n),o=[en(e,r,n)],s=[i];if(a.length%2!=0)throw new K(R,"Function ".concat(e,"() needs to be called with an even number of arguments that alternate between field names and values."));for(var l=0;l<a.length;l+=2)o.push(en(e,a[l])),s.push(a[l+1]);for(var c=[],f=Bt.empty(),h=o.length-1;h>=0;--h)if(!un(c,o[h])){var d=o[h],v=s[h];v=(0,w.getModularInstance)(v);var y=u.ct(d);if(v instanceof Ke)c.push(d);else{var p=Ze(v,y);null!=p&&(c.push(d),f.set(d,p))}}var m=new At(c);return new Ue(f,m,u.fieldTransforms)}function Ze(t,e){if($e(t=(0,w.getModularInstance)(t)))return tn("Unsupported field value:",e,t),Qe(t,e);if(t instanceof Ce)return function(t,e){if(!je(e.rt))throw e.ht("".concat(t._methodName,"() can only be used with update() and set()"));if(!e.path)throw e.ht("".concat(t._methodName,"() is not currently supported inside arrays"));var n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ot&&4!==e.rt)throw e.ht("Nested arrays are not supported");return function(t,e){var n=[],r=0,i=!0,a=!1,u=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var l=Ze(o.value,e.at(r));null==l&&(l={nullValue:"NULL_VALUE"}),n.push(l),r++}}catch(t){a=!0,u=t}finally{try{i||null==s.return||s.return()}finally{if(a)throw u}}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,w.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Yt(e.C,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){var n=wt.fromDate(t);return{timestampValue:ue(e.C,n)}}if(t instanceof wt){var r=new wt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ue(e.C,r)}}if(t instanceof Me)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Fe)return{bytesValue:oe(e.C,t._byteString)};if(t instanceof Ae){var i=e.databaseId,a=t.firestore._databaseId;if(!a.isEqual(i))throw e.ht("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:ce(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ht("Unsupported field value: ".concat(st(t)))}(t,e)}function Qe(t,e){var n={};return function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tt(t,(function(t,r){var i=Ze(r,e.it(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function $e(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof wt||t instanceof Me||t instanceof Fe||t instanceof Ae||t instanceof Ce)}function tn(t,e,n){if(!$e(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){var r=st(n);throw"an object"===r?e.ht(t+" a custom object"):e.ht(t+" "+r)}var i}function en(t,e,n){if((e=(0,w.getModularInstance)(e))instanceof Re)return e._internalPath;if("string"==typeof e)return rn(t,e);throw an("Field path arguments must be of type string or ",t,!1,void 0,n)}var nn=new RegExp("[~\\*/\\[\\]]");function rn(t,n,r){if(n.search(nn)>=0)throw an("Invalid field path (".concat(n,"). Paths must not contain '~', '*', '/', '[', or ']'"),t,!1,void 0,r);try{return e(o)(Re,e(v)(n.split(".")))._internalPath}catch(e){throw an("Invalid field path (".concat(n,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),t,!1,void 0,r)}}function an(t,e,n,r,i){var a=r&&!r.isEmpty(),u=void 0!==i,o="Function ".concat(e,"() called with invalid data");n&&(o+=" (via `toFirestore()`)"),o+=". ";var s="";return(a||u)&&(s+=" (found",a&&(s+=" in field ".concat(r)),u&&(s+=" in document ".concat(i)),s+=")"),new K(R,o+t+s)}function un(t,e){return t.some((function(t){return t.isEqual(e)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var on=function(){"use strict";function t(n,r,i,a,o){e(u)(this,t),this._firestore=n,this._userDataWriter=r,this._key=i,this._document=a,this._converter=o}return e(s)(t,[{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"ref",get:function(){return new Ae(this._firestore,this._converter,this._key)}},{key:"exists",value:function(){return null!==this._document}},{key:"data",value:function(){if(this._document){if(this._converter){var t=new sn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}},{key:"get",value:function(t){if(this._document){var e=this._document.data.field(ln("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}]),t}(),sn=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(){return e(u)(this,r),n.apply(this,arguments)}return e(s)(r,[{key:"data",value:function(){return e(l)(e(c)(r.prototype),"data",this).call(this)}}]),r}(on);function ln(t,e){return"string"==typeof e?rn(t,e):e instanceof Re?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cn(t,e,n){return t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e}var fn=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t){var i;return e(u)(this,r),(i=n.call(this)).firestore=t,e(h)(i)}return e(s)(r,[{key:"convertBytes",value:function(t){return new Fe(t)}},{key:"convertReference",value:function(t){var e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ae(this.firestore,null,e)}}]),r}(function(){"use strict";function t(){e(u)(this,t)}return e(s)(t,[{key:"convertValue",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(Ut(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ft(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ct(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw D()}}},{key:"convertObject",value:function(t,e){var n=this,r={};return Tt(t.fields,(function(t,i){r[t]=n.convertValue(i,e)})),r}},{key:"convertGeoPoint",value:function(t){return new Me(Ft(t.latitude),Ft(t.longitude))}},{key:"convertArray",value:function(t,e){var n=this;return(t.values||[]).map((function(t){return n.convertValue(t,e)}))}},{key:"convertServerTimestamp",value:function(t,e){switch(e){case"previous":var n=Lt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ot(t));default:return null}}},{key:"convertTimestamp",value:function(t){var e=Rt(t);return new wt(e.seconds,e.nanos)}},{key:"convertDocumentKey",value:function(t,e){var n=nt.fromString(t);A(me(n));var r=new tt(n.get(1),n.get(3)),i=new at(n.popFirst(5));return r.isEqual(e)||S("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(e.projectId,"/").concat(e.database,") instead.")),i}}]),t}());function hn(t){var e=Se((t=lt(t,Ae)).firestore),n=new fn(t.firestore);return _e(e,[t._key]).then((function(e){A(1===e.length);var r=e[0];return new on(t.firestore,n,t._key,r.isFoundDocument()?r:null,t.converter)}))}function dn(t,e,n){var r=cn((t=lt(t,Ae)).converter,e,n),i=Ge(Be(t.firestore),"setDoc",t._key,r,null!==t.converter,n);return we(Se(t.firestore),[i.toMutation(t._key,$t.none())])}function vn(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),a=3;a<r;a++)i[a-3]=arguments[a];var u,o=Be((t=lt(t,Ae)).firestore);return u="string"==typeof(e=(0,w.getModularInstance)(e))||e instanceof Re?Je(o,"updateDoc",t._key,e,n,i):Xe(o,"updateDoc",t._key,e),we(Se(t.firestore),[u.toMutation(t._key,$t.exists(!0))])}function yn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new We("arrayUnion",e)}function pn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new He("arrayRemove",e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var mn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn="".concat(m.SDK_VERSION,"_lite"),_=mn,(0,m._registerComponent)(new(0,g.Component)("firestore/lite",(function(t,e){var n=e.instanceIdentifier,r=e.options,i=t.getProvider("app").getImmediate(),a=new Ve(new H(t.getProvider("auth-internal")),new Q(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new K(R,'"projectId" not provided in firebase.initializeApp.');return new tt(t.options.projectId,e)}(i,n),i);return r&&a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),(0,m.registerVersion)("firestore-lite","3.4.15",""),(0,m.registerVersion)("firestore-lite","3.4.15","esm2017")})),a.register("jHF6Y",(function(t,e){!function(){var t={openModalBtnDevelopers:document.querySelector("[modal-developers-open]"),closeModalBtnDevelopers:document.querySelector("[modal-developers-close]"),modalDeveloper:document.querySelector("[data-modal-developer]")};function e(){t.modalDeveloper.classList.add("is-hidden__developers")}t.openModalBtnDevelopers.addEventListener("click",(function(){t.modalDeveloper.classList.remove("is-hidden__developers")})),t.closeModalBtnDevelopers.addEventListener("click",e),t.modalDeveloper.addEventListener("click",(function(t){t.currentTarget===t.target&&e()})),document.addEventListener("keydown",(function(t){"Escape"===t.code&&e()}))}()}))}();
//# sourceMappingURL=index.d38e1cc1.js.map
