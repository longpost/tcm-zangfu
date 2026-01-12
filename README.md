# 中医脏腑科普 Web App（MVP + 科普版）

可直接部署到 **Vercel** 的 Next.js（App Router）项目。

## 功能
- **总览页**：五脏六腑卡片 + 人体示意图入口
- **单个脏腑页**：统一模板（管什么 / 正常 / 常见失衡模式 / 牵连 / 误区 / FAQ）
- **症状 → 系统页**：点选“感受/表现”，输出常见相关系统与解释（**提示，不是诊断**）

> 免责声明：本项目为科普用途，不提供医疗诊断/处方/紧急处理建议。

## 本地运行
```bash
npm install
npm run dev
```
打开：`http://localhost:3000`

## Vercel 部署
- 推到 GitHub
- Vercel 导入仓库，自动识别 Next.js，直接 Deploy

## 主要内容位置
- `lib/organs.ts`：脏腑内容（MVP + 科普）
- `lib/symptoms.ts`：症状与映射（提示逻辑）
