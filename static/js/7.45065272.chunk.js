(this["webpackJsonpdevelop-ar"]=this["webpackJsonpdevelop-ar"]||[]).push([[7],{32:function(e,t,r){},34:function(e,t,r){"use strict";r.d(t,"e",(function(){return d})),r.d(t,"b",(function(){return l})),r.d(t,"g",(function(){return w})),r.d(t,"c",(function(){return C})),r.d(t,"a",(function(){return S})),r.d(t,"d",(function(){return U})),r.d(t,"f",(function(){return N}));var n=r(35),a=r.n(n),c=r(36),i=r(37),s=r(0),o=(r(32),r(2)),j=r(13),u=r(1),d=function(){var e=Object(o.f)(),t=Object(s.useState)(""),r=Object(i.a)(t,2),n=(r[0],r[1]);Object(s.useEffect)((function(){var e=document.getElementById("arjs-video");e&&e.parentNode.removeChild(e)}),[]);var d=function(){var t=Object(c.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.location.reload(),e.push(r),n(r);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsx)(j.b,{to:"/",children:Object(u.jsx)("button",{children:"Tracking Square"})}),Object(u.jsx)(j.b,{to:"/earth",children:Object(u.jsx)("button",{children:"Tracking Earth-Image"})}),Object(u.jsx)(j.b,{to:"/model",children:Object(u.jsx)("button",{children:"Tracking 3D-Model"})}),Object(u.jsx)(j.b,{to:"/animation",children:Object(u.jsx)("button",{children:"Tracking 3D-Animation"})}),Object(u.jsx)("div",{onClick:function(){return d("/basicScene")},children:Object(u.jsx)(j.b,{to:"/basicScene",children:Object(u.jsx)("button",{children:"3D-Scene"})})})]})})},l=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("a-scene",{arjs:"debugUIEnabled: false; sourceType: image",children:[Object(u.jsxs)("a-assets",{children:[Object(u.jsx)("img",{id:"groundTexture",src:"https://cdn.aframe.io/a-painter/images/floor.jpg",crossOrigin:"anonymous",alt:"groundTexture"}),Object(u.jsx)("img",{id:"skyTexture",src:"https://cdn.aframe.io/a-painter/images/sky.jpg",crossOrigin:"anonymous",alt:"skyTexture"}),Object(u.jsx)("a-mixin",{id:"voxel",geometry:"primitive: box; height: 0.5; width: 0.5; depth: 0.5",material:"shader: standard","random-color":!0,snap:"offset: 0.25 0.25 0.25; snap: 0.5 0.5 0.5"})]}),Object(u.jsx)("a-cylinder",{id:"ground",src:"#groundTexture",radius:"30",height:"0.1"}),Object(u.jsx)("a-sky",{id:"background",src:"#skyTexture","theta-length":"90",radius:"30"}),Object(u.jsx)("a-entity",{mixin:"voxel",position:"-1 0 -5"}),Object(u.jsx)("a-entity",{mixin:"voxel",position:"0 0 -5"}),Object(u.jsx)("a-entity",{mixin:"voxel",position:"0 1 -5",children:Object(u.jsx)("a-animation",{attribute:"rotation",to:"0 360 0",repeat:"indefinite"})}),Object(u.jsx)("a-entity",{mixin:"voxel",position:"1 0 -5"})]})})},b=r(33),h=r(38),p=r(28),x=r(29),m=r(31),O=r(30),f=r(14),g=r.n(f),y=r(8),v=r.n(y),k=["detectionMode","matrixCodeType","cameraParametersUrl","maxDetectionRate","sourceType","sourceUrl","sourceWidth","sourceHeight","displayHeight","displayWidth","canvasWidth","canvasHeight","trackingMethod","areaLearningButton","performanceProfile","tangoPointCloudEnabled","debugUIEnabled"],T=function(e){Object(m.a)(r,e);var t=Object(O.a)(r);function r(){var e;Object(p.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).container=document.body,e.renderer=null,e.componentWillUnmount=function(){e.renderer&&e.renderer.dispose()},e.passSceneRef=function(e,t){return e(t)||t},e.renderVirtualComponent=function(t){return g.a.createPortal(t,e.container)},e.inherentMode=function(e){return e?Object(u.jsx)("a-camera-static",{}):null},e.prepareToolKitParams=function(e){var t="";return Object.keys(e).forEach((function(r){k.includes(r)&&(t+="".concat(r,": ").concat(e[r],";"))})),t},e.flush=function(t){var r=t.arToolKit,n=t.children,a=t.getSceneRef,c=t.inherent,i=Object(h.a)(t,["arToolKit","children","getSceneRef","inherent"]);return e.renderVirtualComponent(Object(u.jsxs)("a-scene",Object(b.a)(Object(b.a)({ref:function(t){return e.passSceneRef(a,t)&&(e.renderer=t)},embedded:!0,arjs:e.prepareToolKitParams(r)},i),{},{children:[n,e.inherentMode(c)]})))},e}return Object(x.a)(r,[{key:"getChildContext",value:function(){return{inherent:this.props.inherent}}},{key:"render",value:function(){return this.flush(this.props)}}]),r}(s.Component);T.defaultProps={arToolKit:{},getSceneRef:function(){},inherent:!0},T.childContextTypes={inherent:v.a.bool};var R=function(e){Object(m.a)(r,e);var t=Object(O.a)(r);function r(){var e;Object(p.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).shouldUseCustomMarker=function(e){if(void 0!==e&&"custom"===e.preset)return e.url=e.patternUrl,delete e.patternUrl,e},e.renderUsingMatrixMode=function(t){return e.shouldUseCustomMarker(t.parameters),e.context.inherent?Object(u.jsx)("a-marker",Object(b.a)(Object(b.a)({},t.parameters),{},{children:t.children})):Object(u.jsx)("a-marker-camera",Object(b.a)(Object(b.a)({},t.parameters),{},{children:t.children}))},e}return Object(x.a)(r,[{key:"render",value:function(){return this.renderUsingMatrixMode(this.props)}}]),r}(s.Component);R.defaultProps={parameters:{}},R.contextTypes={inherent:v.a.bool};var w=function(){return Object(u.jsxs)("a-scene",{arjs:"sourceType:webcam",children:[Object(u.jsx)("a-marker",{preset:"hiro",children:Object(u.jsx)("a-box",{color:"blue",material:"opacity: 1;",position:"0 0.09 0",scale:"0.4 0.8 0.8",children:Object(u.jsx)("a-animation",{attribute:"rotation",to:"360 0 0",dur:"5000",easing:"linear",repeat:"indefinite"})})}),Object(u.jsx)("a-entity",{camera:!0})]})},A=r.p+"static/media/earth.1b5b8bea.png",C=function(){return Object(u.jsxs)("a-scene",{arjs:"sourceType:webcam",children:[Object(u.jsx)("a-assets",{children:Object(u.jsx)("img",{id:"earthImage",src:A,alt:"earthImage"})}),Object(u.jsx)("a-marker",{preset:"hiro",children:Object(u.jsx)("a-sphere",{src:"#earthImage",radius:"1","segments-height":"53",children:Object(u.jsx)("a-animation",{attribute:"rotation",dur:"3000",from:"1 -90 90",to:"360 -90 90",easing:"linear",repeat:"indefinite"})})}),Object(u.jsx)("a-entity",{camera:!0})]})},M=r.p+"static/media/fenix.ad321c30.glb",S=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("a-scene",{arjs:"sourceType:webcam",children:Object(u.jsx)("a-marker",{preset:"hiro",children:Object(u.jsx)("a-entity",{grab:!0,position:"0 1 0","gltf-model":M,scale:"0.01 0.01 0.01","animation-mixer":"clip:Take 001; loop:2; timeScale: 1.2; crossFadeDuration: 1"})})})})},U=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("a-scene",{arjs:"sourceType:webcam",children:[Object(u.jsx)("a-marker",{preset:"hiro",children:Object(u.jsx)("a-entity",{grab:!0,position:"0 -1 0",scale:"0.05 0.05 0.05","gltf-model":"https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf",animation:"property: rotation; to: 0 360 0; loop: true; dur: 10000"})}),Object(u.jsx)("a-entity",{camera:!0})]})})},E=r(47),P=r(48),F=r(49),I=r(50),D=r(51),K=r(52),N=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"fb",children:Object(u.jsx)(E.a,{url:" https://hugoapgarcia.github.io/AR/",quote:"AR-Experience",hashtag:"#AR",children:Object(u.jsx)(P.a,{})})}),Object(u.jsx)("div",{className:"tw",children:Object(u.jsx)(F.a,{url:" https://hugoapgarcia.github.io/AR/",title:"AR-Experience",hashtag:"#AR",children:Object(u.jsx)(I.a,{})})}),Object(u.jsx)("div",{className:"link",children:Object(u.jsx)(D.a,{url:" https://hugoapgarcia.github.io/AR/",title:"AR-Experience",hashtag:"#AR",children:Object(u.jsx)(K.a,{})})})]})}},56:function(e,t,r){"use strict";r.r(t);var n=r(28),a=r(29),c=r(31),i=r(30),s=r(0),o=r(34),j=r(1),u=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(e){return Object(n.a)(this,r),t.call(this,e)}return Object(a.a)(r,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o.e,{}),Object(j.jsx)(o.b,{}),Object(j.jsx)(o.f,{})]})}}]),r}(s.Component);t.default=u}}]);
//# sourceMappingURL=7.45065272.chunk.js.map