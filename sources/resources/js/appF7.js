//usado no calendar
var meses = [
 'Janeiro', 'Fevereiro',
 'Março', 'Abril',
 'Maio', 'Junho',
 'Julho', 'Agosto',
 'Setembro', 'Outubro',
 'Novembro', 'Dezembro'];
var mesesAbr = [
 'Jan', 'Fev',
 'Mar', 'Abr',
 'Mai', 'Jun',
 'Jul', 'Ago',
 'Set', 'Out',
 'Nov', 'Dez'
];
var dias = [
 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'
];
var diasAbr = [
 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'
];

/*desabilita o 'tema' para electron*/
Framework7.device.electron = false;

function criaAppF7() {
// instancia principal 
 var appF7 = new Framework7({
  root: '#appF7', // App root element
  id: 'br.org.rfdouro.DiarioMonitora', // App bundle ID
  name: 'Diário Monitora', // App name
  theme: 'auto', // Automatic theme detection
  touch: {
   // Enable fast clicks
   fastClicks: true
  },
  calendar: {
   routableModals: false, //precisa disso pq tava dando pau
   openIn: 'customModal',
   header: true,
   headerPlaceholder: 'Selecione a data',
   footer: true,
   monthNames: meses,
   monthNamesShort: mesesAbr,
   dayNames: dias,
   dayNamesShort: diasAbr,
   dateFormat: 'dd/mm/yyyy',
   touchMove: !Framework7.device.desktop,
   closeOnSelect: false,
   toolbarCloseText: 'Ok'
  },
  dialog: {
   buttonOk: 'Ok',
   buttonCancel: 'Cancela'
  },
  smartSelect: {
   pageBackLinkText: 'Voltar',
   popupCloseLinkText: 'Fechar',
   sheetCloseLinkText: 'Ok',
   searchbarPlaceholder: 'Pesquisa',
   searchbarDisableText: 'Cancela'
  },
  //uso as opções padrão para manter o painel swipe no desktop
  /*panel: {
   swipe: true,
   visibleBreakpoint: 768
   },*/
  // App root data
  data: function () {
   return {

   };
  },
  on: {
   // each object key means same name event handler
   pageInit: function (page) {
    console.log('pageInit');
   },
   init: function (popup) {
    console.log('init');
   },
   mounted: function (popup) {
    console.log(this);
   }
  },
  // App root methods
  methods: {
   toStringJSON: function (obj) {
    console.log(obj);
   },
   setTitulo: function (titulo) {

   },
   //elabora a navegação
   urlParam: function (parametro) {
    try {
     var results = new RegExp('[\?&]' + parametro + '=([^&#]*)').exec(this.pagina);
     return results[1] || 0;
    } catch (e) {

    }
   },
   clone: function (obj) {
    if (null == obj || "object" != typeof obj)
     return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
     if (obj.hasOwnProperty(attr))
      copy[attr] = obj[attr];
    }
    return copy;
   },
   navega: function (obj, update) {
    if (obj == null)
     return;

    var _this = this;
    _this.preloader.show('blue');

    var p = _this.methods.clone(_this.preloader)

    this.pagina = obj.pagina;

    if (!obj.div)
     appF7.request.get(obj.pagina, null, function (dados) {
      alert(dados);
     });
    else {
     appF7.request({
      url: obj.pagina,
      method: 'GET',
      async: true,
      complete: function (xhr, status) {
       if (status == 200) {
        obj.titulo = (!(obj.titulo)) ? '' : obj.titulo;
        update = (update == null) ? true : update;
        //document.title = obj.titulo;
        //usando JQuery
        $('#' + obj.div).html(xhr.response);
        /*
         //insere o conteúdo lido
         document.getElementById(obj.div).innerHTML = xhr.response;
         //executa scripts
         var arr = document.getElementById(obj.div).getElementsByTagName('script');
         for (var n = 0; n < arr.length; n++)
         eval(arr[n].innerHTML);*/

        if (update === true) {
         history.pushState(obj, '', '');//deve-se usar assim para não alterar a barra de endereços do browser
        }
       }
       _this.preloader.hide();
      }
     });
    }
   },
   navegaTab: function (obj, t) {
    var _this = this;
    var r = (Math.random());
    if (obj.pagina.indexOf('?') > 0) {
     obj.pagina += '&r=' + r;
    } else {
     obj.pagina += '?r=' + r;
    }

    this.pagina = obj.pagina;


    $('.tab-link').each(function (index) {
     //console.log(index + ": " + $(this).text());
     $(this).removeClass('tab-link-active');
    });

    console.log('pagina = ' + this.pagina);
    console.log('tab = ' + $(t).hasClass('tab-link-active'));
    $(t).addClass('tab-link-active');

    if (!obj.div)
     appF7.request.get(obj.pagina, null, function (dados) {
      alert(dados);
     });
    else
     appF7.request({
      url: obj.pagina,
      method: 'GET',
      async: true,
      complete: function (xhr, status) {
       if (status == 200) {
        //usando Dom7 -- não funciona como desejado
        //$$('#' + obj.div).html(dados);
        //usando JQuery
        $('#' + obj.div).html(xhr.response);
       }
       _this.preloader.hide();
      }
     });
   },
   dialogConfirma: function (texto, callbackSim, callbackNao) {
    appF7.dialog.create({
     title: appF7.name,
     text: texto,
     animate: false,
     buttons: [
      {
       text: 'Não',
       cssClass: 'color-red',
       onClick: function (dialog, e) {
        if (typeof callbackNao === 'function') {
         callbackNao();
        }
       }
      },
      {
       text: 'Sim',
       //cssClass: 'color-green',
       onClick: function (dialog, e) {
        if (typeof callbackSim === 'function') {
         callbackSim();
        }
       }
      }
     ],
     verticalButtons: false,
     on: {
      opened: function () {

      },
      close: function () {

      }
     }
    }).open();
   },
   dialogInforma: function (texto, callbackOk) {
    appF7.dialog.create({
     title: appF7.name,
     text: texto,
     animate: false,
     buttons: [
      {
       text: 'Ok',
       //cssClass: 'color-green',
       onClick: function (dialog, e) {
        if (typeof callbackOk === 'function') {
         callbackOk();
        }
       }
      }
     ]
    }).open();
   },
   limpaLista: function () {

   },
   exibeToast: function (mess) {
    var t = appF7.toast.create({
     text: mess,
     closeButton: true,
     closeButtonText: 'Fechar',
     closeButtonColor: 'red',
     closeTimeout: 2000,
     position: 'bottom'
    });
    t.open();
   }
  }
 });

 return appF7;
}
