import { C, box, roundBox, txt, label, evidenceQuote, researchSlide, researchPage } from "./research-foundation.mjs";

export default async function make19(presentation, ctx) {
  const s = researchSlide(presentation);
  researchPage(ctx, s, 7, "报告结构", "每条结论必须有原话背书，保证报告真实可靠");
  const blocks = [
    "核心结论速览",
    "用户画像与思维模式对比",
    "真实使用场景矩阵",
    "用户决策底层逻辑",
    "产品结构性问题与阻断点",
    "未被满足需求与潜在机会",
  ];
  blocks.forEach((v, i) => {
    const x = 54 + (i % 3) * 250;
    const y = 184 + Math.floor(i / 3) * 118;
    roundBox(ctx, s, x, y, 216, 84, i === 0 ? C.green : C.white, i === 0 ? C.green : C.border, 1.2);
    txt(ctx, s, `0${i + 1}`, x + 18, y + 16, 34, 18, 13, i === 0 ? C.pink : C.green, true);
    txt(ctx, s, v, x + 18, y + 40, 174, 24, 17, i === 0 ? C.white : C.ink, true);
  });
  box(ctx, s, 822, 174, 2, 356, C.green);
  label(ctx, s, "EVIDENCE STYLE", 858, 184, 180);
  evidenceQuote(ctx, s, 858, 220, 340, "我不是不想用，只是不知道它到底替我省了什么时间。", "YouTube comment / 原话引用");
  evidenceQuote(ctx, s, 858, 326, 340, "价格能接受，但我需要先看到别人真实怎么用。", "Reddit post / 原话引用");
  roundBox(ctx, s, 858, 448, 340, 78, C.pink);
  txt(ctx, s, "结构不是为了好看，而是为了让每个判断都能被追溯、被复核、被直接引用。", 884, 468, 288, 34, 17, C.deep, true);
  return s;
}
