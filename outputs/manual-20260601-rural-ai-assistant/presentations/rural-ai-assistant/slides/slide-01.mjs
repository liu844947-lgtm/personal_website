import { RC, ruralSlide, pageBase, tag, card, imagePlaceholder } from "./rural-foundation.mjs";
import { box, roundBox, txt } from "./foundation.mjs";

export default async function slide01(presentation, ctx) {
  const s = ruralSlide(presentation);
  pageBase(
    ctx,
    s,
    1,
    "跨学科产品化案例｜从乡村规划到乡村文旅 AI 助手",
    "为什么这个传统规划项目值得放进 AI 产品经理作品集？",
  );

  roundBox(ctx, s, 54, 168, 516, 90, RC.green);
  txt(ctx, s, "项目一句话", 78, 188, 120, 18, 12, RC.lotus, true);
  txt(ctx, s, "把双村文化、产业与公共空间，转译成可被游客使用、村民参与、运营方持续优化的数字化服务。", 78, 212, 456, 28, 18, RC.white, true);

  const meta = [
    ["项目类型", "乡村规划竞赛 / 双村协同规划"],
    ["项目成果", "省级一等奖 / 国家佳作奖"],
    ["原始主题", "茶文化 + 莲文化 + 乡村产业 + 公共空间"],
    ["产品化方向", "乡村文旅 AI 助手"],
    ["我的角色", "方案策划、空间分析、图纸表达、成果汇报参与"],
  ];
  meta.forEach(([k, v], i) => {
    const y = 286 + i * 50;
    tag(ctx, s, k, 54, y, 90, i === 1);
    txt(ctx, s, v, 162, y + 4, 390, 22, 17, i === 1 ? RC.green : RC.text, i === 1);
    box(ctx, s, 54, y + 34, 498, 1, "#D8E3DA");
  });

  card(
    ctx,
    s,
    54,
    552,
    516,
    62,
    "作品集中的呈现策略",
    "不把它作为规划成果展示，而是作为“复杂线下场景产品化”的证据：从资源理解到用户需求、服务流程与 AI 闭环。",
  );

  imagePlaceholder(ctx, s, 614, 168, 264, 446, "完整展板缩略图", "证明项目真实、完整、获奖");
  imagePlaceholder(ctx, s, 906, 168, 274, 446, "总平面 / 鸟瞰图", "展示茶园、莲塘、公共节点与游线");
  return s;
}
