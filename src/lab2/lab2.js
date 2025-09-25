
const diemToan = 9 ; 
const diemVan = 8 ; 
const diemAnh = 7; 

const TB = (a, b , c) => {
    if(typeof a !== 'number')
    {
        return ;
    }
    return (a + b + c) / 3 ; 
}
console.log("Điểm trung bình :",TB(diemAnh,diemToan,diemVan) ) ; 
const diemTB =TB(diemAnh,diemToan,diemVan) ; 
if(diemTB >= 9 )
{
    console.log("Xếp loại : xuất sắc") ; 
}
else if(diemTB >=8 )
{
    console.log("Xếp loại : giỏi") ; 
}
else if(diemTB >= 6.5 )
{
    console.log("Xếp loại : khá") ; 
}
else console.log("Xếp loại : trung bình") ; 