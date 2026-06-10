import { C, IMG, slide, box, roundBox, rule, txt, base, interior, label, card, pill, phone, headingBlock, arrow } from "./foundation.mjs";

export async function make01(presentation, ctx) {
  const s = slide(presentation);
  base(ctx, s, C.deep);
  txt(ctx, s, "2026 / PORTFOLIO", 54, 38, 260, 20, 12, C.pink, true);
  txt(ctx, s, "AI PRODUCT", 54, 148, 465, 72, 64, C.white, true);
  txt(ctx, s, "MANAGER", 54, 228, 465, 74, 64, C.pink, true);
  txt(ctx, s, "作品集", 58, 306, 280, 48, 34, C.white, true);
  txt(ctx, s, "从需求澄清到可持续优化的 AI 产品体验", 58, 376, 372, 42, 15, "#E9F1EC");
  pill(ctx, s, "AI AGENT / UX / PRODUCT", 58, 466, 210, true);
  txt(ctx, s, "小迹 - AI 旅行 Agent", 58, 523, 312, 26, 18, C.white, true);
  txt(ctx, s, "用户自调研系统  |  About Me", 58, 556, 356, 22, 12, "#B9D4C6");

  txt(ctx, s, "⚡", 270, -285, 760, 1270, 1220, C.pink, true, "center", "Segoe UI Symbol");
  box(ctx, s, 836, 38, 390, 644, "#07492E");
  label(ctx, s, "FEATURED CASE", 872, 78, 260, C.pink);
  txt(ctx, s, "小迹", 872, 104, 170, 40, 32, C.white, true);
  txt(ctx, s, "AI 旅行 Agent", 872, 146, 234, 32, 23, C.pink, true);
  await ctx.addImage(s, { path: IMG.routeCut, x: 876, y: 212, w: 168, h: 388, fit: "contain", alt: "地图路线页" });
  await ctx.addImage(s, { path: IMG.chatCut, x: 1030, y: 275, w: 160, h: 366, fit: "contain", alt: "AI 对话页" });
  txt(ctx, s, "MAP ROUTE", 880, 622, 106, 16, 9, C.white, true);
  txt(ctx, s, "AI DIALOG", 1055, 650, 100, 16, 9, C.pink, true);
  return s;
}

export async function make02(presentation, ctx) {
  const s = slide(presentation);
  base(ctx, s);
  rule(ctx, s, 638, 0, 2, 720, C.deep);
  label(ctx, s, "PORTFOLIO 2026", 52, 54, 230, C.green);
  txt(ctx, s, "作品集目录", 52, 92, 430, 60, 45, C.ink, true);
  txt(ctx, s, "AI 应用产品经理 / AI Agent 产品经理", 52, 164, 430, 22, 14, C.text);
  pill(ctx, s, "PRODUCT DESIGN", 52, 218, 152);
  pill(ctx, s, "AI WORKFLOW", 214, 218, 135, true);

  const menu = [
    ["01", "小迹 - AI 旅行 Agent"],
    ["02", "用户自调研系统"],
    ["03", "About Me"],
  ];
  menu.forEach(([n, t], i) => {
    const y = 304 + i * 82;
    txt(ctx, s, n, 54, y + 9, 44, 20, 12, i === 0 ? C.pink : C.muted, true);
    txt(ctx, s, t, 114, y, 430, 40, 29, i === 0 ? C.green : C.ink, true);
    rule(ctx, s, 52, y + 55, 490, 1, C.border);
  });
  txt(ctx, s, "面向复杂任务规划的 AI 产品案例集", 52, 612, 390, 19, 12, C.text);
  txt(ctx, s, "Portfolio / 2026", 52, 648, 180, 18, 10, C.pink, true);

  box(ctx, s, 640, 0, 640, 720, "#F4F2EA");
  label(ctx, s, "FEATURED PROJECT", 690, 58, 220, C.pink);
  txt(ctx, s, "小迹", 690, 91, 140, 40, 34, C.green, true);
  txt(ctx, s, "AI 旅行 Agent", 690, 134, 250, 29, 23, C.pink, true);
  txt(ctx, s, "需求澄清 / 个性化生成 / 地图验证 / 持续调整", 690, 180, 470, 20, 12, C.text);
  await ctx.addImage(s, { path: IMG.discoverCut, x: 700, y: 252, w: 248, h: 398, fit: "contain", alt: "小迹首页" });
  await ctx.addImage(s, { path: IMG.routeCut, x: 872, y: 224, w: 242, h: 430, fit: "contain", alt: "小迹路线页" });
  await ctx.addImage(s, { path: IMG.chatCut, x: 1058, y: 304, w: 176, h: 344, fit: "contain", alt: "小迹聊天页" });
  return s;
}

