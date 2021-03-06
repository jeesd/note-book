# 亿级流量电商详情页系统实战（第二版）：缓存架构+高可用服务架构+微服务架构

cache-pdp：Cache architecture product details page

> 原版整体目录

- [001. 课程介绍以及高并发高可用复杂系统中的缓存架构有哪些东西](./001-introduce.md)
- [002. 基于大型电商网站中的商品详情页系统贯穿的授课思路介绍](./002.md)
- [003. 小型电商网站的商品详情页的页面静态化架构以及其缺陷](./003.md)
- [004. 大型电商网站的异步多级缓存构建 + nginx 数据本地化动态渲染的架构](./004.md)
- [005. 能够支撑高并发+高可用+海量数据+备份恢复的 redis 的重要性](./005.md)
- [006. 从零开始在虚拟机中一步一步搭建一个 4 个节点的 CentOS 集群](./006.md)
- [007. 单机版 redis 的安装以及 redis 生产环境启动方案](./redis/007.md)
- [008. redis 持久化机对于生产环境中的灾难恢复的意义](./redis/008.md)
- [009. 图解分析 redis 的 RDB 和 AOF 两种持久化机制的工作原理](./redis/009.md)
- [010. redis 的 RDB 和 AOF 两种持久化机制的优劣势对比](./redis/010.md)
- [011. redis 的 RDB 持久化配置以及数据恢复实验](./redis/011.md)
- [012. redis 的 AOF 持久化深入讲解各种操作和相关实验](./redis/012.md)
- [013. 在项目中部署 redis 企业级数据备份方案以及各种踩坑的数据恢复容灾演练](./redis/013.md)
- [014. redis 如何通过读写分离来承载读请求 QPS 超过 10 万 +？](./redis/014.md)
- [015. redis replication 以及 master 持久化对主从架构的安全意义](./redis/015.md)
- [016. redis 主从复制原理、断点续传、无磁盘化复制、过期 key 处理](./redis/016.md)
- [017. redis replication 的完整流运行程和原理的再次深入剖析](./redis/017.md)
- [018. 在项目中部署 redis 的读写分离架构（包含节点间认证口令）](./redis/018.md)
- [019. 对项目的主从 redis 架构进行 QPS 压测以及水平扩容支撑更高 QPS](./redis/019.md)
- [020. redis 主从架构下如何才能做到 99.99% 的高可用性？](./redis/020.md)
- [021. redis 哨兵架构的相关基础知识的讲解](./redis/021.md)
- [022. redis 哨兵主备切换的数据丢失问题：异步复制、集群脑裂](./redis/022.md)
- [023. redis 哨兵的多个核心底层原理的深入解析（包含 slave 选举算法）](./redis/023.md)
- [024. 在项目中以经典的 3 节点方式部署哨兵集群](./redis/024.md)
- [025. 对项目中的哨兵节点进行管理以及高可用 redis 集群的容灾演练](./redis/025.md)
- [026. redis 如何在保持读写分离+高可用的架构下，还能横向扩容支撑 1T + 海量数据](./redis/026.md)
- [027. 数据分布算法：hash+ 一致性 hash + redis cluster 的 hash slot](./redis/027.md)
- [028. 在项目中重新搭建一套读写分离+高可用+多 master 的 redis cluster 集群](./redis/028.md)
- [029. 对项目的 redis cluster 实验多 master 写入、读写分离、高可用性](./redis/029.md)
- [030. redis cluster 通过 master 水平扩容来支撑更高的读写吞吐 + 海量数据](./redis/030.md)
- [031. redis cluster 的自动化 slave 迁移实现更强的高可用架构的部署方案](./redis/031.md)
- [032. redis cluster 的核心原理分析：gossip 通信、jedis smart 定位、主备切换](./redis/032.md)
- [033. redis 在实践中的一些常见问题以及优化思路（包含 linux 内核参数优化）](./redis/033.md)
- [034. redis 阶段性总结：1T 以上海量数据+10 万以上 QPS 高并发+ 99.99% 高可用](./redis/034.md)
- [035. 亿级流量商品详情页的多级缓存架构以及架构中每一层的意义](./035.md)
- [036. Cache Aside Pattern 缓存+数据库读写模式的分析](./06.md)
- [037. 高并发场景下的缓存 + 数据库双写不一致问题分析与解决方案设计](./07.md)
- [038. 在 linux 虚拟机中安装部署 MySQL 数据库](./038.md)
- [039. 库存服务的开发框架整合与搭建：spring boot + mybatis + jedis](./039.md)
- [040. 在库存服务中实现缓存与数据库双写一致性保障方案（一、二、三、四）](./040.md)
- [044. 库存服务代码调试以及打印日志观察服务的运行流程是否正确](./044.md)
- [045. 商品详情页结构分析、缓存全量更新问题以及缓存维度化解决方案](./045.md)
- [046. 缓存数据生产服务的工作流程分析以及工程环境搭建](./046.md)
- [047. 完成 spring boot 整合 ehcache 的搭建以支持服务本地堆缓存](./047.md)
- [048. redis 的 LRU 缓存清除算法讲解以及相关配置使用](./048.md)
- [049. zookeeper + kafka 集群的安装部署以及如何简单使用的介绍](./049.md)
- [050. 基于 kafka + ehcache + redis 完成缓存数据生产服务的开发与测试](./050.md)
- [051. 基于“分发层 + 应用层”双层 nginx 架构提升缓存命中率方案分析](./051.md)
- [052. 基于 OpenResty 部署应用层 nginx 以及 nginx + lua 开发 hello world](./052.md)
- [053. 部署分发层 nginx 以及基于 lua 完成基于商品 id 的定向流量分发策略](./053.md)
- [054. 基于 nginx + lua + java 完成多级缓存架构的核心业务逻辑（一）](./054.md)
- [055. 基于 nginx + lua + java 完成多级缓存架构的核心业务逻辑（二）](./055.md)
- [056. 基于 nginx + lua + java 完成多级缓存架构的核心业务逻辑（三）](./056.md)
- [057. 分布式缓存重建并发冲突问题以及 zookeeper 分布式锁解决方案](./057.md)
- [058. 缓存数据生产服务中的 zk 分布式锁解决方案的代码实现（一）](./058.md)
- [059. 缓存数据生产服务中的 zk 分布式锁解决方案的代码实现（二）](./059.md)
- [060. 缓存数据生产服务中的 zk 分布式锁解决方案的代码实现（三）](./060.md)
- [061. Java 程序员、缓存架构以及 Storm 大数据实时计算之间的关系](./061.md)
- [062. 讲给 Java 工程师的史上最通俗易懂 Storm 教程：大白话介绍](./062.md)
- [063. ](./063.md)
