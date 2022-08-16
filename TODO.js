/*
создай компоненты 
1) Button 
вх параметры: className, text, disabled, image, ...rest
  (...rest) - оставшиеся параметры

  rest передаеть в <button>
  кнопка поддерживает текст и иконка справа
  <button>
    <span>{label}</span>
    <img/>
  </button>


2) Footer
вх параметры children

особенность, всегда прижат к низу  отоносительно последнего элемента на экране
<div></div>
3) Header

вх параметры children

особенность, зафиксирвоан сверху
1) реализовать через fixed
2) реализовать через sticky 
<div></div>

4) Input
вх параметры: className, label, value, onChange, vertical, name

прочитать про:
1) event.target.name
2) event.target.value
3) onChange (у input)

  <label>
    <span>{label}</span>
    <input/>
  </label>

5) Logo
вх параметры:  type, onClick

особенность logo, отображает всегда 1 картинку с позможностью выбрать размеры по типам

типы: 
{  
  lg: {
    width: 500,
    height: 500,
  },
  md: {
    width: 120,
    height: 120,
  },
  sm: {
    width: 36,
    height: 36,
  },
}

прочитать про:
1) onClick

  <img/>

6) Title
вх параметры:  title
особенность, текст всегда жирный и шрифт 32px
отступт снизу 20
отстпут сверху 10

<p>{title}</p>
*/
