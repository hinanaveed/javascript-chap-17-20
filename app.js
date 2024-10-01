// Chapter 17 - 20:
//Question 1:

var mul_arr = []
mul_arr[0] = ['hina' , 20]
mul_arr[1] = ['sadia' , 23]
mul_arr[2] = ['Sidra' , 25]
document.write(mul_arr)

//Question 2:

var mul_arr = []
mul_arr[0] = [0 , 1 , 2 , 3]
mul_arr[1] = [1 , 0 , 1 , 2]
mul_arr[2] = [2 , 1 , 0 , 1]
for( var x = 0 ; x < 3 ; x++)
{
    for(var y = 0 ; y < 4 ; y++)
    {
        document.write(mul_arr[x][y]+" ")
    }
    document.write("<br>")
}

//Question 3:

for(var i=1 ; i<=10 ; i++)
{
    document.write(i+"<br>")
}

//Question 4:

var num = +prompt("enter a number for table: ")
var len = +prompt("enter lenth of table: ")
document.write("Number = "+num+"<br>Length = "+len+"<br>")
for( var i=1;i<=len;i++)
{
    document.write(num+" x "+i+" = "+(num*i)+"<br>")
}

//Question 5:

var fruit = ['“apple”', '“banana”', '“mango”' , '“orange”' , '“strawberry”' ] 

for(var i=0 ; i<fruit.length ; i++)
{document.write(fruit[i]+"<br>")}


for(var i=0 ; i<fruit.length ; i++)
{document.write("<br>Element at index "+i+" is "+fruit[i]+"<br>")}



//Question 6:

document.write("<h3>Counting:</h3>")
for (var i=1 ; i<=15 ; i++)
{
    document.write(i+" , ")
}

document.write("<h3>Reverse Counting:</h3>")
for (var i=10 ; i>0 ; i--)
{
    document.write(i+" , ")
}

document.write("<h3>Even:</h3>")
for (var i=1 ; i<=20 ; i++)
{if(i % 2 == 0){
    document.write(i+" , ")
}
}

document.write("<h3>Odd:</h3>")
for (var i=1 ; i<=20 ; i++)
{if(i % 2 !== 0){
    document.write(i+" , ")
}
}

document.write("<h3>Series:</h3>")
for (var i=1 ; i<=20 ; i++)
{if(i % 2 == 0){
    document.write(i+"k , ")
}
}
//Question 7:

var bake = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var search = prompt("Welcome to ABC bakers!!!  Enter what doyou want to order: ")
var count = 0
for(var i=0 ; i<bake.length ; i++)
{
    if(search===bake[i])
    {
        document.write(search+" is <b>available</b> in our bakery at index :"+i)
        break;
    }
    else{
        count++
    }
    }
    if(count == 5)  
      document.write(search+" is <b>not available</b> in our bakery.")

//Question 8:

var arr = [240 , 76 , 13 , 90 , 100 , 320]
var max = arr[0] , temp
for ( var i =0 ; i<arr.length-1 ; i++)
{
    if(arr[i] < arr[i+1])
    {
        if(max < arr[i+1])
        max = arr[i+1]
    }
    else if(arr[i] > arr[i+1])
    {
        if(max < arr[i])
        max = arr[i]
    }
}
document.write("Array numbers are :"+arr+"<br>Maximum number is: "+max)

//Question 9:

var arr = [240 , 76 , 13 , 90 , 100 , 320]
var max = arr[0] , temp
for ( var i =0 ; i<arr.length-1 ; i++)
{
    if(arr[i] > arr[i+1])
    {
        if(max > arr[i+1])
        max = arr[i+1]
    }
    else if(arr[i] < arr[i+1])
    {
        if(max > arr[i])
        max = arr[i]
    }
}
document.write("Array numbers are :"+arr+"<br>Minimum number is: "+max)


