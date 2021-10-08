const merge = (arr, l, m, r) => {
  const n1 = m - l + 1
  const n2 = r - m
  const L = new Array(n1)
  const R = new Array(n2)

  for (let i = 0; i < n1; i++) L[i] = arr[l + i]
  for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j]

  let i = 0
  let j = 0
  let k = l

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i]
      i++
    } else {
      arr[k] = R[j]
      j++
    }
    k++
  }

  while (i < n1) {
    arr[k] = L[i]
    i++
    k++
  }

  while (j < n2) {
    arr[k] = R[j]
    j++
    k++
  }
}

const mergeSort = (arr, l, r) => {
  if (l >= r) {
    return
  }
  const m = l + parseInt((r - l) / 2)
  mergeSort(arr, l, m)
  mergeSort(arr, m + 1, r)
  merge(arr, l, m, r)
}

const arr = [12, 11, 13, 5, 6, 7]
const arr_size = arr.length

mergeSort(arr, 0, arr_size - 1)
