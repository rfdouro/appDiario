/*https://medium.com/@relt24/dedicated-vue-js-checkbox-component-360a330a3eb*/
function F7Datepicker() {
 this.props = {
  'objf7': {
   'type': Object
  },
  'aofechar': {
   'type': Function
  },
  'placeholder': {
   'type': String
  },
  'format': {
   'type': String
  },
  'value': {
   'type': String
  },
  'closeonselect':{
   'type': Boolean
  }
 };
 this.data = function () {
  return {
   calendarModal: null
  };
 };
 this.created = function () {
  var _this = this;
  //g(_this.$vnode['data']);
  /*console.log(this);
   console.log(this.$vnode);
   console.log(this.$vnode.data);
   //console.log(this.objf7);
   if (_this.$vnode.data.model)
   console.log(_this.$vnode.data.model.value);*/
 };
 this.mounted = function () {
  var _this = this;
  //console.log(this.objf7);
  /*if (_this.$vnode.data.model)
   console.log(_this.$vnode.data.model.value);*/
  this.createCalendar();
 };
 this.methods = {
  createCalendar: function () {
   var _this = this;
   if (this.objf7) {
    console.log('aqui 1');
    console.log(this.getValue);
    console.log(this.computedFormat);
    this.calendarModal = this.objf7.calendar.create({
     inputEl: this.$el,
     openIn: 'customModal',
     header: true,
     footer: true,
     closeOnSelect: _this.computedCloseOnSelect,
     dateFormat: this.computedFormat,
     on: {
      closed: function () {
       if (typeof this.getValue() != 'undefined') {
        /*
        console.log('selecionado');
        console.log(this.getValue());
        //console.log(_this.$vnode.data.model.value);

        var x = this.formatValue(this.getValue());
        console.log(x);

        //_this.$emit('input', this.formatValue(this.getValue()));
        */
        _this.$emit('input', this.getValue()[0]);
        /*
        if (_this.$vnode.data.model.value) {
         console.log(typeof _this.$vnode.data.model.value);
         console.log(_this.$vnode.data.model.value);
        }
        */
        //console.log(_this.$vnode.data.model.value);
        /*if(_this.$vnode.data.model.value)
         _this.$vnode.data.model.value = this.formatValue(this.getValue());*/
        if (_this.aofechar) {
         _this.aofechar();
        }
       }
      }
     }
    });
   } else {
    console.error('A instance of F7 is necessary');
   }
  }
 };
 this.computed = {
  computedPlaceHolder: function () {
   if (this.placeholder)
    return this.placeholder;
   return '';
  },
  computedFormat: function () {
   if (this.format)
    return this.format;
   return 'dd/mm/yyyy';
  },
  getValue: function () {
   //console.log(this.$vnode.data.model);
   return this.$vnode.data.model.value;
  },
  computedCloseOnSelect: function (){
   if(this.closeonselect)
    return this.closeonselect;
   return false;
  }
 };
 this.watch = {
  /*value : function (val, oldVal){
   console.log('new: %s, old: %s', val, oldVal);
   }*/
  value: {
   handler: function (val, oldVal) {
    console.log('new: %s, old: %s', val, oldVal);
    if (this.$el)
     this.$el.value = val;
    if (this.calendarModal) {
     console.log(this.calendarModal);
     if (this.$vnode.data.model.value) {
      console.log(typeof this.$vnode.data.model.value);
      this.calendarModal.setValue([new Date(this.$vnode.data.model.value)]);
      console.log(this.calendarModal.getValue());
     } else {
      this.calendarModal.setValue([new Date()]);
      console.log(this.calendarModal.getValue());
     }
    }
   },
   immediate: true
  }
 };
 this.template = "<input type='text' :placeholder=computedPlaceHolder readonly='readonly' "
         + " :value=getValue  />";
}
Vue.component('f7-datepicker', new F7Datepicker());


