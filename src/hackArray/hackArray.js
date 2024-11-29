"use strict"

export function hackArray() {
  const arr = [];
  return {
    insert: function(index, value) {
      arr[index] = value;
    },
    append: function(value) {
      arr.push(value);
    },
    read: function(index) {
      return arr[index];
    }
  }
}

