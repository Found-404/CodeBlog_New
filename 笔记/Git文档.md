# 什么是Git

Git是一个开源的分布式版本控制系统，是目前世界上最先进、最流行的版本控制系统。可以快速高效地处理从很小到非常大的项目版本管理。

**特点:项目越大越复杂，协同开发者越多，越能体现出Git的高性能和高可用性!**

## Git的特性

Git之所以快速和高效，主要依赖于它的如下两个特性:

- 直接记录快照，而非差异比较
- 近乎所有操作都是本地执行

## Git记录快照

Git快照是在原有文件版本的基础.上重新生成一份新的文件，类似于备份。为了效率,如果文件没有修改，Git不再重新存储该文件,而是只保留一个链接指向之前存储的文件。

**缺点：占用空间资源大**	***空间换时间***



## 所有操作都是本地执行

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655534484451-4c0517e2-4d65-4b59-a4be-19d51a9ce9b0.png)



# Git中的三个区域

使用Git管理的项目，拥有三个区域，分别是**工作区**、**暂存区**、**Git 仓库**。

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655534910353-c3fc5bf1-796d-4a11-8c14-0e75314464ba.png)

# Git中的三个状态

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655534960656-79a481e4-61a1-4fb7-8fd3-3c1357894a25.png)

- 工作区的文件被修改了,但还没有放到暂存区,就是**已修改**状态。
- 如果文件已修改并放入暂存区，就属于**已暂存**状态。
- 如果Git仓库中**保存着特定版本**的文件,就属于**已提交**状态。

# 基本的Git工作流程

**WorkingDirectory**	（工作区,相当于开发人员电脑）

**StagingArea**	（暂存区）

**.git directory(Repository)**（Git仓库）

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655535118711-22e89a62-12eb-4c50-90f3-d1d0b4c1df5d.png)

基本的Git工作流程如下:

①在工作区中修改文件

②将你想要下次提交的更改进行暂存

③提交更新,找到暂存区的文件,将快照永久性存储到Git仓库

# 配置Git

## 配置Git用户信息

安装完Git之后，要做的第一件事就是设置自己的用户名和邮件地址。因为通过Git对项目进行版本管理的时候，Git需要使用这些基本信息，来记录是谁对项目进行了操作:

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655535398516-456da10e-f08d-4d89-8ae0-8771737d2c9f.png)

--golbal选项只需执行一次就可以永久生效

## Git的全局配置文件

通过**git config --global user.name**和**git config --global user.email**配置的用户名和邮箱地址,会被写入到C:/Users/用户名文件夹/.gitconfig文件中。这个文件是Git 的**全局配置文件，配置- -次即可永久生效。**



可以使用记事本打开此文件，从而查看自己曾经对Git做了哪些全局性的配置。



## 检查配置信息

除了使用记事本查看全局的配置信息之外,还可以运行如下的终端命令,快速的查看Git的全局配置信息:

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655535635403-14eac1d4-2f97-41cc-bc07-f457d2df43a3.png)

# 获取帮助信息

可以使用**git help <verb>**命令,无需联网即可在浏览器中打开帮助手册，例如:

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655535684182-9e2812e8-61e4-4484-8550-e5f1d78b8dd3.png)

如果不想查看完整的手册，那么可以用-h选项获得更简明的"help" 输出:

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655535742912-3076a012-e2d7-4b6e-bbc0-f816bfa87f20.png)



# 获取Git仓库两种方式

①将尚未进行版本控制的本地目录转换为Git仓库

②从其它服务器克隆一个已存在的Git仓库

以上两种方式都能够在自己的电脑上得到一一个可用的Git仓库

## 1.在现有目录中初始化仓库

如果自己有一个尚未进行版本控制的项目目录，想要用Git来控制它，需要执行如下两个步骤:

**①在项目目录中，通过鼠标右键打开"****Git Bash****"**

**②执行**  **git init**  **命令将当前的目录转化为Git仓库**



git init命令会创建一个名为 .git 的隐藏目录,这个.git目录就是当前项目的Git仓库，里面包含了初始的必要

文件，这些文件是Git仓库的必要组成部分。

# 工作区中文件的4种状态

