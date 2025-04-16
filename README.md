# Bible Parallel Reader (圣经对照阅读器)

> 万事都互相效力，叫爱神的人得益处。  
> 𖼀𖽡𖾐 𖼀𖽻𖾐 𖽐𖼊𖽪𖾏 𖼞𖽱𖾏 𖼄𖽱𖾏 𖼟𖽙𖾏 𖼈𖽻𖾏 𖼑𖽪𖾏 𖼦𖽡𖾏 𖼡𖽠𖾏 𖽃𖽔𖾏 𖼻𖽙, 𖼟𖽙𖾏 𖼊𖽜𖾑 𖼐𖽜𖾐 𖼟𖽪𖾏 𖽐𖼮𖽑𖽠𖾏 𖽐𖼊𖽪𖾏 𖼞𖽱𖾏 𖼄𖽱𖾏 𖼟𖽪𖾏 𖼐𖽱𖾏 𖼸𖽙𖾏 𖼐𖽱𖾏 𖼺𖽡𖽝𖾐 𖽐𖼊𖽱𖾏 𖼺𖽹𖾑 𖼨𖽑𖽪𖾏 𖽃𖽡𖾑 𖼊𖽻𖾏 𖼻𖽻𖾏 𖼮𖽑𖽡𖽠𖾏  
> *——罗马书 8:28*

一个优雅的网页应用，用于对照阅读中文圣经和柏格理苗文圣经（Pollard Script Bible）。

## 项目简介

本项目旨在为读者提供一个便捷的平台，可以同时查看和对比中文圣经与柏格理苗文圣经的内容。柏格理苗文是由英国传教士柏格理（Samuel Pollard）在20世纪初为中国少数民族苗族创制的一种文字系统。

### 主要功能

- 📖 支持完整的圣经内容浏览
- 🔍 按书卷、章节、经文进行精确导航
- 👀 并排显示中文和苗文版本
- 🔄 自动处理合并经文（如 "17-18" 节）
- 💻 响应式设计，支持各种设备访问

## 技术栈

- **前端框架**: Next.js 13.5.6
- **样式**: Tailwind CSS
- **编程语言**: TypeScript
- **部署平台**: Vercel

## 本地开发

1. 克隆项目
```bash
git clone https://github.com/your-username/display-bible-web.git
cd display-bible-web
```

2. 安装依赖
```bash
npm install
```

3. 运行开发服务器
```bash
npm run dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
display_bible_web/
├── app/                    # Next.js 应用主目录
│   ├── layout.tsx         # 全局布局组件
│   ├── page.tsx           # 主页面组件
│   └── globals.css        # 全局样式
├── public/                 # 静态资源
│   ├── bible_data.json    # 圣经数据
│   └── ...
├── scripts/               # 数据处理脚本
│   └── convert_bible_to_json.py  # 圣经文本转换脚本
└── utils/                 # 工具函数
    ├── bibleBooks.ts      # 圣经书卷映射
    └── bibleVerses.ts     # 经文处理函数
```

## 数据处理

项目使用 Python 脚本处理原始圣经文本，将其转换为结构化的 JSON 格式：

1. 处理中文圣经文本
2. 处理柏格理苗文圣经文本
3. 生成标准化的 JSON 数据文件
4. 支持特殊格式（如合并经文）的处理

## 部署

项目使用 Vercel 进行部署，支持自动化的持续部署：

1. 推送代码到 GitHub
2. Vercel 自动检测变更并部署
3. 自动生成预览链接和生产环境更新

## 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进项目。在提交 PR 之前，请确保：

1. 代码符合项目的代码风格
2. 添加了必要的测试
3. 更新了相关文档

## 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 联系方式

如有问题或建议，欢迎通过以下方式联系：

- Email: [liangjunhong2022@ia.ac.cn](mailto:liangjunhong2022@ia.ac.cn)
- GitHub Issues: [提交问题](https://github.com/your-username/display-bible-web/issues)

## 致谢

- 感谢所有为本项目提供帮助和建议的贡献者
- 特别感谢提供圣经文本数据的相关机构和个人
