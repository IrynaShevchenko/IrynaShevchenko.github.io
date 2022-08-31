/////Отзывы 
$('.reviews-slider').slick({
      dots: true,
      arrows: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });




///Ванна кімната
var bath_minus = document.getElementById('bath_minus');
var bath_plus = document.getElementById('bath_plus');
var bath = document.getElementById('bath');

bath_plus.onclick = function() {
  var qty = parseInt(bath.value);
  qty = qty + 1;
  bath.value = qty;
}
bath_minus.onclick = function() {
    if(bath.value > bath.min){
      var qty = parseInt(bath.value);
      qty = qty - 1;
      bath.value = qty;
    }else{
      bath.value = bath.min;
    } 
}
////////////


///Квартира/Офіс
let count_val = [
    {
        'val' : 'Квартира 1к',
    },
    {
        'val' : 'Квартира 2к',
    },
    {
        'val' : 'Квартира 3к',
    },
    {
        'val' : 'Офіс',
    },
]
var count_prev = document.getElementById('count_prev');
var count_next = document.getElementById('count_next');
var count = document.getElementById('count');
var qty = 0;
count.value = count_val[qty]['val'];

count_next.onclick = function() {
    
    if(qty < count_val.length-1){
        qty = qty + 1;
        count.value = count_val[qty]['val'];
    }else{
        qty = 0;
        count.value = count_val[qty]['val'];
    }
}
count_prev.onclick = function() {
    if(qty > 0){
      qty = qty - 1;
    }else{
      qty = count_val.length-1;
    } 
    count.value = count_val[qty]['val'];
}
////////////




///Тип прибирання
let type_val = [
    {
        'val' : 'Стандартне прибирання',
    },
    {
        'val' : 'Сухе прибирання',
    },
    {
        'val' : 'Вологе прибирання',
    },
]
var type_prev = document.getElementById('type_prev');
var type_next = document.getElementById('type_next');
var type = document.getElementById('type');
var qty_type = 0;

type.innerHTML = type_val[qty_type]['val'];

type_next.onclick = function() {
    
    if(qty_type < type_val.length-1){
        qty_type = qty_type + 1;
        type.innerHTML = type_val[qty_type]['val'];
    }else{
        qty_type = 0;
        type.innerHTML = type_val[qty_type]['val'];
    }
}
type_prev.onclick = function() {
    if(qty_type > 0){
      qty_type = qty_type - 1;
    }else{
      qty_type = type_val.length-1;
    } 
    type.innerHTML = type_val[qty_type]['val'];
}
//////////////

















