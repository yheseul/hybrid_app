export const HEADER = (prams) => ({
  GLOBAL: {
    "/section02/02-02-layout-header-global": {
      title: "게시글 등록",
      hasLogo: false,
      hasBack: true,
    },
  },
  LOCAL: {
    [`/section02/02-03-layout-header-local/${prams.id}`]: {
      title: "",
      hasLogo: false,
      hasBack: true,
    },
  },
});
