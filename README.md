# 运动基因人格测试 🧬

一个类 MBTI 的「运动基因人格」趣味测试 H5。用户答 12 道题，系统按 4 组二分维度算出 4 位人格代码（如 `ARTC`），并生成适合截图分享的结果页。

> 本测试为趣味互动内容，不代表医学建议或真实基因检测结果。

## 技术栈

- React 18 + Vite + TypeScript
- Tailwind CSS 3
- 纯前端，无后端：题库 / 分数 / 结果都在前端配置文件里

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开终端里显示的地址（默认 http://localhost:5173 ）。
建议用浏览器的「手机模式」(F12 → 切换设备工具栏) 预览，体验为 mobile-first。

其它命令：

```bash
npm run build     # 类型检查 + 生产构建，产物在 dist/
npm run preview   # 本地预览构建产物
```

## 维度说明

最终人格代码由 4 组对立维度各取一边拼成（顺序固定）：

| 位 | 维度轴 | 含义 |
|----|--------|------|
| 1 | **A / E** | Athletic Power 爆发力型 vs Endurance 耐力型 |
| 2 | **R / S** | Risk 挑战型 vs Stable 稳健型 |
| 3 | **T / F** | Technique 技术训练型 vs Flow 自然感觉型 |
| 4 | **C / I** | Competitive 竞技型 vs Individual 自我探索型 |

例如 `ARTC` = 爆发力 + 挑战 + 技术 + 竞技。共 16 种组合，均已配文案。

## 项目结构

```
sports-gene-quiz/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── src/
    ├── main.tsx                  # 入口
    ├── App.tsx                   # 页面状态机：home → quiz → result
    ├── index.css                 # Tailwind 指令 + 全局样式
    ├── types/
    │   └── quiz.ts               # 所有类型定义
    ├── data/
    │   ├── appConfig.ts          # 标题/副标题/免责声明/品牌文案（改文案看这里）
    │   ├── questions.ts          # 题库（12 道示例题）
    │   └── results.ts            # 16 种人格结果 + fallback
    ├── utils/
    │   └── calculateResult.ts    # 计分 → 4 位代码 → 匹配结果
    └── components/
        ├── HomePage.tsx          # 首页
        ├── QuizPage.tsx          # 答题页
        ├── ResultPage.tsx        # 结果页（截图分享）
        ├── ProgressBar.tsx       # 进度条
        └── OptionCard.tsx        # 选项卡片
```

## 如何替换内容（无需改逻辑）

- **改题目**：编辑 `src/data/questions.ts`。每个选项的 `score` 给 8 个维度字母加分，可多维度同时加分。题目数量随意增删，计分逻辑自动适配。
- **改结果文案**：编辑 `src/data/results.ts`。只要 `code` 不变，匹配逻辑不用动。`gradient` 是 Tailwind 渐变类名，决定结果页主题色。
- **改首页/免责声明文案**：编辑 `src/data/appConfig.ts`。
- **改并列时的取舍规则**：编辑 `src/utils/calculateResult.ts` 里的 `buildCode`（当前规则：并列取左边）。

## 预留的扩展点（代码里已用注释标注）

- **分享图生成**：`ResultPage.tsx` 里 `shareCardRef` 已包好截图区，接 `html2canvas` 即可导出图片。
- **用户结果保存 / 后端 API**：`App.tsx` 的 `handleComplete` 是上报/落库的切入点。
- **微信小程序版**：逻辑层（`data/` + `utils/`）是纯 TS、无 DOM 依赖，可直接复用；只需重写 `components/` 为小程序组件。
- **品牌定制结果页**：`appConfig.ts` 可扩展 logo/主色；`results.ts` 每个结果可加 `image / couponId / productId` 等字段。
- **基因检测产品推荐模块**：可在 `ResultPage` 结果区下方按 `result.code` 推荐对应产品。
```
