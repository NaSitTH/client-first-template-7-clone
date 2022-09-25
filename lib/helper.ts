export const getBgColorByPath = (path: string) => {
  if (
    path.includes("/media") ||
    path.includes("/donation") ||
    path.includes("/event")
  )
    return "bg-app-green-tertiary";
  else if (path.includes("/contact")) return "bg-app-off-white";
  else return "bg-white";
};
