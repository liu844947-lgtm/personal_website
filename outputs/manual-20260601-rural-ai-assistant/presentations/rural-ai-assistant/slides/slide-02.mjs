import { RC, ruralSlide, pageBase, tag } from "./rural-foundation.mjs";
import { box, roundBox, txt } from "./foundation.mjs";

function roleRow(ctx, s, y, role, pain, chance, active = false) {
  roundBox(ctx, s, 54, y, 1126, 72, active ? RC.green : RC.white, active ? RC.green : RC.border, 1.1);
  roundBox(ctx, s, 78, y + 19, 86, 32, active ? RC.lotus : RC.greenSoft);
  txt(ctx, s, role, 78, y + 29, 86, 12, 12, active ? RC.deep : RC.green, true, "center");
  txt(ctx, s, pain, 190, y + 15, 402, 38, 15, active ? "#E6F0E9" : RC.text);
  txt(ctx, s, chance, 642, y + 15, 480, 38, 15, active ? RC.white : RC.ink, true);
}

function resourceChip(ctx, s, x, title, explain) {
  roundBox(ctx, s, x, 580, 258, 40, RC.panel, RC.border, 1);
  txt(ctx, s, title, x + 18, 592, 94, 13, 12, RC.green, true);
  txt(ctx, s, explain, x + 112, 592, 124, 13, 11, RC.text);
}

export default async function slide02(presentation, ctx) {
  const s = ruralSlide(presentation);
  pageBase(ctx, s, 2, "从空间问题到用户需求：多角色场景拆解", "核心不是“空间如何设计”，而是不同角色如何使用村庄、经营村庄和持续治理村庄。");

  tag(ctx, s, "角色", 80, 160, 86, true);
  tag(ctx, s, "痛点", 190, 160, 86);
  tag(ctx, s, "产品机会", 642, 160, 100);
  box(ctx, s, 54, 196, 1126, 2, RC.green);

  roleRow(ctx, s, 214, "游客", "不知道玩什么；文化内容难理解；活动信息分散，难以形成完整体验。", "AI 文化导览、活动推荐、体验预约。", true);
  roleRow(ctx, s, 300, "村民", "农产品和手艺缺少展示入口，参与运营方式弱，村庄故事难被看见。", "农产品发布、活动主理人申请、村庄故事投稿。");
  roleRow(ctx, s, 386, "运营方", "活动效果难追踪，游客反馈难沉淀，资源配置依赖经验判断。", "预约管理、反馈分析、热门节点统计、AI 运营建议。");
  roleRow(ctx, s, 472, "政府/村集体", "产业、生态、公共服务需要长期协同，治理问题缺少反馈闭环。", "资源数字化、活动运营数据、公共问题反馈闭环。");

  box(ctx, s, 54, 562, 1126, 1, "#D8E3DA");
  resourceChip(ctx, s, 54, "茶文化资源", "转译为文化导览内容");
  resourceChip(ctx, s, 346, "莲塘景观", "转译为体验活动与打卡节点");
  resourceChip(ctx, s, 638, "农产品资源", "转译为村民供给入口");
  resourceChip(ctx, s, 930, "公共空间", "转译为反馈与共创场景");
  return s;
}
