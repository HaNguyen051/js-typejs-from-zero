const sp1 = {
    namesp :"T-shirt" , 
    price :200 , 
    isStock :true
}
const sp2 = {
    namesp :"jacket" , 
    price :300 , 
    isStock :false
}
const sp3 = {
    namesp :"Jean" , 
    price :250 , 
    isStock :true
}
const sp4 = {
    namesp :"sandal" , 
    price :50 , 
    isStock :true
}
const sp5 = {
    namesp :"boots" , 
    price :300 , 
    isStock :false 
}
const products = [sp1 , sp2  , sp3 , sp4 , sp5]  ; 
console.log("original : " , products)  ;
const firstPro = products[0] ; 
console.log("1.In ra tên của sản phẩm đầu tiên  : " , firstPro.namesp) ;


const productsTwo =[sp1 ,{
    namesp : sp2.namesp ,
    price :150 , 
    isStock : sp2.isStock
} , sp3 , sp4 , sp5] ; 
console.log("2.Update sp 2 :" , productsTwo) ; 

productsTwo.push({
    namesp : "quan bo" , 
    price : 100 , 
    isStock : true 
});
console.log("3.Thêm sản phẩm:" , productsTwo) ; 


productsTwo.pop() ; 
console.log("4.Xoá sản phẩm:" , productsTwo) ;
console.log("5.=============")

products.forEach((value , index)=>{
    console.log(value)
}) ; 

const priceProducts = products.map((item , key)=>{
   return item.price ; 
}) ; 

console.log("6.mảng chỉ chứa sản phẩm : " , priceProducts) ;

const productStock = products.filter((value , key) => value.isStock === true)

console.log("7.sản phẩm còn hàng: " , productStock) ; 

//pr1
for (const key in products[0]) {
    console.log(key , products[0][key]) ; 
}



