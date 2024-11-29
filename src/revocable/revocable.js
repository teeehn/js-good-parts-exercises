"use strict";

export function revocable(binary) {
  let isRevoked = false;
  return {
    invoke: function(a, b) {
      if (!isRevoked) {
        return binary(a, b);
      }
    },
    revoke: function() {
      isRevoked = true;
    }
  };
};