export async function make03(presentation, ctx) {
  const s = slide(presentation);
  interior(ctx, s, 3, "01 / 产品概况", "小迹 - AI 旅行 Agent", "帮助用户明确旅行需求、生成个性化路线，并持续优化行程的 AI 旅行 Agent");
  label(ctx, s, "PRODUCT OVERVIEW", 54, 167, 250);
  txt(ctx, s, "面向旅行规划场景，AI 通过对话梳理需求，\n结合偏好生成路线，并支持地图查看与持续调整。", 54, 193, 432, 62, 17, C.text);

  const info = [
    ["项目类型", "AI Agent / C 端旅行规划产品"],
    ["目标用户", "想省攻略时间、又要求行程合偏好的年轻用户"],
    ["我的角色", "产品定义 / AI 交互 / 界面设计 / Demo 落地"],
    ["当前成果", "手机端 Demo / 偏好体系 / 地图与调整页面"],
    ["核心能力", "Agent Workflow / 个性化推荐 / 复杂任务规划"],
  ];
  info.forEach(([k, v], i) => {
    const y = 282 + i * 52;
    roundBox(ctx, s, 54, y, 438, 42, i === 4 ? C.green : C.white, i === 4 ? C.green : C.border, 1);
    txt(ctx, s, k, 69, y + 14, 78, 15, 10, i === 4 ? C.pink : C.green, true);
    txt(ctx, s, v, 158, y + 9, 316, 22, 15, i === 4 ? C.white : C.text, false);
  });
  await phone(ctx, s, IMG.route, 562, 180, 178, 388, "地图路线页");
  await phone(ctx, s, IMG.home, 775, 158, 194, 422, "主界面 Mockup");
  await phone(ctx, s, IMG.chat, 1005, 180, 178, 388, "AI 对话页");
  return s;
}

export async function make04(presentation, ctx) {
  const s = slide(presentation);
  interior(ctx, s, 4, "01 / 用户痛点", "用户痛点", "旅行计划不是一次输入生成答案，而是边探索、边判断、边修改的过程。");
  card(ctx, s, 54, 184, 558, 178, "01", "需求在探索中形成", "用户最初往往只知道“想出去玩”或“想轻松一点”，需要在浏览内容中逐步明确目的地、节奏与偏好。");
  card(ctx, s, 636, 184, 558, 178, "02", "攻略信息分散", "景点种草、攻略内容、地图位置与路线安排散落在不同平台，用户必须反复切换并手动整理。");
  card(ctx, s, 54, 386, 558, 178, "03", "通用 AI 缺少个性化", "传统 LLM 可以快速生成路线，但结果容易偏大众化，难以体现节奏、兴趣与同行需求。");
  card(ctx, s, 636, 386, 558, 178, "04", "生成结果难验证、难修改", "大段文字方案难以看到地点与路线关系，也难以只修改某一天或某一个地点。", true);
  return s;
}

export async function make05(presentation, ctx) {
  const s = slide(presentation);
  interior(ctx, s, 5, "01 / 竞品分析", "竞品分析", "机会不在“再提供一个工具”，而在衔接需求澄清、生成、验证与调整。");
  const cols = [54, 242, 482, 726];
  const widths = [176, 228, 232, 468];
  ["现有方式", "代表产品", "用户得到什么", "仍然缺什么"].forEach((v, i) => {
    box(ctx, s, cols[i], 178, widths[i], 42, C.green);
    txt(ctx, s, v, cols[i] + 14, 192, widths[i] - 22, 15, 11, C.white, true);
  });
  const rows = [
    ["内容攻略平台", "小红书", "真实灵感与经验内容", "仍需用户自己整理并规划路线"],
    ["行程规划工具", "Wanderlog / 圆周旅迹", "地图、清单、行程组织", "理解个性化需求有限，更偏记录工具"],
    ["通用 AI 对话", "ChatGPT / 通用 LLM", "快速生成文字行程", "缺少地图验证、结构化编辑与稳定个性化"],
  ];
  rows.forEach((row, r) => {
    const y = 220 + r * 86;
    row.forEach((v, i) => {
      box(ctx, s, cols[i], y, widths[i], 86, r === 1 ? C.panel : C.white, C.border, 1);
      txt(ctx, s, v, cols[i] + 14, y + 13, widths[i] - 24, 62, 15, i === 0 ? C.green : C.text, i === 0);
    });
  });
  roundBox(ctx, s, 54, 513, 1140, 104, C.deep);
  label(ctx, s, "PRODUCT OPPORTUNITY", 74, 534, 220, C.pink);
  txt(ctx, s, "不是替代攻略内容，也不是再做一个行程清单工具，\n而是补足“需求澄清 - 个性化生成 - 地图验证 - 持续调整”这一段决策链路。", 74, 557, 1080, 46, 18, C.white, true);
  return s;
}

