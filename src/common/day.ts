import dayjs from "dayjs";

function dateformat(value: string, format: string = "YYYY-MM-DD HH:mm:ss") {
  dayjs(value).format(format);
}

export default {
  dateformat
};
