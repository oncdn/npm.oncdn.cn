# NPM on CDN

NPM 在 CDN 上。

## 名词释义

- NPM: Node 包管理器 (Node Package Manager)
- CDN: 内容分发网络 (Content Delivery Network)
- Endpoint: 服务端点，这里默认都由 https://npm.oncdn.cn/ 开头提供服务

## 安装使用

在本仓库中的 [/libs](libs) 文件夹就对应 Root endpoint (https://npm.oncdn.cn)
，当你需要应用时，直接在前面添加 ```//npm.oncdn.cn``` 即可，例如：

- 你希望使用: [/libs/bootstrap/5.3.2/dist/css/bootstrap.min.css](libs/bootstrap/5.3.2/dist/css/bootstrap.min.css)
- 我提供的服务: [https://npm.oncdn.cn/bootstrap/5.3.2/dist/css/bootstrap.min.css](https://npm.oncdn.cn/bootstrap/5.3.2/dist/css/bootstrap.min.css)

- 对应 jsDelivr 的服务: [https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css)
- 对应 unpkg 的服务: [https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css](https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css)

综上所述，我们都以 NPM 的包为准，只不过 jsDelivr 和 unpkg 是以 ```@``` 符号为版本分隔。

### 找不到你需要的包

由于精力、服务器资源等都是有限的，我无法镜像 NPM 全部的仓库，如果遇到找不到你需要的包，也是很正常的，不要沮丧，给我提交 Issue
或者给我发邮件：[i@renfei.net](mailto:i@renfei.net)，告诉我库名和版本号，或者直接发给我库所在 www.npmjs.com 的链接，我会向仓库中增加该包。

> 注意：该仓库只镜像 NPM 的仓库，如果该包不在 NPM 仓库中，我无法添加。

## 这是做什么的

在此之前，我一直使用 jsDelivr，但是在2021年12月20日，他们的ICP备案注销，导致中国大陆境内无法访问或访问缓慢，我开始寻找替代方案。

虽然有很多国内镜像源，但不够全，或者只有国内服务器没有境外服务器，这令我很沮丧。

我决定自己托管一份开源仓库，这样我需要什么就可以加什么。

### 为什么建立这个仓库

如果你不想使用我的服务、或者想自己建一个、又或者你想内网部署，那你就可以下载这个公开仓库或者 fork 一份你自己的。

## 赞助商

暂时无人赞助，由 [www.renfei.net](https://www.renfei.net) 为爱发电。