export async function make06(presentation, ctx) {
  const s = slide(presentation);
  interior(ctx, s, 6, "01 / 产品方案", "产品方案", "将用户问题转译为可操作、可验证、可继续修改的 Agent 路径。");
  const solution = [
    ["不知道自己真正想要什么", "AI 对话梳理需求"],
    ["目标明确，不需要长对话", "直接填写快速生成"],
    ["通用结果偏大众化", "偏好标签参与生成"],
    ["文字行程难判断合理性", "地图展示点位与路线"],
    ["生成后难局部修改", "AI 调整 + 手动编辑"],
  ];
  solution.forEach(([p, r], i) => {
    const y = 184 + i * 73;
    roundBox(ctx, s, 54, y, 310, 56, C.white, C.border, 1);
    pill(ctx, s, "0" + (i + 1), 68, y + 15, 40, true);
    txt(ctx, s, p, 122, y + 17, 230, 25, 16, C.ink, true);
    roundBox(ctx, s, 385, y, 269, 56, C.green);
    txt(ctx, s, r, 406, y + 17, 226, 25, 16, C.white, true);
    arrow(ctx, s, 365, y + 18, 23);
  });
  label(ctx, s, "FROM INTENT TO ROUTE", 706, 185, 260);
  const flow = ["模糊想法 / 明确需求", "对话梳理 / 直接填写", "偏好生成路线", "地图查看安排", "AI 优化 / 手动编辑"];
  flow.forEach((v, i) => {
    const y = 221 + i * 72;
    roundBox(ctx, s, 706, y, 438, 44, i === 4 ? C.pink : C.panel, i === 4 ? C.pink : C.border, 1);
    txt(ctx, s, v, 728, y + 8, 370, 25, 16, i === 4 ? C.deep : C.green, true);
    if (i < flow.length - 1) {
      box(ctx, s, 731, y + 44, 2, 28, C.pink);
    }
  });
  await ctx.addImage(s, { path: IMG.discoverCut, x: 1110, y: 218, w: 90, h: 246, fit: "contain", alt: "产品界面" });
  return s;
}

export async function make07(presentation, ctx) {
  const s = slide(presentation);
  interior(ctx, s, 7, "01 / 用户核心体验", "用户核心体验 / 规划入口", "同一目标下提供两条入口：先聊清楚，或直接把明确需求交给 AI。");
  roundBox(ctx, s, 54, 174, 1140, 116, C.panel, C.border, 1);
  pill(ctx, s, "开始规划", 70, 216, 94, true);
  arrow(ctx, s, 178, 219, 78);
  pill(ctx, s, "选择规划方式", 265, 216, 128);
  arrow(ctx, s, 410, 219, 58);
  roundBox(ctx, s, 482, 190, 332, 78, C.white, C.green, 1);
  label(ctx, s, "PATH A / 想法尚不清晰", 500, 203, 266);
    txt(ctx, s, "与 AI 对话梳理需求", 500, 228, 274, 23, 16, C.green, true);
  roundBox(ctx, s, 834, 190, 332, 78, C.green);
  label(ctx, s, "PATH B / 需求已经明确", 852, 203, 270, C.pink);
  txt(ctx, s, "直接填写旅行信息", 852, 228, 272, 23, 16, C.white, true);

  const screens = [
    ["01", "创建入口页", IMG.home],
    ["02A", "AI 对话规划页", IMG.chat],
    ["02B", "直接填写页", IMG.form],
    ["03", "需求确认页", IMG.pro ?? IMG.home],
    ["04", "生成中页面", IMG.loading],
  ];
  for (const [i, [n, title, path]] of screens.entries()) {
    const x = 72 + i * 224;
    label(ctx, s, n, x, 324, 92);
    txt(ctx, s, title, x, 342, 176, 22, 14, C.green, true);
    box(ctx, s, x, 371, 174, 234, C.deep);
    await ctx.addImage(s, { path, x: x + 5, y: 376, w: 164, h: 224, fit: "contain", alt: title });
  }
  return s;
}