工作区中的每一个文件可能有4种状态,这四种状态共分为两大类,如图所示:

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655536027484-d2c17c61-7fce-4532-a47d-a2cf89550de5.png)

未跟踪	??

已暂存  	A

被修改	M

被修改并且放入暂存	M 

# Git中对文件的操作  *必须先初始化仓库*

## 检查文件状态  **git status**

可以使用**git status** 命令查看文件处于什么状态，例如：

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655536242631-7e6024cf-3551-46e6-a1af-c197aa7d0427.png)

在状态报告中可以看到新建的**index.html**文件出现在**Untracked files** (未跟踪的文件)下面。



**以精简的方式显示文件状态**

使用git status输出的状态报告很详细，但有些繁琐。如果希望以精简的方式显示文件的状态，可以使用如下两条完全等价的命令，其中-s是--short的简写形式:

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655536349500-52f5969f-2a0a-432d-983c-b128289b4b69.png)

## 跟踪新文件  *（向暂存区添加文件）* **git add 文件**

使用命令 **git add** 开始跟踪一个文件 所以要跟踪**index.html**文件，运行如下的命令即可

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655536474765-050a37a1-b18d-4eeb-ad43-182702bf06f0.png)

此时再运行**git status**命令,会看到index.html文件在Changes to be committed这行的下面，说明已被跟踪，并处于暂存状态:

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655536517820-ce82dd36-123e-4949-8082-6c9c42cc0873.png)

![img](https://cdn.nlark.com/yuque/0/2022/png/26760678/1655536538806-8c2c13f3-9b86-4353-b730-9a535f08e209.png)

## 向暂存区中一次性添加多个文件    **git add** . 

如果需要被暂存的文件比较多，可以使用   **git add** .  命令一次性向暂存区提交多个文件

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655537763425-fa5cefe1-3afe-4669-a1de-0c8de68e25dc.png)

项目开发常用命令，将新增和修改后的文件放入暂存区



## 提交更新  **git commit -m "提示text"**

现在暂存区中有一个**index.html**文件等待被提交到Git仓库中进行保存。可以执行**git commit**命令进行提交，其中 **-m** 选项后面是本次的提交消息，用来对提交的内容做进一步的描述:

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655536628213-900af14e-f287-401f-bd5b-487edcd8cb5c.png)

提交成功后会显示如下信息：

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655536671600-652b2a80-4b04-4d9c-938f-0134cae6c4ec.png)

## 对已提交的文件进行修改后 M标记

目前，**index.html** 文件已经被Git跟踪,并且工作区和Git仓库中的**index.html**文件内容保持一致。 当我们

修改了工作区中**index.html**的内容之后,再次运行**git status**和**git status -s**命令,会看到如下的内容:

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655536867487-488a48d8-014e-4539-8579-5f821b019fa1.png)

文件index.html出现在**Changes not staged for commit**这行下面，说明**已跟踪文件的内容发生了变化,**

**但还没有放到暂存区。**

**注意：修改过的，没有放入暂存区的文件前面有****红色的M标记**

## 暂存已修改的文件  **git add**

目前，工作区中的**index.html**文件已被修改,如果要暂存这次修改,需要再次运行  **git  add**  命令,这个命令

是个多功能的命令，主要有如下3个功效:

1. 可以用它开始跟踪新文件
2. 把已跟踪的、且已修改的文件放到暂存区
3. 把有冲突的文件标记为已解决状态

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655537072502-c6038e2f-1e37-4e23-bc76-8393f9199a64.png)

## 提交已暂存的文件 **git commit -m "提交消息"**

再次运行 **git commit -m "提交消息"** 命令,即可将暂存区中记录的index.html的快照，提交到Git仓库中进行保存:

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655537193259-ae4c4898-310f-42b9-8b05-6b728edbad64.png)

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655537207921-7b41145a-0590-4cfc-9d86-6d372bb94316.png)

## 撤销对文件的修改  git checkout -- index.html

撤销对文件的修改指的是:把对工作区中对应文件的修改，还**原成**Git仓库中所保存的版本。

操作的结果:所有的修改会丢失，且无法恢复!   **危险性比较高,请慎重操作!**

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655537502602-d29f7b89-de20-4d61-a077-394510ed3d47.png)

