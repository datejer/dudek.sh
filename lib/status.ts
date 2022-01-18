const getStatusColor = (status: string) => {
  switch (status) {
    case "online":
      return "#3ba55d";
    case "idle":
      return "#faa819";
    case "dnd":
      return "#ed4043";
    default:
      return "#737e8c";
  }
};

const getHumanStatus = (status: string) => {
  switch (status) {
    case "online":
      return "Online";
    case "idle":
      return "Idle";
    case "dnd":
      return "Do not disturb";
    default:
      return "Offline";
  }
};

const getActivityName = (activity: number) => {
  switch (activity) {
    case 0:
      return "Playing a game";
    case 1:
      return "Streaming";
    case 2:
      return "Listening";
    case 3:
      return "Watching";
    case 4:
      return "Custom";
    case 5:
      return "Competing";
  }
};

const getElapsedTime = (since: number, until: number) => {
  let date = new Date(since);
  let now = new Date(until);
  let diff = now.getTime() - date.getTime();

  let seconds = Math.floor(diff / 1000) % 60;
  let minutes = Math.floor(diff / 1000 / 60) % 60;
  let hours = Math.floor(diff / 1000 / 60 / 60) % 60;

  let h = hours < 10 ? `0${hours}` : hours;
  let m = minutes < 10 ? `0${minutes}` : minutes;
  let s = seconds < 10 ? `0${seconds}` : seconds;

  return `${h}:${m}:${s}`;
};

export { getStatusColor, getHumanStatus, getActivityName, getElapsedTime };