export async function make08(presentation, ctx) {
  const s = slide(presentation);
  interior(ctx, s, 8, "01 / 用户核心体验", "用户核心体验 / 生成后调整", "文字放在上方解释判断链路，页面证据集中在下方展示实际操作。");
  const flow = [
    ["AI 生成个性化行程", "每日安排 / 地点 / 推荐理由"],
    ["行程详情 + 地图路线", "验证点位与线路关系"],
    ["选择调整方式", "AI 意图表达或手动操作"],
    ["更新并保存", "形成最终行程方案"],
  ];
  flow.forEach(([t, b], i) => {
    const x = 54 + i * 290;
    roundBox(ctx, s, x, 177, 252, 95, i === 2 ? C.green : C.white, i === 2 ? C.green : C.border, 1);
    pill(ctx, s, "0" + (5 + i), x + 16, 192, 38, i === 2);
    txt(ctx, s, t, x + 66, 194, 172, 23, 14, i === 2 ? C.white : C.green, true);
    txt(ctx, s, b, x + 18, 226, 218, 36, 15, i === 2 ? "#E5EFE9" : C.text);
    if (i < flow.length - 1) arrow(ctx, s, x + 254, 214, 33);
  });
  const images = [
    ["05", "行程详情页", IMG.route],
    ["06A", "AI 优化页面", IMG.refine],
    ["06B", "手动编辑页面", IMG.edit],
    ["07", "行程保存 / 列表页", IMG.list],
  ];
  for (const [i, [n, t, path]] of images.entries()) {
    const x = 104 + i * 274;
    label(ctx, s, n + "  /  " + t, x, 310, 218);
    box(ctx, s, x, 340, 195, 273, C.deep);
    await ctx.addImage(s, { path, x: x + 5, y: 345, w: 185, h: 263, fit: "contain", alt: t });
  }
  return s;
}

export async function make09(presentation, ctx) {
  const s = slide(presentation);
  interior(ctx, s, 9, "01 / 时序图", "时序图", "从用户输入到局部调整，明确 DeepSeek 模块与高德地图之间的调用关系。");
  const actors = [
    ["用户", 54, C.green],
    ["前端页面", 238, C.deep],
    ["需求解析\nDeepSeek", 422, C.green],
    ["行程生成\nDeepSeek", 606, C.green],
    ["高德地图", 790, C.deep],
    ["局部调整\nDeepSeek", 974, C.green],
  ];
  actors.forEach(([t, x, color]) => {
    roundBox(ctx, s, x, 174, 158, 52, color);
    txt(ctx, s, t, x, 188, 158, 31, 12, C.white, true, "center");
    box(ctx, s, x + 78, 229, 1, 369, C.border);
  });
  const actions = [
    [54, 238, 248, "输入想法 / 填写信息"],
    [238, 422, 282, "需求内容 + 偏好标签"],
    [422, 238, 317, "结构化需求字段"],
    [238, 606, 368, "确认需求 + 旅行偏好"],
    [606, 790, 405, "地点 / 路线字段"],
    [790, 238, 442, "点位与线路结果"],
    [238, 974, 500, "局部修改指令"],
    [974, 790, 537, "更新后的行程"],
    [238, 54, 575, "展示结果 / 保存"],
  ];
  actions.forEach(([from, to, y, text], i) => {
    const start = from + 80;
    const end = to + 78;
    const left = Math.min(start, end);
    const width = Math.abs(end - start);
    box(ctx, s, left, y, width, 2, i === 6 || i === 7 ? C.pink : C.green);
    box(ctx, s, end - (end > start ? 8 : 0), y - 4, 8, 8, i === 6 || i === 7 ? C.pink : C.green);
    txt(ctx, s, text, left + 5, y - 22, Math.max(116, width - 8), 21, 14, C.text, true);
  });
  pill(ctx, s, "AI 调整路径", 1002, 610, 128, true);
  return s;
}

