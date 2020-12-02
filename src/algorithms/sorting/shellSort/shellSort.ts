/**
 * Sort Array
 * Returns sorted Array
 * @param {number[]} arr
 * @return {number[]}
 */
export function shellSort(arr: Array<number>): Array<number> {
  let step = Math.floor(arr.length / 3);
  let counter = 0;
  for (step; step > 0; step = Math.floor(step / 3)) {
    //間隔をあけて挿入ソートを行う
    //挿入する値を１つずつ取り出す繰り返し
    counter++;
    for (let i = step; i < arr.length; i++) {
      //挿入する値を一時的に保存する
      const tmp = arr[i];
      //取り出した位置から前に向かって比較するfor文
      // eslint-disable-next-line no-var
      for (var j = i; j >= step; j -= step) {
        if (arr[j - step] > tmp) {
          //挿入する値が小さい場合、その値をstep幅だけ後ろへずらす
          arr[j] = arr[j - step];
        } else {
          //挿入する値が小さくなければ、処理を止める
          break;
        }
      }
      //ずらす処理が終わったところに「挿入する値」をいれる
      arr[j] = tmp;
    }
  }
  console.log(counter);
  console.log(arr);
  return arr;
}
