const results = [
  { result: "success", message: "Everything is fine" },
  { result: "warning", message: "There are warnings" },
  { result: "error", message: "Something is wrong" },
  { result: "unknown", title: "Canonical", message: "Unknown result" },
];

const runChecks = (callback) => {
  let runningChecks = [
    { result: "running", title: "HTML title" },
    { result: "running", title: "HTML description" },
    { result: "running", title: "Links" },
    { result: "running", title: "Canonical" },
  ];

  callback(runningChecks);

  let i = 0;

  const interval = setInterval(() => {
    const result = results[i];
    runningChecks[i].result = result.result;
    runningChecks[i].message = result.message;

    callback(runningChecks);

    if (i++ >= runningChecks.length - 1) {
      clearInterval(interval);
    }
  }, 2000 * (i + 1));
};

module.exports = runChecks;