export async function make10(presentation, ctx) {
  const s = slide(presentation);
  interior(ctx, s, 10, "01 / Agent 工作流", "Agent 工作流", "用户描述想法 → LLM 理解需求 → 个性化生成 → 地图验证与 Tips → 持续调整");
  const steps = [
    ["01", "输入", "目的地 / 天数 / 同行人\n预算 / 偏好标签 / 修改指令"],
    ["02", "理解需求", "将自然语言转为\n旅行需求 JSON"],
    ["03", "生成路线", "每日主题 / 地点列表\n推荐理由 / 时间安排"],
    ["04", "地图验证", "高德地图点位与线路\nTavily + LLM Tips"],
    ["05", "局部调整", "保留偏好语境\n更新相关日程"],
  ];
  steps.forEach(([n, t, b], i) => {
    const x = 54 + i * 229;
    roundBox(ctx, s, x, 176, 204, 124, i === 2 ? C.green : C.white, i === 2 ? C.green : C.border, 1);
    pill(ctx, s, n, x + 15, 192, 37, i === 2);
    txt(ctx, s, t, x + 63, 195, 120, 20, 14, i === 2 ? C.white : C.green, true);
    txt(ctx, s, b, x + 17, 229, 174, 57, 15, i === 2 ? "#E6F0E9" : C.text);
    if (i < 4) arrow(ctx, s, x + 205, 232, 27);
  });
  label(ctx, s, "AGENT ACTUAL TASKS", 54, 341, 280);
  const rows = [
    ["需求解析模块", "将用户表达转成结构化条件", "用户自然语言、偏好标签", "旅行需求 JSON"],
    ["行程生成模块", "生成每日地点与节奏安排", "需求 JSON、POI / 地图信息", "Day-by-Day 行程"],
    ["局部调整模块", "根据反馈更新部分行程", "当前方案、修改指令", "更新后的局部行程"],
  ];
  const cx = [54, 262, 566, 875];
  const cw = [196, 292, 297, 319];
  ["模块", "职责", "输入", "输出"].forEach((v, i) => {
    box(ctx, s, cx[i], 372, cw[i], 38, C.deep);
    txt(ctx, s, v, cx[i] + 12, 384, cw[i] - 20, 14, 11, C.pink, true);
  });
  rows.forEach((row, r) => row.forEach((v, i) => {
    const y = 410 + r * 58;
    box(ctx, s, cx[i], y, cw[i], 58, r === 1 ? C.panel : C.white, C.border, 1);
    txt(ctx, s, v, cx[i] + 12, y + 12, cw[i] - 20, 40, 15, i === 0 ? C.green : C.text, i === 0);
  }));
  return s;
}

export async function make11(presentation, ctx) {
  const s = slide(presentation);
  interior(ctx, s, 11, "01 / 旅行灵魂测试设计", "旅行灵魂测试设计", "用可解释的偏好层，为路线生成提供稳定而非大众化的个性化输入。");
  label(ctx, s, "TEST FRAMEWORK", 54, 174, 220);
  txt(ctx, s, "20", 54, 204, 116, 74, 62, C.green, true);
  txt(ctx, s, "题 / 约 3 分钟", 178, 241, 138, 25, 16, C.pink, true);
  txt(ctx, s, "生成 16 种旅行灵魂", 54, 288, 250, 27, 18, C.ink, true);
  txt(ctx, s, "让偏好进入生成过程，\n而不是停留在自我描述。", 54, 329, 266, 54, 15, C.text);
  const dimensions = ["节奏感", "规划感", "兴趣重心", "同行倾向", "探索偏好", "消费观"];
  dimensions.forEach((v, i) => pill(ctx, s, v, 54 + (i % 2) * 128, 405 + Math.floor(i / 2) * 44, 114, i === 2 || i === 5));
  roundBox(ctx, s, 356, 176, 422, 432, C.green);
  label(ctx, s, "EXAMPLE PERSONA", 381, 202, 200, C.pink);
  txt(ctx, s, "城市考古家", 381, 239, 228, 42, 31, C.white, true);
  txt(ctx, s, "中节奏 / 计划型 / 文化经典\n朋友同行 / 均衡消费", 381, 294, 298, 52, 16, "#E7F1EB", true);
  rule(ctx, s, 381, 360, 342, 1, "#477663");
  txt(ctx, s, "穿越古街、博物馆，\n走的每一步都像在考古。", 381, 384, 332, 52, 17, C.white, true);
  label(ctx, s, "GENERATION TENDENCY", 381, 468, 240, C.pink);
  txt(ctx, s, "历史街区与文化场所优先\n保持适中路线密度\n加入适合慢逛的城市空间\n避免单一网红打卡路线", 381, 488, 344, 100, 15, C.white);
  await phone(ctx, s, IMG.test, 838, 190, 152, 330, "测试页面");
  await phone(ctx, s, IMG.result, 1030, 190, 152, 330, "测试结果");
  pill(ctx, s, "出片收集员", 850, 564, 142);
  pill(ctx, s, "胃袋探险家", 1028, 564, 142, true);
  return s;
}

