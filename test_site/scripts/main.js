
//练习修改h1的内容
/*
let myHeading = document.querySelector('h1');
myHeading.textContent = 'hello,tomatokai';
*/

//if语法的使用

/*
if (myHeading.textContent == 'hello,tomatokai'){
	alert('this is true');
} else{
	alert('this is false');
}
*/

//函数语法的使用
/*
function multiply(num1,num2){
	let result = num1 * num2;
	return result;
}
*/

//点击图片切换
let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/tomatokai_icon.jpg'){
		myImage.setAttribute('src','images/tomatokai_icon2.jpg');
	} else{
		myImage.setAttribute('src','images/tomatokai_icon.jpg');
	}
}



//练习button
function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Hi,you are ，' + name + '！';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = function(){
   setUserName();
}