## 取消暂存的文件	gti reset HEAD 要移除的文件名称

如果需要从暂存区中移除对应的文件，可以使用如下命令：

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655538293353-e0645ac8-e007-4c52-8bd5-b9f2e6f24d1d.png)

## 跳过使用暂存区域

Git标准的工作流程是工作区→暂存区→Git仓库，但有时候这么做略显繁琐,此时可以跳过暂存区，直接将工作区中的修改提交到Git仓库,这时候Git工作的流程简化为了工作区→Git仓库。

Git提供了一个跳过使用暂存区域的方式，只要在提交的时候， 给git commit加上-a选项，Git 就会自动把

所有已经跟踪过的文件暂存起来一并提交， 从而跳过git add步骤:

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655538525145-487fc07b-f18d-4e8e-a042-a268a447b3e6.png)

# Git仓库移除文件

## 1.从Git仓库和工作区中同时移除对应的文件

## 2.只从Git仓库中移除指定的文件，但保留工作区中对应的文件

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655538736242-5b2f6c78-ed58-49dc-b5df-c33ef3d89d32.png)

# Git忽略文件

一般我们总会有些文件无需纳入Git的管理，也不希望它们总出现在未跟踪文件列表。在这种情况下，我们可以创建一一个名为 **.gitignore** 的配置文件,列出要忽略的文件的匹配模式。

文件.gitignore的格式规范如下: .

①以  **#开头**  的是注释

②以  **/结尾**  的是目录

③以  **/开头**  防止递归

④以  **!开头**  表示取反

⑤可以使用  **glob模式**  进行文件和文件夹的匹配	(glob指简化了的正则表达式)



**glob模式**是指简化了的正则表达式：

①**星号\***匹配**零个或多个任意字符**

②**[abc]** 匹配**任何- -个列在方括号中的字符**(此案例匹配-个a或匹配-一个b或匹配一个c)

③**问号?**只**匹配-一个任意字符**

④在方括号中使用**短划线**分隔两个字符，表示所有在这两个字符范围内的都可以匹配( 比如[0-9]表示匹配

所有0到9的数字)

⑤**两个星号\****表示**匹配任意中间目录**(比如a/**/z可以匹配a/z、a/b/z 或a/b/C/z等)

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655539134717-62f9b9a8-0d07-4695-9d43-e5c6367b220a.png)

# 查看提交历史  git log

如果希望回顾项目的提交历史，可以使用 **git log** 这个简单且有效的命令。

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655540439882-5c0019d9-017d-4580-9488-e89d21a4777d.png)

# 回退指定版本

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655540509352-742697e3-97db-45dd-986b-ecf6f5f9c910.png)

**注意：回退到旧版本后不能再使用** **git log --pretty=oneline** **查看历史版本**

# Gitbub

## 1.什么是开源

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655541135151-d8670571-d0b9-473a-9cf7-e053671c2ef6.png)

## 2.什么是开源许可协议

**常见的五种开源许可协议**

1. BSD (Berkeley Software Distribution)
2. Apache Licence 2.0
3. GPL ( GNU General Public License)

1. 1. 具有传染性的一种开源协议，不允许修改后和衍生的代码做为闭源的商业软件发布和销售
   2. 使用 GPL的最著名的软件项目是: Linux

1. LGPL (GNU Lesser General Public License)
2. MIT (Massachusetts Institute of Technology, MIT)

1. 1. 是目前限制最少的协议，唯- -的条件:在修改后的代码或者发行包中，必须包含原作者的许可信息
   2. 使用 MIT的软件项目有: jquery. Node.js

## 3.开源项目托管平台

专门用于免费存放开源项目源代码的网站，叫做开源项目托管平台。目前世界上比较出名的开源项目托管平台主要有以下3个:

- Github (全球最牛的开源项目托管平台，没有之一 )
- Gitlab (对代码私有性支持较好，因此企业用户较多)
- Gitee (又叫做码云,是国产的开源项目托管平台。访问速度快、纯中文界面、使用友好)

注意:以上3个开源项目托管平台,只能托管以Git管理的项目源代码,因此，它们的名字都以Git开头。

## 4.远程仓库的两种访问方式

Github.上的远程仓库，有两种访问方式，分别是HTTPS和SSH。它们的区别是:

