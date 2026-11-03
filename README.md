# 风和日丽 · fhrl.life

静态网站：`/` 为首页，`/journote/` 为己之言介绍，`/journote/privacy/` 为隐私政策。无需依赖或构建步骤。

本地预览：`python3 -m http.server 8000`，访问 `http://localhost:8000/`。部署时将本目录作为站点根目录，并让服务器支持目录索引（`index.html`），将 `/journote` 和 `/journote/privacy` 重定向到带尾斜杠的目录路径。

上线前请确认隐私政策与实际发布版本、第三方服务及运营主体一致，补充可公开的联系渠道和政策日期。ICP备案取得后在首页底部中央显示真实备案号，并链接到 https://beian.miit.gov.cn/；请遵循接入商和当地主管部门要求。域名、HTTPS、接入商及备案需另行配置。
