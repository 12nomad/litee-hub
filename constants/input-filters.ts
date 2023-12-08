import { IHomeFilters } from "../types/IHomeFilters";

const homeFilters: readonly IHomeFilters[] = [
  {
    label: "Newest",
    value: "newest",
    isDefault: true,
  },
  {
    label: "Trending",
    value: "trending",
  },
  {
    label: "Unanswered",
    value: "unanswered",
  },
] as const;

export default homeFilters;