export async function make12(presentation, ctx) {
  const s = slide(presentation);
  interior(ctx, s, 12, "01 / 人格生成与验证计划", "人格生成与验证计划", "人格标签必须回到路线质量验证：是否更符合节奏、兴趣与同行场景。");
  const personas = [
    ["城市考古家", "文化经典 / 计划型", "历史街区 + 建筑空间\n适中密度的慢逛路线"],
    ["出片收集员", "视觉导向 / 探索型", "日落机位 + 街区场景\n动线兼顾光线时间"],
    ["胃袋探险家", "饮食中心 / 松弛型", "市场 + 小店串联\n减少赶场与长距离折返"],
  ];
  personas.forEach(([name, tags, body], i) => {
    const x = 54 + i * 280;
    roundBox(ctx, s, x, 183, 254, 178, i === 0 ? C.green : C.white, i === 0 ? C.green : C.border, 1);
    pill(ctx, s, "PERSONA 0" + (i + 1), x + 18, 202, 108, i !== 0);
    txt(ctx, s, name, x + 18, 244, 190, 28, 20, i === 0 ? C.white : C.green, true);
    txt(ctx, s, tags, x + 18, 275, 208, 24, 15, i === 0 ? "#E2EFE8" : C.pink, true);
    txt(ctx, s, body, x + 18, 302, 210, 44, 15, i === 0 ? C.white : C.text);
  });
  roundBox(ctx, s, 920, 183, 274, 178, C.pinkSoft, C.pink, 1);
  label(ctx, s, "STATUS", 942, 204, 160, C.green);
  txt(ctx, s, "验证中", 942, 238, 180, 34, 27, C.green, true);
  txt(ctx, s, "当前展示设计框架与 Demo，\n未主张量化效果结论。", 942, 289, 214, 52, 16, C.text);
  label(ctx, s, "VALIDATION CHECKLIST", 54, 411, 284);
  const validations = [
    ["01", "偏好映射准确", "标签能否稳定影响地点类别与路线密度"],
    ["02", "路线可解释", "推荐理由能否对应用户选择的偏好维度"],
    ["03", "调整保持一致", "局部修改后是否仍保留原始旅行性格"],
  ];
  validations.forEach(([n, t, b], i) => {
    const x = 54 + i * 381;
    roundBox(ctx, s, x, 450, 350, 112, C.white, C.border, 1);
    pill(ctx, s, n, x + 18, 469, 42, true);
    txt(ctx, s, t, x + 78, 473, 230, 20, 15, C.green, true);
    txt(ctx, s, b, x + 18, 507, 302, 46, 15, C.text);
  });
  return s;
}

