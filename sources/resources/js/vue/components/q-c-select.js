/*https://medium.com/@relt24/dedicated-vue-js-checkbox-component-360a330a3eb*/
function QCselect() {
 this.props = {
  'options': {
   'type': Array
  },
  'value': {
   'type': String
  }
 };
 this.data = function () {
  return {

  };
 };
 this.created = function () {
  var _this = this;
 };
 this.mounted = function () {
  var _this = this;
  console.log(_this);
  //_this.$el.getElementsByTagName("label")[0].classList.add("q-input");
  console.log(_this.$el);
  console.log(_this.$el.classList);
  //_this.$el.classList.add("q-input");
  //_this.$el.classList.remove("q-field--auto-height");
  console.log(_this.$el.classList);
  /*console.log(_this.$el.getAttribute('for'));
  var tid = _this.$el.getAttribute('for');
  console.log(_this.$el.getElementsByTagName("select")[0]);
  _this.$el.getElementsByTagName("select")[0].setAttribute("id", tid); 
  console.log(_this.$el);*/
  
  //_this.$el.removeAttribute('for');
  //console.log(_this.$el.getAttribute('for'));
  //document.getElementsByTagName("H1")[0].removeAttribute("class");
  //console.log(this.options);
  //console.log(this.computedOpenIn);
  /*if (_this.$vnode.data.model)
   console.log(_this.$vnode.data.model.value);*/
 };
 //this.beforeMount 
 this.methods = {

 };
 this.computed = {
  getValue: function () {
   return this.$vnode.data.model.value;
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
 this.template = "<q-field filled label='teste' stack-label><template v-slot:control>"
         //+ "<select class='q-field__native q-placeholder' aria-label='Grupo de Reunião' "
         + "<select class='q-field__native q-placeholder' aria-label='Grupo de Reunião' "
         + "style='background: transparent; width:100%; height:90%; border: none; left: 0; position: absolute; top:0; padding-top: 20px; margin-top: 3px; margin-bottom: 2px;'"
         + ">"
         + "<slot></slot>"
         + "</select>"
         + "</template></q-field>";
}
Vue.component('q-c-select', new QCselect());


