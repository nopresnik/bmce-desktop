const openJob = (jobID: number): void => {
  window.open(
    `#/job/${jobID}`,
    JSON.stringify({
      title: `View Job ${jobID}`,
      width: 1080,
      height: 720,
    })
  );
};

export default { openJob };
