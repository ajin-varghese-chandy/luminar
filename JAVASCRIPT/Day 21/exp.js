expr = '/23*76+97';

try {
    console.log('try block');

} catch {
    console.log('catch block');
    console.log('error');
    expr = '23*76+97';
    console.log(eval(expr));


} finally {
    console.log('finally block');
    console.log('always executed');
}

console.log('data transmmited : ' + eval(expr));
