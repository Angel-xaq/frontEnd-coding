Promise.myAllSettled = function (promises) {
    return new Promise((resolve, reject) => {
        let resolvedCount = 0;
        let count = 0;
        const results = [];
        for (const promise of promises) {
            let i = count;
            count++;
            Promise.resolve(promise)
                .then(
                    (data) => {
                        resolvedCount++;
                        results[i] = {
                            status: "fullfilled",
                            value: data,
                        };
                    },
                    (reason) => {
                        resolvedCount++;
                        results[i] = {
                            status: "rejected",
                            reason,
                        };
                    }
                )
                .finally(() => {
                    if (resolvedCount >= count) {
                        resolve(results);
                    }
                });
        }
    });
};

const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(3);
    }, 1000);
});

Promise.myAllSettled([pro, Promise.resolve(1), Promise.reject(2)]).then(
    (data) => {
        console.log(data);
    }
);

Promise.allSettled([pro, Promise.resolve(1), Promise.reject(2)]).then(
    (data) => {
      console.log(data);
    }
  );