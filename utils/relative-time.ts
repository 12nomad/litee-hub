import { DateTime } from "luxon";

const getRelativeTime = (date: Date) => DateTime.fromJSDate(date).toRelative();

export default getRelativeTime;
