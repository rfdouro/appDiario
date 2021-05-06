/*https://medium.com/@relt24/dedicated-vue-js-checkbox-component-360a330a3eb*/
function F7Smartselect() {
 this.props = {
  'objf7': {
   'type': Object
  },
  'aofechar': {
   'type': Function
  },
  'pageTitle': {
   'type': String
  },
  'options': {
   'type': Array
  },
  'value': {
   'type': String
  },
  'openin': {
   'type': String
  },
  'closeonselect': {
   'type': Boolean
  }
 };
 this.data = function () {
  return {
   smartSelectLocal: null
  };
 };
 this.created = function () {
  var _this = this;
 };
 this.mounted = function () {
  var _this = this;
  //console.log(this.options);
  //console.log(this.computedOpenIn);
  /*if (_this.$vnode.data.model)
   console.log(_this.$vnode.data.model.value);*/
  this.createSmartSelect();
 };
 this.methods = {
  createSmartSelect: function () {
   var _this = this;
   //console.log((this.$el));
   console.log(_this.$vnode.model);
   if (this.objf7) {
    this.smartSelectLocal = this.objf7.smartSelect.create({
     el: _this.$el,
     openIn: _this.computedOpenIn, //page or popup or popover or sheet
     pageTitle: _this.computedPageTitle,
     closeOnSelect: _this.isCloseOnSelect,
     on: {
      opened: function () {
       console.log('abriu');
      },
      closed: function () {
       console.log(this.valueEl);
       console.log(typeof this.selectEl.value);
       if(typeof this.selectEl.value == 'Object')
        console.log(JSON.stringfy(this.selectEl.value));
       else
        console.log(this.selectEl.value);
       if(_this.$vnode)
        console.log(_this.$vnode);
       /*if(_this.$vnode)
        console.log(_this.$vnode);*/
       _this.$emit('value', this.selectEl.value);
       if (_this.aofechar)
        _this.aofechar();
      }
     }
    });
    //console.log(this.smartSelectLocal);
   } else {
    console.error('A instance of F7 is necessary');
   }
  }
 };
 this.computed = {
  computedPageTitle: function () {
   if (this.pageTitle)
    return this.pageTitle;
   return 'SmartSelect';
  },
  getValue: function () {
   return this.$vnode.data.model.value;
  },
  computedOpenIn: function () {
   if (this.openin) {
    return this.openin;
   }
   return 'popup';
  },
  isCloseOnSelect: function () {
   if (this.closeonselect)
    return this.closeonselect;
   return false;
  }
 };
 this.watch = {
  value: {
   handler: function (val, oldVal) {
    console.log('new: %s, old: %s', val, oldVal);
    //if (this.$el)
    // this.$el.value = val;
    if (this.smartSelectLocal) {
     if (this.$vnode.data.model.value) {
      console.log(this.$vnode.data.model.value);
      //this.smartSelectLocal.setValue([new Date(this.$vnode.data.model.value)]);
     } else {
      //this.smartSelectLocal.setValue([new Date()]);
     }
    }
   },
   immediate: true
  }
 };
 this.template = "<a href='#' class='item-link smart-select'>"
         + "<slot></slot>"
         + "<div class='item-content'>"
         + "<div class='item-inner'>"
         + "  <div class='item-title'>{{computedPageTitle}}</div>"
         + " </div>"
         + "</div>"
         + "</a>";
}
Vue.component('f7-smartselect', new F7Smartselect());


