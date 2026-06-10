import { C, box, roundBox, txt, label, pill, researchSlide, researchPage } from "./research-foundation.mjs";

export default async function make20(presentation, ctx) {
  const s = researchSlide(presentation);
  researchPage(ctx, s, 8, "MVP", "先验证单课题闭环，把输入、抓取、清洗、输出跑通");
  const features = [
    ["单课题输入", "用户输入一个研究问题，系统自动生成跨平台抓取结果"],
    ["自动清洗标准化", "去重、过滤噪声、统一字段，减少人工整理成本。"],
    ["报告可追溯", "原始用户发言进入证据链，保证关键结论真实可靠。"],
    ["界面足够清晰", "核心流程保持为：输入 → 抓取 → 清洗 → 输出。"],
  ];
  features.forEach(([t, b], i) => {
    const x = 54 + i * 284;
    roundBox(ctx, s, x, 188, 244, 176, i === 2 ? C.green : C.white, i === 2 ? C.green : C.border, 1.2);
    txt(ctx, s, `0${i + 1}`, x + 22, 212, 42, 22, 15, C.pink, true);
    txt(ctx, s, t, x + 22, 246, 190, 26, 21, i === 2 ? C.white : C.green, true);
    txt(ctx, s, b, x + 22, 292, 196, 48, 16, i === 2 ? "#E6F0E9" : C.text);
  });
  label(ctx, s, "MVP INTERFACE LOOP", 54, 430, 220);
  const loop = ["输入", "抓取", "清洗", "输出"];
  loop.forEach((v, i) => {
    const x = 170 + i * 242;
    roundBox(ctx, s, x, 476, 146, 58, i === 3 ? C.pink : C.panel, i === 3 ? C.pink : C.border, 1.2);
    txt(ctx, s, v, x, 492, 146, 22, 20, i === 3 ? C.deep : C.green, true, "center");
    if (i < loop.length - 1) {
      box(ctx, s, x + 150, 504, 82, 3, C.pink);
      box(ctx, s, x + 226, 499, 10, 10, C.pink);
    }
  });
  pill(ctx, s, "MVP 目标：先证明调研闭环成立，再扩展平台与报告类型", 360, 568, 520, true);
  return s;
}
