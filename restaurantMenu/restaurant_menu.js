const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item,index)=>`<p>item ${index}:${item}</p>`).join("");
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';

mainCourseMenu.forEach((item, index)=>{
mainCourseItem +=  `<p>item ${index}:${item}</p>` ;
} );

document.getElementById("dessertMenuItems").innerHTML = mainCourseItem;