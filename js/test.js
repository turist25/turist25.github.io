function rozrah() {
var k = 0;
if ( document.forms[0].r2.checked == true) {
k = k + 1; }
if ( document.forms[1].r5.checked == true) {
k = k + 1; }
if ( document.forms[2].r9.checked == true) {
k = k + 1; }
if ( document.forms[3].r15.checked == true) {
k = k + 1; }
if ( document.forms[4].r20.checked == true) {
k = k + 1; }


alert(" Дякую за виконання тесту. Ваша сума становить " + k + " бал");
}