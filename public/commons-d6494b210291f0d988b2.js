(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"2mql":function(e,t,r){"use strict";r("ioFf"),r("HAE/");var n=r("TOwV"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?o:c[e.$$typeof]||a}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=o;var u=Object.defineProperty,l=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var a=p(r);a&&a!==h&&e(t,a,n)}var o=l(r);d&&(o=o.concat(d(r)));for(var c=s(t),m=s(r),g=0;g<o.length;++g){var y=o[g];if(!(i[y]||n&&n[y]||m&&m[y]||c&&c[y])){var b=f(r,y);try{u(t,y,b)}catch(v){}}}}return t}},"8+s/":function(e,t,r){"use strict";r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var n,a=r("q1tI"),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),d.canUseDOM?t(s):r&&(s=r(s))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",c),d}}},"8ypT":function(e,t,r){},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),c=n(r("8OQS")),s=n(r("pVnL")),u=n(r("q1tI")),l=n(r("17x9")),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=T([].concat(t.fluid))),t.fixed&&(t.fixed=T([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),g=function(e){var t=d(e),r=p(t);return m[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),u.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function T(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function A(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var C=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+u+o+c+r+n+t+i+a+s+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=u.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,c=u.default.createElement(R,(0,s.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?u.default.createElement("picture",null,a(n),c):c})),R=u.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,l=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},h,{onLoad:o,onError:l,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var I=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=u.default.createRef(),r.placeholderRef=t.placeholderRef||u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=p(t),m[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,c=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,m=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,T=e.loading,O=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,s.default)({opacity:C?1:0,transition:I?"opacity "+b+"ms":"none"},c),j="boolean"==typeof y?"lightgray":y,k={transitionDelay:b+"ms"},M=(0,s.default)((0,s.default)((0,s.default)({opacity:this.state.imgLoaded?0:1},I&&k),c),f),N={title:t,alt:this.state.isVisible?"":r,style:M,className:p,itemProp:w};if(m){var q=m,H=h(m);return u.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},u.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),j&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&k)}),H.base64&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:N,imageVariants:q,generateSources:A}),H.tracedSVG&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:N,imageVariants:q,generateSources:E}),this.state.isVisible&&u.default.createElement("picture",null,S(q),u.default.createElement(R,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:T,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,s.default)((0,s.default)({alt:r,title:t,loading:T},H),{},{imageVariants:q}))}}))}if(g){var F=g,z=h(g),W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete W.display,u.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},j&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:j,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},I&&k)}),z.base64&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:N,imageVariants:F,generateSources:A}),z.tracedSVG&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:N,imageVariants:F,generateSources:E}),this.state.isVisible&&u.default.createElement("picture",null,S(F),u.default.createElement(R,{alt:r,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:T,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,s.default)((0,s.default)({alt:r,title:t,loading:T},z),{},{imageVariants:F}))}}))}return null},t}(u.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),j=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});I.propTypes={resolutions:P,sizes:j,fixed:l.default.oneOfType([P,l.default.arrayOf(P)]),fluid:l.default.oneOfType([j,l.default.arrayOf(j)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var k=I;t.default=k},Bl7J:function(e,t,r){"use strict";var n=r("IRj2"),a=r("q1tI"),i=r.n(a),o=r("Wbzz"),c=r("tBDR");r("V+eJ"),r("dZ+Y"),r("LK8F"),r("2Spj"),r("VRzm"),r("Btvt"),r("91GP"),r("DW2E"),r("f3/d");function s(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=r("2mql"),f=r.n(d);function p(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var h=i.a.createContext();var m=function(e){return e};function g(e){var t=e.resolve,r=void 0===t?m:t,n=e.render,a=e.onLoad;function o(e,t){void 0===t&&(t={});var o=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),c={};function d(e){return t.cacheKey?t.cacheKey(e):o.resolve?o.resolve(e):null}var f,m=function(e){var i,f;function h(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:d(r)},n.promise=null,p(!r.__chunkExtractor||o.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(o.requireAsync(r).catch((function(){})),n.loadSync(),r.__chunkExtractor.addChunk(o.chunkName(r))),l(n)):(!1!==t.ssr&&o.isReady&&o.isReady(r)&&n.loadSync(),n)}f=e,(i=h).prototype=Object.create(f.prototype),i.prototype.constructor=i,i.__proto__=f,h.getDerivedStateFromProps=function(e,t){var r=d(e);return u({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var m=h.prototype;return m.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},m.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},m.componentWillUnmount=function(){this.mounted=!1},m.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},m.triggerOnLoad=function(){var e=this;a&&setTimeout((function(){a(e.state.result,e.props)}))},m.loadSync=function(){if(this.state.loading)try{var e=o.requireSync(this.props),t=r(e,{Loadable:y});this.state.result=t,this.state.loading=!1}catch(n){this.state.error=n}},m.getCacheKey=function(){return d(this.props)||JSON.stringify(this.props)},m.getCache=function(){return c[this.getCacheKey()]},m.setCache=function(e){c[this.getCacheKey()]=e},m.loadAsync=function(){var e=this;if(!this.promise){var n=this.props,a=(n.__chunkExtractor,n.forwardedRef,s(n,["__chunkExtractor","forwardedRef"]));this.promise=o.requireAsync(a).then((function(n){var a=r(n,{Loadable:y});t.suspense&&e.setCache(a),e.safeSetState({result:r(n,{Loadable:y}),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},m.render=function(){var e=this.props,r=e.forwardedRef,a=e.fallback,i=(e.__chunkExtractor,s(e,["forwardedRef","fallback","__chunkExtractor"])),o=this.state,c=o.error,l=o.loading,d=o.result;if(t.suspense){var f=this.getCache();if(!f)throw this.loadAsync();return n({loading:!1,fallback:null,result:f,options:t,props:u({},i,{ref:r})})}if(c)throw c;var p=a||t.fallback||null;return l?p:n({loading:l,fallback:p,result:d,options:t,props:u({},i,{ref:r})})},h}(i.a.Component),g=(f=m,function(e){return i.a.createElement(h.Consumer,null,(function(t){return i.a.createElement(f,Object.assign({__chunkExtractor:t},e))}))}),y=i.a.forwardRef((function(e,t){return i.a.createElement(g,Object.assign({forwardedRef:t},e))}));return y.preload=function(e){o.requireAsync(e)},y.load=function(e){return o.requireAsync(e)},y}return{loadable:o,lazy:function(e,t){return o(e,u({},t,{suspense:!0}))}}}var y=g({resolve:function(e,t){var r=t.Loadable,n=e.__esModule?e.default:e.default||e;return f()(r,n,{preload:!0}),n},render:function(e){var t=e.result,r=e.props;return i.a.createElement(t,r)}}),b=y.loadable,v=y.lazy,w=g({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.loading,n=e.props;return!r&&n.children?n.children(t):null}}),S=w.loadable,T=w.lazy;var E=b;E.lib=S,v.lib=T;var A=E((function(){return Promise.all([r.e(3),r.e(4),r.e(2),r.e(11)]).then(r.bind(null,"kqwN"))})),O=function(e){e.siteTitle;return i.a.createElement("header",{style:{background:"#1e0e58",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement(c.a,null),i.a.createElement(A,null),i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.Link,{to:"/",style:{color:"white",textDecoration:"none"}}))))};O.defaultProps={siteTitle:""};var C=O;r("8ypT"),t.a=function(e){var t=e.children,r=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(C,{siteTitle:r.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},i.a.createElement("main",null,t),i.a.createElement("footer",null)))}},DW2E:function(e,t,r){var n=r("0/R4"),a=r("Z6vF").onFreeze;r("Xtr8")("freeze",(function(e){return function(t){return e&&n(t)?e(a(t)):t}}))},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Giveth Tor.us","description":"The future of giving","author":"@giveth"}}}}')},INYr:function(e,t,r){"use strict";var n=r("XKFU"),a=r("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Giveth Tor.us"}}}}')},OGtf:function(e,t,r){var n=r("XKFU"),a=r("eeVq"),i=r("vhPU"),o=/"/g,c=function(e,t,r,n){var a=String(i(e)),c="<"+t;return""!==r&&(c+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(c),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},bmMU:function(e,t,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var c,s,u,l=n(t),d=n(r);if(l&&d){if((s=t.length)!=r.length)return!1;for(c=s;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(l!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var h=t instanceof RegExp,m=r instanceof RegExp;if(h!=m)return!1;if(h&&m)return t.toString()==r.toString();var g=a(t);if((s=g.length)!==a(r).length)return!1;for(c=s;0!=c--;)if(!i.call(r,g[c]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(c=s;0!=c--;)if(!("_owner"===(u=g[c])&&t.$$typeof||e(t[u],r[u])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},eFXI:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAACXBIWXMAABYlAAAWJQFJUiTwAAACuklEQVRIx5WWTYhOURjH773vqyEjxoxZYaEowmJ8TAkLWVIk8jGJ0fhohvI5RSGEQiJhMSsLTUhhhSUbpVnZkI9JygILbNSdudf/P/2f65njDu+c+r3n3HOe53/P1/PcN8rzPGJhDRK1x4JN4DZ4D1IwCPpBL9gM6mQbR2HxnWivB6/z4eUn+BH0fcqyrEU+NhH9/BG76Byegw4wD46TUTeyDXaAPvAATDBBE/XqlyT0C+yK/lEwXsFLRl4pGhuc2Eq3p1W+EM4xjVEn6jO/JvT1oH7E2VvnOPCGahjcqb4xNgPWFGBtbYrK7prbopfmsEUdz9zMipMvWdbQktXucYKvzKBXHR16QbVMmEvWsmO379PAQ/ACLDHjfgnOdycW2ZJNLKq1wHiAd4xXw06qTAz1RMDr02DAjlepkb6giX2RIoCCDf7oNUtbWhf4Dr6ArwHfxFCbxh91wnNNMNj4zrz2MkCHO3pol0DVbboX49ZkWlFIKpundLJr0ycxW/JeJzaoOhN58JxqldvpWMdAV2wmoxSzmbN8APV2mgtcoHeNQswvt80ixaeubvfWMrEs2FMTu1rcEH+iEL/iHFKXWMMDSJ3dZR+Wf8WsMs+7Gq4IM/nGstTls4qd8HiwDdxVJvos3oL7sG23AwgjK3KXORGVkuwySeEWj5Roi2RSpO4g8/oLbkWrqIjETSQedsDMvGA1U5Alz7IP2H+STNFYqMzbBo4zctQ/hdlFb65nFgdTwSLNcAZTHliM8Zk2Mf5cB80lb1wOTkjoKIHjSdS7wSFwUNHFeN8qnzP8uaCHpeAw2APWgH1gP1gLobMaawbrwD09m9B52FD4CR9u6p8C93EWOIfB05oBL/oNMJvbIec5GKfdMs3UNBi+t/iwQh94dqwCx7RXR8Bju7yoD/B7LaFWMJ2hqrFTVv8GukPD4LRbw40AAAAASUVORK5CYII=","aspectRatio":0.7142857142857143,"src":"/static/232cc8c44ecb42d4c8299c22a96ee3e3/34ca5/giveth-logo-white.png","srcSet":"/static/232cc8c44ecb42d4c8299c22a96ee3e3/b22c5/giveth-logo-white.png 20w,\\n/static/232cc8c44ecb42d4c8299c22a96ee3e3/0efb1/giveth-logo-white.png 40w,\\n/static/232cc8c44ecb42d4c8299c22a96ee3e3/34ca5/giveth-logo-white.png 80w,\\n/static/232cc8c44ecb42d4c8299c22a96ee3e3/16c7d/giveth-logo-white.png 120w,\\n/static/232cc8c44ecb42d4c8299c22a96ee3e3/e43a9/giveth-logo-white.png 160w,\\n/static/232cc8c44ecb42d4c8299c22a96ee3e3/6fc22/giveth-logo-white.png 2897w","sizes":"(max-width: 80px) 100vw, 80px"}}}}}')},qT12:function(e,t,r){"use strict";r("rE2o"),r("ioFf");var n="function"==typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,g=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,S=n?Symbol.for("react.scope"):60119;function T(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case d:case f:case o:case s:case c:case h:return e;default:switch(e=e&&e.$$typeof){case l:case p:case y:case g:case u:return e;default:return t}}case i:return t}}}function E(e){return T(e)===f}t.AsyncMode=d,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=u,t.Element=a,t.ForwardRef=p,t.Fragment=o,t.Lazy=y,t.Memo=g,t.Portal=i,t.Profiler=s,t.StrictMode=c,t.Suspense=h,t.isAsyncMode=function(e){return E(e)||T(e)===d},t.isConcurrentMode=E,t.isContextConsumer=function(e){return T(e)===l},t.isContextProvider=function(e){return T(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return T(e)===p},t.isFragment=function(e){return T(e)===o},t.isLazy=function(e){return T(e)===y},t.isMemo=function(e){return T(e)===g},t.isPortal=function(e){return T(e)===i},t.isProfiler=function(e){return T(e)===s},t.isStrictMode=function(e){return T(e)===c},t.isSuspense=function(e){return T(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===f||e===s||e===c||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===g||e.$$typeof===u||e.$$typeof===l||e.$$typeof===p||e.$$typeof===v||e.$$typeof===w||e.$$typeof===S||e.$$typeof===b)},t.typeOf=T},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return me}));r("dZ+Y"),r("KKXr"),r("2Spj"),r("eM6i"),r("8+KV"),r("0l/t"),r("LK8F"),r("pIFo"),r("V+eJ"),r("/SS/"),r("hHhE"),r("91GP"),r("HAE/"),r("rE2o"),r("ioFf"),r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx");var n,a,i,o,c=r("17x9"),s=r.n(c),u=r("8+s/"),l=r.n(u),d=r("bmMU"),f=r.n(d),p=r("q1tI"),h=r.n(p),m=r("MgzW"),g=r.n(m),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",E="href",A="http-equiv",O="innerHTML",C="itemprop",x="name",L="property",R="rel",I="src",P="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",M="defer",N="encodeSpecialCharacters",q="onChangeClientState",H="titleTemplate",F=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),z=[w.NOSCRIPT,w.SCRIPT,w.STYLE],W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Q(e,w.TITLE),r=Q(e,H);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,k);return t||n||void 0},$=function(e){return Q(e,q)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _({},e,t)}),{})},Y=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},X=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||r===R&&"canonical"===e[r].toLowerCase()||s===R&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==O&&c!==T&&c!==C||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][u]&&(a[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],s=g()({},n[c],a[c]);n[c]=s}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Z=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,d=e.title,f=e.titleAttributes;se(w.BODY,n),se(w.HTML,a),ce(d,f);var p={baseTag:ue(w.BASE,r),linkTags:ue(w.LINK,i),metaTags:ue(w.META,o),noscriptTags:ue(w.NOSCRIPT,c),scriptTags:ue(w.SCRIPT,u),styleTags:ue(w.STYLE,l)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=p[e].oldTags)})),t&&t(),s(e,h,m)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(w.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);a.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=de(r,n),[h.a.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=le(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+U(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return de(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=j[e]||e;if(r===O||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),h.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,d=void 0===l?"":l,f=e.titleAttributes;return{base:fe(w.BASE,t,n),bodyAttributes:fe(y,r,n),htmlAttributes:fe(b,a,n),link:fe(w.LINK,i,n),meta:fe(w.META,o,n),noscript:fe(w.NOSCRIPT,c,n),script:fe(w.SCRIPT,s,n),style:fe(w.STYLE,u,n),title:fe(w.TITLE,{title:d,titleAttributes:f},n)}},he=l()((function(e){return{baseTag:Y([E,P],e),bodyAttributes:J(y,e),defer:Q(e,M),encode:Q(e,N),htmlAttributes:J(b,e),linkTags:X(w.LINK,[R,E],e),metaTags:X(w.META,[x,S,A,L,C],e),noscriptTags:X(w.NOSCRIPT,[O],e),onChangeClientState:$(e),scriptTags:X(w.SCRIPT,[I,O],e),styleTags:X(w.STYLE,[T],e),title:G(e),titleAttributes:J(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),me=(a=he,o=i=function(e){function t(){return D(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return _({},n,((t={})[r.type]=[].concat(n[r.type]||[],[_({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case w.TITLE:return _({},a,((t={})[n.type]=o,t.titleAttributes=_({},i),t));case w.BODY:return _({},a,{bodyAttributes:_({},i)});case w.HTML:return _({},a,{htmlAttributes:_({},i)})}return _({},a,((r={})[n.type]=_({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=_({},t);return Object.keys(e).forEach((function(t){var n;r=_({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[F[r]||r]=e[r],t}),t)}(B(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=B(e,["children"]),n=_({},r);return t&&(n=this.mapChildrenToProps(t,n)),h.a.createElement(a,n)},V(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(h.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);me.renderStatic=me.rewind}).call(this,r("yLpj"))},tBDR:function(e,t,r){"use strict";var n=r("eFXI"),a=r("q1tI"),i=r.n(a),o=r("9eSz"),c=r.n(o);t.a=function(){var e=n.data;return i.a.createElement(c.a,{style:{width:"70px"},fluid:e.placeholderImage.childImageSharp.fluid})}},vrFN:function(e,t,r){"use strict";var n=r("EH9Q"),a=r("q1tI"),i=r.n(a),o=r("qhky");function c(e){var t=e.description,r=e.lang,a=e.meta,c=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=commons-d6494b210291f0d988b2.js.map