①HTTPS:零配置;但是每次访问仓库时，需要重复输入Github的账号和密码才能访问成功

②SSH: 需要进行额外的配置;但是配置成功后，每次访问仓库时,不需重复输入Github的账号和密码

注意:在实际开发中，推荐使用SSH的方式访问远程仓库。

## 5.关于Git上传库

### HTTPS上传：

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655549171898-6d827579-7eac-4f0b-90a9-30e09cd76d97.png)

1. 在Github官网创建新的库之后首选HTTPS上传方式
2. 在你要上传的库中打开 Git Bash控制台
3. 依次输入官方提示的命令
4. 在弹出框中输入你的密钥

**注意：要先在官网绑定令牌**

绑定令牌的方式：

1.找到"C:\Users\无敌暴龙战士\.ssh"路径下两个文件  id_rsa.pub  后缀的为私人令牌

2.在github官网个人设置中找到绑定令牌

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655549534866-d9084c9c-e9fc-4261-a379-96b7c6bdec34.png)

3.选择new SSH key 添加绑定令牌

## 6.上传修改后的仓库

如果想要上传本地被修改后的仓库需要将修改后的文件全部提交并且使用 **git push** 命令上传，同时也要注意，在弹出框输入**密钥***(并非令牌)*



关于密钥的生成：

1. 个人设置中的Developer settings



1. ![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655554230182-4c6d1140-8cfb-40e4-af72-5456c597a6c9.png)



1. ![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655554297252-5680c8ab-4f67-42e7-9e03-3d2b7480e07c.png)

## 7.克隆已上传的库

使用 **git clone 远程库地址**

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655737899273-d316d6df-6e0d-4a56-b5c6-abaadface510.png)

# Git FLS

[**##Git flsBlog##**](https://blog.csdn.net/wq_0708/article/details/121611239)

# 多库共存

要想实现单个库连接多个平台可以使用多库连接的方式，比如当更新一个项目后想要同时上传GitHub和Gitee就可以避免繁琐的操作，同时绑定不同的SSH地址。在push或者pull的时候就可以同时上传/获取

原帖子：[**##git实现多库共存##**](https://blog.csdn.net/s_156/article/details/120975674)

## 方法 1：每次push/pull时需分开操作

首先，指令 **git remote -v** 查看本地仓库所关联的远程仓库：

**git remote rm origin** 删除远程库

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655706799778-d145bcc5-bc99-40e0-ae97-e84614d42f88.png)

然后，用 **git remote add (name)** 添加一个远程仓库，其中name可以任意指定（对应上面的origin部分），比如：

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655707455484-be8d2b92-9dcf-45e7-a522-ca12eb07b040.png)

再次查看本地仓库所关联的远程仓库，可以发现成功关联了两个远程仓库：

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655707507827-f921d99b-70b8-4b83-bf0f-18f51750a347.png)

此后，若需进行**push**操作，则需要指定目标仓库，**git push** ，对这两个远程仓库分别操作：

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655707541452-46421b8e-085d-4d73-a083-66ffbf3994c7.png)

同理，**pull**操作也需要指定从哪个远程仓库拉取，**git pull** ，从这两个仓库中选择其一：

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655707568939-7274d046-eabb-44a9-8c70-65b6b32c679d.png)

## 方法 2：每次push/pull时可以同时操作

首先，指令 **git remote -v** 查看本地仓库所关联的远程仓库：

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655706799778-d145bcc5-bc99-40e0-ae97-e84614d42f88.png)

然后，不额外添加远程仓库，而是给现有的远程仓库添加额外的 URL。使用 **git remote set-url -add** ，已有的名为**name**的远程仓库添加一个远程地址，比如：

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655707655729-c692b8da-a686-4e3b-ae63-f552f6457e45.png)

再次查看所关联的远程仓库：

![img](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/1655707688970-e1d0cd08-1915-4359-8d8d-dafa3e338850.png)

可以看到，我们并没有如方法 1 一般增加远程仓库的数目，而是给一个远程仓库赋予了多个地址（或者准确地说，多个用于push的地址）。

因此，这样设置后的push 和pull操作与最初的操作完全一致，不需要进行调整。