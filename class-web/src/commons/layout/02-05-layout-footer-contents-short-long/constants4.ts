// prettier-ignore
export const HEADER = (prams) => ({
  GLOBAL: {
    "/section02/02-02-layout-header-global": { title: "게시글 등록", hasLogo: false, hasBack: true },
    "/section02/02-04-layout-header-transparent": { title: "사진 상세", hasLogo: false, hasBack: true, isTransparent: true },
    "/section02/02-04-layout-header-untransparent": { title: "사진 상세x", hasLogo: false, hasBack: true, isTransparent: false },
    "/section02/02-05-layout-footer-contents-short-long": { title: "사진 상세x", hasLogo: false, hasBack: true, isTransparent: false },
  },
  LOCAL: {
    [`/section02/02-03-layout-header-local/${prams.id}`]: { title: "", hasLogo: false, hasBack: true },
  },
});
