/**
 * cria a diretiva v-mask para ser usada como molde para jquery.mask
 * exemplo:
 * v-mask="{exp:'000.000.000-00',reverse:true,clearIfNotMatch:true}"
 * @type type
 */
Vue.directive('mask', {
 bind: function (el, binding, vnode) {
  var v = binding.value;
  $(el).mask(v.exp, v);
 }
});

//registra uma diretiva customizada chamada v-telefone-mask
Vue.directive('telefoneMask', {
 //quando o elemento tiver um valor
 bind: function (el) {
  // mascara o elemento
  //tem por base jquerymask do igor escobar
  $(el).mask('(00)0-0000-0000');
 }
});

//registra uma diretiva customizada chamada v-dinheiro-mask
Vue.directive('dinheiroMask', {
 //quando o elemento tiver um valor
 bind: function (el) {
  // mascara o elemento
  //tem por base jquerymask do igor escobar
  $(el).mask('#.00', {reverse: true});
 }
});


//registra uma diretiva customizada chamada v-date-picker-f7
Vue.directive('datePickerF7', {
 bind: function (el) {
  //torna o componente somente leitura
  $(el).attr('readonly', 'readonly');
 },
 //quando o elemento for inserido no DOM
 inserted: function (el, binding) {
  var aoFechar, aoSelecionar, mostraBotaoOk = true, mostraBotaoCancela = true;
  try {
   aoFechar = binding.value.aoFechar;
  } catch (e) {
  }
  try {
   aoSelecionar = binding.value.aoSelecionar;
  } catch (e) {
  }
  try {
   mostraBotaoOk = (binding.value.mostraBotaoOk == null ? true : binding.value.mostraBotaoOk);
  } catch (e) {
  }
  try {
   mostraBotaoCancela = (binding.value.mostraBotaoCancela == null ? true : binding.value.mostraBotaoCancela);
  } catch (e) {
  }


  console.log(this.appV);

  /*var calendarModal = Framework7.calendar.create({
   inputEl: $(el),
   openIn: 'customModal',
   header: true,
   footer: true,
   dateFormat: 'MM dd yyyy'
   });*/

  // mascara o elemento
  //tem por base materializecss

 }
});

//registra uma diretiva customizada chamada v-date-picker-mcss
Vue.directive('datePickerMcss', {
 bind: function (el) {
  //torna o componente somente leitura
  $(el).attr('readonly', 'readonly');
 },
 //quando o elemento for inserido no DOM
 inserted: function (el, binding) {
  var aoFechar, aoSelecionar, mostraBotaoOk = true, mostraBotaoCancela = true;
  try {
   aoFechar = binding.value.aoFechar;
  } catch (e) {
  }
  try {
   aoSelecionar = binding.value.aoSelecionar;
  } catch (e) {
  }
  try {
   mostraBotaoOk = (binding.value.mostraBotaoOk == null ? true : binding.value.mostraBotaoOk);
  } catch (e) {
  }
  try {
   mostraBotaoCancela = (binding.value.mostraBotaoCancela == null ? true : binding.value.mostraBotaoCancela);
  } catch (e) {
  }

  // mascara o elemento
  //tem por base materializecss
  $(el).datepicker({
   showDoneBtn: mostraBotaoOk,
   showCancelBtn: mostraBotaoCancela,
   format: 'dd/mm/yyyy',
   yearRange: 70,
   onSelect: function () {
    if (aoSelecionar) {
     eval(aoSelecionar);
     this.close();
    }
   },
   onClose: function () {
    if (aoFechar) {
     eval(aoFechar);
    }
   },
   i18n: {
    cancel: 'Cancelar',
    months:
            [
             'Jan',
             'Fev',
             'Mar',
             'Abr',
             'Mai',
             'Jun',
             'Jul',
             'Ago',
             'Set',
             'Out',
             'Nov',
             'Dez'
            ],
    monthsShort:
            [
             'Jan',
             'Fev',
             'Mar',
             'Abr',
             'Mai',
             'Jun',
             'Jul',
             'Ago',
             'Set',
             'Out',
             'Nov',
             'Dez'
            ],
    weekdays:
            [
             'Domingo',
             'Segunda',
             'Terça',
             'Quarta',
             'Quinta',
             'Sexta',
             'Sábado'
            ],
    weekdaysShort:
            [
             'Dom',
             'Seg',
             'Ter',
             'Qua',
             'Qui',
             'Sex',
             'Sáb'
            ],
    weekdaysAbbrev: ['Do', 'Se', 'Te', 'Qa', 'Qi', 'Sx', 'Sa']
   }
  });
 }
});

