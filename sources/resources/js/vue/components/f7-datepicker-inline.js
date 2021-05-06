/*https://medium.com/@relt24/dedicated-vue-js-checkbox-component-360a330a3eb*/
function F7DatepickerInline() {
 this.props = {
  'objf7': {
   'type': Object
  },
  'aofechar': {
   'type': Function
  },
  'dayclick': {
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
  'rangeclass': {
   'type': String
  },
  'rangedates': {
   'type': Function
  }
 };
 this.data = function () {
  return {
   calendarInline: null
  };
 };
 this.created = function () {
  var _this = this;
 };
 this.mounted = function () {
  var _this = this;
  this.createCalendar();
 };
 this.methods = {
  updateCalendar: function () {
   if (this.calendarInline) {
    this.calendarInline.update();
    console.log(this.calendarInline);
   }
  },
  createCalendar: function () {
   var _this = this;
   var thisObj = jQuery(_this.$el);
   if (this.objf7) {
    this.calendarInline = this.objf7.calendar.create({
     //inputEl: this.$el,
     containerEl: this.$el,
     //openIn: 'customModal',
     dateFormat: this.computedFormat,
     value: [_this.$vnode.data.model.value],
     weekHeader: false,
     header: true,
     footer: false,
     //rangesClasses: this.computedRangesClasses,
     renderHeader: function () {
      return `
          <div class="calendar-header" style='border-top-left-radius: 0px;border-top-right-radius: 0px;'>
            <div class='calendar-select-date calendar-custom-select-date'></div>
          </div>
          `;
     },
     renderToolbar: function () {
      //<div class="toolbar calendar-custom-toolbar no-shadow" style='border-top-left-radius: 5px;border-top-right-radius: 5px;'>
      return `
          <div class="toolbar calendar-custom-toolbar no-shadow" >
            <div class="toolbar-inner">
              <div class="left">
                <a href="#" class="link icon-only"><i class="icon icon-back "></i></a>
              </div>
              <div class="center"></div>
              <div class="right">
                <a href="#" class="link icon-only"><i class="icon icon-forward "></i></a>
              </div>
            </div>
          </div>
          `;
     },
     on: {
      init: function (c) {
       var _self = this;

       thisObj.find(".calendar-custom-select-date").text(_self.formatValue(_self.value));

       thisObj.find('.calendar-custom-toolbar .center').text(_self.monthNames[c.currentMonth] + ', ' + c.currentYear);
       thisObj.find('.calendar-custom-toolbar .left .link').on('click', function () {
        _self.prevMonth();
       });
       thisObj.find('.calendar-custom-toolbar .right .link').on('click', function () {
        _self.nextMonth();
       });
      },
      monthYearChangeStart: function (c) {
       var _self = this;
       thisObj.find('.calendar-custom-toolbar .center').text(_self.monthNames[c.currentMonth] + ', ' + c.currentYear);
      },
      change: function () {
       var thisObj = jQuery(_this.$el);
       thisObj.find(".calendar-custom-select-date").text(this.formatValue(this.value));
       if (_this.$vnode.data.model) {
        _this.value = this.value;
        _this.$vnode.data.model.callback(new Date(_this.value));
       }
      },
      dayClick: function (calendar, dayEl, year, month, day) {
       console.log('dayClick');
       if (_this.dayclick) {
        _this.dayclick(_this);
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
  computedFormat: function () {
   if (this.format)
    return this.format;
   return 'dd/mm/yyyy';
  },
  computedRangesClasses: function () {
   var completercfunc = [];
   var rclass = (this.rangeclass) ? this.rangeclass : 'bg-color-green text-color-black';
   if (this.rangedates) {
    completercfunc = [
     {
      cssClass: rclass,
      range: this.rangedates
              //range: [new Date(2021, 02, 01), new Date(2021, 02, 02)]
     }
    ];
   }
   console.log(completercfunc);
   return completercfunc;
  },
  getValue: function () {
   return this.$vnode.data.model.value;
  }
 };
 this.watch = {
 };
 /*this.template = "<div "
  + "style='box-shadow: 0px 0px 0.5em #666;"
  + "-webkit-box-shadow: 0px 0px 0.5em #666;"
  + "-moz-box-shadow: 0px 0px 0.5em #666;"
  + "border-radius:5px;'></div>";*/
 this.template = "<div "
  + "style='border: solid 2px var(--f7-theme-color);'></div>";
 //this.template = "<div></div>";
}
Vue.component('f7-datepicker-inline', new F7DatepickerInline());