export async function make13(presentation, ctx) {
  const s = slide(presentation);
  interior(ctx, s, 13, "02 / 用户自调研系统", "用户自调研系统", "从访谈、问卷与反馈出发，让 AI 把洞察重新连接回证据。", "RESEARCH SYSTEM / AI INSIGHT");
  label(ctx, s, "SECOND PROJECT", 54, 176, 210);
  txt(ctx, s, "从反馈到洞察", 54, 210, 340, 38, 29, C.green, true);
  txt(ctx, s, "导入访谈、问卷与反馈文本；\nAI 提取标签、聚类痛点，回链原始证据与验证指标。", 54, 271, 392, 72, 17, C.text);
  pill(ctx, s, "AI TAGGING", 54, 370, 112, true);
  pill(ctx, s, "CLUSTERING", 177, 370, 118);
  pill(ctx, s, "EVIDENCE LINK", 307, 370, 136, true);
  roundBox(ctx, s, 54, 432, 390, 128, C.green);
  label(ctx, s, "DESIGN INTENT", 76, 456, 196, C.pink);
  txt(ctx, s, "避免只给“结论”，\n让产品决策能够回看来源。", 76, 491, 316, 52, 18, C.white, true);
  const system = [
    ["01", "输入资料", "访谈 / 问卷 / 用户反馈"],
    ["02", "AI 处理", "标签提取 / 痛点聚类"],
    ["03", "证据回链", "洞察对应原始片段"],
    ["04", "验证", "指标与研究结论更新"],
  ];
  system.forEach(([n, t, b], i) => {
    const y = 182 + i * 99;
    roundBox(ctx, s, 520, y, 622, 74, i === 2 ? C.green : C.white, i === 2 ? C.green : C.border, 1);
    pill(ctx, s, n, 540, y + 23, 42, i !== 2);
    txt(ctx, s, t, 604, y + 17, 160, 22, 16, i === 2 ? C.white : C.green, true);
    txt(ctx, s, b, 797, y + 15, 314, 42, 16, i === 2 ? C.white : C.text);
    if (i < system.length - 1) box(ctx, s, 561, y + 74, 2, 25, C.pink);
  });
  return s;
}

export async function make14(presentation, ctx) {
  const s = slide(presentation);
  interior(ctx, s, 14, "03 / ABOUT ME", "About Me", "从城乡规划的场景研究与系统思考，转向可落地的 AI 产品设计。", "ABOUT ME / PROFILE");
  label(ctx, s, "TARGET ROLE", 54, 184, 190);
  txt(ctx, s, "AI 应用产品经理", 54, 220, 390, 36, 28, C.green, true);
  txt(ctx, s, "AI Agent 产品经理 / AI 用户产品经理", 54, 267, 408, 25, 14, C.pink, true);
  txt(ctx, s, "我关注复杂任务如何被拆解、理解、验证与持续优化；\n在产品中把 AI 能力转换为用户可判断、可控制的体验。", 54, 328, 478, 68, 15, C.text);
  roundBox(ctx, s, 54, 441, 448, 110, C.green);
  label(ctx, s, "FOCUS", 74, 460, 148, C.pink);
  txt(ctx, s, "AI Agent × 用户体验 × 产品落地", 74, 497, 386, 25, 19, C.white, true);

  const skills = [
    ["01", "场景研究", "从真实需求与行为中提炼问题"],
    ["02", "系统设计", "规划流程、模块与交互闭环"],
    ["03", "结果验证", "将生成结果放回用户判断"],
  ];
  skills.forEach(([n, t, b], i) => {
    const y = 184 + i * 126;
    roundBox(ctx, s, 612, y, 530, 100, C.white, C.border, 1);
    pill(ctx, s, n, 632, y + 28, 44, true);
    txt(ctx, s, t, 704, y + 20, 162, 25, 19, C.green, true);
    txt(ctx, s, b, 704, y + 49, 392, 35, 16, C.text);
  });
  return s;
}

export async function make15(presentation, ctx) {
  const s = slide(presentation);
  base(ctx, s, C.deep);
  txt(ctx, s, "⚡", 777, 36, 410, 614, 420, C.pink, true, "center", "Segoe UI Symbol");
  label(ctx, s, "THANK YOU / PORTFOLIO 2026", 54, 56, 290, C.pink);
  txt(ctx, s, "谢谢观看", 54, 210, 382, 70, 60, C.white, true);
  txt(ctx, s, "好的 AI 产品，不只完成生成，\n也让用户能够判断、调整与信任结果。", 54, 314, 580, 76, 25, C.white, true);
  pill(ctx, s, "AI PRODUCT MANAGER", 54, 467, 192, true);
  txt(ctx, s, "小迹 - AI 旅行 Agent", 54, 538, 342, 24, 17, C.pink, true);
  txt(ctx, s, "用户自调研系统  /  About Me", 54, 575, 340, 21, 12, "#D3E4DA");
  box(ctx, s, 54, 650, 1136, 2, C.pink);
  txt(ctx, s, "END", 1144, 667, 46, 16, 10, C.pink, true, "right");
  return s;
}
