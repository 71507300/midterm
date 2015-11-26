function FizzBuzz (qiita) {
 var i;
 for (i = 1; i <= qiita; i++) {
  alert((i % 3 == 0 ? 'Fizz' : '') + (i % 5 == 0 ? 'Buzz' : '') || i);
 }
}
