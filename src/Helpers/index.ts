const openJob = (jobID: number): void => {
  window.open(
    `#/job/${jobID}`,
    '_blank',
    `title=View Job ${jobID},width=1080,height=720,target=_blank`
  );
};

export default { openJob };
